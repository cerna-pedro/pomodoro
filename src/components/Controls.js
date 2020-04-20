import React from 'react';

const Controls = (props) => {
  return (
    <div className='controls'>
      <span
        onClick={(e) => props.decrement(e,props.name)}
        onMouseDown={(e) => props.decrement(e,props.name)}
        onMouseUp={(e) => props.decrement(e, props.name)}
        onMouseLeave={(e)=>props.decrement(e,props.name)}
        role='img'
        aria-label='Minus'
      >
        ➖
      </span>
      <span
        onClick={(e) => props.increment(e, props.name)}
        onMouseDown={(e) => props.increment(e, props.name)}
        onMouseUp={(e)=>props.increment(e,props.name)}
        onMouseLeave={(e)=>props.increment(e,props.name)}
        role='img'
        aria-label='Plus'
      >
        ➕
      </span>
    </div>
  );
};

export default Controls;
