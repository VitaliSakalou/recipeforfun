export const GET_MEAL_REQUEST = 'GET_MEAL_REQUEST'
export const GET_MEAL_SUCCESS = 'GET_MEAL_SUCCESS'
export const GET_MEAL_ERROR = 'GET_MEAL_ERROR'
require('es6-promise').polyfill()
require('isomorphic-fetch')

export const getMeal = idMeal => dispatch => {
  dispatch({ type: GET_MEAL_REQUEST, payload: idMeal })

  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
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
      dispatch({ type: GET_MEAL_SUCCESS, payload: stories })
    })
    .catch(error => {
      dispatch({ type: GET_MEAL_ERROR, payload: {}, error: error })
    })
}
