import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Preloader from '../Preloader/Preloader'
import Title from '../Title/Title'
import { getFoodIcon } from '../../functions/functions'

import './GridOfCategories.scss'

class GridOfCategories extends React.PureComponent {
  static propTypes = {
    categories: PropTypes.object,
  }

  static defaultProps = {
    categories: {
      error: 'no data',
    },
  }

  mainClassCss = 'categories'

  render() {
    let {
      props: { categories },
      mainClassCss,
    } = this
    return (
      <section className={`${mainClassCss} container`}>
        <Title title={`Select the category`} />
        {categories.error ? (
          <p className={`${mainClassCss}__loader`}>{categories.error}</p>
        ) : categories.isFetching ? (
          <div className={`${mainClassCss}__loader`}>
            <Preloader />
          </div>
        ) : (
          <div className={`${mainClassCss}__grid`}>
            {categories.listOfCategories.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  exact
                  to={`/listofrecipes/category/${item.strCategory}`}
                  activeClassName="menu__item--selected"
                >
                  <div className={`${mainClassCss}__tile`}>
                    <div className={`${mainClassCss}__tile-content`}>
                      {getFoodIcon(item.strCategory)}
                      <p className={`${mainClassCss}__description`}>
                        {item.strCategory}
                      </p>
                    </div>
                  </div>
                </NavLink>
              )
            })}
          </div>
        )}
      </section>
    )
  }
}

export default GridOfCategories
