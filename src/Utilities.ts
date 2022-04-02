/*
 * @Author: Rodrigo Soares
 * @Date: 2019-07-31 19:01:45
 * @Last Modified by: Rodrigo Soares
 * @Last Modified time: 2021-05-23 20:58:46
 */

import {
  getStyle,
  getSymbolName,
  hasStyles,
  hasSymbols,
  hasChildLayer,
  getChildLayer,
  getPositionalSequence
} from "./Lib/RenameHelper"

export enum WhereTo {
  RenameLayers = "renameLayers",
  FindReplace = "findReplace",
  Settings = "settings",
  NoSelection = "noSelection",
  Donate = "donate"
}

export function hasSelection(data : any) {
  return data.selection.length > 0
}

function layerObject(item : any, index) {
  const obj =  {
    layerName: item.name,
    idx: index,
    width: item.width,
    height: item.height,
    parentName: item.parent.name,
    layerStyle: getStyle(item),
    symbolName: getSymbolName(item),
    childLayer: getChildLayer(item),
    x: item.x,
    y: item.y,
    maxX: 0,
    maxY: 0
  }

  obj.maxX = obj.x + obj.width
  obj.maxY = obj.y + obj.height

  return obj
}

export function reorderSelection(data : any) {
  if (!hasSelection(data)) {
    return data.selection
  }

  const firstParent = data.selection[0].parent
  const sameParent = data
    .selection
    .every((elem) => elem.parent.id === firstParent.id)
  if (sameParent) {
    const arr = []
    firstParent
      .children
      .forEach((child) => {
        if (data.selection.includes(child)) {
          arr.push(child)
        }
      })

    return arr
  } else {
    return data.selection
  }
}

export function parseData(data : any) {
  const object = {
    pageName: data.name as string,
    selectionCount: data.selection.length as number,
    selection: []as any[],
    hasLayerStyle: false as boolean,
    hasSymbol: false as boolean,
    hasChildLayer: false as boolean
  }

  let sel = reorderSelection(data)
  sel.forEach((item, index) => {
    if (!object.hasLayerStyle) {
      object.hasLayerStyle = hasStyles(item)
    }
    if (!object.hasSymbol) 
      object.hasSymbol = hasSymbols(item)
    if (!object.hasChildLayer) 
      object.hasChildLayer = hasChildLayer(item)

    object.selection[index] = layerObject(item, index)
  })

  // Positional Sequence
  object.selection = getPositionalSequence(object.selection)
  
  return object
}
