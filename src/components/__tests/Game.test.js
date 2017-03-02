import React from 'react';
import { shallow } from 'enzyme';
import Game from '../Game';

const wrapper = shallow(<Game />);

describe('Component: Game', () => {

  it('renders correctly', () => {
    expect(wrapper.length).toEqual(1);
  });

});
