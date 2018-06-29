import { data } from '../../lib/data'
import * as types from './type'

const moveDown = () => ({ type: types.MOVE_DOWN })

const moveLeft = () => ({ type: types.MOVE_LEFT })

const moveRight = () => ({ type: types.MOVE_RIGHT })

const moveUp = (rotateCount) => ({ 
  type: types.MOVE_UP,
  rotateCount
})

const randomNewTetris = (getState) => {
  const currentTetris = getState().currentTetris
  const { tetrisItem } = data
  const tetris = ['straight', 'square', 'cross', 'leftGun', 'rightGun', 'leftSnake', 'rightSnake']
  const randomIndex = Math.floor(Math.random() * 7)
  const typeTetris = tetris[randomIndex]
  const newTetris = {...currentTetris, shape: tetrisItem[typeTetris].shape, type: typeTetris, color: tetrisItem[typeTetris].color}
  return {
    type: types.NEW_TETRIS,
    payload: newTetris
  }
}

const checkCollision = (dispatch, getState) => {
  console.log(getState())
  return false
}

const mergeCurrentTetrisToTetrisList = (dispatch, getState) => {
  const { tetrisList, currentTetris } = getState()
  const { block } = data
  const currentX = currentTetris.x/block
  const currentY = currentTetris.y/block
  return false
}

const isMergeTetris = (dispatch, getState) => {
  const mergedTetris = mergeCurrentTetrisToTetrisList(dispatch, getState)
  return mergedTetris
}

const rotateTetris = (dispatch) => {
  dispatch(moveUp(1))
}

const moveTetris = (direction) => {
  return (dispatch, getState) => {
    const isCollision = checkCollision(dispatch, getState)
    console.log(isCollision)
    switch (direction) {
      case 'up':
        rotateTetris(dispatch)
        break;
      case 'down':
        dispatch(moveDown())
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
    dispatch(randomNewTetris(getState))
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
        case 38:
          e.preventDefault();
          dispatch(moveTetris('up'))
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