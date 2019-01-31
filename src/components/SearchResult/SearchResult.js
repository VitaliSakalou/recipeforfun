import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Pagination from '../Pagination/Pagination'
import { getCountryFlag } from '../../functions/functions'
import { closeOpenEvents } from '../../events/events'
import DefaultMealImg from '../../img/default.jpg'

import './SearchResult.scss'

class SearchResult extends React.PureComponent {
  constructor(props) {
    super(props)
    this.resultBlockRef = React.createRef()
    this.state = {
      currentRecipes: props.meals,
      curPage: 1,
      countOfPage: 0,
    }
  }

  static propTypes = {
    meals: PropTypes.array.isRequired,
    cbShowSearch: PropTypes.func,
    prevPageType: PropTypes.string,
    countOnePage: PropTypes.number,
  }

  mainClassCss = 'search-results' // name of class

  static defaultProps = {
    countOnePage: 4, //4 recipes max for every page default
    prevPageType: 'main',
  }

  componentDidMount() {
    this.resultBlockRef.current.position = 'absolute'
    this.resultBlockRef.current.overflow = 'hidden'
    this.resultBlockRef.current.height = 'auto'
    let targetHeight = this.resultBlockRef.current.offsetHeight
    this.resultBlockRef.current.style.height = '0px'
    this.resultBlockRef.current.style.position = 'static'
    setTimeout(() => {
      this.resultBlockRef.current.style.height = targetHeight + 'px'
    }, 100)
  }

  componentWillMount() {
    let countOfPage = Math.ceil(
      this.props.meals.length / this.props.countOnePage
    )
    this.setState({
      countOfPage,
      curPage: 1,
    })
  }

  componentWillReceiveProps(props) {
    let countOfPage = Math.ceil(props.meals.length / this.props.countOnePage)
    this.setState({
      countOfPage,
      curPage: 1,
    })
  }

  definedRecipesForCurrentPage = page => {
    let recipesCount = this.props.meals.length
    let lastRecipe = page * this.props.countOnePage
    let firstRecipe = lastRecipe - this.props.countOnePage
    if (recipesCount < lastRecipe) {
      lastRecipe = recipesCount
    }
    let curRecipes = this.props.meals.slice(firstRecipe, lastRecipe)
    return curRecipes
  }

  cbCurrentPage = curPage => {
    this.setState({
      curPage,
    })
  }

  closeSearchResults = () => {
    closeOpenEvents.emit('closeOpenWindow')
  }

  render() {
    let {
      props: { /*cbShowSearch,*/ prevPageType },
      state: { countOfPage, curPage },
      cbCurrentPage,
      mainClassCss,
      definedRecipesForCurrentPage,
      closeSearchResults,
    } = this
    return (
      <section className={mainClassCss} ref={this.resultBlockRef}>
        {
          <div className={`${mainClassCss}__pages`}>
            <div>
              {definedRecipesForCurrentPage(curPage).map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    to={`/recipe/${prevPageType}/${item.idMeal}`}
                    onClick={closeSearchResults}
                  >
                    <div
                      className={`${mainClassCss}__page`}
                      style={{
                        background: `url(${
                          item.strMealThumb ? item.strMealThumb : DefaultMealImg
                        }) rgb(240, 240, 240) no-repeat left center / 30% auto`,
                      }}
                    >
                      <div className={`${mainClassCss}__meal-container`}>
                        <p className={`${mainClassCss}__meal-name`}>
                          {item.strMeal}
                        </p>
                      </div>
                      <figure className={`${mainClassCss}__meal-flag`}>
                        {item.strArea && (
                          <img
                            src={`https://www.countryflags.io/${getCountryFlag(
                              item.strArea
                            )}/shiny/48.png`}
                            alt={item.strArea}
                          />
                        )}
                        <figcaption>{item.strArea}</figcaption>
                      </figure>
                    </div>
                  </NavLink>
                )
              })}
            </div>
            <div className={`${mainClassCss}__meal-pagination`}>
              <Pagination
                pages={countOfPage}
                cbCurrentPage={cbCurrentPage}
                curPage={curPage}
              />
            </div>
          </div>
        }
      </section>
    )
  }
}

export default SearchResult
