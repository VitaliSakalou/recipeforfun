export const GET_CATEGORIES_REQUEST = 'GET_CATEGORIES_REQUEST'
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR'
require('es6-promise').polyfill()
require('isomorphic-fetch')

export const getCategories = categories => dispatch => {
  dispatch({ type: GET_CATEGORIES_REQUEST, payload: categories })

  fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
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
      dispatch({ type: GET_CATEGORIES_SUCCESS, payload: stories })
    })
    .catch(error => {
      dispatch({ type: GET_CATEGORIES_ERROR, payload: [], error: error })
    })
}
