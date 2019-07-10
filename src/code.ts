import { script as io } from "./Lib/io.js"
import { Rename, FindReplace } from "renameitlib"
import { parseData, WhereTo } from "./Utilities"
import { findReplaceData, renameData } from "./Lib/DataHelper"

const data = parseData(figma.currentPage)

function doRename(rename, item, index, inputData) {
  const options = renameData(
    item,
    data.selectionCount,
    inputData.nameInput,
    inputData.sequenceInput,
    data.pageName
  )

  return rename.layer({
    ...item,
    ...options
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

function theUI() {
  const hasSelection = data.selectionCount > 0
  let to = "noSelection"
  let windowOptions = {
    width: 430,
    height: 440
  }

  // Set screen to show
  if (figma.command === WhereTo.RenameLayers && hasSelection) {
    to = WhereTo.RenameLayers
  } else if (figma.command === WhereTo.FindReplace && hasSelection) {
    to = WhereTo.FindReplace
    windowOptions = {
      width: 430,
      height: 270
    }
  } else {
    to = WhereTo.NoSelection
    windowOptions = {
      width: 300,
      height: 140
    }
  }

  figma.showUI(__html__, windowOptions)

  io.send("sendData", {
    data: data,
    command: to
  })

  io.once("renameLayers", d => {
    const rename = new Rename()
    figma.currentPage.selection.forEach((item, index) => {
      item.name = doRename(rename, data.selection[index], index, d)
    })

    figma.closePlugin()
  })

  io.once("findReplaceLayers", d => {
    const findReplace = new FindReplace()
    figma.currentPage.selection.forEach((item, index) => {
      const name = doFindReplace(findReplace, data.selection[index], d)
      if (name) item.name = name
    })

    figma.closePlugin()
  })

  io.once("cancel", d => {
    figma.closePlugin()
  })
}

theUI()
