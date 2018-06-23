import { combineReducers } from 'redux'
import { data } from '../../lib/data'
import * as types from '../actions/type'

const { block } = data

const coordinate = {
  x: 90,
  y: 0
}

const coordinateTetrisReducer = (state = coordinate, action) => {
  switch (action.type) {
    case types.MOVE_DOWN:
      return {...state, y: state.y + block }
    case types.MOVE_LEFT:
      return {...state, x: state.x - block }
    case types.MOVE_RIGHT:
      return {...state, x: state.x + block }
    default:
      return state
  }
}

const newTetris = {
  color: '#F5F5F5',
  shape: []
}

const currentTetris = (state = newTetris, action) => {
  switch (action.type) {
    case types.NEW_TETRIS:
    console.log('s')
      const data = action.payload
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

const rootReducer = combineReducers({
  coordinateTetrisReducer,
  currentTetris
})

export default rootReducer