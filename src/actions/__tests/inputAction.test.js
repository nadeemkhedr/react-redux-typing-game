import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { textUpdate } from '../input';
import * as types from '../../constants/ActionTypes';

const mockStore = configureMockStore([thunk]);

describe('input actions', () => {

  it('creates INPUT_UPDATE with the inserted text', () => {
    const actions = [{
      type: types.INPUT_UPDATE,
      text: 'text'
    }];
    const store = mockStore(initialState);
    store.dispatch(textUpdate('text'));
    expect(store.getActions()).toEqual(actions);
  });

  it('creates INPUT_UPDATE with empty text when a word is matched', () => {
    const actions = {
      type: types.INPUT_UPDATE,
      text: ''
    };
    const store = mockStore(initialState);
    store.dispatch(textUpdate('first'));
    expect(store.getActions()).toContainEqual(actions);
  });

  it('creates WORD_REMOVE, WORD_BLOCK_REMOVE when text matches an existing word', () => {
    const actions = [{
      type: types.WORD_REMOVE,
      id: 1
    }, {
      type: types.BLOCK_WORD_REMOVE,
      id: 1,
      wordId: 1
    }];
    const store = mockStore(initialState);
    store.dispatch(textUpdate('first'));
    const resultActons = store.getActions();
    actions.forEach(a => {
      expect(resultActons).toContainEqual(a);
    });
  });

  // TODO: need a real reducer for it to work
  it.skip('create BLOCK_REMOVE when the last word is matched in a block', () => {
    const state = {
      words: {
        byId: {
          1: {
            id: 1,
            text: 'first'
          },
        },
        allIds: [1]
      },
      blocks: {
        byId: {
          1: {
            id: 1,
            words: [1]
          }
        },
        allIds: [1]
      },
      input: { text: '' }
    };

    const actions = {
      type: types.BLOCK_REMOVE,
      id: 1
    };
    const store = mockStore(state);
    store.dispatch(textUpdate('first'));
    expect(store.getActions()).toContainEqual(actions);
  });

});

const initialState = {
  words: {
    byId: {
      1: {
        id: 1,
        text: 'first'
      },
      2: {
        id: 2,
        text: 'second'
      }
    },
    allIds: [1,2]
  },
  blocks: {
    byId: {
      1: {
        id: 1,
        words: [1,2]
      }
    },
    allIds: [1]
  },
  input: { text: '' }
};
