import React from 'react'
import PropTypes from 'prop-types'
import Preloader from '../Preloader/Preloader'
import Title from '../Title/Title'
import { NavLink } from 'react-router-dom'
import DefaultMealImg from '../../img/default.jpg'

import './LastRecipes.scss'

class LastRecipes extends React.PureComponent {
  static propTypes = {
    latestmeals: PropTypes.object,
  }

  static defaultProps = {
    latestmeals: {
      error: 'no data',
    },
  }

  mainClassCss = 'latest-meals'

  render() {
    let {
      props: { latestmeals },
      mainClassCss,
    } = this

    return (
      <section className={`${mainClassCss}`}>
        <Title title={`10 Latest Meals`} />

        {latestmeals.error ? (
          <p className={`${mainClassCss}__loader`}>{latestmeals.error}</p>
        ) : latestmeals.isFetching ? (
          <div className={`${mainClassCss}__loader`}>
            <Preloader />
          </div>
        ) : (
          <div className={`${mainClassCss}__grid`}>
            {latestmeals.listoflatestmeals.map((item, index) => {
              return (
                <NavLink
                  className={`${mainClassCss}__grid-item item-${index}`}
                  key={index}
                  to={`/recipe/main/${item.idMeal}`}
                >
                  <figure
                    className={`${mainClassCss}__figure`}
                    style={{
                      background: `url(${
                        item.strMealThumb ? item.strMealThumb : DefaultMealImg
                      }) no-repeat 0 50% / cover`,
                    }}
                  >
                    <figcaption className={`${mainClassCss}__figcaption`}>
                      <p className={`${mainClassCss}__description`}>
                        {item.strMeal}
                      </p>
                      <p className={`${mainClassCss}__description-tags`}>
                        {item.strTags && item.strTags.split(',').join(', ')}
                      </p>
                      <p className={`${mainClassCss}__description-category`}>
                        {item.strCategory}
                      </p>
                    </figcaption>
                  </figure>
                </NavLink>
              )
            })}
          </div>
        )}
      </section>
    )
  }
}

export default LastRecipes
