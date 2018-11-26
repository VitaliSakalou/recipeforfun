import { GET_RANDOMMEALS_REQUEST } from '../actions/randommealsActions'
import { GET_RANDOMMEALS_SUCCESS } from '../actions/randommealsActions'
import { GET_RANDOMMEALS_ERROR } from '../actions/randommealsActions'

const initialState = {
  randommeal: {},
  isFetching: false,
  error: false,
}

export function randommealsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RANDOMMEALS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false,
      }
    case GET_RANDOMMEALS_SUCCESS:
      return {
        ...state,
        randommeal: action.payload.meals[0],
        isFetching: false,
        error: false,
      }
    case GET_RANDOMMEALS_ERROR:
      return {
        ...state,
        randommeal: action.payload,
        isFetching: false,
        error: action.error.message || 'Error fetching resources',
      }
    default:
      return state
  }
}
