export const GET_MEAL_REQUEST = 'GET_MEAL_REQUEST'
export const GET_MEAL_SUCCESS = 'GET_MEAL_SUCCESS'
export const GET_MEAL_ERROR = 'GET_MEAL_ERROR'
require('es6-promise').polyfill()
require('isomorphic-fetch')

export const findMeal = nameMeal => dispatch => {
  dispatch({ type: GET_MEAL_REQUEST, payload: nameMeal })

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nameMeal}`)
    .then(function(response) {
      console.log('response.status', response.status)
      if (response.status >= 400) {
        throw new Error('Bad response from server')
      } else {
        return response.json()
      }
    })
    .then(function(stories) {
      console.log('stories', stories)
      let data = stories
      if (stories.meals === null) {
        data = { meals: [] }
      }
      dispatch({ type: GET_MEAL_SUCCESS, payload: data })
    })
    .catch(error => {
      dispatch({ type: GET_MEAL_ERROR, payload: {}, error: error })
    })
}
