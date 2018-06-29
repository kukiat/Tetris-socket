import * as types from '../actions/type'
import { data } from '../../lib/data'

const { block, tetrisItem } = data
const currentTetris = {
  color: '#F5F5F5',
  shape: [],
  x: 90,
  y: -60,
  rotate: 0,
  type: 'straight'
}

export const currentTetrisReducer = (state = currentTetris, action) => {
  switch (action.type) {
    case types.MOVE_DOWN:
      return {...state, y: state.y + block }
    case types.MOVE_LEFT:
      return {...state, x: state.x - block }
    case types.MOVE_RIGHT:
      return {...state, x: state.x + block }
    case types.MOVE_UP:
      const newRotate = (state.rotate + 1) > 3 ? 0 : state.rotate + 1
      const newTetris = tetrisItem[state.type].shape[newRotate]
      return {...state, shape: newTetris, rotate: newRotate}
    case types.NEW_TETRIS:
      return {
        ...state, 
        ...(action.payload), 
        shape: action.payload.shape[action.payload.rotate]
      }
    default:
      return state
  }
}