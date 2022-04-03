/*
 * @Author: Rodrigo Soares
 * @Date: 2019-07-31 20:38:59
 * @Last Modified by: Rodrigo Soares
 * @Last Modified time: 2022-04-02 20:37:47
 */

import * as React from 'react'
import * as isBlank from 'is-blank'
import { Text } from 'react-figma-plugin-ds'

interface Props {
  data: string[]
}

interface State {
  preview: string
}

class Preview extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      preview: '',
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        preview: this.props.data.filter((val) => val).join(', '),
      })
    }
  }

  renderPreviewText() {
    if (isBlank(this.state.preview)) {
      return <span>&nbsp;</span>
    } else {
      return (
        <span>
          <strong>Preview:</strong>&nbsp;
          {this.state.preview}
        </span>
      )
    }
  }
  render() {
    return (
      <Text className="preview ml-xxsmall">{this.renderPreviewText()}</Text>
    )
  }
}

export default Preview
