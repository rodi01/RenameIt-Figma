/*
 * @Author: Rodrigo Soares
 * @Date: 2019-07-31 20:39:24
 * @Last Modified by: Rodrigo Soares
 * @Last Modified time: 2022-04-02 22:12:13
 */

import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { html as io } from './Lib/io.js'
import { WhereTo } from './Utilities'
import RenameLayers from './RenameLayers'
import FindReplaceLayers from './FindReplaceLayers'
import NoSelection from './NoSelection'
import Settings from './Settings'
import FirstRunDialog from './FirstRunDialog'
import 'react-figma-plugin-ds/figma-plugin-ds.css'
import './scss/customStyles.scss'

interface States {
  data: any
  whereTo: string
  UUID: string
  firstRun: boolean
  analyticsEnabled: boolean
  windownDim: any
  sequenceType: string
}

// Root Element
const rootElement = document.getElementById('react-page')
const root = createRoot(rootElement)

class App extends React.Component<{}, States> {
  state: States = {
    data: null,
    whereTo: null,
    UUID: null,
    firstRun: null,
    analyticsEnabled: null,
    windownDim: null,
    sequenceType: null,
  }

  async componentDidMount() {
    const msg = await io.async('sendData')
    this.setState({
      data: msg.data,
      whereTo: msg.command,
      UUID: msg.UUID,
      firstRun: msg.firstRun,
      analyticsEnabled: msg.analyticsEnabled,
      windownDim: msg.windowDim,
      sequenceType: msg.sequenceType,
    })
  }

  toRender() {
    let whereDialog
    switch (this.state.whereTo) {
      case WhereTo.RenameLayers:
        whereDialog = (
          <RenameLayers
            data={JSON.stringify(this.state.data)}
            uuid={this.state.UUID}
            analyticsEnabled={this.state.analyticsEnabled}
            sequenceType={this.state.sequenceType}
          />
        )
        break

      case WhereTo.FindReplace:
        whereDialog = (
          <FindReplaceLayers
            data={JSON.stringify(this.state.data)}
            uuid={this.state.UUID}
            analyticsEnabled={this.state.analyticsEnabled}
          />
        )
        break

      case WhereTo.NoSelection:
        whereDialog = <NoSelection />
        break

      case WhereTo.Settings:
        whereDialog = (
          <Settings
            uuid={this.state.UUID}
            analyticsEnabled={this.state.analyticsEnabled}
          />
        )
        break

      case WhereTo.Donate:
        window.open('https://www.paypal.me/rodi01/5', '_blank')
        io.send('cancel', null)
        return
        break

      default:
        whereDialog = <div />
        break
    }

    if (this.state.firstRun) {
      return (
        <FirstRunDialog
          whereTo={whereDialog}
          windowDim={this.state.windownDim}
          root={root}
        />
      )
    }

    return whereDialog
  }

  render() {
    return this.toRender()
  }
}

root.render(<App />)
