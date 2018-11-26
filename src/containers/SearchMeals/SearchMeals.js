import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { findMeal } from '../../actions/findMealActions'
import SearchResult from '../../components/SearchResult/SearchResult'
class SearchMeals extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
    this.inputSearchWord = React.createRef()
  }

  static props = {
    meals: PropTypes.object,
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
    if (keyWord.length <= 2) {
      return
    } else {
      this.actionTimer = setTimeout(() => this.findKeyWord(keyWord), 500)
    }
  }

  stopTimer = () => {
    if (this.actionTimer) {
      clearTimeout(this.actionTimer)
      this.actionTimer = 0
    }
  }

  findKeyWord = keyWord => {
    this.props.findMeal(keyWord)
  }

  render() {
    let {
      props: { meals },
      state: { value },
      inputSearchWord,
      getValue,
      deleteValue,
    } = this
    return (
      <div className="container">
        <input
          placeholder="Search"
          value={value}
          ref={inputSearchWord}
          onChange={getValue}
          onKeyDown={deleteValue}
        />
        <SearchResult meals={meals} value={value} />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  meals: store.meals,
})

const mapDispatchToProps = dispatch => ({
  findMeal: mealName => dispatch(findMeal(mealName)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchMeals)
)
