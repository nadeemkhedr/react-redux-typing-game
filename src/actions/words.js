import { WORD_ADD, WORD_REMOVE } from '../constants/ActionTypes';

export const wordAdd = word => ({
  type: WORD_ADD,
  id: word.id,
  text: word.text
});

export const wordRemove = id =>
  ({ type: WORD_REMOVE, id });
