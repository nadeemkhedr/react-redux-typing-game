import React from 'react';
import WordContainer from '../containers/WordContainer'

const Block = ({words}) => {
  const wordEls = words.map(word => {
    return (
      <WordContainer word={word} key={word.id} />
    )
  });

  return (
    <div className="block">
      {wordEls}
    </div>
  );
};

Block.propTypes = {
  words: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default Block;
