import React from 'react';
import PropTypes from 'prop-types';

class TypeArea extends React.Component {
  componentDidMount() {
    this.refs.input.focus();
  }
  render() {
    return <input type="text" className="textarea-game" ref="input" value={this.props.text} onChange={this.props.onChange} />
  };
};

TypeArea.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
export default TypeArea;
