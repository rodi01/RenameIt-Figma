/*
 * @Author: Rodrigo Soares
 * @Date: 2019-07-31 20:37:18
 * @Last Modified by: Rodrigo Soares
 * @Last Modified time: 2022-04-02 21:21:12
 */

import * as React from 'react'
import { FindReplace } from '@rodi01/renameitlib'
import { Button, Checkbox, Label, Title } from 'react-figma-plugin-ds'
import { findReplaceData } from './Lib/DataHelper'
import Preview from './Preview'
import { html as io } from './Lib/io.js'
import { track } from './Lib/GoogleAnalytics'

interface Props {
  data: any
  uuid: string
  analyticsEnabled: boolean
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
  findInput: any

  constructor(props) {
    super(props)

    this.state = {
      findValue: '',
      replaceValue: '',
      caseSensitive: false,
      previewData: [],
      parsedData: null,
      selection: null,
    }

    this.findReplace = new FindReplace()
    this.onFindInputChange = this.onFindInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.onCaseSensitiveChange = this.onCaseSensitiveChange.bind(this)
    this.enterFunction = this.enterFunction.bind(this)
    this.findInput = React.createRef()
  }

  componentDidMount() {
    track(
      'pageview',
      { dp: '/find_replace', cid: this.props.uuid },
      { analyticsEnabled: this.props.analyticsEnabled }
    )
    const d = JSON.parse(this.props.data)
    this.setState({ selection: d.selection, parsedData: d })
    this.findInput.current.focus()

    document.addEventListener('keydown', this.enterFunction, false)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.enterFunction, false)
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
    const isFind = e.target.id === 'find'
    this.setState(
      {
        findValue: isFind ? e.target.value : this.state.findValue,
        replaceValue: !isFind ? e.target.value : this.state.replaceValue,
      },
      () => this.previewUpdate()
    )
  }

  onCaseSensitiveChange(value) {
    this.setState(
      {
        caseSensitive: value,
      },
      () => this.previewUpdate()
    )
  }

  previewUpdate() {
    const renamed = []
    this.state.selection.forEach((item) => {
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
      caseSensitive: this.state.caseSensitive,
    }

    track(
      'event',
      {
        ec: 'input',
        ea: 'searchScope',
        el: 'layers',
        cid: this.props.uuid,
      },
      { analyticsEnabled: this.props.analyticsEnabled }
    )

    track(
      'event',
      {
        ec: 'input',
        ea: 'find',
        el: `${this.state.findValue}`,
        cid: this.props.uuid,
      },
      { analyticsEnabled: this.props.analyticsEnabled }
    )

    track(
      'event',
      {
        ec: 'input',
        ea: 'replace',
        el: `${this.state.replaceValue}`,
        cid: this.props.uuid,
      },
      { analyticsEnabled: this.props.analyticsEnabled }
    )

    io.send('findReplaceLayers', opts)

    document.removeEventListener('keydown', this.enterFunction, false)
  }

  onCancel() {
    io.send('cancel', null)
  }

  render() {
    return (
      <div className="findReplace">
        <Title level="h1" size="xlarge" weight="bold">
          Find &amp; Replace Selected Layers
        </Title>
        <div className="findSection inputWrapper">
          <Label>Find</Label>
          <div className="input">
            <input
              type="text"
              id="find"
              ref={this.findInput}
              className="input__field showBorder"
              value={this.state.findValue}
              onChange={this.onFindInputChange}
            />
          </div>
        </div>

        <div className="replaceSection inputWrapper">
          <Label>Replace</Label>
          <div className="input">
            <input
              type="text"
              id="replace"
              className="input__field showBorder"
              value={this.state.replaceValue}
              onChange={this.onFindInputChange}
            />
          </div>
        </div>

        <div className="caseSesitiveWrapper">
          <Checkbox
            label="Case Sensitive"
            defaultValue={this.state.caseSensitive}
            onChange={this.onCaseSensitiveChange}
            type="switch"
          />
        </div>

        <Preview data={this.state.previewData} />

        <footer>
          <Button onClick={this.onCancel} isSecondary className="mr-xxsmall">
            Cancel
          </Button>
          <Button onClick={this.onSubmit}>Rename</Button>
        </footer>
      </div>
    )
  }
}

export default FindReplaceLayers
