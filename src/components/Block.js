import React from 'react';
import PropTypes from 'prop-types';
import BlockTimer from './BlockTimer';
import WordContainer from '../containers/WordContainer'

const Block = ({words}) => {
  const wordEls = words.map(word => {
    return (
      <WordContainer word={word} key={word.id} />
    )
  });

  const blockExpire = () => {
  };

  return (
    <div className="block">
      <div className="blockTimer">
        <BlockTimer time={10} onFinish={blockExpire} />
      </div>
      {wordEls}
    </div>
  );
};

Block.propTypes = {
  words: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Block;
