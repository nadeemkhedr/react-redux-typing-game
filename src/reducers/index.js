import { combineReducers } from 'redux';
import blocks, * as fromBlocks from './blocks'
import words, * as fromWords from './words'
import input from './input';

const rootReducer = combineReducers({
  words,
  blocks,
  input
});

export default rootReducer;

export const getMatchingWords = (state, text) =>
  fromWords.getMatchingWords(state.words, text);

export const getWordsForBlock = (state, words) =>
  fromWords.getWordsByIds(state.words, words);

export const getAllBlocks = state =>
  fromBlocks.getAllBlocks(state.blocks);

export const getEmptyBlocks = state =>
  fromBlocks.getEmptyBlocks(state.blocks);

export const getBlockHasWord = (state, wordId) =>
  fromBlocks.getBlockHasWord(state.blocks, wordId);

