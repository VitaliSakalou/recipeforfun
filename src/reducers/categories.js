import { GET_CATEGORIES_REQUEST } from '../actions/categoriesActions'
import { GET_CATEGORIES_SUCCESS } from '../actions/categoriesActions'
import { GET_CATEGORIES_ERROR } from '../actions/categoriesActions'

const initialState = {
  listOfCategories: [],
  isFetching: false,
  error: false,
}

export function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false,
      }
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        listOfCategories: [...action.payload.categories],
        isFetching: false,
        error: false,
      }
    case GET_CATEGORIES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error.message || 'Error fetching resources',
      }
    default:
      return state
  }
}
