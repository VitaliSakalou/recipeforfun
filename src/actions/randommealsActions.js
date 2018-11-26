export const GET_RANDOMMEALS_REQUEST = 'GET_RANDOMMEALS_REQUEST'
export const GET_RANDOMMEALS_SUCCESS = 'GET_RANDOMMEALS_SUCCESS'
export const GET_RANDOMMEALS_ERROR = 'GET_RANDOMMEALS_ERROR'
require('es6-promise').polyfill()
require('isomorphic-fetch')

export const getRandomMeals = rendommeals => dispatch => {
  dispatch({ type: GET_RANDOMMEALS_REQUEST, payload: rendommeals })

  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
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
      dispatch({ type: GET_RANDOMMEALS_SUCCESS, payload: stories })
    })
    .catch(error => {
      dispatch({ type: GET_RANDOMMEALS_ERROR, payload: {}, error: error })
    })
}
