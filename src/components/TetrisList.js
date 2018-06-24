import React from 'react'
import { Group, Rect } from 'react-konva'
import { data } from '../lib/data'
import { connect } from 'react-redux'

const { block } = data

const TetrisList = ({ tetrisList }) => {
  return (
    <Group>
      { tetrisList.map((column, columnIndex) => 
          column.map((row, rowIndex) => {
            return (
              <Rect 
                key={`${rowIndex}${columnIndex}`}
                x={rowIndex * 30}
                y={columnIndex * 30}
                width={block}
                height={block}
                fill='#f5f5f5'
                stroke="black"
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
  }))(TetrisList)

