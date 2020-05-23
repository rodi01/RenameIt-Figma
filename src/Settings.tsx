/*
 * @Author: Rodrigo Soares
 * @Date: 2019-07-31 20:38:15
 * @Last Modified by: Rodrigo Soares
 * @Last Modified time: 2020-05-22 15:07:48
 */

import * as React from 'react'
import { html as io } from './Lib/io.js'
import { track } from './Lib/GoogleAnalytics'
import { Title, Divider, Text, Checkbox } from 'react-figma-plugin-ds'

interface Props {
  uuid: string
  analyticsEnabled: boolean
}

interface State {
  analytics: boolean
}

class Settings extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      analytics: props.analyticsEnabled,
    }

    this.onDoneClick = this.onDoneClick.bind(this)
    this.onAnalyticsChange = this.onAnalyticsChange.bind(this)
  }

  componentDidMount() {
    track(
      'pageview',
      { dp: '/settings', cid: this.props.uuid },
      { analyticsEnabled: this.props.analyticsEnabled }
    )
  }

  onDoneClick(e) {
    io.send('cancel', null)
  }

  website() {}

  twitter() {
    // window.postMessage('externalLinkClicked', 'https://twitter.com/rodi01')
  }

  onAnalyticsChange(value) {
    this.setState({
      analytics: value,
    })

    io.send('setAnalytics', value)
  }

  render() {
    return (
      <div>
        <Title level="h1" size="xlarge" weight="bold">
          Settings
        </Title>

        <div className="section-title mt-xxsmall">Analytics</div>
        <Text className="m-xxsmall">
          Rename It uses Google Analytics to help improve the plugin.
        </Text>
        <Checkbox
          label="Enable Google Analytics"
          defaultValue={this.state.analytics}
          onChange={this.onAnalyticsChange}
        />

        <Divider />
        <div className="section-title">About</div>
        <div className="flex">
          <a
            className="button button--secondary"
            target="_blank"
            href="https://renameit.design/figma/"
          >
            Website
          </a>
          <a
            className="button button--secondary ml-xxsmall"
            target="_blank"
            href="https://www.paypal.me/rodi01/5"
          >
            Donate
          </a>
        </div>

        <Text className="mt-xsmall">
          Rename It is maintained by Rodrigo Soares.{' '}
          <a href="https://twitter.com/rodi01" target="_blank">
            @rodi01
          </a>
        </Text>
      </div>
    )
  }
}

export default Settings
