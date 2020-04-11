import React, { Component } from 'react';
import Title from './components/Title';
import Pie from './components/Pie';
import Time from './components/Time';
import Pomodoro from './components/Pomodoro';
import Info from './components/Info';
import Break from './components/Break';

export class App extends Component {
  state = {
    runTime: 900,
    time: 1500,
    break: 300,
    longBreak: 900,
    running: false,
    info: true,
    pomodoros: [],
  };
  toggleRunning = (e) => {
    console.log(e);
    this.setState({ running: !this.state.running });
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
        {!this.state.running && <Break duration={this.state.break} />}
        {!this.state.running && <Break duration={this.state.longBreak} />}
        {!this.state.running && <Break duration={this.state.time} />}

        {this.state.pomodoros.length ? <Pomodoro /> : null}
        {this.state.info && <Info />}
      </div>
    );
  }
}

export default App;
