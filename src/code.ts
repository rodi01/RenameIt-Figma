/*
 * @Author: Rodrigo Soares
 * @Date: 2019-07-31 20:36:11
 * @Last Modified by: Rodrigo Soares
 * @Last Modified time: 2022-04-09 15:06:21
 */

import { script as io } from './Lib/io.js'
import { Rename, FindReplace } from 'renameitlib'
import * as isBlank from 'is-blank'
import { parseData, WhereTo, SequenceType, hasSelection, setSequenceType, getSequenceType, sequenceTypeFirstRun } from './Utilities'
import { findReplaceData, renameData } from './Lib/DataHelper'
import {
  getUUID,
  analyticsEnabled,
  setAnalyticsEnabled,
  analyticsFirstRun,
} from './Lib/GoogleAnalytics'

const data = parseData(figma.currentPage)
let initialSequenceType = null
let initialAnalytics = null
const rename = new Rename({ allowChildLayer: true })

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


function renameLayers(d, onlyArr = false) {
  const nameArr = []
  data.selection.forEach((item, index) => {
      const name = doRename(rename, data.selection[index], index, d)
      nameArr.push(name)

      if (!isBlank(name) && !onlyArr) {
        const layer = figma.getNodeById(item.id)
        layer.name = name
      }
  })
  if (onlyArr) {
    return nameArr
  } else {
    setSequenceType(d.sequenceType)
  }
}

figma.parameters.on('input', ({key, query, parameters, result}: ParameterInputEvent) => {
 if (key === "sequenceOrder") {
   const seq = [
     { 
       "data": SequenceType.LayerList, 
        "name": "Layer Panel", 
        "icon": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><g stroke="#000" clip-path="url(#a)"><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M12.202 8.357v5.785"/><path d="M0 .5h16M0 10.133h7M0 5.5h16"/><path stroke-linejoin="round" stroke-width="1.5" d="m14.778 12.576-2.576 2.576-2.576-2.576"/><path d="M0 15.5h7"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>'
        
    },
     { 
       "data": SequenceType.XPos, 
       "name":"Left to right, top to bottom",
       "icon": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><g stroke="#000"><path d="M.5.5h6v6h-6zm0 9h6v6h-6zm9-9h6v6h-6z"/><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M3.037 3.38h9.825l-9.825 9.506h9.825"/><path stroke-linejoin="round" stroke-width="1.5" d="m12.031 10.31 2.576 2.576-2.576 2.577"/></g></svg>'

    },
    { 
       "data": SequenceType.YPos, 
       "name": "Top to bottom, left to right",
       "icon": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><g stroke="#000"><path d="M.5.5h6v6h-6zm9 0h6v6h-6zm-9 9h6v6h-6z"/><path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M3.4 3.343v9.419l9.1-9.42v9.42"/><path stroke-linejoin="round" stroke-width="1.5" d="M15.076 11.41 12.5 13.986 9.924 11.41"/></g></svg>'
    },
   ]
   result.setSuggestions(seq)

 } else if(key === "inputName") {
    const d = {
      nameInput: query,
      sequenceInput: 1, 
      sequenceType: parameters.sequenceOrder ? parameters.sequenceOrder : initialSequenceType,
    }
    const previewText = renameLayers(d, true)
    const preview = `Preview: ${previewText.filter((val) => val).join(', ')}`
    result.setLoadingMessage(preview)
  } 
})

// Run 
figma.on("run", ({command, parameters}: RunEvent) => {
  if (command === "quickRename") {
    renameLayers({
      nameInput: parameters.inputName,
      sequenceInput: 1,
      sequenceType: parameters.sequenceOrder ? parameters.sequenceOrder : initialSequenceType,
    })
    figma.closePlugin()
  } else {
    theUI()
  }

})

async function firstRun() {
  // Check sequence type
  initialSequenceType = await sequenceTypeFirstRun()
  initialAnalytics =  await analyticsFirstRun()
  
}

async function theUI() {
  let to = 'noSelection'
  let windowOptions = {
    width: 460,
    height: 510,
    visible: true,
  }

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

  const windowDim = initialAnalytics
    ? { width: 430, height: 180, visible: true }
    : windowOptions

  figma.showUI(__html__, windowDim)

  io.send('sendData', {
    data: data,
    command: to,
    UUID: await getUUID(),
    firstRun: initialAnalytics,
    analyticsEnabled: await analyticsEnabled(),
    windowDim: windowOptions,
    sequenceType: initialSequenceType
  })

  io.once('renameLayers', (d) => {
    renameLayers(d)
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

firstRun()
