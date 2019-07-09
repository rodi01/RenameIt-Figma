import { script as io } from "./Lib/io.js"
import { Rename } from "renameitlib"
import { parseData, WhereTo } from "./Utilities"

const data = parseData(figma.currentPage)

function doRename(item, index, inputData) {
  const rename = new Rename()
  const options = {
    currIdx: index,
    selectionCount: data.selectionCount,
    inputName: inputData.nameInput,
    startsFrom: Number(inputData.sequenceInput),
    pageName: data.pageName
  }

  return rename.layer({ ...item, ...options })
}

function theUI() {
  const hasSelection = data.selectionCount > 0
  let to = "noSelection"
  let windowOptions = { width: 430, height: 440 }

  // Set screen to show
  if (figma.command === WhereTo.RenameLayers && hasSelection) {
    to = WhereTo.RenameLayers
  } else if (figma.command === WhereTo.FindReplace) {
    to = WhereTo.FindReplace
    windowOptions = { width: 200, height: 200 }
  } else {
    to = WhereTo.NoSelection
    windowOptions = { width: 300, height: 140 }
  }

  figma.showUI(__html__, windowOptions)

  io.send("sendData", { data: data, command: to })

  io.once("renameLayers", d => {
    figma.currentPage.selection.forEach((item, index) => {
      item.name = doRename(data.selection[index], index, d)
    })

    figma.closePlugin()
  })

  io.once("cancel", d => {
    figma.closePlugin()
  })
}

theUI()
