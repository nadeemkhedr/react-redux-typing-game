import React from 'react';
import PropTypes from 'prop-types';

const TypeArea = ({text, onChange}) => {
  return (
    <input type="text" className="textarea-game" value={text} onChange={onChange} />
  );
};

TypeArea.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
export default TypeArea;
