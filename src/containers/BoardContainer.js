import { connect } from 'react-redux';
import { getAllBlocks } from '../reducers';
import Board from '../components/Board';

function mapStateToProps(state) {
  return {
    blocks: getAllBlocks(state)
  };
}

export default connect(mapStateToProps)(Board);
