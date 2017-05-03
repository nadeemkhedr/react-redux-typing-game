import { connect } from 'react-redux';
import Game from '../components/Game';

function mapStateToProps(state) {
  return {
    state: state.game.state
  };
}

export default connect(mapStateToProps)(Game);
