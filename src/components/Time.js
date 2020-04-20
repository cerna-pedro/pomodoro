import React from 'react';
import { formatTime } from '../helpers';

const Time = (props) => {
  return (
    <>
      {props.runTime >= 0 && props.runTime != null && (
        <h2 className="time">{formatTime(props.runTime)}</h2>
      )}
    </>
  );
};

export default Time;
