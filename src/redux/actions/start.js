import { randomNewTetris } from './newTetris'
import { moveTetris, dropTetris } from './move'

export const startGame = () => {
  return (dispatch, getState) => {
    randomNewTetris(dispatch, getState)
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