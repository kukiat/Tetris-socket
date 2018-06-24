import { combineReducers } from 'redux'
import { data } from '../../lib/data'
import * as types from '../actions/type'

const { block, layoutBackground } = data

const currentTetris = {
  color: '#F5F5F5',
  shape: [],
  x: 90,
  y: 0
}

const currentTetrisReducer = (state = currentTetris, action) => {
  switch (action.type) {
    case types.MOVE_DOWN:
      return {...state, y: state.y + block }
    case types.MOVE_LEFT:
      return {...state, x: state.x - block }
    case types.MOVE_RIGHT:
      return {...state, x: state.x + block }
    case types.NEW_TETRIS:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

const tetrisListReducer = (state = layoutBackground, action) => {
  switch (action.type) {
    case types.MERGE_TETRIS:
      return layoutBackground
    default:
      return state
  }
}

const rootReducer = combineReducers({
  currentTetrisReducer,
  tetrisListReducer
})

export default rootReducer