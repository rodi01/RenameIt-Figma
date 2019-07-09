import * as React from "react"
import * as isBlank from "is-blank"

type Props = {
  data: Array<string>
}

type State = {
  preview: string
}

class Preview extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      preview: ""
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      preview: nextProps.data.filter(val => val).join(", ")
    })
  }

  renderPreviewText() {
    if (isBlank(this.state.preview)) {
      return <span>&nbsp;</span>
    } else {
      return `Preview: ${this.state.preview}`
    }
  }
  render() {
    return <div className="preview">{this.renderPreviewText()}</div>
  }
}

export default Preview
