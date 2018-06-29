import * as types from './type'

export const moveDown = () => ({ type: types.MOVE_DOWN })

export const moveLeft = () => ({ type: types.MOVE_LEFT })

export const moveRight = () => ({ type: types.MOVE_RIGHT })

export const moveUp = (rotateCount) => ({ 
  type: types.MOVE_UP,
  rotateCount
})

export const newTetris = (newTetris) =>  ({
  type: types.NEW_TETRIS,
  payload: newTetris
})