import React from 'react';

const TypeArea = ({text, onChange}) => {
  return (
    <input type="text" className="textarea-game" value={text} onChange={onChange} />
  );
};

TypeArea.propTypes = {
  text: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};
export default TypeArea;
