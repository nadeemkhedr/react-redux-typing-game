import React from 'react';
import { shallow } from 'enzyme';
import Block from '../Block';

const wrapper = shallow(<Block words={[]} />);

describe('Component: Block', () => {

  it('renders correctly', () => {
    expect(wrapper.length).toEqual(1);
  });

});
