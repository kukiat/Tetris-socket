export const MOVE_DOWN = 'MOVE_DOWN'

const moveDown = ({
  type: MOVE_DOWN
})

const moveTetris = (direction) => {
  return (dispatch, getState) => {
    switch (direction) {
      case 'up':
        break;
      case 'down':
        dispatch(moveDown)
        break;
      case 'left':
        break;
      case 'right':
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
        case 38:
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
  window.requestAnimationFrame(dropTetris.bind(this, stateTime, dispatch, getState))
}