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
    time: 5,
    break: 8,
    longBreak: 12,
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
              ...this.state,
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

  startRunning =  () => {

    if (this.state.runTime===null) {
      console.log('beginning');

      this.setState({
        runTime: { ...this.state }.time,
        running: !this.state.running,
        work: !this.state.work,
        interval: setInterval(() => {
          this.setState({ runTime: { ...this.state }.runTime - 1 });
          this.startRunning()
        }, 1000),
      });
    }

    if (this.state.runTime < 0) {
      console.log('made it');
      this.setState({ runTime: {...this.state}.longBreak });
    }
    // if (this.state.runTime > 0) {
    //   this.setState({
    //     interval: setInterval(() => {
    //       this.setState({ runTime: { ...this.state }.runTime - 1 });
    //     }, 1000),
    //   });
    // }
    // if (this.state.runTime === 0 && this.state.interval) {
    //   clearInterval(this.state.interval);
    //   if (this.state.work) {
    //     this.setState({
    //       work: !this.state.work,
    //       runTime: { ...this.state }.break,
    //     });
    //     this.startRunning();
    //     if (this.state.pomodoros.length < 4 && !this.state.work) {
    //       this.setState({
    //         pomodoros: [
    //           ...this.state.pomodoros,
    //           this.state.pomodoros.length + 1,
    //         ],
    //         work: !this.state.work,
    //       });
    //       this.startRunning();
    //     }
    //   } else {
    //     this.setState({
    //       runTime: 0,
    //       time: { ...this.state }.time,
    //       break: { ...this.state }.break,
    //       longBreak: { ...this.state }.longBreak,
    //       running: true,
    //       paused: true,
    //       info: false,
    //       pomodoros: [...this.state.pomodoros],
    //       timeout: null,
    //       interval: null,
    //     });
    //     return;
    //   }
    // }
    // this.startRunning();
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
