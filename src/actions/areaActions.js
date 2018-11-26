export const GET_AREA_REQUEST = 'GET_AREA_REQUEST'
export const GET_AREA_SUCCESS = 'GET_AREA_SUCCESS'
export const GET_AREA_ERROR = 'GET_AREA_ERROR'
require('es6-promise').polyfill()
require('isomorphic-fetch')

export const getArea = area => dispatch => {
  dispatch({ type: GET_AREA_REQUEST, payload: area })

  fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
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
      dispatch({ type: GET_AREA_SUCCESS, payload: stories })
    })
    .catch(error => {
      dispatch({ type: GET_AREA_ERROR, payload: [], error: error })
    })
}
