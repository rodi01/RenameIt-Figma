/*
 * @Author: Rodrigo Soares
 * @Date: 2020-05-15 11:02:22
 * @Last Modified by: Rodrigo Soares
 * @Last Modified time: 2022-04-02 22:08:31
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
    return item.textStyleId !== ""
  } else if (item.fillStyleId !== undefined) {
    return item.fillStyleId !== ""
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
  if (item.constructor.name === "TextNode") {
    return item.textStyleId
  } else {
    return item.fillStyleId
  }
}

export function getStyle(item: any) {
  let name = ""
  if (hasStyles(item)) {
    const style = figma.getStyleById(styleId(item))
    name = style !== null ? style.name : ""
  }

  return name
}

export function hasSymbols(item: any) {
  return item.constructor.name === "InstanceNode"
}

export function getSymbolName(item: any) {
  let name = ""
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
  let name = ""

  if (hasChildLayer(item)) {
    const idx = item.children.length - 1
    name = String(item.children[idx].name)
  }

  return name
}

/**
 * Get Origin of layers and return the minX and MinY
 * @param {*} layers
 * @returns
 */
function getOrigin(layers: any) {
  const minX = layers.reduce(
    (prev, current) => (prev.x < current.x ? prev : current),
    1
  )

  const minY = layers.reduce(
    (prev, current) => (prev.y < current.y ? prev : current),
    1
  )
  return {
    x: minX.x,
    y: minY.y,
  }
}

/**
 * Get the layer order by position
 *
 * @param {Array<any>} layers
 * @param {string} direction
 * @returns
 */
function sortBy(layers: Array<any>, direction: string) {
  const origin = getOrigin(layers)
  const starterLayers: Array<any> = []
  const maxPos = direction === "x" ? "maxY" : "maxX"
  const opDirection = direction === "x" ? "y" : "x"

  layers.forEach((ly) => {
    let leftMostLayer = true
    layers.forEach((ly2) => {
      if (ly === ly2) return

      if (ly2[direction] < ly[direction]) {
        if (ly[opDirection] <= ly2[maxPos] && ly2[opDirection] <= ly[maxPos]) {
          leftMostLayer = false
          return
        }
      }
    })

    if (leftMostLayer) {
      starterLayers.push(ly)
    }
  })

  // Sort starting layers
  starterLayers.sort((a, b) => a[opDirection] - b[opDirection])

  // start a list of layers for each row
  const groups = starterLayers.map((ly) => [ly])
  const groupHeights = starterLayers.map((ly) => ly[maxPos] - ly[opDirection])
  starterLayers.forEach((ly, i) => {
    ly.group = i
  })

  // assign all other artboards to a row by
  // computing shortest distance between artboard vertical centers
  layers
    .filter((ly) => !starterLayers.includes(ly))
    .forEach((ly) => {
      starterLayers.forEach((lyStarter) => {
        lyStarter._tmpDistance = Math.abs(
          (lyStarter[opDirection] + lyStarter[maxPos]) / 2 -
            (ly[opDirection] + ly[maxPos]) / 2
        )
      })

      const curStarterLy = starterLayers.reduce((prev, current) =>
        prev._tmpDistance < current._tmpDistance ? prev : current
      )
      groups[curStarterLy.group].push(ly)

      // update row height
      groupHeights[curStarterLy.group] = Math.max(
        groupHeights[curStarterLy.group],
        ly[maxPos] - ly[opDirection]
      )
    })

  // sort each row by x position
  groups.forEach((lyInGroup) => {
    lyInGroup.sort((a, b) => a[direction] - b[direction])
  })

  // finally, arrange everything
  let opPos = origin[opDirection]
  let index = 0
  const arr = []

  groups.forEach((lyInRows, r) => {
    lyInRows.forEach((ly) => {
      if (direction === "x") {
        ly.xIdx = index
      } else {
        ly.yIdx = index
      }

      index++
      arr.push(ly)
    })
    opPos += groupHeights[r]
  })
  return arr
}

/**
 *  Find the X or Y positions of the layers and add them as object properties
 *
 * @export
 * @param {Object} layers
 * @returns {Object} Layers
 */
export function getPositionalSequence(layers: Array<any>) {
  let lrs = sortBy(layers, "x")
  lrs = sortBy(layers, "y")
  return lrs
}