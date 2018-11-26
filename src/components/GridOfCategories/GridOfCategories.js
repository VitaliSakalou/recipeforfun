import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default class GridOfCategories extends React.PureComponent {
  static propTypes = {
    categories: PropTypes.object,
  }

  render() {
    let {
      props: { categories },
    } = this
    return (
      <div className="container">
        {categories.error ? (
          <p>{categories.error}</p>
        ) : categories.isFetching ? (
          <p>...Loading</p>
        ) : (
          categories.listOfCategories.map((item, index) => {
            return (
              <NavLink
                key={index}
                exact
                to={`/listofrecipes/category/${item.strCategory}`}
                activeClassName="menu__item--selected"
              >
                <p>{item.strCategory}</p>
              </NavLink>
            )
          })
        )}
      </div>
    )
  }
}
