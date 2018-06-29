import { newTetris } from './action'
import { data } from '../../lib/data'

export const randomNewTetris = (dispatch, getState) => {
  const currentTetris = getState().currentTetris
  const { tetrisItem } = data
  const tetris = ['straight', 'square', 'cross', 'leftGun', 'rightGun', 'leftSnake', 'rightSnake']
  const randomIndex = Math.floor(Math.random() * 7)
  const typeTetris = tetris[randomIndex]
  const _newTetris = {...currentTetris, shape: tetrisItem[typeTetris].shape, type: typeTetris, color: tetrisItem[typeTetris].color}
  dispatch(newTetris(_newTetris))
}