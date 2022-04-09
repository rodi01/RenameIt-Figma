/*
 * @Author: Rodrigo Soares
 * @Date: 2019-07-31 20:36:11
 * @Last Modified by: Rodrigo Soares
 * @Last Modified time: 2022-04-03 02:05:12
 */

import { script as io } from './Lib/io.js'
import { Rename, FindReplace } from 'renameitlib'
import * as isBlank from 'is-blank'
import { parseData, WhereTo, reorderSelection, hasSelection, setSequenceType, getSequenceType, sequenceTypeFirstRun } from './Utilities'
import { findReplaceData, renameData } from './Lib/DataHelper'
import {
  getUUID,
  analyticsEnabled,
  setAnalyticsEnabled,
  analyticsFirstRun,
} from './Lib/GoogleAnalytics'

const data = parseData(figma.currentPage)

function doRename(rename, item, index, inputData) {
  const options = renameData(
      item,
      data.selectionCount,
      inputData.nameInput,
      inputData.sequenceInput,
      data.pageName
    )
  
  
  // check for sequence type
  if (inputData.sequenceType === 'xPos') {
    options.currIdx = options.xIdx
  } else if (inputData.sequenceType === 'yPos') {
    options.currIdx = options.yIdx
  }

  return rename.layer({
    ...item,
    ...options,
  })
}

function doFindReplace(findReplace, item, inputData) {
  const options = findReplaceData(
    item,
    inputData.findText,
    inputData.replaceText,
    inputData.caseSensitive
  )

  return findReplace.match(options) ? findReplace.layer(options) : false
}

async function theUI() {
  let to = 'noSelection'
  const firstRun = await analyticsFirstRun()
  let windowOptions = {
    width: 460,
    height: 510,
    visible: true,
  }

  // Check sequence type
  await sequenceTypeFirstRun()

  // Set screen to show
  if (figma.command === WhereTo.RenameLayers && hasSelection(data)) {
    to = WhereTo.RenameLayers
  } else if (figma.command === WhereTo.FindReplace && hasSelection(data)) {
    to = WhereTo.FindReplace
    windowOptions = {
      width: 430,
      height: 300,
      visible: true,
    }
  } else if (figma.command === WhereTo.Settings) {
    to = WhereTo.Settings
    windowOptions = {
      width: 430,
      height: 300,
      visible: true,
    }
  } else if (figma.command === WhereTo.Donate) {
    to = WhereTo.Donate
    windowOptions = { width: 0, height: 0, visible: false }
    figma.showUI(__html__, { visible: false })
  } else {
    to = WhereTo.NoSelection
    windowOptions = {
      width: 430,
      height: 150,
      visible: true,
    }
  }

  const windowDim = firstRun
    ? { width: 430, height: 180, visible: true }
    : windowOptions

  figma.showUI(__html__, windowDim)

  io.send('sendData', {
    data: data,
    command: to,
    UUID: await getUUID(),
    firstRun: firstRun,
    analyticsEnabled: await analyticsEnabled(),
    windowDim: windowOptions,
    sequenceType: await getSequenceType()
  })

  io.once('renameLayers', (d) => {
    const rename = new Rename({ allowChildLayer: true })
    data.selection.forEach((item, index) => {
      const name = doRename(rename, data.selection[index], index, d)
     
      if (!isBlank(name)) {
        const layer = figma.getNodeById(item.id)
        layer.name = name
      }
    })
    setSequenceType(d.sequenceType)

    figma.closePlugin()
  })

  io.once('findReplaceLayers', (d) => {
    const findReplace = new FindReplace()
    data.selection.forEach((item, index) => {
      const name = doFindReplace(findReplace, data.selection[index], d)
      if (name) {
        const layer = figma.getNodeById(item.id)
        layer.name = name
      }
    })

    figma.closePlugin()
  })

  io.once('cancel', (d) => {
    figma.closePlugin()
  })

  io.once('setAnalytics', (value) => {
    setAnalyticsEnabled(value)
  })

  io.once('resizeViewport', (opts) => {
    figma.ui.resize(opts.width, opts.height)
  })
}

theUI()
