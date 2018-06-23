import React from 'react'
import { Stage, Layer, Group, Rect } from 'react-konva'
import { startGame } from '../redux/actions'
import CurrentTetris from '../containers/CurrentTetris'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class TetrisGame extends React.Component{

  componentDidMount() {
    this.props.startGame()
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <CurrentTetris/>
          </Layer>
        </Stage>
      </div>
    )
  }
}

export default connect(null, {
  startGame: startGame
})(TetrisGame)