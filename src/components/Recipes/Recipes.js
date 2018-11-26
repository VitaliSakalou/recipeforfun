import React from 'react'
import PropsTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class Recipes extends React.PureComponent {
  static props = {
    listOfMeals: PropsTypes.object,
    match: PropsTypes.object,
  }

  render() {
    let {
      props: { listOfMeals, match },
    } = this
    return (
      <div>
        {listOfMeals.error ? (
          <p>{listOfMeals.error}</p>
        ) : listOfMeals.isFetching ? (
          <p>...Loading</p>
        ) : (
          listOfMeals.listOfMeals[match.params.param] &&
          listOfMeals.listOfMeals[match.params.param].map((item, index) => {
            return (
              <div key={index}>
                <NavLink
                  to={`/recipe/${
                    match.params.type
                  }/${match.params.param.toLowerCase()}/${item.idMeal}`}
                >
                  <p>{item.strMeal}</p>
                  <img
                    src={item.strMealThumb}
                    alt="img"
                    style={{ height: '100px' }}
                  />
                </NavLink>
              </div>
            )
          })
        )}
      </div>
    )
  }
}

export default Recipes
