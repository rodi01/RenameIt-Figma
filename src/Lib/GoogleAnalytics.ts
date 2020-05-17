/*
 * @Author: Rodrigo Soares
 * @Date: 2020-05-16 02:00:48
 * @Last Modified by: Rodrigo Soares
 * @Last Modified time: 2020-05-16 23:00:04
 */

import { v4 as uuidv4 } from 'uuid'
import manifest from '../../manifest.json'
import pkg from '../../package.json'
const kUUIDKey = 'google.analytics.uuid'
const kAnalyticsEnabled = 'analytics.enabled'
const kAnalyticsFirstRun = 'analytics.first.run'
const source = 'Figma'
const trackingId = 'UA-104184459-2'

async function getUUID() {
  let uuid = await figma.clientStorage.getAsync(kUUIDKey)
  if (!uuid) {
    uuid = uuidv4()
    await figma.clientStorage.setAsync(kUUIDKey, uuid)
  }

  return uuid
}

export async function analyticsEnabled() {
  return await figma.clientStorage.getAsync(kAnalyticsEnabled)
}

export async function setAnalyticsEnabled(value) {
  await figma.clientStorage.setAsync(kAnalyticsEnabled, value)
}

export async function analyticsFirstRun() {
  return await figma.clientStorage.getAsync(kAnalyticsFirstRun)
}

export async function setAnalyticsFirstRun() {
  await figma.clientStorage.setAsync(kAnalyticsFirstRun, false)
}

function jsonToQueryString(json) {
  return Object.keys(json)
    .map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    })
    .join('&')
}

function makeRequest(url, options) {
  if (!url) {
    return
  }

  const req = new XMLHttpRequest()
  req.open('GET', url, true)
  req.send()
}

export async function track(hitType, props, options) {
  const isAnalyticsEnabled = await analyticsEnabled()

  if (!isAnalyticsEnabled) {
    // the user didn't enable sharing analytics
    return "the user didn't enable sharing analytics"
  }

  const payload = {
    v: 1,
    tid: trackingId,
    ds: source,
    cid: await getUUID(),
    t: hitType,
    an: manifest.name,
    aid: 'com.renameit.design',
    av: pkg.version,
  }

  if (props) {
    Object.keys(props).forEach(function (key) {
      payload[key] = props[key]
    })
  }

  const url = `https://www.google-analytics.com/${
    options && options.debug ? 'debug/' : ''
  }collect?${jsonToQueryString(payload)}&z=${Date.now()}`

  if (options && options.debug) {
    console.log('DEBUG: Analytics')
    console.log(payload)
    console.log(`url: ${url}`)
  }

  return makeRequest(url, options)
}
