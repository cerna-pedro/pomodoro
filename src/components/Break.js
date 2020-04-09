import React from 'react';
import { formatTime } from '../helpers'
import Controls from './Controls'

const Break = (props) => {
  return (
    <div>
      <h3>{formatTime(props.duration)}</h3>
      <Controls/>
    </div>
  );
};

export default Break;
