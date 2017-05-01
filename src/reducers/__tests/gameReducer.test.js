import reducer from '../game';

import {
  GAME_NEW,
  GAME_OVER,
  GAME_STARTING,
  GAME_IN_PROGRESS
} from '../../constants/ActionTypes';

import {
  gameNew,
  gameOver,
  gameStart,
  gameInProgress
} from '../../actions/game';

describe('Game Reducer', () => {

  it('should handle GAME_NEW', () => {
    expect(
      reducer(undefined, gameNew())
    ).toEqual({ state: GAME_NEW });
  });

  it('should handle GAME_OVER', () => {
    expect(
      reducer(undefined, gameOver())
    ).toEqual({ state: GAME_OVER });
  });

  it('should handle GAME_IN_PROGRESS', () => {
    expect(
      reducer(undefined, gameInProgress())
    ).toEqual({ state: GAME_IN_PROGRESS });
  });

  it('should handle GAME_STARTING', () => {
    const options = {
      blocksPerScreen: 1,
      timePerBlock: 2,
      wordsPerBlockStart: 3,
      wordsPerBlockEnd: 4
    };
    expect(
      reducer(undefined, gameStart(options))
    ).toEqual({
      ...options,
      state: GAME_STARTING ,
    });
  });

});
