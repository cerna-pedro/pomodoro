import React from 'react';

const Controls = (props) => {
  return (
    <div className="controls">
      <span onClick={() => props.decrement(props.name)}>➖</span>
      <span onClick={() => props.increment(props.name)}>➕</span>
    </div>
  );
};

export default Controls;
