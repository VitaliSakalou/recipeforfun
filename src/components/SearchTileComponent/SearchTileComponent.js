import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import SearchResult from '../SearchResult/SearchResult'
import InputSearch from '../InputSearch/InputSearch'
import Preloader from '../Preloader/Preloader'
import ExitIcon from '../../icons/ExitIcon'
import classNames from 'classnames'
import { findMeal } from '../../actions/findMealActions'
import { CLEAN_RESULT_OF_SEARCH } from '../../actions/mealsActions'
import './SearchTileComponent.scss'

class SearchTileComponent extends React.PureComponent {
  static propTypes = {
    meals: PropTypes.object,
    cbShowSearch: PropTypes.func,
  }

  static defaultProps = {
    meals: {
      error: 'no data',
    },
  }

  componentWillUnmount() {
    this.props.dispatch({ type: CLEAN_RESULT_OF_SEARCH })
  }

  showSearch = () => {
    this.props.cbShowSearch()
  }

  findKeyWord = keyWord => {
    if (keyWord.length > 2) {
      this.props.findMeal(keyWord)
    } else if (keyWord.length <= 2) {
      this.props.dispatch({ type: CLEAN_RESULT_OF_SEARCH })
    }
  }

  mainClassCss = 'search-tile-component'

  render() {
    let {
      props: { meals, cbShowSearch },
      findKeyWord,
      mainClassCss,
    } = this
    console.log(this.props)
    return (
      <Fragment>
        <div className={`${mainClassCss}__front`}>
          <InputSearch cbFindKeyWord={findKeyWord} />
          <button
            className={`${mainClassCss}__button ${mainClassCss}__button--close`}
            onClick={this.showSearch}
          >
            <ExitIcon color={'grey'} name={'exit'} />
          </button>
        </div>
        <div
          className={classNames({
            [`${mainClassCss}__wrapper`]: true,
            [`${mainClassCss}__wrapper--small-height`]: meals.isFetchingSearch,
            [`${mainClassCss}__wrapper--big-height`]:
              meals.resultOfSearch.length !== 0 && !meals.isFetchingSearch,
          })}
        >
          {meals.isFetchingSearch && (
            <div className={`${mainClassCss}__preloader`}>
              <Preloader />
            </div>
          )}
          {meals.resultOfSearch.length !== 0 && !meals.isFetchingSearch ? (
            meals.error ? (
              <div className={` ${mainClassCss}__error`}>
                <span>
                  <p>{meals.error}</p>
                </span>
              </div>
            ) : typeof meals.resultOfSearch === 'string' ? (
              <div className={` ${mainClassCss}__no-result`}>
                <span>
                  <p>{meals.resultOfSearch}</p>
                </span>
              </div>
            ) : (
              <SearchResult
                meals={meals.resultOfSearch}
                cbShowSearch={cbShowSearch}
              />
            )
          ) : null}
        </div>
      </Fragment>
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
  )(SearchTileComponent)
)
