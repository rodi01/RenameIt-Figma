/*
 * @Author: Rodrigo Soares
 * @Date: 2020-05-15 11:02:22
 * @Last Modified by: Rodrigo Soares
 * @Last Modified time: 2020-05-15 23:58:26
 */

/**
 * Check weather or no a layer has styles
 *
 * @export
 * @param {*} item
 * @returns {Boolean}
 */
export function hasStyles(item: any) {
  if (item.textStyleId !== undefined) {
    return item.textStyleId !== ''
  } else if (item.fillStyleId !== undefined) {
    return item.fillStyleId !== ''
  }

  return false
}

/**
 * Get layer Style id
 *
 * @param {*} item
 * @returns
 */
function styleId(item: any) {
  if (item.constructor.name === 'TextNode') {
    return item.textStyleId
  } else {
    return item.fillStyleId
  }
}

export function getStyle(item: any) {
  let name = ''
  if (hasStyles(item)) {
    const style = figma.getStyleById(styleId(item))
    name = style !== null ? style.name : ''
  }

  return name
}

export function hasSymbols(item: any) {
  return item.constructor.name === 'InstanceNode'
}

export function getSymbolName(item: any) {
  let name = ''
  if (hasSymbols(item)) {
    name = item.masterComponent.name
  }

  return name
}

/**
 * Check if has child layer
 *
 * @export
 * @param {*} item
 * @returns {Boolean}
 */
export function hasChildLayer(item: any) {
  try {
    return item.children !== undefined && item.children.length > 0
  } catch (error) {
    return false
  }
}

/**
 * Get first child layer and return its name
 *
 * @export
 * @param {*} item
 * @returns {String}
 */
export function getChildLayer(item: any) {
  let name = ''

  if (hasChildLayer(item)) {
    const idx = item.children.length - 1
    name = String(item.children[idx].name)
  }

  return name
}
