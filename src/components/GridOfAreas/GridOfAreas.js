import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default class GridOfAreas extends React.PureComponent {
  static propTypes = {
    area: PropTypes.object,
  }

  render() {
    let {
      props: { area },
    } = this
    return (
      <div className="container">
        {area.error ? (
          <p>{area.error}</p>
        ) : area.isFetching ? (
          <p>...Loading</p>
        ) : (
          area.listOfArea.map((item, index) => {
            return (
              <NavLink
                key={index}
                exact
                to={`/listofrecipes/area/${item.strArea}`}
                activeClassName="menu__item--selected"
              >
                <p>{item.strArea}</p>
              </NavLink>
            )
          })
        )}
      </div>
    )
  }
}
