/*
 * @Author: Rodrigo Soares
 * @Date: 2019-07-31 20:36:23
 * @Last Modified by: Rodrigo Soares
 * @Last Modified time: 2021-07-09 11:01:24
 */

/**
 * Rename data
 *
 * @export
 * @param {Object} item
 * @param {Number} selectionCount
 * @param {String} inputName
 * @param {Number} startFrom
 * @param {String} pageName
 * @returns Structured object data
 */
export function renameData(
  item,
  selectionCount,
  inputName,
  startsFrom,
  pageName
) {
  return {
    layerName: item.layerName,
    currIdx: item.idx,
    width: item.width,
    height: item.height,
    selectionCount,
    inputName,
    startsFrom: Number(startsFrom),
    pageName,
    parentName: item.parentName,
    symbolName: item.symbolName,
    layerStyle: item.layerStyle,
    childLayer: item.childLayer,
    x: item.x,
    y: item.y,
    xIdx: item.xIdx,
    yIdx: item.yIdx
  }
}

/**
 * Find and replace data
 *
 * @export
 * @param {Object} item
 * @param {String} findText
 * @param {String} replaceWith
 * @param {Boolean} caseSensitive
 * @returns
 */
export function findReplaceData(item, findText, replaceWith, caseSensitive) {
  return {
    layerName: item.layerName,
    currIdx: item.idx,
    findText,
    replaceWith,
    caseSensitive,
  }
}
