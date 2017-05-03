import { connect } from 'react-redux';
import { gameStart } from '../actions/game';
import GameOptions from '../components/GameOptions';

function mapStateToProps(state, props) {
  return {
    title: props.title
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gameStart(options) {
      dispatch(gameStart(options));
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(GameOptions)
