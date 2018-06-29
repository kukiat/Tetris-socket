import { combineReducers } from 'redux'
import { currentTetrisReducer } from './currentTetrisReducer'
import { tetrisListReducer } from './tetrisListReducer'

const rootReducer = combineReducers({
  currentTetris: currentTetrisReducer,
  tetrisList: tetrisListReducer
})

export default rootReducer