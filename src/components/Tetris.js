import React from 'react'
import { Group, Rect } from 'react-konva'
import { data } from '../lib/data'

const block = data.block
const strokeWidth = data.strokeWidth

const Shape = ({shape, color, x, y, ...props}) => {
  return (
    shape.map((column, columnIndex) => 
      column.map((row, rowIndex) => (
        shape[columnIndex][rowIndex] ?  
          <Rect
            key={`${rowIndex}${columnIndex}`}
            x={x + rowIndex * block}
            y={y + columnIndex * block}
            width={block}
            height={block}
            fill={color}
            stroke="black"
            strokeWidth={strokeWidth}
          /> : null
      ))
    )
  )
}

export const Tetris = ({ currentTetris }) => {
  const { x, y, color, shape } = currentTetris
  return (
    <Group>
      <Shape shape={shape} color={color} x={x} y={y}/>
    </Group>
  )
}