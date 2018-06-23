import React from 'react'
import { Stage, Layer, Group, Rect } from 'react-konva'
import { data } from '../lib/data'
import { startGame } from '../redux/actions'

const block = data.block
const layoutBackground = data.layoutBackground
const straight = data.tetrisItem.straight
const straightColor = straight.color
const straightShape = straight.shape
const strokeWidth = data.strokeWidth

export class TetrisGame extends React.Component{

  componentDidMount() {
    this.props.dispatch(startGame())
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
        <Layout/>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Tetris/>
            
          </Layer>
        </Stage>
      </div>
    )
  }
}

const Layout = () => {
  return <div>xxx</div>
}

const Straight = () => {

}

const Tetris = () => {
  console.log(straightShape)
  return (
    <Group>
      <Rect
        x={10}
        y={10}
        width={block}
        height={block}
        fill={straightColor}
        stroke="black"
        strokeWidth={strokeWidth}
      />
    </Group>
  )
}


