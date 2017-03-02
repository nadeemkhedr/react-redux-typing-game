import { connect } from 'react-redux';
import { wordRemove } from '../actions/words';
import Word from '../components/Word';

function mapStateToProps(state, props) {
  return {
    text: state.input.text,
    word: props.word.text,
    id: props.word.id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    wordDidMatch(id) {
      dispatch(wordRemove(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Word);
