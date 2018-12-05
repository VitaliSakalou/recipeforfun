import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class SearchResult extends React.PureComponent {
  static props = {
    meals: PropTypes.object,
    value: PropTypes.string,
  }

  render() {
    let {
      props: { meals },
    } = this
    return (
      <div>
        <div>
          {meals.error ? (
            <p>{meals.error}</p>
          ) : meals.isFetching ? (
            <div>
              <p>...loading!!!</p>
            </div>
          ) : (
            meals.resultOfSearch.map((item, index) => {
              return (
                <div key={index}>
                  <NavLink to={`/recipe/search/${item.idMeal}`}>
                    <p>{item.strMeal}</p>
                  </NavLink>
                  {item.strMeal}
                </div>
              )
            })
          )}
        </div>
      </div>
    )
  }
}

export default SearchResult
