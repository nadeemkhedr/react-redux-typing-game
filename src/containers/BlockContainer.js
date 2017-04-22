import { connect } from 'react-redux';
import { getWordsForBlock } from '../reducers';
import Block from '../components/Block';

function mapStateToProps(state, props) {
  return {
    block: props.block,
    words: getWordsForBlock(state, props.block.words)
  };
}

export default connect(mapStateToProps)(Block);
