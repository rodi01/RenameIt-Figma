/*
 * @Author: Rodrigo Soares
 * @Date: 2019-07-31 20:37:56
 * @Last Modified by: Rodrigo Soares
 * @Last Modified time: 2022-04-02 00:45:54
 */

import * as React from 'react'
import { Rename } from '@rodi01/renameitlib'
import * as isBlank from 'is-blank'
import * as isNumber from 'is-number'
import { Title, Label, Button } from 'react-figma-plugin-ds'
import Preview from './Preview'
import { html as io } from './Lib/io.js'
import { renameData } from './Lib/DataHelper'
import { track } from './Lib/GoogleAnalytics'
import { selectMenu } from 'figma-plugin-ds'
import 'figma-plugin-ds/dist/figma-plugin-ds.css'

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
  selectValue: string
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    icon?: string
  }
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
      selectValue: 'layerList',
    }

    this.rename = new Rename({ allowChildLayer: true })

    this.onNameInputChange = this.onNameInputChange.bind(this)
    this.onSequenceInputChange = this.onSequenceInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onButtonClicked = this.onButtonClicked.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.enterFunction = this.enterFunction.bind(this)
    this.nameInput = React.createRef()
    this.onSequenceTypeChange = this.onSequenceTypeChange.bind(this)
  }

  componentDidMount() {
    track(
      'pageview',
      { dp: '/rename', cid: this.props.uuid },
      { analyticsEnabled: this.props.analyticsEnabled }
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

    // check for sequence type
    if (this.state.selectValue === 'xPos') {
      options.currIdx = options.xIdx
    } else if (this.state.selectValue === 'yPos') {
      options.currIdx = options.yIdx
    }

    console.log(this.state.selectValue)

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
      { analyticsEnabled: this.props.analyticsEnabled }
    )

    this.nameInput.current.focus()
  }

  onSequenceTypeChange(e) {
    console.log(e.value)

    this.setState({ selectValue: e.value }, () => this.previewUpdate())
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
      { analyticsEnabled: this.props.analyticsEnabled }
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
          className="button button--secondary"
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
      <div>
        <Title level="h1" size="xlarge" weight="bold">
          Rename Selected Layers
        </Title>
        <div className="nameSection inputWrapper">
          <Label>Name</Label>
          <input
            type="text"
            ref={this.nameInput}
            className="input"
            value={this.state.valueAttr}
            onChange={this.onNameInputChange}
            placeholder="Item %n"
          />
        </div>

        <div className="sequenceInput ">
          <span className="section-title">SEQUENCE</span>
          <div className="inputWrapper">
            <Label>From</Label>
            <input
              type="number"
              className="input showBorder"
              value={this.state.sequence}
              onChange={this.onSequenceInputChange}
              min="0"
            />

            <select
              id="sequenceSelect"
              className="select-menu m-xxsmall"
              defaultValue={this.state.selectValue}
              onChange={this.onSequenceTypeChange}
            >
              <option value="layerList">Layer order: Top to bottom</option>
              <option value="xPos">
                Postion: Left to right, top to bottom
              </option>
              <option value="yPos">
                Positon: Top to bottom, left to right
              </option>
            </select>
          </div>
        </div>

        <div className="keywordsSection">
          <span className="section-title">KEYWORDS</span>
          <ul className="keywords">{listItems}</ul>
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

export default RenameLayers
