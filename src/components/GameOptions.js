import React from 'react';
import PropTypes from 'prop-types';

const GameOptions = ({title}) => {
  return (
    <div className="options">
      {title}
    </div>
  );
};

GameOptions.propTypes = {
  title: PropTypes.string.isRequired
};

export default GameOptions;
