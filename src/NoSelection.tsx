/*
 * @Author: Rodrigo Soares
 * @Date: 2019-07-31 20:38:15
 * @Last Modified by:   Rodrigo Soares
 * @Last Modified time: 2019-07-31 20:38:15
 */

import * as React from 'react'
import { html as io } from './Lib/io.js'
import { Title, Text, Button } from 'react-figma-plugin-ds'

class NoSelection extends React.Component {
  constructor(props) {
    super(props)
    this.onOKClick = this.onOKClick.bind(this)
  }

  onOKClick(e) {
    io.send('cancel', null)
  }

  render() {
    return (
      <div>
        <Title level="h1" size="xlarge" weight="bold">
          Uh Oh!
        </Title>
        <Text className="ml-xxsmall">
          You need to select at least one frame or layer.
        </Text>
        <footer>
          <Button onClick={this.onOKClick}>Close</Button>
        </footer>
      </div>
    )
  }
}

export default NoSelection
