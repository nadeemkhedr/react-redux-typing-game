import { connect } from 'react-redux';
import { getAllBlocks } from '../reducers';
import { blockGenerate } from '../actions/blocks';
import Board from '../components/Board';

function mapStateToProps(state) {
  return {
    blocks: getAllBlocks(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    generateBlock() {
      dispatch(blockGenerate());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
