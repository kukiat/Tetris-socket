import { Tetris } from '../components/Tetris'
import { connect } from 'react-redux' 

const mapStateToProps = (state) => {
  return {
    currentTetris: state.currentTetris,
  }
}

export default connect(mapStateToProps)(Tetris)
