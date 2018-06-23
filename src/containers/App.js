import App from '../components/App'
import { connect } from 'react-redux' 

const mapStateToProps = (state) => ({
  dd: state.tetrisReducer
})
export default connect(mapStateToProps)(App)
