import { moveDown, moveLeft, moveRight, moveUp } from './action'
import { checkCollision } from './collision'

const rotateTetris = (dispatch) => {
  dispatch(moveUp(1))
}

export const moveTetris = (direction) => {
  return (dispatch, getState) => {
    const isCollision = checkCollision(getState, direction)
    if(isCollision) return
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

export const dropTetris = (stateTime, dispatch, getState) => {
  const currentTime = Date.now()
  if(currentTime - stateTime > 500) {
    stateTime = currentTime
    dispatch(moveTetris('down'))
  }
  // window.requestAnimationFrame(dropTetris.bind(this, stateTime, dispatch, getState))
}