import { data } from '../../lib/data'
import * as types from '../actions/type'

const { block, layoutBackground } = data

export const tetrisListReducer = (state = layoutBackground, action) => {
  switch (action.type) {
    case types.MERGE_TETRIS:
      return layoutBackground
    default:
      return state
  }
}