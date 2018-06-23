import { Tetris } from '../components/Tetris'
import { connect } from 'react-redux' 

const mapStateToProps = (state) => {
  return {
    coordinate: state.coordinateTetrisReducer
  }
}

export default connect(mapStateToProps)(Tetris)
