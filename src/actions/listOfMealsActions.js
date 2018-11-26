export const GET_LISTOFMEALS_REQUEST = 'GET_LISTOFMEALS_REQUEST'
export const GET_LISTOFMEALS_SUCCESS = 'GET_LISTOFMEALS_SUCCESS'
export const GET_LISTOFMEALS_ERROR = 'GET_LISTOFMEALS_ERROR'
require('es6-promise').polyfill()
require('isomorphic-fetch')

export const getListOfMeals = (listOfMeals, key) => dispatch => {
  dispatch({ type: GET_LISTOFMEALS_REQUEST, payload: listOfMeals })

  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${listOfMeals}`)
    .then(function(response) {
      console.log('response.status', response.status)
      if (response.status >= 400) {
        throw new Error('Bad response from server')
      } else {
        return response.json()
      }
    })
    .then(function(stories) {
      console.log('stories', stories, listOfMeals)
      dispatch({
        type: GET_LISTOFMEALS_SUCCESS,
        payload: stories,
        key: key,
      })
    })
    .catch(error => {
      dispatch({ type: GET_LISTOFMEALS_ERROR, payload: {}, error: error })
    })
}
