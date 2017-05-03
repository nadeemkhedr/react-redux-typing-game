import React from 'react';

import TypeAreaContainer from '../containers/TypeAreaContainer';
import BoardContainer from '../containers/BoardContainer';
import GameOptionsContainer from '../containers/GameOptionsContainer';

import {
  GAME_NEW,
  GAME_OVER,
  GAME_STARTING,
  GAME_IN_PROGRESS
} from '../constants/ActionTypes';

const Game = ({state}) => {
  let gameOptionsMsg = state === GAME_NEW ? 'Welcome User' :
    state === GAME_OVER ? 'Game Over, Try Again' : null;

  let game = (
    <div>
      <div>
        <BoardContainer />
      </div>
      <TypeAreaContainer />
    </div>
  );

  return (
    <div>
      {(state === GAME_NEW || state === GAME_OVER) && (
        <GameOptionsContainer title={gameOptionsMsg} />
      )}
      {state === GAME_IN_PROGRESS && game}
    </div>
  );
};

export default Game;
