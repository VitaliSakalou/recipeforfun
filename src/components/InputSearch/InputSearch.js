import React from 'react'
import PropTypes from 'prop-types'
import './InputSearch.scss'

class InputSearch extends React.PureComponent {
  constructor(props) {
    super(props)
    this.inputSearchWord = React.createRef()
    this.state = {
      value: '',
    }
  }

  static propTypes = {
    cbFindKeyWord: PropTypes.func,
  }

  mainClassCss = 'input-search'

  componentDidUpdate() {
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
        () => {
          this.props.cbFindKeyWord(this.state.value)
        }
      )
    } else if (keyCode === 13) {
      EO.preventDefault()
      this.props.cbFindKeyWord(this.state.value)
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
      mainClassCss,
    } = this
    return (
      <div className={mainClassCss}>
        <form>
          <input
            type="text"
            ref={inputSearchWord}
            className={`${mainClassCss}__input`}
            placeholder="Search..."
            value={value}
            onChange={getValue}
            onKeyDown={deleteValue}
          />
        </form>
      </div>
    )
  }
}

export default InputSearch
