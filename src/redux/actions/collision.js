import { data } from '../../lib/data'
const { block } = data

const findCoorXAndWidth = (shape, coorX) => {
  let currCoorX = 0
  let width = 0
  for (let i=0; i<4; i++) {
    for (let j=0; j<4; j++) {
      if (shape[j][i] === 1) {
        currCoorX = i-width
        width++
        break;
      }
    }
  }
  return { currCoorX, width }
}

export const checkCollision =  (getState, direction) => {
  const { currentTetris } = getState()
  const { x, y, shape } = currentTetris
  const coorX = x/block
  // const coorY = y/block
  const { currCoorX, width } = findCoorXAndWidth(shape, coorX)
  switch (direction) {
    case 'left':
      if (coorX + currCoorX - 1 < 0)
        return true
      break
    case 'right':
      if (coorX + width + currCoorX + 1> 10)
        return true
      break
    case 'up':
      break;
    default:
      break;
  }
  return false
}