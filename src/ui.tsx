import * as React from "react"
import * as ReactDOM from "react-dom"
import { html as io } from "./Lib/io.js"
import { WhereTo } from "./Utilities"
import RenameLayers from "./RenameLayers"
import NoSelection from "./NoSelection"
import "./scss/main.scss"

type Props = {}
type States = {
  data: any
  whereTo: String
}

class App extends React.Component<Props, States> {
  state: States = {
    data: null,
    whereTo: null
  }

  async componentDidMount() {
    const msg = await io.async("sendData")
    this.setState({
      data: msg.data,
      whereTo: msg.command
    })
  }

  toRender() {
    switch (this.state.whereTo) {
      case WhereTo.RenameLayers:
        return <RenameLayers data={JSON.stringify(this.state.data)} />
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
