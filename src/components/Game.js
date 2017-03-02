import React from 'react';

import TypeAreaContainer from '../containers/TypeAreaContainer';
import BoardContainer from '../containers/BoardContainer';

const Game = () => {
  return (
    <div>
      <div>
        <BoardContainer />
      </div>
      <TypeAreaContainer />
    </div>
  );
};

export default Game;
