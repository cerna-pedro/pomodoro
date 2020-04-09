import React, { Fragment } from 'react';
import Controls from './Controls';
import { formatTime } from '../helpers';

const Time = (props) => {
  return (
    <div>
      <h2>{formatTime(props.runTime)}</h2>
    </div>
  );
};

export default Time;
