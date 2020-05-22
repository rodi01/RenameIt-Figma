/*
 * @Author: Rodrigo Soares
 * @Date: 2019-07-31 20:38:15
 * @Last Modified by: Rodrigo Soares
 * @Last Modified time: 2020-05-22 11:18:57
 */

import * as React from 'react'
import { html as io } from './Lib/io.js'
import { track } from './Lib/GoogleAnalytics'

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
      { analyticsEnabled: this.props.analyticsEnabled, debug: true }
    )
  }

  onDoneClick(e) {
    io.send('cancel', null)
  }

  onAnalyticsChange(e) {
    this.setState({
      analytics: e.target.checked,
    })

    io.send('setAnalytics', e.target.checked)
  }

  render() {
    return (
      <div>
        <h1>Settings</h1>
        <p>Rename It uses Google Analytics to help improve the plugin.</p>
        <label className="row" style={{ alignItems: 'center' }}>
          <input
            id="analytics"
            type="checkbox"
            checked={this.state.analytics}
            onChange={this.onAnalyticsChange}
          />
          <span>Enable Google Analytics</span>
        </label>
        <footer>
          <button
            type="submit"
            className="button button--primary"
            onClick={this.onDoneClick}
          >
            Done
          </button>
        </footer>
      </div>
    )
  }
}

export default Settings
