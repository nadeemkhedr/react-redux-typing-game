import shortid from 'shortid';
import randomWord from 'random-word-by-length';
import { wordAdd } from './words';
import {
  BLOCK_ADD,
  BLOCK_REMOVE,
  BLOCK_WORD_REMOVE
} from '../constants/ActionTypes';

export const blockAdd = block => ({
  type: BLOCK_ADD,
  id: block.id,
  words: block.words || []
});

export const blockRemove = id => ({ type: BLOCK_REMOVE, id });
export const blockWordRemove = (id, wordId) =>
  ({ type: BLOCK_WORD_REMOVE, id, wordId });

export const blockGenerate = () => (dispatch, getState) => {
  const gameOptions = getState().game;
  const wordsMin = gameOptions.wordsPerBlockStart;
  const wordsRandom = gameOptions.wordsPerBlockEnd - gameOptions.wordsPerBlockStart;
  const numberOfWords = Math.floor(Math.random() * wordsRandom) + wordsMin;
  let wordIds = []
  for (var i = 1; i <= numberOfWords; i++) {
    let word = {
      id: shortid.generate(),
      text: randomWord(10)
    };
    dispatch(wordAdd(word));
    wordIds.push(word.id);
  }
  let block = {
    id: shortid.generate(),
    words: wordIds
  };
  dispatch(blockAdd(block));
};

