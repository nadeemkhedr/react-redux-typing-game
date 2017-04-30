import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { calculatePercentage }from '../utils/numberUtils';
import PieChart from 'react-minimal-pie-chart';

class BlockTimer extends Component {

  constructor(props) {
    super(props);
    this.state = { time: props.time };
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  tick = () => {
    if(this.state.time === 0) {
      if(this.props.onFinish) {
        this.props.onFinish();
      }
      this.clearTimer();
    } else {
      this.setState({
        time: this.state.time - 1
      });
    }
  }

  getChartData(percentage) {
    let data = { value: 1, key: 1, color: 'green' };
    if(percentage <= 25) {
      data.color = 'red';
    }
    else if(percentage <= 50) {
      data.color = 'yellow';
    }
    return [data];
  }

  clearTimer() {
    clearInterval(this.timer);
  }

  render() {
    const percentage = calculatePercentage(this.state.time, this.props.time);
    return (
        <PieChart data={this.getChartData(percentage)}
          reveal={percentage}
          radius={30}
          style={{ height: '40px' }}
          animate
        />
    );
  }

}

BlockTimer.propTypes = {
  time: PropTypes.number.isRequired,
  onFinish: PropTypes.func
}
export default BlockTimer;
