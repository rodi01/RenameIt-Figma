import { func } from "prop-types"

export enum WhereTo {
  RenameLayers = "renameLayers",
  FindReplace = "findReplace",
  Settings = "settings",
  NoSelection = "noSelection"
}

function hasStyles(item: any) {  
  if (item.textStyleId !== undefined) {
    return item.textStyleId !== ""
  } else if (item.fillStyleId !== undefined) {
    return item.fillStyleId !== ""
  }
  
  return false
}

function styleId(item: any) {
  if (item.constructor.name === "TextNode") {
    return item.textStyleId
  } else {
    return item.fillStyleId
  }
}

function getStyle(item: any) {
  let name = ""
  if (hasStyles(item)) {
    const style = figma.getStyleById(styleId(item))
    name = style !== null ? style.name : ""
  }

  return name
}

function hasSymbols(item: any) {
  return item.constructor.name === "InstanceNode"
}

function getSymbolName(item:any) {
  let name = ""
  if (hasSymbols(item)) {
    name = item.masterComponent.name
  }

  return name
}



export function parseData(data: any) {
  const object = {
    pageName: data.name as string,
    selectionCount: data.selection.length as number,
    selection: [] as any[],
    hasLayerStyle: false as boolean,
    hasSymbol: false as boolean
  }

  data.selection.forEach((item, index) => {
    if (!object.hasLayerStyle) object.hasLayerStyle = hasStyles(item)
    if (!object.hasSymbol) object.hasSymbol = hasSymbols(item)

    object.selection[index] = {
      layerName: item.name,
      width: item.width,
      height: item.height,
      parentName: item.parent.name,
      layerStyle: getStyle(item),
      symbolName: getSymbolName(item)
    }
  })

  return object
}
