import * as React from "react"
import { html as io } from "./Lib/io.js"

class NoSelection extends React.Component {
  constructor(props) {
    super(props)
    this.onOKClick = this.onOKClick.bind(this)
  }

  onOKClick(e) {
    io.send("cancel", null)
  }

  render() {
    return (
      <div>
        <h2>Uh Oh!</h2>
        <p>You need to select at least one frame or layer.</p>
        <footer>
          <button
            type="submit"
            className="button button--primary"
            onClick={this.onOKClick}
          >
            Close
          </button>
        </footer>
      </div>
    )
  }
}

export default NoSelection
