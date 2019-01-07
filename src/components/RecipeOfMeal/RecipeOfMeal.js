import React from 'react'
import PropTypes from 'prop-types'
import Title from '../Title/Title'
import classNames from 'classnames'
import Preloader from '../Preloader/Preloader'
import ModalWindow from '../ModalWindow/ModalWindow'
import Portal from '../Portal/Portal'
import { getCountryFlag } from '../../functions/functions'
import { CSSTransitionGroup } from 'react-transition-group'
import ArrowIcon from '../../icons/ArrowIcon'

import './RecipeOfMeal.scss'

class RecipeOfMeal extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      modalWindowIsOpen: false,
      currentIngredient: null,
      mealId: null,
      ingredientsArr: [],
      imgLoaded: false,
    }
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    meals: PropTypes.object.isRequired,
  }

  static getDerivedStateFromProps(newProps, prevState) {
    if (
      newProps.meals.meal[newProps.match.params.param] &&
      newProps.meals.meal[newProps.match.params.param].idMeal !==
        prevState.mealId
    ) {
      let ingredientsArr = []
      let { match, meals } = newProps
      let currentMeal = meals.meal[match.params.param]
      let index = 1
      while (
        currentMeal[`strIngredient${index}`] !== undefined &&
        currentMeal[`strIngredient${index}`] !== '' &&
        currentMeal[`strIngredient${index}`] !== null
      ) {
        ingredientsArr.push({
          [`strIngredient${index - 1}`]: currentMeal[`strIngredient${index}`],
          [`strMeasure${index - 1}`]: currentMeal[`strMeasure${index}`],
        })
        index++
      }
      return {
        ingredientsArr: ingredientsArr,
        mealId: newProps.meals.meal[newProps.match.params.param].idMeal,
      }
    }
    return null
  }

  closeModalWindow = () => {
    this.setState({
      modalWindowIsOpen: false,
      currentIngredient: null,
      imgLoaded: false,
    })
  }

  nextIngredientFunction = direction => {
    let index = null
    if (direction === 'next') {
      if (
        this.state.currentIngredient ===
        this.state.ingredientsArr.length - 1
      ) {
        index = 0
      } else {
        index = this.state.currentIngredient + 1
      }
    } else if ('prev') {
      if (this.state.currentIngredient === 0) {
        index = this.state.ingredientsArr.length - 1
      } else {
        index = this.state.currentIngredient - 1
      }
    }
    this.setState({
      currentIngredient: index,
      imgLoaded: false,
    })
  }

  showCurrentIngredient = e => {
    this.setState({
      modalWindowIsOpen: true,
      currentIngredient: parseInt(e.currentTarget.dataset.index),
    })
  }

  imgLoadedFunction = () => {
    this.setState({
      imgLoaded: true,
    })
  }

  mainClassCss = 'recipe-of-meal'

  render() {
    let {
      props: { match, meals },
      state: {
        modalWindowIsOpen,
        currentIngredient,
        ingredientsArr,
        imgLoaded,
      },
      mainClassCss,
      closeModalWindow,
      showCurrentIngredient,
      nextIngredientFunction,
      imgLoadedFunction,
    } = this
    let currentMeal = meals.meal[match.params.param]
    return (
      <section className={`${mainClassCss}`}>
        {meals.error ? (
          <p className={`${mainClassCss}__preloader`}>{meals.error}</p>
        ) : meals.isFetching ? (
          <div className={`${mainClassCss}__preloader`}>
            <Preloader />
          </div>
        ) : (
          currentMeal && (
            <div className={`${mainClassCss}__description`}>
              <Title
                title={`${currentMeal.strArea} meal`}
                decription={'hello'}
                size={'small'}
              >
                <img
                  className={`${mainClassCss}__figcaption-img`}
                  src={`https://www.countryflags.io/${getCountryFlag(
                    currentMeal.strArea
                  )}/shiny/64.png`}
                  alt={getCountryFlag(currentMeal.strArea)}
                />
              </Title>

              <div
                className={`${mainClassCss}__meal-container`}
                style={{
                  background: `url(${
                    currentMeal.strMealThumb
                  }) no-repeat 0 50% / cover`,
                }}
              >
                <figure className={`${mainClassCss}__figure`}>
                  <img
                    className={`${mainClassCss}__img`}
                    src={currentMeal.strMealThumb}
                    alt={currentMeal.strMeal}
                  />
                  <figcaption className={`${mainClassCss}__figcaption`}>
                    <p
                      className={classNames({
                        [`${mainClassCss}__figcaption-name`]: true,
                      })}
                    >
                      {currentMeal.strMeal}
                    </p>
                    <p className={`${mainClassCss}__figcaption-tags`}>
                      {currentMeal.strTags &&
                        currentMeal.strTags.split(',').join(', ')}
                    </p>
                  </figcaption>
                </figure>
              </div>
              <section
                className={`${mainClassCss}__photo-and-ingredients`}
                style={{
                  gridTemplateRows: `repeat(${Math.ceil(ingredientsArr.length) /
                    2},auto)`,
                }}
              >
                <div className={`${mainClassCss}__ingredients`}>
                  {ingredientsArr.map((item, index) => {
                    return (
                      <div
                        className={`${mainClassCss}__ingredient`}
                        key={index}
                        data-index={index}
                        onClick={showCurrentIngredient}
                      >
                        <img
                          className={`${mainClassCss}__ingredient-img`}
                          src={`https://www.themealdb.com/images/ingredients/${
                            item[`strIngredient${index}`]
                          }-Small.png`}
                          alt={item[`strIngredient${index}`]}
                        />
                        <span
                          className={`${mainClassCss}__ingredient-description`}
                        >
                          <p>{item[`strIngredient${index}`]}</p>
                        </span>
                        <span
                          className={`${mainClassCss}__ingredient-description`}
                        >
                          <p>{item[`strMeasure${index}`]}</p>
                        </span>
                      </div>
                    )
                  })}
                </div>
              </section>

              <article className={`${mainClassCss}__article `}>
                {currentMeal.strYoutube && (
                  <section className={`${mainClassCss}__video`}>
                    <iframe
                      title={currentMeal.idMeal}
                      src={`https://www.youtube.com/embed/${
                        currentMeal.strYoutube.split('=')[1]
                      }`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </section>
                )}
                <p>{currentMeal.strInstructions}</p>
              </article>
            </div>
          )
        )}
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {modalWindowIsOpen && (
            <Portal>
              <ModalWindow
                isOpen={modalWindowIsOpen}
                cbChangeStatus={closeModalWindow}
              >
                <div className={`${mainClassCss}__content-modal-window`}>
                  <figure>
                    <div
                      className={classNames({
                        [`${mainClassCss}__ingredient-img ${mainClassCss}__ingredient-img--big `]: true,
                        none: !imgLoaded,
                      })}
                    >
                      <img
                        className={classNames({
                          [`${mainClassCss}__ingredient-img ${mainClassCss}__ingredient-img--big `]: true,
                        })}
                        src={`https://www.themealdb.com/images/ingredients/${
                          ingredientsArr[currentIngredient][
                            `strIngredient${currentIngredient}`
                          ]
                        }.png`}
                        alt={`strIngredient${currentIngredient}`}
                        onLoad={imgLoadedFunction}
                      />
                    </div>

                    <div
                      className={classNames({
                        [`${mainClassCss}__ingredient-img ${mainClassCss}__ingredient-img-preloader `]: true,
                        none: imgLoaded,
                      })}
                    >
                      <Preloader />
                    </div>

                    <figcaption
                      className={`${mainClassCss}__content-modal-window-description`}
                    >
                      <p>
                        {
                          ingredientsArr[currentIngredient][
                            `strIngredient${currentIngredient}`
                          ]
                        }
                      </p>
                      <p>
                        {
                          ingredientsArr[currentIngredient][
                            `strMeasure${currentIngredient}`
                          ]
                        }
                      </p>
                    </figcaption>
                  </figure>
                  <button
                    className={`${mainClassCss}__switch-ingredients-button`}
                    onClick={() => {
                      nextIngredientFunction('prev')
                    }}
                  >
                    <ArrowIcon
                      viewBox={'0 0 284 284'}
                      name={'arrow'}
                      color={'grey'}
                      rotate={'180 142 142'}
                    />
                  </button>
                  <button
                    className={`${mainClassCss}__switch-ingredients-button`}
                    onClick={() => {
                      nextIngredientFunction('next')
                    }}
                  >
                    <ArrowIcon
                      viewBox={'0 0 284 284'}
                      name={'arrow'}
                      color={'grey'}
                    />
                  </button>
                </div>
              </ModalWindow>
            </Portal>
          )}
        </CSSTransitionGroup>
      </section>
    )
  }
}

export default RecipeOfMeal
