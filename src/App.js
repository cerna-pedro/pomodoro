import React, { Component } from 'react';
import Title from './components/Title';
import Pie from './components/Pie';
import Timer from './components/Timer';
import Pomodoros from './components/Pomodoros';
import Info from './components/Info';

export class App extends Component {
  state = {
    time: 1500,
    break: 300,
    running: false,
    info: false,
    pomodoros: [],
  };
  render() {
    return (
      <div className='inner'>
        <Title />
        <Timer time={this.state.time} />
        <Pie />
        <Pomodoros />
        <Info />
      </div>
    );
  }
}

export default App;
