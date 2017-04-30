import React from 'react';
import PropTypes from 'prop-types';
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
  blocks: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Board;
