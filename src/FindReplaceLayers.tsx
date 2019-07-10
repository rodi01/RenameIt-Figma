import * as React from "react"
import { FindReplace } from "renameitlib"
import { findReplaceData } from "./Lib/DataHelper"
import Preview from "./Preview"
import { html as io } from "./Lib/io.js"

interface Props {
  data: any
}

interface State {
  findValue: string
  replaceValue: string
  caseSensitive: boolean
  previewData: string[]
  parsedData: any
  selection: any
}

class FindReplaceLayers extends React.Component<Props, State> {
  findReplace: any

  constructor(props) {
    super(props)

    this.state = {
      findValue: "",
      replaceValue: "",
      caseSensitive: false,
      previewData: [],
      parsedData: null,
      selection: null
    }

    this.findReplace = new FindReplace()
    this.onFindInputChange = this.onFindInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.onCaseSensitiveChange = this.onCaseSensitiveChange.bind(this)
    this.enterFunction = this.enterFunction.bind(this)
  }

  componentDidMount() {
    const d = JSON.parse(this.props.data)
    this.setState({ selection: d.selection, parsedData: d })

    document.addEventListener("keydown", this.enterFunction, false)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.enterFunction, false)
  }

  doRename(item) {
    const options = findReplaceData(
      item,
      this.state.findValue,
      this.state.replaceValue,
      this.state.caseSensitive
    )

    return this.findReplace.match(options)
      ? this.findReplace.layer(options)
      : false
  }

  onFindInputChange(e) {
    const isFind = e.target.id === "find"
    this.setState(
      {
        findValue: isFind ? e.target.value : this.state.findValue,
        replaceValue: !isFind ? e.target.value : this.state.replaceValue
      },
      () => this.previewUpdate()
    )
  }

  onCaseSensitiveChange() {
    this.setState(
      {
        caseSensitive: !this.state.caseSensitive
      },
      () => this.previewUpdate()
    )
  }

  previewUpdate() {
    const renamed = []
    this.state.selection.forEach(item => {
      const name = this.doRename(item)
      if (name) {
        renamed.push(name)
      }
    })
    this.setState({ previewData: renamed })
  }

  enterFunction(event) {
    if (event.keyCode === 13) {
      // Enter is pressed
      this.onSubmit(event)
    } else if (event.keyCode === 27) {
      event.preventDefault()
      this.onCancel()
    }
  }

  onSubmit(e) {
    const opts = {
      findText: this.state.findValue,
      replaceText: this.state.replaceValue,
      caseSensitive: this.state.caseSensitive
    }

    io.send("findReplaceLayers", opts)

    document.removeEventListener("keydown", this.enterFunction, false)
  }

  onCancel() {
    io.send("cancel", null)
  }

  render() {
    return (
      <div className="findReplace type type--11-pos">
        <h1>Find &amp; Replace Selected Layers</h1>
        <div className="findSection inputWrapper">
          <label>Find</label>
          <input
            type="text"
            id="find"
            className="input showBorder"
            value={this.state.findValue}
            onChange={this.onFindInputChange}
          />
        </div>

        <div className="replaceSection inputWrapper">
          <label>Replace</label>
          <input
            type="text"
            id="replace"
            className="input showBorder"
            value={this.state.replaceValue}
            onChange={this.onFindInputChange}
          />
        </div>

        <div className="inputWrapper caseSesitiveWrapper">
          <label>Case Sensitive</label>
          <input
            type="checkbox"
            id="caseSensitive"
            checked={this.state.caseSensitive}
            onChange={this.onCaseSensitiveChange}
          />
        </div>

        <Preview data={this.state.previewData} />

        <footer>
          <button className="button--secondary" onClick={this.onCancel}>
            Cancel
          </button>
          <button className="button--primary" onClick={this.onSubmit}>
            Rename
          </button>
        </footer>
      </div>
    )
  }
}

export default FindReplaceLayers
