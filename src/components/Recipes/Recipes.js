import React from 'react'
import PropsTypes from 'prop-types'
import SearchResult from '../../components/SearchResult/SearchResult'
import Preloader from '../../components/Preloader/Preloader'
import './Recipes.scss'

class Recipes extends React.PureComponent {
  static props = {
    listOfMeals: PropsTypes.object.isRequired,
    match: PropsTypes.object.isRequired,
  }

  mainClassCss = 'recipes'

  render() {
    let {
      props: { listOfMeals, match },
      mainClassCss,
    } = this
    return (
      <div className={`${mainClassCss}`}>
        {listOfMeals.error ? (
          <p className={`${mainClassCss}__loader`}>{listOfMeals.error}</p>
        ) : listOfMeals.isFetching ? (
          <div className={`${mainClassCss}__loader`}>
            <Preloader />
          </div>
        ) : (
          listOfMeals.listOfMeals[match.params.param] && (
            <div>
              <SearchResult
                countOnePage={10}
                meals={listOfMeals.listOfMeals[match.params.param]}
                prevPageType={`${match.params.type}/${match.params.param}`}
              />
            </div>
          )
        )}
      </div>
    )
  }
}

export default Recipes
