import React from 'react'
import PropTypes from 'prop-types'

class InputSearch extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
    this.inputSearchWord = React.createRef()
  }

  static props = {
    cbFindKeyWord: PropTypes.func,
  }

  componentWillReceiveProps(newProps) {
    this.inputSearchWord.current.focus()
  }

  componentDidMount() {
    this.inputSearchWord.current.focus()
  }

  actionTimer = 0

  getValue = e => {
    this.setState(
      {
        value: e.currentTarget.value,
      },
      () => this.startTimer(this.state.value)
    )
  }

  deleteValue = EO => {
    let keyCode = EO.keyCode || EO.which
    if (keyCode === 27) {
      this.setState(
        {
          value: '',
        },
        () => {}
      )
    } else if (keyCode === 13) {
      this.startTimer(this.state.value)
    }
  }

  startTimer = keyWord => {
    this.stopTimer()
    this.actionTimer = setTimeout(() => this.props.cbFindKeyWord(keyWord), 500)
  }

  stopTimer = () => {
    if (this.actionTimer) {
      clearTimeout(this.actionTimer)
      this.actionTimer = 0
    }
  }

  render() {
    let {
      state: { value },
      getValue,
      deleteValue,
      inputSearchWord,
    } = this
    return (
      <div>
        <input
          placeholder="Search"
          value={value}
          ref={inputSearchWord}
          onChange={getValue}
          onKeyDown={deleteValue}
        />
      </div>
    )
  }
}

export default InputSearch
