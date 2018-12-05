import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { findMeal } from '../../actions/findMealActions'
import SearchResult from '../../components/SearchResult/SearchResult'
import InputSearch from '../../components/InputSearch/InputSearch'
import PortalForSearch from '../../components/PortalForSearch/PortalForSearch'
import { CLEAN_RESULT_OF_SEARCH } from '../../actions/mealsActions'
import { CSSTransitionGroup } from 'react-transition-group'
import ExitIcon from '../../icons/ExitIcon'
import './SearchMeals.scss'
class SearchMeals extends React.PureComponent {
  constructor(props) {
    super(props)
    this.el = React.createRef()
  }

  mainClassCss = 'search-component' // name of class

  static props = {
    meals: PropTypes.object,
    cbShowSearch: PropTypes.bool,
  }

  findKeyWord = keyWord => {
    if (keyWord.length > 2) {
      this.props.findMeal(keyWord)
    } else if (keyWord.length <= 2) {
      this.props.dispatch({ type: CLEAN_RESULT_OF_SEARCH })
    }
  }

  showSearch = () => {
    this.props.cbShowSearch()
  }

  componentWillReceiveProps(props) {
    if (props.showSearch) {
      document.addEventListener('click', this.handleClickOutside, false)
    } else {
      document.removeEventListener('click', this.handleClickOutside, false)
    }
  }

  handleClickOutside = event => {
    if (this.el && !this.el.current.contains(event.target)) {
      this.props.cbShowSearch()
    }
  }

  render() {
    let {
      props: { meals, showSearch },
      findKeyWord,
      el,
      mainClassCss,
    } = this
    return (
      <div className="container">
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {showSearch && (
            <PortalForSearch>
              <div className={mainClassCss} ref={el}>
                <button
                  className={`${mainClassCss}__button ${mainClassCss}__button--close`}
                  onClick={this.showSearch}
                >
                  <ExitIcon color={'grey'} />
                </button>
                <InputSearch cbFindKeyWord={findKeyWord} />
                <SearchResult meals={meals} />
              </div>
            </PortalForSearch>
          )}
        </CSSTransitionGroup>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  meals: store.meals,
})

const mapDispatchToProps = dispatch => ({
  findMeal: mealName => dispatch(findMeal(mealName)),
  dispatch: action => dispatch(action),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchMeals)
)
