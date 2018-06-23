import { TetrisGame } from '../components/TetrisGame'
import { connect } from 'react-redux' 

const mapStateToProps = (state) => ({
  dd: state.tetrisReducer
})
export default connect(mapStateToProps)(TetrisGame)
