import React from 'react';
import { formatTime } from '../helpers'
import Controls from './Controls'

const Break = (props) => {
  return (
    <div className="break">
      <h2>{props.title}</h2>
      <h3 >{formatTime(props.duration)}</h3>
      <Controls name={props.name} increment={props.increment} decrement={props.decrement}/>
    </div>
  );
};

export default Break;
