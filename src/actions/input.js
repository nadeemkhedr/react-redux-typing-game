import { getMatchingWords, getEmptyBlocks, getBlockHasWord } from '../reducers';
import { wordRemove } from './words';
import { blockRemove, blockWordRemove } from './blocks';

export const inputUpdate = text => ({ type: 'INPUT_UPDATE', text });

export const textUpdate = text => (dispatch, getState) => {
  const state = getState();
  dispatch(inputUpdate(text));
  const matchedWords = getMatchingWords(state, text);
  if(matchedWords.length > 0) {
    matchedWords.forEach(word => {
      const block = getBlockHasWord(state, word.id);
      dispatch(blockWordRemove(block.id, word.id));
      dispatch(wordRemove(word.id));
    });
    dispatch(inputUpdate(''));
    const emptyBlocks = getEmptyBlocks(getState());
    emptyBlocks.forEach(b => dispatch(blockRemove(b.id)));
  }
};
