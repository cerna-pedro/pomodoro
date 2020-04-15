import React from 'react';
import { formatTime } from '../helpers';

const Time = (props) => {
  return (
    <div>
      {props.runTime>=0 && props.runTime != null && <h2>{formatTime(props.runTime)}</h2>}
    </div>
  );
};

export default Time;
