import React from 'react';

const Pie = (props) => {
  const pieStyle = {
    backgroundColor: props.runTime / props.time < 0.5 ? '#c72230' : 'inherit',
    transform:
      props.runTime / props.time < 0.5
        ? `rotate(${1 - props.runTime / props.time - 0.5}turn)`
        : `rotate(${1 - props.runTime / props.time}turn)`,
  };

  return (
    <div className='pie__container'>
      <div className='pie'>
        <div className='pie__before' style={pieStyle}></div>
      </div>
      <div className="pie__controls" onClick={props.toggleRunning} onMouseDown={props.startReset}>{props.running ? <span>⏸</span> : <span>▶️</span>}</div>
    </div>
  );
};

export default Pie;
