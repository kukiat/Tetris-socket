import { combineReducers } from 'redux'

const init = [
  {x:77,y:666},
  {x:774,y:6636}
]

const tetrisReducer = (state = init, action) => {
  switch (action.type) {
    case 'ADD':
      return state  
    default:
      return state
  }
}

const rootReducer = combineReducers({
  tetrisReducer
})

export default rootReducer