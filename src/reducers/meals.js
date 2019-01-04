import { GET_MEAL_REQUEST } from '../actions/mealsActions'
import { GET_MEAL_SUCCESS } from '../actions/mealsActions'
import { GET_MEAL_ERROR } from '../actions/mealsActions'
import { CLEAN_RESULT_OF_SEARCH } from '../actions/mealsActions'
import { FIND_MEAL_SUCCESS } from '../actions/mealsActions'
import { GET_SEARCH_REQUEST } from '../actions/mealsActions'

const initialState = {
  meal: {},
  resultOfSearch: [],
  isFetching: false,
  error: false,
}

export function mealsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MEAL_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFetchingSearch: false,
        error: false,
      }
    case GET_SEARCH_REQUEST:
      return {
        ...state,
        isFetching: false,
        isFetchingSearch: true,
        error: false,
      }
    case GET_MEAL_SUCCESS:
      let mealObj = {}
      action.payload.meals.forEach(item => {
        mealObj[item.idMeal] = item
      })
      return {
        meal: {
          ...state.meal,
          ...mealObj,
        },
        resultOfSearch: [],
        isFetching: false,
        isFetchingSearch: false,
        error: false,
      }
    case FIND_MEAL_SUCCESS:
      let findObj = {}
      action.payload.meals.forEach(item => {
        findObj[item.idMeal] = item
      })
      return {
        meal: {
          ...state.meal,
          ...findObj,
        },
        resultOfSearch:
          action.payload.meals.length !== 0
            ? [...action.payload.meals]
            : 'No results',
        isFetching: false,
        isFetchingSearch: false,
        error: false,
      }
    case GET_MEAL_ERROR:
      return {
        ...state,
        meal: action.payload,
        isFetching: false,
        isFetchingSearch: false,
        error: action.error.message || 'Error fetching resources',
      }
    case CLEAN_RESULT_OF_SEARCH:
      return {
        ...state,
        resultOfSearch: [],
        isFetching: false,
        isFetchingSearch: false,
      }
    default:
      return state
  }
}
