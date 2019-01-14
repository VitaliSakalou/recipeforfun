import { GET_LISTOFMEALS_REQUEST } from '../actions/listOfMealsActions'
import { GET_LISTOFMEALS_SUCCESS } from '../actions/listOfMealsActions'
import { GET_LISTOFMEALS_ERROR } from '../actions/listOfMealsActions'
import { listofmealsReducer, initialState } from './listofmeals'

describe('list of meals reducer test', () => {
  it('GET_LISTOFMEALS_REQUEST without error', () => {
    const action = {
      type: GET_LISTOFMEALS_REQUEST,
    }

    expect(listofmealsReducer(initialState, action)).toEqual({
      ...initialState,
      isFetching: true,
      error: false,
    })
  })

  it('GET_LISTOFMEALS_REQUEST after error', () => {
    const initialStateWithError = {
      listOfMeals: {},
      isFetching: false,
      error: 'Error fetching resources',
    }
    const action = {
      type: GET_LISTOFMEALS_REQUEST,
    }

    expect(listofmealsReducer(initialStateWithError, action)).toEqual({
      ...initialStateWithError,
      isFetching: true,
      error: false,
    })
  })

  it('GET_LISTOFMEALS_SUCCESS', () => {
    const initialState = {
      listOfMeals: {},
      isFetching: true,
      error: false,
    }
    const action = {
      type: GET_LISTOFMEALS_SUCCESS,
      payload: { meals: [{ a: '1' }, { b: '2' }, { c: '3' }] },
      key: 'Canadian',
    }
    expect(listofmealsReducer(initialState, action)).toEqual({
      ...initialState,
      listOfMeals: {
        ...initialState.listOfMeals,
        [action.key]: [...action.payload.meals],
      },
      isFetching: false,
      error: false,
    })
  })

  it('GET_LISTOFMEALS_ERROR', () => {
    const action = {
      type: GET_LISTOFMEALS_ERROR,
      payload: {},
      error: { message: 'Error' },
    }
    expect(listofmealsReducer(initialState, action)).toEqual({
      ...initialState,
      listOfMeals: action.payload,
      isFetching: false,
      error: action.error.message || 'Error fetching resources',
    })
  })

  it('should return the initial state', () => {
    expect(listofmealsReducer(undefined, {})).toEqual(initialState)
  })
})
