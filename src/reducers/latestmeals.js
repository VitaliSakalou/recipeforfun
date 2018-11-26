import { GET_LATESTMEALS_REQUEST } from '../actions/latestmealsActions'
import { GET_LATESTMEALS_SUCCESS } from '../actions/latestmealsActions'
import { GET_LATESTMEALS_ERROR } from '../actions/latestmealsActions'

const initialState = {
  listoflatestmeals: [],
  isFetching: false,
  error: false,
}

export function latestmealsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LATESTMEALS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false,
      }
    case GET_LATESTMEALS_SUCCESS:
      return {
        ...state,
        listoflatestmeals: [...action.payload.meals],
        isFetching: false,
        error: false,
      }
    case GET_LATESTMEALS_ERROR:
      return {
        ...state,
        listoflatestmeals: action.payload,
        isFetching: false,
        error: action.error.message || 'Error fetching resources',
      }
    default:
      return state
  }
}
