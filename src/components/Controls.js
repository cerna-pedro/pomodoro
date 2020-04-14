import React from 'react';

const Controls = (props) => {
  return (
    <div className='controls'>
      <span
        onClick={(e) => props.decrement(e,props.name)}
        onMouseDown={(e) => props.decrement(e,props.name)}
        role='img'
        aria-label='Minus'
        onMouseUp={(e) => props.decrement(e,props.name)}
      >
        ➖
      </span>
      <span
        onClick={() => props.increment(props.name)}
        role='img'
        aria-label='Plus'
      >
        ➕
      </span>
    </div>
  );
};

export default Controls;
