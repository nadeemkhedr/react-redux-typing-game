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
