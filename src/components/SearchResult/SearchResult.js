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
      props: { meals, value },
    } = this
    return (
      <div>
        {meals.resultOfSearch.length !== 0 && value.length > 2 && (
          <div>
            {meals.error ? (
              <p>{meals.error}</p>
            ) : meals.isFetching ? (
              <p>...loading</p>
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
        )}
      </div>
    )
  }
}

export default SearchResult
