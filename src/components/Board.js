import React from 'react';
import BlockContainer from '../containers/BlockContainer';

const Board = ({blocks}) => {
  const blockEls = blocks.map(block => {
    return <BlockContainer block={block} key={block.id} />
  });

  return (
    <div className="board">
      <div className="blocks">
        {blockEls}
      </div>
    </div>
  );
};

Board.propTypes = {
  blocks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default Board;
