import React from 'react';

const Pie = (props) => {
  const beforeColor = {
    backgroundColor: props.runTime / props.time < 0.5 ? '#c72230' : 'inherit',
    transform:
      (props.runTime / props.time) < 0.5
        ? `rotate(${1-props.runTime / props.time-.5}turn)`
        : `rotate(${1-props.runTime / props.time}turn)`,
  };
  return (
    <div className='pieContainer'>
      <div className='pie'>
        <div className='before' style={beforeColor}></div>
      </div>
      <p>{props.runTime / props.time}</p>
    </div>
  );
};

export default Pie;
