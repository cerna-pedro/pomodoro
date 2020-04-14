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
    <>
      {!props.running && !props.paused && (
        <div className='pie__start'>
          <button type='submit' onClick={props.startRunning}>Start</button>
        </div>
      )}
      {props.running && (
        <div className='pie__container'>
          <div className='pie'>
            <div className='pie__before' style={pieStyle}></div>
          </div>
          <div
            className='pie__controls'
            onClick={props.togglePause}
            onMouseDown={props.reset}
            onMouseUp={props.reset}
          >
            {!props.paused ? <span role="img" aria-label="Pause">⏸</span> : <><span role="img" aria-label="Play">▶️</span><span>Hold To Reset</span></>}
          </div>
        </div>
      )}
    </>
  );
};

export default Pie;
