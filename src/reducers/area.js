import { GET_AREA_REQUEST } from '../actions/areaActions'
import { GET_AREA_SUCCESS } from '../actions/areaActions'
import { GET_AREA_ERROR } from '../actions/areaActions'

const initialState = {
  listOfArea: [],
  isFetching: false,
  error: false,
}

export function areaReducer(state = initialState, action) {
  switch (action.type) {
    case GET_AREA_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: false,
      }
    }
    case GET_AREA_SUCCESS: {
      return {
        ...state,
        listOfArea: [...action.payload.meals],
        isFetching: false,
        error: false,
      }
    }
    case GET_AREA_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error.message || 'Error fetching resources',
      }
    }
    default:
      return state
  }
}
