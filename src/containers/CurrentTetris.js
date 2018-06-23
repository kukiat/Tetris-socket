import { Tetris } from '../components/Tetris'
import { connect } from 'react-redux' 

const mapStateToProps = (state) => {
  return {
    coordinate: state.moveTetrisReducer
  }
}

export default connect(mapStateToProps)(Tetris)
