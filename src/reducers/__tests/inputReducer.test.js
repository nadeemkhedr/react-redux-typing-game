import reducer from '../input';
import {
  inputUpdate
} from '../../actions/input';


describe('Input Reducer', () => {
  it('should handle INPUT_UPDATE', () => {
    const oldState = {
      text: 'test dat'
    };
    const text = 'test data';
    expect(
      reducer(oldState, inputUpdate(text))
    ).toEqual({ text });
  });
});

