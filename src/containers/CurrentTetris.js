import { Tetris } from '../components/Tetris'
import { connect } from 'react-redux' 

const mapStateToProps = (state) => {
  return {
    coordinate: state.coordinateTetrisReducer,
    currentTetris: state.currentTetris
  }
}

export default connect(mapStateToProps)(Tetris)
