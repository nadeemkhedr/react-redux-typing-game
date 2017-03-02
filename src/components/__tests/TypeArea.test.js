import React from 'react';
import { shallow } from 'enzyme';
import TypeArea from '../TypeArea';

const wrapper = shallow(<TypeArea text={''} onChange={()=>{}} />);

describe('Component: TypeArea', () => {

  it('renders correctly', () => {
    expect(wrapper.length).toEqual(1);
  });

});
