import { combineReducers } from 'redux'
import { data } from '../../lib/data'
const { block } = data

const coordinate = {
  x: 0,
  y: 0
}

const coordinateTetrisReducer = (state = coordinate, action) => {
  switch (action.type) {
    case 'MOVE_DOWN':
      return {...state, y: state.y + block }
    case 'MOVE_LEFT':
      return {...state, x: state.x - block }
    case 'MOVE_RIGHT':
      return {...state, x: state.x + block }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  coordinateTetrisReducer
})

export default rootReducer