import React from 'react';
import BlockContainer from '../containers/BlockContainer';

const Board = ({blocks, generateBlock}) => {
  const blockEls = blocks.map(block => {
    return <BlockContainer block={block} key={block.id} />
  });

  return (
    <div>
      <div className="blocks">
        {blockEls}
      </div>
      <button onClick={generateBlock}>Generate Block</button>
    </div>
  );
};

Board.propTypes = {
  blocks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default Board;
