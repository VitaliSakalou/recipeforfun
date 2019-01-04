import React from 'react'
import PropTypes from 'prop-types'
import Preloader from '../Preloader/Preloader'
import Title from '../Title/Title'
import { getCountryFlag } from '../../functions/functions'
import { NavLink } from 'react-router-dom'
import './GridOfAreas.scss'

class GridOfAreas extends React.PureComponent {
  static propTypes = {
    area: PropTypes.object,
  }

  static defaultProps = {
    area: {
      error: 'no data',
    },
  }

  mainClassCss = 'areas'

  render() {
    let {
      props: { area },
      mainClassCss,
    } = this
    return (
      <section className={`${mainClassCss} container`}>
        <Title
          title={` Select the country of origin of the meals`}
          size={'small'}
        />
        {area.error ? (
          <p className={`${mainClassCss}__loader`}>{area.error}</p>
        ) : area.isFetching ? (
          <div className={`${mainClassCss}__loader`}>
            <Preloader />
          </div>
        ) : (
          <div className={`${mainClassCss}__grid`}>
            {area.listOfArea.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  exact
                  to={`/listofrecipes/area/${item.strArea}`}
                  activeClassName="menu__item--selected"
                >
                  <div className={`${mainClassCss}__tile`}>
                    <div className={`${mainClassCss}__tile-content`}>
                      <img
                        className={`${mainClassCss}__img`}
                        src={`https://www.countryflags.io/${getCountryFlag(
                          item.strArea
                        )}/shiny/64.png`}
                        alt={getCountryFlag(item.strArea)}
                      />
                      <p className={`${mainClassCss}__description`}>
                        {item.strArea}
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

export default GridOfAreas
