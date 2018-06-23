import { combineReducers } from 'redux'
import { data } from '../../lib/data'
const { block } = data

const coordinate = {
  x: 50,
  y: 100
}

const moveTetrisReducer = (state = coordinate, action) => {
  switch (action.type) {
    case 'MOVE_DOWN':
      return {...state, y: state.y + block }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  moveTetrisReducer
})

export default rootReducer