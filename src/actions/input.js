import { getMatchingWords, getEmptyBlocks } from '../reducers';
import { wordRemove } from './words';
import { blockRemove, blockWordRemove } from './blocks';

export const inputUpdate = text => ({ type: 'INPUT_UPDATE', text });

export const textUpdate = text => (dispatch, getState) => {
  dispatch(inputUpdate(text));
  const matchedWords = getMatchingWords(getState(), text);
  if(matchedWords.length > 0) {
    matchedWords.forEach(word => {
      dispatch(blockWordRemove(word.blockId, word.id));
      dispatch(wordRemove(word.id));
    });
    dispatch(inputUpdate(''));
    const emptyBlocks = getEmptyBlocks(getState());
    emptyBlocks.forEach(block => dispatch(blockRemove(block.id)));
  }
};
