import React from 'react';
import { shallow, mount } from 'enzyme';
import BlockTimer from '../BlockTimer';

const wrapper = shallow(<BlockTimer time={10} />);

describe('Component: BlockTimer', () => {

  it('renders correctly', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('shows green color when time is at 100%', () => {
    wrapper.setState({time: 10});
    const color = wrapper.find('ReactMinimalPieChart').prop('data')[0].color;
    expect(color).toBe('green');
  });

  it('shows yellow color when time is at 40%', () => {
    wrapper.setState({time: 4});
    const color = wrapper.find('ReactMinimalPieChart').prop('data')[0].color;
    expect(color).toBe('yellow');
  });

  it('shows red color when time is at 10%', () => {
    wrapper.setState({time: 1});
    const color = wrapper.find('ReactMinimalPieChart').prop('data')[0].color;
    expect(color).toBe('red');
  });

  it('onFinish is called when time remaining is zero', () => {
    jest.useFakeTimers();
    global.requestAnimationFrame = jest.fn();
    let onFinishSpy = jest.fn();
    const finishWrapper = mount(<BlockTimer time={10} onFinish={onFinishSpy}/>);

    finishWrapper.setState({time: 0});
    jest.runAllTimers();

    expect(onFinishSpy.mock.calls.length).toBe(1);

    setTimeout.mockReset();
    global.requestAnimationFrame.mockReset();

  });

});
