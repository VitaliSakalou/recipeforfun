import React from 'react'
import PropTypes from 'prop-types'
import Preloader from '../Preloader/Preloader'
import { NavLink } from 'react-router-dom'
import ButtomRandomRecipe from '../ButtomRandomRecipe/ButtomRandomRecipe'

import './RandomRecipe.scss'

class RandomRecipe extends React.PureComponent {
  static propTypes = {
    randommeals: PropTypes.object,
  }

  static defaultProps = {
    randommeals: {
      error: 'no data',
    },
  }

  mainClassCss = 'random-meal'

  render() {
    let {
      props: { randommeals, cbGetRandomMealsAction },
      mainClassCss,
    } = this
    return (
      <div className={`${mainClassCss} container`}>
        {randommeals.error ? (
          <div className={`${mainClassCss}__img-block--error`}>
            <p>{randommeals.error}</p>
          </div>
        ) : (
          <section className={`${mainClassCss}__rendom-grid`}>
            <div
              className={`${mainClassCss}__main-tile item-1`}
              style={{
                background: `url(${
                  randommeals.randommeal.strMealThumb
                }) 50% 50%`,
              }}
            >
              {randommeals.isFetching ? (
                <div className={`${mainClassCss}__img-block--preloader`}>
                  <Preloader />
                </div>
              ) : (
                <NavLink to={`/recipe/random/${randommeals.randommeal.idMeal}`}>
                  <div className={`${mainClassCss}__link-block`} />
                </NavLink>
              )}
            </div>
            <div className={`${mainClassCss}__description item-2`}>
              <span className={`${mainClassCss}__description-title`}>
                Name:{' '}
              </span>
              <span className={`${mainClassCss}__description-content`}>
                {randommeals.isFetching ? '' : randommeals.randommeal.strMeal}
              </span>
            </div>
            <div className={`${mainClassCss}__description item-3`}>
              <span className={`${mainClassCss}__description-title`}>
                Category:{' '}
              </span>
              <span className={`${mainClassCss}__description-content`}>
                {randommeals.isFetching
                  ? ''
                  : randommeals.randommeal.strCategory}
              </span>
            </div>
            <div className={`${mainClassCss}__description item-4`}>
              <span className={`${mainClassCss}__description-title`}>
                Area:{' '}
              </span>
              <span className={`${mainClassCss}__description-content`}>
                {randommeals.isFetching ? '' : randommeals.randommeal.strArea}
              </span>
            </div>
            <div className={`${mainClassCss}__description item-5`}>
              <ButtomRandomRecipe
                cbGetRandomMealsAction={cbGetRandomMealsAction}
              />
            </div>
          </section>
        )}
      </div>
    )
  }
}

export default RandomRecipe
