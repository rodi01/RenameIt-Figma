/*
 * @Author: Rodrigo Soares
 * @Date: 2019-07-31 20:38:15
 * @Last Modified by: Rodrigo Soares
 * @Last Modified time: 2022-04-02 00:45:00
 */

import * as React from 'react'
import { html as io } from './Lib/io.js'
import { Button, Title, Text } from 'react-figma-plugin-ds'

interface Props {
  whereTo: any
  windowDim: any
  root: any
}

class FirstRunDialog extends React.Component<Props> {
  constructor(props) {
    super(props)
    this.onAgreeClick = this.onAgreeClick.bind(this)
    this.onDisagreeClick = this.onDisagreeClick.bind(this)
  }

  onAgreeClick() {
    io.send('setAnalytics', true)
    this.renderNextScreen()
  }

  onDisagreeClick() {
    io.send('setAnalytics', false)
    this.renderNextScreen()
  }

  renderNextScreen() {
    io.send('resizeViewport', this.props.windowDim)
    this.props.root.render(this.props.whereTo)
  }

  render() {
    return (
      <div>
        <Title level="h1" size="xlarge" weight="bold">
          Analytics
        </Title>
        <Text className="ml-xxsmall">
          Rename It uses Google Analytics to help improve the plugin. Click on
          'Agree' to send diagnostics or 'Disagree' to disable analytics.
        </Text>
        <footer>
          <Button
            onClick={this.onDisagreeClick}
            isSecondary
            className="mr-xxsmall"
          >
            Disagree
          </Button>
          <Button onClick={this.onAgreeClick}>Agree</Button>
        </footer>
      </div>
    )
  }
}

export default FirstRunDialog
