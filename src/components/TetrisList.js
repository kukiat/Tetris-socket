import React from 'react'
import { Stage, Layer, Group, Rect } from 'react-konva'
import { data } from '../lib/data'
import { connect } from 'react-redux'

const { layoutBackground, block } = data

const TetrisList = ({ tetrisList }) => {
  return (
    <Group>
      { tetrisList.map((column, columnIndex) => 
          column.map((row, rowIndex) => {
            return (
              <Rect
                x={rowIndex * 30}
                y={columnIndex * 30}
                width={block}
                height={block}
                fill='#f5f5f5'
              />
            )
          })
      )}
    </Group>

  )
}

export default connect(
  state => ({
    tetrisList: state.tetrisListReducer
  }))
(TetrisList)

