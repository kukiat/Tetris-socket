import { combineReducers } from 'redux'

const coordinate = {
  x: 200,
  y: 200
}

const moveTetrisReducer = (state = coordinate, action) => {
  switch (action.type) {
    case 'MOVE_DOWN':
      console.log('o')
      return state  
    default:
      return state
  }
}

const rootReducer = combineReducers({
  moveTetrisReducer
})

export default rootReducer