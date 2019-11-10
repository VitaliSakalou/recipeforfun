import { getRandomString } from './../functions/functions'
export const GET_LATESTMEALS_REQUEST = 'GET_LATESTMEALS_REQUEST'
export const GET_LATESTMEALS_SUCCESS = 'GET_LATESTMEALS_SUCCESS'
export const GET_LATESTMEALS_ERROR = 'GET_LATESTMEALS_ERROR'

require('es6-promise').polyfill()
require('isomorphic-fetch')

export const getLatestMeals = latestmeals => dispatch => {
  dispatch({ type: GET_LATESTMEALS_REQUEST, payload: latestmeals })
  Promise.all(
    Array(10)
      .fill(undefined)
      .map(item => fetch(`https://www.themealdb.com/api/json/v1/1/random.php`))
  )
    .then(function(response) {
      if (response.find(item => item.status > 400)) {
        throw new Error('Bad response from server')
      } else {
        return Promise.all(response.map(item => item.json()))
      }
    })
    .then(function(stories) {
      dispatch({ type: GET_LATESTMEALS_SUCCESS, payload: stories })
    })
    .catch(error => {
      dispatch({ type: GET_LATESTMEALS_ERROR, payload: {}, error: error })
    })
}
