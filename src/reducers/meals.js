import { GET_MEAL_REQUEST } from '../actions/mealsActions'
import { GET_MEAL_SUCCESS } from '../actions/mealsActions'
import { GET_MEAL_ERROR } from '../actions/mealsActions'
import { CLEAN_RESULT_OF_SEARCH } from '../actions/mealsActions'
import { FIND_MEAL_SUCCESS } from '../actions/mealsActions'

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
        resultOfSearch: [...action.payload.meals],
        isFetching: false,
        error: false,
      }
    case GET_MEAL_ERROR:
      return {
        ...state,
        meal: action.payload,
        isFetching: false,
        error: action.error.message || 'Error fetching resources',
      }
    case CLEAN_RESULT_OF_SEARCH:
      return {
        ...state,
        resultOfSearch: [],
        isFetching: false,
      }
    default:
      return state
  }
}
