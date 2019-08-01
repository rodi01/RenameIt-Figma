/*
 * @Author: Rodrigo Soares
 * @Date: 2019-07-31 20:39:24
 * @Last Modified by: Rodrigo Soares
 * @Last Modified time: 2019-07-31 21:03:40
 */

import * as React from "react"
import * as ReactDOM from "react-dom"
import { html as io } from "./Lib/io.js"
import { WhereTo } from "./Utilities"
import RenameLayers from "./RenameLayers"
import FindReplaceLayers from "./FindReplaceLayers"
import NoSelection from "./NoSelection"
import "./scss/main.scss"

interface States {
  data: any
  whereTo: string
}

class App extends React.Component<{}, States> {
  state: States = {
    data: null,
    whereTo: null
  }

  async componentDidMount() {
    const msg = await io.async("sendData")
    this.setState({ data: msg.data, whereTo: msg.command })
  }

  toRender() {
    switch (this.state.whereTo) {
      case WhereTo.RenameLayers:
        return <RenameLayers data={JSON.stringify(this.state.data)} />

      case WhereTo.FindReplace:
        return <FindReplaceLayers data={JSON.stringify(this.state.data)} />

      case WhereTo.NoSelection:
        return <NoSelection />

      default:
        return <div />
    }
  }

  render() {
    return this.toRender()
  }
}

ReactDOM.render(<App />, document.getElementById("react-page"))
