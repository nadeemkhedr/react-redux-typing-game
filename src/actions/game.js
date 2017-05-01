import {
  GAME_NEW,
  GAME_OVER,
  GAME_STARTING,
  GAME_IN_PROGRESS
} from '../constants/ActionTypes';

export const gameNew = () => ({
  type: GAME_NEW,
});

export const gameOver = () => ({
  type: GAME_OVER,
});

export const gameInProgress = () => ({
  type: GAME_IN_PROGRESS
});

export const gameStart = (options) => ({
  ...options,
  type: GAME_STARTING
});
