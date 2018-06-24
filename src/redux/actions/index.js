import { data } from '../../lib/data'
import * as types from './type'

const moveDown = () => ({ type: types.MOVE_DOWN })
const moveLeft = () => ({ type: types.MOVE_LEFT })
const moveRight = () => ({ type: types.MOVE_RIGHT })

const rotateTetris = () => {
  console.log('rotate')
}

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

const isCollision = (dispatch, getState) => {
  return false
}

const mergeCurrentTetrisToTetrisList = (dispatch, getState) => {
  return 'mergedTetris'
}

const isMergeTetris = (dispatch, getState) => {
  const mergedTetris = mergeCurrentTetrisToTetrisList(dispatch, getState)
  return false
}

const moveTetris = (direction) => {
  return (dispatch, getState) => {
    const isMerge = isMergeTetris(dispatch, getState)
    switch (direction) {
      case 'up':
        dispatch(rotateTetris())
        break;
      case 'down':
        if(isMerge===false) {
          dispatch(moveDown())
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

const dropTetris = (stateTime, dispatch, getState) => {
  const currentTime = Date.now()
  if(currentTime - stateTime > 500) {
    stateTime = currentTime
    dispatch(moveTetris('down'))
  }
  // window.requestAnimationFrame(dropTetris.bind(this, stateTime, dispatch, getState))
}