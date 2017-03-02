import React from 'react';
import { shallow } from 'enzyme';
import Board from '../Board';

const wrapper = shallow(<Board blocks={[]} />);

describe('Component: Board', () => {

  it('renders correctly', () => {
    expect(wrapper.length).toEqual(1);
  });

});
