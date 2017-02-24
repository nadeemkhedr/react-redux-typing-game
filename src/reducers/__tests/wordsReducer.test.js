import reducer from '../words';
import { wordAdd, wordRemove } from '../../actions/words';
import { WORD_ADD, WORD_REMOVE } from '../../constants/ActionTypes';

describe('Words Reducer', () => {
  it('should handle WORD_ADD', () => {
    const newWord = {
      id: 1,
      blockId: 1,
      text: 'word'
    };
    const expectedState = {
      allIds: [newWord.id],
      byId: {
        [newWord.id]: newWord
      }
    };
    expect(
      reducer(undefined, wordAdd(newWord))
    ).toEqual(expectedState);
  });

  it('should handle WORD_REMOVE', () => {
    const wordToRemove = {
      id: 1,
      blockId: 1,
      text: 'word'
    };
    const oldState = {
      allIds: [wordToRemove.id],
      byId: {
        [wordToRemove.id]: wordToRemove
      }
    };
    const expectedState = {
      allIds: [],
      byId: {}
    };
    expect(
      reducer(oldState, wordRemove(wordToRemove.id))
    ).toEqual(expectedState);
  });

  it('return same state with unkown actions', () => {
    const word = {
      id: 1,
      blockId: 1,
      text: 'word'
    };
    const state = {
      allIds: [word.id],
      byId: {
        [word.id]: word
      }
    };
    expect(
      reducer(state, { type: 'UNKOWN_ACTION' })
    ).toEqual(state);
  });

});
