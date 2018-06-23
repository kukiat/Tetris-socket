import { data } from '../../lib/data'
import * as types from './type'

const moveDown = () => ({
  type: types.MOVE_DOWN
})

const moveLeft = () => ({
  type: types.MOVE_LEFT
})

const moveRight = () => ({
  type: types.MOVE_RIGHT
})

const randomNewTetris = () => {
  const { tetrisItem } = data
  const tetris = ['straight', 'square', 'cross', 'leftGun', 'rightGun', 'leftSnake', 'rightSnake']
  const randomIndex = Math.floor(Math.random() * 7)
  const newTetris = tetrisItem[tetris[randomIndex]]
  return {
    type: types.NEW_TETRIS,
    payload: newTetris
  }
}

const rotateTetris = () => {
  console.log('rotate')
}

const checkCollision = () => {
  return false
}

const moveTetris = (direction) => {
  return (dispatch, getState) => {
    const { coordinateTetrisReducer } = getState()
    switch (direction) {
      case 'up':
        dispatch(rotateTetris())
        break;
      case 'down':
        const isCollision = checkCollision()
        if(isCollision === false) {
          dispatch(moveDown())
        }else {
          dispatch(randomNewTetris())
        }
        break;
      case 'left':
        dispatch(moveLeft())
        break;
      case 'right':
        dispatch(moveRight())
        break;
      default:
        break;
    }
  }
}

export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(randomNewTetris())
    const handleMoving = (e) => {
      switch (e.keyCode) {    
        case 40:
          e.preventDefault();
          dispatch(moveTetris('down'))
          break;
        case 37:
          e.preventDefault();
          dispatch(moveTetris('left'))
          break;
        case 39:
          e.preventDefault();
          dispatch(moveTetris('right'))
          break;
        default:
          break;
      }
    }
    const stateTime = Date.now()
    dropTetris(stateTime, dispatch, getState)
    window.addEventListener('keydown', handleMoving)
  }
}

export const dropTetris = (stateTime, dispatch, getState) => {
  const currentTime = Date.now()
  if(currentTime - stateTime > 1000) {
    stateTime = currentTime
    dispatch(moveTetris('down'))
  }
  // window.requestAnimationFrame(dropTetris.bind(this, stateTime, dispatch, getState))
}