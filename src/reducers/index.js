import { combineReducers } from 'redux'
import { ingredientsReducer } from './ingredients'
import { categoriesReducer } from './categories'
import { mealsReducer } from './meals'
import { listofmealsReducer } from './listofmeals'
import { areaReducer } from './area'
import { latestmealsReducer } from './latestmeals'
import { randommealsReducer } from './randommeals'

export const rootReducer = combineReducers({
  meals: mealsReducer,
  latestmeals: latestmealsReducer,
  listofmeals: listofmealsReducer,
  categories: categoriesReducer,
  area: areaReducer,
  ingredients: ingredientsReducer,
  randommeals: randommealsReducer,
})
