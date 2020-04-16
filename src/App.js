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
    time: 2,
    break: 2,
    longBreak: 4,
    min: 0,
    running: false,
    paused: false,
    info: false,
    pomodoros: [],
    timeout: null,
    interval: null,
    work: false,
  };

  reset = (e) => {
    if (e.type === 'mousedown') {
      if (this.state.paused) {
        this.setState({
          timeout: setTimeout(() => {
            this.setState({
              runTime: null,
              time: this.state.time,
              break: this.state.break,
              longBreak: this.state.longBreak,
              min: 0,
              running: false,
              paused: false,
              info: false,
              pomodoros: [],
              timeout: null,
              interval: null,
              work: false,
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
    if (this.state.runTime === null) {
      console.log(
        'code block one',
        'pomodoros',
        this.state.pomodoros.length,
        'work',
        this.state.work
      );
      this.setState({
        runTime: this.state.time,
        running: true,
        work: true,
        interval: setInterval(() => {
          this.setState({ runTime: this.state.runTime - 1 });
          this.startRunning();
        }, 1000),
      });
    } else if (
      this.state.runTime === 0 &&
      this.state.work &&
      this.state.pomodoros.length < 3
    ) {
      console.log(
        'code block two',
        'pomodoros',
        this.state.pomodoros.length,
        'work',
        this.state.work
      );
      this.setState({
        runTime: this.state.break,
        work: false,
        pomodoros: [...this.state.pomodoros, this.state.pomodoros.length + 1],
      });
    } else if (
      this.state.runTime === 0 &&
      !this.state.work &&
      this.state.pomodoros.length < 4
    ) {
      console.log(
        'code block three',
        'pomodoros',
        this.state.pomodoros.length,
        'work',
        this.state.work
      );
      this.setState({
        runTime: this.state.time,
        work: true,
      });
    } else if (
      this.state.pomodoros.length === 3 &&
      this.state.work &&
      this.state.runTime === 0
    ) {
      console.log(
        'code block four',
        'pomodoros',
        this.state.pomodoros.length,
        'work',
        this.state.work
      );
      this.setState({
        runTime: this.state.longBreak,
        work: false,
        pomodoros: [...this.state.pomodoros, this.state.pomodoros.length + 1],
      });
    } else if (this.state.pomodoros.length > 3 && this.state.runTime === 0) {
      console.log(
        'code block five',
        'pomodoros',
        this.state.pomodoros.length,
        'work',
        this.state.work
      );
      clearInterval(this.state.interval);
      this.setState({
        runTime: 0,
        time: this.state.time,
        break: this.state.break,
        longBreak: this.state.longBreak,
        running: true,
        paused: true,
        info: false,
        pomodoros: [...this.state.pomodoros],
        timeout: null,
        interval: null,
        min: 0,
        work: false,
      });
      return;
    }
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
    if (this.state.runTime === 0) {
      return
    }
    clearInterval(this.state.interval);
    this.setState({ paused: !this.state.paused });
    if (this.state.paused) {
      this.setState({
        interval: setInterval(() => {
          this.setState({ runTime: this.state.runTime - 1 });
          this.startRunning();
        }, 1000),
      });
    }
  };
  toggleRunning = () => {
    this.setState({ running: !this.state.running });
  };
  decrement = (e, name) => {
    if (e.type === 'click') {
      const updated = parseInt({ ...this.state }[name]);
      this.setState({ [name]: updated - 1 });
    }

    if (e.type === 'mouseup') {
      clearInterval(this.state.interval);
      this.setState({ interval: null });
    }
    if (e.type === 'mousedown') {
      this.setState({
        interval: setInterval(() => {
          const updated = parseInt({ ...this.state }[name]);
          this.setState({ [name]: updated - 1 });
        }, 200),
      });
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
          break={this.state.break}
          longBreak={this.state.longBreak}
          pomodoros={this.state.pomodoros}
          paused={this.state.paused}
          time={this.state.time}
          runTime={this.state.runTime}
          toggleRunning={this.toggleRunning}
          running={this.state.running}
          startRunning={this.startRunning}
          togglePause={this.togglePause}
          reset={this.reset}
          work={this.state.work}
        />
        {!this.state.running && (
          <Break
            name='break'
            title='Short Break'
            duration={this.state.break}
            increment={this.increment}
            decrement={this.decrement}
          />
        )}
        {!this.state.running && (
          <Break
            name='longBreak'
            title='Long Break'
            duration={this.state.longBreak}
            increment={this.increment}
            decrement={this.decrement}
          />
        )}
        {!this.state.running && (
          <Break
            name='time'
            title='Timer Duration'
            duration={this.state.time}
            increment={this.increment}
            decrement={this.decrement}
          />
        )}
        {this.state.pomodoros.length
          ? this.state.pomodoros.map((pomodoro) => <Pomodoro key={pomodoro} />)
          : null}
        {!this.state.running && (
          <Info info={this.state.info} toggleInfo={this.toggleInfo} />
        )}
      </div>
    );
  }
}

export default App;
