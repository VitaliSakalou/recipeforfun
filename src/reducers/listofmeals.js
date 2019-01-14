import { GET_LISTOFMEALS_REQUEST } from '../actions/listOfMealsActions'
import { GET_LISTOFMEALS_SUCCESS } from '../actions/listOfMealsActions'
import { GET_LISTOFMEALS_ERROR } from '../actions/listOfMealsActions'
import { Map } from 'immutable'

export const initialState = {
  listOfMeals: {},
  isFetching: false,
  error: false,
}

export function listofmealsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LISTOFMEALS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false,
      }
    case GET_LISTOFMEALS_SUCCESS:
      const prevMap = Map(state.listOfMeals)
      return {
        ...state,
        listOfMeals: prevMap
          .set([action.key], [...action.payload.meals]) //use immutable.js just for learning
          .toJS(),
        // {
        // ...state.listOfMeals,
        // [action.key]: [...action.payload.meals],
        // }
        isFetching: false,
        error: false,
      }
    case GET_LISTOFMEALS_ERROR:
      return {
        ...state,
        listOfMeals: action.payload,
        isFetching: false,
        error: action.error.message || 'Error fetching resources',
      }
    default:
      return state
  }
}
