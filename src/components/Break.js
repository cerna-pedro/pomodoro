import React from 'react';
import { formatTime } from '../helpers'
import Controls from './Controls'

const Break = (props) => {
  return (
    <div>
      <h3>{formatTime(props.duration)}</h3>
      <Controls name={props.name} increment={props.increment} decrement={props.decrement}/>
    </div>
  );
};

export default Break;
