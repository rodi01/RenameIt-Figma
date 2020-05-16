/*
 * @Author: Rodrigo Soares
 * @Date: 2019-07-31 19:01:45
 * @Last Modified by: Rodrigo Soares
 * @Last Modified time: 2020-05-16 00:07:04
 */

import {
  getStyle,
  getSymbolName,
  hasStyles,
  hasSymbols,
  hasChildLayer,
  getChildLayer,
} from './Lib/RenameHelper'

export enum WhereTo {
  RenameLayers = 'renameLayers',
  FindReplace = 'findReplace',
  Settings = 'settings',
  NoSelection = 'noSelection',
}

export function hasSelection(data: any) {
  return data.selection.length > 0
}

function layerObject(item: any, index) {
  return {
    layerName: item.name,
    idx: index,
    width: item.width,
    height: item.height,
    parentName: item.parent.name,
    layerStyle: getStyle(item),
    symbolName: getSymbolName(item),
    childLayer: getChildLayer(item),
  }
}

export function reorderSelection(data: any) {
  if (!hasSelection(data)) return data.selection

  const firstParent = data.selection[0].parent
  const sameParent = data.selection.every(
    (elem) => elem.parent.id === firstParent.id
  )
  if (sameParent) {
    const arr = []
    firstParent.children.forEach((child) => {
      if (data.selection.includes(child)) {
        arr.push(child)
      }
    })

    return arr
  } else {
    return data.selection
  }
}

export function parseData(data: any) {
  const object = {
    pageName: data.name as string,
    selectionCount: data.selection.length as number,
    selection: [] as any[],
    hasLayerStyle: false as boolean,
    hasSymbol: false as boolean,
    hasChildLayer: false as boolean,
  }

  const sel = reorderSelection(data)
  sel.forEach((item, index) => {
    if (!object.hasLayerStyle) object.hasLayerStyle = hasStyles(item)
    if (!object.hasSymbol) object.hasSymbol = hasSymbols(item)
    if (!object.hasChildLayer) object.hasChildLayer = hasChildLayer(item)

    object.selection[index] = layerObject(item, index)
  })

  return object
}
