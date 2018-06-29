import { combineReducers } from 'redux'
import { currentTetrisReducer } from './currentTetris'
import { tetrisListReducer } from './tetrisList'

const rootReducer = combineReducers({
  currentTetrisReducer,
  tetrisListReducer
})

export default rootReducer