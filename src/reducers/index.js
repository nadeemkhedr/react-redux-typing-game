import { combineReducers } from 'redux';
import words from './words';
import blocks from './blocks';

const rootReducer = combineReducers({
  words,
  blocks
});

export default rootReducer;
