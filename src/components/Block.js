import React from 'react';
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
  words: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default Block;
