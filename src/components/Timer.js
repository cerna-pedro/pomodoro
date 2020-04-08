import React from 'react';
import {formatTime} from '../helpers'

const Timer = (props) => {
  return <h2>{formatTime(props.time)}</h2>;
};

export default Timer;
