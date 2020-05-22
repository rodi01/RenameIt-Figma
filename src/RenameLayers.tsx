/*
 * @Author: Rodrigo Soares
 * @Date: 2019-07-31 20:37:56
 * @Last Modified by: Rodrigo Soares
 * @Last Modified time: 2020-05-22 00:57:19
 */

import * as React from 'react'
import { Rename } from '@rodi01/renameitlib'
import * as isBlank from 'is-blank'
import * as isNumber from 'is-number'
import Preview from './Preview'
import { html as io } from './Lib/io.js'
import { renameData } from './Lib/DataHelper'
import { track } from './Lib/GoogleAnalytics'

interface Props {
  data: any
  uuid: string
  analyticsEnabled: boolean
}

interface State {
  valueAttr: string
  sequence: number
  previewData: string[]
  disableButton: boolean
  selection: any
  parsedData: any
  hasSymbol: boolean
  hasLayerStyle: boolean
  hasChildLayer: boolean
}

class RenameLayers extends React.Component<Props, State> {
  rename: Rename
  nameInput: any

  constructor(props) {
    super(props)

    this.state = {
      valueAttr: '',
      sequence: 1,
      previewData: [],
      disableButton: true,
      selection: null,
      parsedData: null,
      hasSymbol: false,
      hasLayerStyle: false,
      hasChildLayer: false,
    }

    this.rename = new Rename({ allowChildLayer: true })

    this.onNameInputChange = this.onNameInputChange.bind(this)
    this.onSequenceInputChange = this.onSequenceInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onButtonClicked = this.onButtonClicked.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.enterFunction = this.enterFunction.bind(this)
    this.nameInput = React.createRef()
  }

  componentDidMount() {
    track(
      'pageview',
      { dp: '/rename', cid: this.props.uuid },
      { analyticsEnabled: this.props.analyticsEnabled, debug: true }
    )
    const d = JSON.parse(this.props.data)
    this.setState({
      selection: d.selection,
      parsedData: d,
      hasLayerStyle: d.hasLayerStyle,
      hasSymbol: d.hasSymbol,
      hasChildLayer: d.hasChildLayer,
    })

    this.nameInput.current.focus()
    document.addEventListener('keydown', this.enterFunction, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.enterFunction, false)
  }

  enterFunction(e) {
    if (e.keyCode === 13) {
      // Enter is pressed
      e.preventDefault()
      this.onSubmit()
    } else if (e.keyCode === 27) {
      e.preventDefault()
      this.onCancel()
    }
  }

  onNameInputChange(e) {
    this.setState(
      {
        valueAttr: e.target.value,
      },
      () => this.previewUpdate()
    )
  }

  onSequenceInputChange(e) {
    if (e.target.value == '' || isNumber(e.target.value)) {
      this.setState(
        {
          sequence: e.target.value,
        },
        () => this.previewUpdate()
      )
    } else {
      this.setState(
        {
          sequence: e.target.value,
        },
        () => this.previewUpdate()
      )
    }
  }

  doRename(item, index) {
    const options = renameData(
      item,
      this.state.parsedData.selectionCount,
      this.state.valueAttr,
      this.state.sequence,
      this.state.parsedData.pageName
    )

    return this.rename.layer({
      ...item,
      ...options,
    })
  }

  onButtonClicked(e) {
    e.preventDefault()

    this.setState(
      {
        valueAttr: `${this.state.valueAttr}${e.target.getAttribute(
          'data-char'
        )}`,
      },
      () => this.previewUpdate()
    )

    track(
      'event',
      {
        ec: 'keywordButton',
        ea: e.target.getAttribute('id'),
        el: e.target.getAttribute('data-char'),
        cid: this.props.uuid,
      },
      { analyticsEnabled: this.props.analyticsEnabled, debug: true }
    )

    this.nameInput.current.focus()
  }

  previewUpdate() {
    let renamed = []
    this.state.selection.forEach((item, index) => {
      renamed.push(this.doRename(item, index))
    })
    this.setState({
      previewData: renamed,
      disableButton:
        !isBlank(this.state.valueAttr) && isNumber(this.state.sequence)
          ? false
          : true,
    })
  }

  onSubmit() {
    track(
      'event',
      {
        ec: 'input',
        ea: 'rename',
        el: String(this.state.valueAttr),
        cid: this.props.uuid,
      },
      { analyticsEnabled: this.props.analyticsEnabled, debug: true }
    )
    io.send('renameLayers', {
      nameInput: this.state.valueAttr,
      sequenceInput: this.state.sequence,
    })
  }

  onCancel() {
    io.send('cancel', null)
  }

  render() {
    const buttons = [
      {
        id: 'currentLayer',
        char: '%*',
        text: 'Layer Name',
      },
      {
        id: 'layerWidth',
        char: '%w',
        text: 'Layer Width',
      },
      {
        id: 'layerHeight',
        char: '%h',
        text: 'Layer Height',
      },
      {
        id: 'sequenceAsc',
        char: '%N',
        text: 'Num. Sequence ASC',
      },
      {
        id: 'sequenceDesc',
        char: '%n',
        text: 'Num. Sequence DESC',
      },
      {
        id: 'sequenceAlpha',
        char: '%A',
        text: 'Alphabet Sequence',
      },
      {
        id: 'parentName',
        char: '%o',
        text: 'Parent Name',
      },
      {
        id: 'childLayer',
        char: '%ch%',
        text: 'Child Layer',
        disabled: !this.state.hasChildLayer,
      },
      {
        id: 'pageName',
        char: '%p',
        text: 'Page Name',
      },
      {
        id: 'symbolName',
        char: '%s',
        text: 'Symbol Name',
        disabled: !this.state.hasSymbol,
      },
      {
        id: 'styleName',
        char: '%ls%',
        text: 'Style Name',
        disabled: !this.state.hasLayerStyle,
      },
    ]

    const listItems = buttons.map((b) => (
      <li key={b.id} className="keywordBtn">
        <button
          className="button--secondary"
          title={`Shortcut: ${b.char}`}
          onClick={this.onButtonClicked}
          data-char={b.char}
          disabled={b.disabled}
        >
          {b.text}
        </button>
      </li>
    ))

    return (
      <div className="type type--11-pos">
        <h1>Rename Selected Layers</h1>
        <div className="nameSection inputWrapper">
          <label>Name</label>
          <input
            type="text"
            ref={this.nameInput}
            className="input showBorder"
            value={this.state.valueAttr}
            onChange={this.onNameInputChange}
            placeholder="Item %n"
          />
        </div>

        <div className="sequenceInput inputWrapper">
          <label>Start from</label>
          <input
            type="number"
            className="input showBorder"
            value={this.state.sequence}
            onChange={this.onSequenceInputChange}
            min="0"
          />
        </div>

        <div className="keywordsSection">
          <span className="section-title">Keywords</span>
          <ul className="keywords">{listItems}</ul>
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

export default RenameLayers
