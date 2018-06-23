import React from 'react'
import { Stage, Layer, Group, Rect } from 'react-konva'
import { data } from '../lib/data'
import { connect } from 'react-redux'

const { layoutBackground, block } = data

const TetrisList = () => {
  return (
    <Group>
      { layoutBackground.map((column, columnIndex) => 
          column.map((row, rowIndex) => {
            return (
              <Rect
                x={parseInt(rowIndex) * 30}
                y={parseInt(columnIndex) * 30}
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
    coordinate: state.coordinateTetrisReducer
  }))
(TetrisList)
