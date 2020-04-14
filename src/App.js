import React, { Component } from 'react';
import Title from './components/Title';
import Pie from './components/Pie';
import Time from './components/Time';
import Pomodoro from './components/Pomodoro';
import Info from './components/Info';
import Break from './components/Break';

export class App extends Component {
  state = {
    runTime: null,
    time: 1500,
    break: 300,
    longBreak: 900,
    running: false,
    paused: false,
    info: false,
    pomodoros: [],
    timeout: null,
    interval: null,
  };

  reset = (e) => {
    if (e.type === 'mousedown') {
      if (this.state.paused) {
        this.setState({
          timeout: setTimeout(() => {
            this.setState({
              runTime: null,
              time: 1500,
              break: 300,
              longBreak: 900,
              running: false,
              paused: false,
              info: false,
              pomodoros: [],
              timeout: null,
              interval: null,
            });
          }, 1000),
        });
      }
    }

    if (e.type === 'mouseup') {
      clearTimeout(this.state.timeout);
      this.setState({ timeout: null });
    }
  };

  startRunning = () => {
    const newRuntime = { ...this.state }.time;
    this.setState({ runTime: newRuntime });
    this.setState({ running: true });
  };
  toggleInfo = (e) => {
    if (
      e.target.className === 'info__button' ||
      e.target.className === 'info__overlay'
    ) {
      this.setState({ info: !this.state.info });
    }
  };
  togglePause = () => {
    this.setState({ paused: !this.state.paused });
  };
  toggleRunning = () => {
    this.setState({ running: !this.state.running });
  };
  decrement = (e, name) => {
    if (e.type === 'click') {
      const updated = parseInt({ ...this.state }[name]);
      this.setState({ [name]: updated - 1 });
    }
    console.log(e.type);
    if (e.type === 'mousedown') {
      this.setState({
        interval: setInterval(() => {
          const updated = parseInt({ ...this.state }[name]);
          this.setState({ [name]: updated - 1 });
        }, 300),
      });
    }
    if (e.type === 'mouseup') {
      clearTimeout(this.state.interval);
      this.setState({ interval: null });
    }
  };

  increment = (name) => {
    const updated = parseInt({ ...this.state }[name]);
    this.setState({ [name]: updated + 1 });
  };

  render() {
    return (
      <div className='inner'>
        <Title />
        <Time runTime={this.state.runTime} />
        <Pie
          paused={this.state.paused}
          time={this.state.time}
          runTime={this.state.runTime}
          toggleRunning={this.toggleRunning}
          running={this.state.running}
          startRunning={this.startRunning}
          togglePause={this.togglePause}
          reset={this.reset}
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
