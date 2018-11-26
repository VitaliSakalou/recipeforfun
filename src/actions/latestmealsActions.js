export const GET_LATESTMEALS_REQUEST = 'GET_LATESTMEALS_REQUEST'
export const GET_LATESTMEALS_SUCCESS = 'GET_LATESTMEALS_SUCCESS'
export const GET_LATESTMEALS_ERROR = 'GET_LATESTMEALS_ERROR'
require('es6-promise').polyfill()
require('isomorphic-fetch')

export const getLatestMeals = latestmeals => dispatch => {
  dispatch({ type: GET_LATESTMEALS_REQUEST, payload: latestmeals })

  fetch('https://www.themealdb.com/api/json/v1/1/latest.php')
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
      dispatch({ type: GET_LATESTMEALS_SUCCESS, payload: stories })
    })
    .catch(error => {
      dispatch({ type: GET_LATESTMEALS_ERROR, payload: {}, error: error })
    })
}
