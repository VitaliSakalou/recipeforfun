import React from 'react'
import PropTypes from 'prop-types'

class RecipeOfMeal extends React.PureComponent {
  static props = {
    match: PropTypes.object,
    meals: PropTypes.object,
  }

  render() {
    let {
      props: { match, meals },
    } = this
    return (
      <div>
        {meals.error ? (
          <p>{meals.error}</p>
        ) : meals.isFetching ? (
          <p>...Loading</p>
        ) : meals.meal[match.params.param] ? (
          <div>
            <img
              src={meals.meal[match.params.param].strMealThumb}
              alt="img"
              style={{ height: '100px' }}
            />
          </div>
        ) : (
          <p>...loading</p>
        )}
      </div>
    )
  }
}

export default RecipeOfMeal
