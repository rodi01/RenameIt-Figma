/*
 * @Author: Rodrigo Soares
 * @Date: 2019-07-31 20:39:24
 * @Last Modified by: Rodrigo Soares
 * @Last Modified time: 2020-05-22 13:15:21
 */

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { html as io } from './Lib/io.js'
import { WhereTo } from './Utilities'
import RenameLayers from './RenameLayers'
import FindReplaceLayers from './FindReplaceLayers'
import NoSelection from './NoSelection'
import Settings from './Settings'
import FirstRunDialog from './FirstRunDialog'
import 'react-figma-plugin-ds/styles/figma-plugin-ds.min.css'
import './scss/customStyles.scss'

interface States {
  data: any
  whereTo: string
  UUID: string
  firstRun: boolean
  analyticsEnabled: boolean
  windownDim: any
}

class App extends React.Component<{}, States> {
  state: States = {
    data: null,
    whereTo: null,
    UUID: null,
    firstRun: null,
    analyticsEnabled: null,
    windownDim: null,
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
        />
      )
    }

    return whereDialog
  }

  render() {
    return this.toRender()
  }
}

ReactDOM.render(<App />, document.getElementById('react-page'))
