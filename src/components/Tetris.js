import React from 'react'
import { Stage, Layer, Group, Rect } from 'react-konva'
import { data } from '../lib/data'

const block = data.block
const layoutBackground = data.layoutBackground
const straight = data.tetrisItem.straight
const straightColor = straight.color
const straightShape = straight.shape
const strokeWidth = data.strokeWidth


export const Tetris = ({ coordinate }) => {
  const { x, y } = coordinate
  return (
    <Group>
      <Rect
        x={x}
        y={y}
        width={block}
        height={block}
        fill={straightColor}
        stroke="black"
        strokeWidth={strokeWidth}
      />
    </Group>
  )
}