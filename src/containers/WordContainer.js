import { connect } from 'react-redux';
import Word from '../components/Word';

function mapStateToProps(state, props) {
  return {
    text: state.input.text,
    word: props.word.text,
  };
}


export default connect(mapStateToProps)(Word);
