import {
  GAME_NEW,
  GAME_OVER,
  GAME_STARTING,
  GAME_IN_PROGRESS
} from '../constants/ActionTypes';

const gameReducer = (state = { state: GAME_NEW }, action) => {
  switch(action.type) {
    case GAME_NEW:
    case GAME_OVER:
    case GAME_IN_PROGRESS:
      return { ...state, state: action.type };
    case GAME_STARTING:
      return {
        ...state,
        state: GAME_STARTING,
        blocksPerScreen: action.blocksPerScreen,
        timePerBlock: action.timePerBlock,
        wordsPerBlockStart: action.wordsPerBlockStart,
        wordsPerBlockEnd: action.wordsPerBlockEnd
      };
    default:
      return state;
  }
};

export default gameReducer;

