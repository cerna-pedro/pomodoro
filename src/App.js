import React, { Component } from 'react';
import Title from './components/Title';
import Pie from './components/Pie';
import Time from './components/Time';
import Pomodoro from './components/Pomodoro';
import Info from './components/Info';
import Break from './components/Break';

export class App extends Component {
  state = {
    runTime: 600,
    time: 1500,
    break: 300,
    longBreak: 900,
    running: false,
    info: false,
    pomodoros: [],
  };
  render() {
    return (
      <div className='inner'>
        <Title />
        <Time runTime={this.state.runTime} />
        <Pie time={this.state.time} runTime={this.state.runTime} />
        <Break duration={this.state.break} />
        <Break duration={this.state.longBreak} />
        <Break duration={this.state.time} />
        {this.state.pomodoros.length ? <Pomodoro /> : ''}
        {this.state.info && <Info />}
      </div>
    );
  }
}

export default App;
