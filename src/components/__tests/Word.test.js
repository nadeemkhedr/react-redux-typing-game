import React from 'react';
import { shallow } from 'enzyme';
import Word from '../Word';

const wrapper = shallow(<Word word={''} text={''} />);

describe('Component: Word', () => {

  it('renders correctly', () => {
    expect(wrapper.length).toEqual(1);
  });

});
