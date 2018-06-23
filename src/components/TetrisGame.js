import React from 'react'
import { Stage, Layer, Group, Rect } from 'react-konva'
import { startGame } from '../redux/actions'
import CurrentTetris from '../containers/CurrentTetris'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import TetrisList from './TetrisList'

class TetrisGame extends React.Component{
  state = {
    widthLayout: 300,
    heightLayout: 600
  }

  componentDidMount() {
    this.props.startGame()
  }

  render() {
    return (
      <div>
        <h1>TetrisGame</h1>
        <div className="layout">
          <Stage width={this.state.widthLayout} height={this.state.heightLayout} fill="#C8C9CB">
            <Layer>
              <TetrisList/>
              <CurrentTetris/>
            </Layer>
          </Stage>
          
        </div>
      </div>
    )
  }
}

export default connect(null, {
  startGame: startGame
})(TetrisGame)