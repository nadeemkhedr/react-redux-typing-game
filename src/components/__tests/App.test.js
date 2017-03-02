import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

const wrapper = shallow(<App />);

describe('Component: App', () => {

  it('renders correctly', () => {
    expect(wrapper.length).toEqual(1);
  });

});
