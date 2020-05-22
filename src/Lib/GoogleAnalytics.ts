/*
 * @Author: Rodrigo Soares
 * @Date: 2020-05-16 02:00:48
 * @Last Modified by: Rodrigo Soares
 * @Last Modified time: 2020-05-22 00:52:21
 */

import { v3 as uuidv3 } from 'uuid'
import * as manifest from '../../manifest.json'
import * as pkg from '../../package.json'
import { html as io } from './io.js'
const kUUIDKey = 'google.analytics.uuid'
const kAnalyticsEnabled = 'analytics.enabled'
const kAnalyticsFirstRun = 'analytics.first.run'
const UUDID_key = 'cf564ee7-8aae-4ff2-91ef-3f62b1656b10'
const source = 'Figma'
const trackingId = 'UA-104184459-2'

export async function getUUID() {
  let uuid = await figma.clientStorage.getAsync(kUUIDKey)
  if (!uuid) {
    uuid = uuidv3(String(Date.now()), UUDID_key)
  }

  await figma.clientStorage.setAsync(kUUIDKey, uuid)

  return uuid
}

export async function analyticsEnabled() {
  return await figma.clientStorage.getAsync(kAnalyticsEnabled)
}

export async function setAnalyticsEnabled(value) {
  await figma.clientStorage.setAsync(kAnalyticsEnabled, value)
}

export async function analyticsFirstRun() {
  let fr = await figma.clientStorage.getAsync(kAnalyticsFirstRun)
  if (fr === undefined) fr = true
  if (fr) {
    await setAnalyticsFirstRun()
  }

  return fr
}

async function setAnalyticsFirstRun() {
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
  req.open('GET', url)
  req.send()
}

export async function track(hitType, props, options) {
  // const isAnalyticsEnabled = await analyticsEnabled()
  const isAnalyticsEnabled = true

  if (options && !options.analyticsEnabled) {
    console.log('not enabled')

    // the user didn't enable sharing analytics
    return "the user didn't enable sharing analytics"
  }

  const payload = {
    v: 1,
    tid: trackingId,
    ds: source,
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
