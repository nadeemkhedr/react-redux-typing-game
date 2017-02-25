import reducer from '../blocks';
import {
  blockAdd,
  blockRemove,
  blockWordRemove
} from '../../actions/blocks';

describe('Blocks Reducer', () => {
  it('should handle BLOCK_ADD', () => {
    const newBlock = {
      id: 1,
      words: [1,2]
    };
    const expectedState = {
      allIds: [newBlock.id],
      byId: {
        [newBlock.id]: newBlock
      }
    };
    expect(
      reducer(undefined, blockAdd(newBlock))
    ).toEqual(expectedState);
  });

  it('should handle BLOCK_REMOVE', () => {
    const blockToRemove = {
      id: 1,
      words: [],
    };
    const oldState = {
      allIds: [blockToRemove.id],
      byId: {
        [blockToRemove.id]: blockToRemove
      }
    };
    const expectedState = {
      allIds: [],
      byId: {}
    };
    expect(
      reducer(oldState, blockRemove(blockToRemove.id))
    ).toEqual(expectedState);
  });

  it('should handle BLOCK_WORD_REMOVE', () => {
    const oldState = {
      byId: {
        1: {
          id: 1,
          words: [1,2]
        }
      },
      allIds: [1]
    };
    const newState = {
      byId: {
        1: {
          id: 1,
          words: [2]
        }
      },
      allIds: [1]
    };
    expect(
      reducer(oldState, blockWordRemove(1, 1))
    ).toEqual(newState);
  });

  it('return same state with unkown actions', () => {
    const block = {
      id: 1,
      words: []
    };
    const state = {
      allIds: [block.id],
      byId: {
        [block.id]: block
      }
    };
    expect(
      reducer(state, { type: 'UNKOWN_ACTION' })
    ).toEqual(state);
  });

});
