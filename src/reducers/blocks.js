import { combineReducers } from 'redux';
import {
  BLOCK_ADD,
  BLOCK_REMOVE,
  BLOCK_WORD_REMOVE
} from '../constants/ActionTypes';

const byId = (state = {}, action) => {
  switch(action.type) {
    case BLOCK_ADD:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          words: action.words
        }
      };
    case BLOCK_REMOVE:
      let newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    case BLOCK_WORD_REMOVE:
      let changedBlock = state[action.id];
      changedBlock.words = changedBlock.words.filter(w => w !== action.wordId);
      return {
        ...state,
        [action.id]: changedBlock
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch(action.type) {
    case BLOCK_ADD:
      return [...state, action.id];
    case BLOCK_REMOVE:
      return state.filter(s => s !== action.id);
    default:
      return state;
  }
};


const blocksReducer = combineReducers({
  byId,
  allIds
});

export default blocksReducer;

export const getAllBlocks = state =>
  state.allIds.map(id => state.byId[id]);

export const getBlockHasWord = (state, wordId) =>
  getAllBlocks(state).find(block => block.words.includes(wordId));

export const getEmptyBlocks = state =>
  getAllBlocks(state).filter(b => b.words.length === 0);
