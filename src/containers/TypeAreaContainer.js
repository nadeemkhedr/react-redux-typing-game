import { connect } from 'react-redux';
import { textUpdate } from '../actions/input';
import TypeArea from '../components/TypeArea';

function mapStateToProps(state) {
  return {
    text: state.input.text
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(e) {
      dispatch(textUpdate(e.target.value));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TypeArea);
