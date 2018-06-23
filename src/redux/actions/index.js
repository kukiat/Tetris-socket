export const MOVE_DOWN = 'MOVE_DOWN'
export const MOVE_LEFT = 'MOVE_LEFT'
export const MOVE_RIGHT = 'MOVE_RIGHT'

const moveDown = () => ({
  type: MOVE_DOWN
})

const moveLeft = () => ({
  type: MOVE_LEFT
})

const moveRight = () => ({
  type: MOVE_RIGHT
})

const rotateTetris = () => {

}

const moveTetris = (direction) => {
  return (dispatch, getState) => {
    const { coordinateTetrisReducer } = getState()
    switch (direction) {
      case 'up':
        dispatch(rotateTetris())
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