import React, { Component } from 'react';
import Title from './components/Title';
import Pie from './components/Pie';
import Time from './components/Time';
import Pomodoro from './components/Pomodoro';
import Info from './components/Info';
import Break from './components/Break';

export class App extends Component {
  state = {
    runTime: 1500,
    time: 1500,
    break: 300,
    longBreak: 900,
    running: false,
    info: false,
    pomodoros: [],
  };
  startReset = () => {
    console.log('mousedown');
  };
  toggleInfo = (e) => {
    if (
      e.target.className === 'info__button' ||
      e.target.className === 'info__overlay'
    ) {
      this.setState({ info: !this.state.info });
    }
  };
  toggleRunning = () => {
    this.setState({ running: !this.state.running });
  };
  decrement = (name) => {
    const updated = parseInt(this.state[name]);
    this.setState({ [name]: updated - 1 });
  };
  increment = (name) => {
    const updated = parseInt(this.state[name]);
    this.setState({ [name]: updated + 1 });
  };

  render() {
    return (
      <div className='inner'>
        <Title />
        <Time runTime={this.state.runTime} />
        <Pie
          time={this.state.time}
          runTime={this.state.runTime}
          toggleRunning={this.toggleRunning}
          running={this.state.running}
        />
        {!this.state.running && (
          <Break
            name='break'
            duration={this.state.break}
            increment={this.increment}
            decrement={this.decrement}
          />
        )}
        {!this.state.running && (
          <Break
            name='longBreak'
            duration={this.state.longBreak}
            increment={this.increment}
            decrement={this.decrement}
          />
        )}
        {!this.state.running && (
          <Break
            name='time'
            duration={this.state.time}
            increment={this.increment}
            decrement={this.decrement}
          />
        )}
        {this.state.pomodoros.length ? <Pomodoro /> : null}
        {!this.state.running && (
          <Info info={this.state.info} toggleInfo={this.toggleInfo} />
        )}
      </div>
    );
  }
}

export default App;
