import { INPUT_UPDATE } from '../constants/ActionTypes';

const inputReducer = (state = { text: '' }, action) => {
  switch(action.type) {
    case INPUT_UPDATE:
      return { ...state, text: action.text};
    default:
      return state;
  }
};

export default inputReducer;
