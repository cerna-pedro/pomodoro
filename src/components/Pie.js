import React from 'react';
import styled from 'styled-components';

let denominator, rotationOne, rotationTwo;

const RotatingPie = styled.div`
${(props) => {
  denominator = props.work
    ? props.time
    : props.pomodoros.length <= 3
    ? props.break
    : props.longBreak;
  rotationOne = 1 - props.runTime / denominator - 0.5;
  rotationTwo = 1 - props.runTime / denominator;
}}
  background-color: ${(props) =>
    props.runTime / denominator < 0.5 ? '#c72230' : 'inherit'};
  transform: ${(props) => {
    return props.runTime / denominator < 0.5
      ? `rotate(${rotationOne}turn)`
      : `rotate(${rotationTwo}turn)`;
}};
`;

class Pie extends React.Component {
  render() {
    return (
      <>
        {!this.props.running && !this.props.paused && (
          <div className='pie__start'>
            <button type='submit' onClick={this.props.startRunning}>
              Start
            </button>
          </div>
        )}
        {this.props.running && (
          <div className='pie__container'>
            <div className='pie'>
              <RotatingPie
                className='pie__before'
                break={this.props.break}
                longBreak={this.props.longBreak}
                pomodoros={this.props.pomodoros}
                time={this.props.time}
                runTime={this.props.runTime}
                work={this.props.work}
              />
            </div>
            <div
              className='pie__controls'
              onClick={this.props.togglePause}
              onMouseDown={this.props.reset}
              onMouseUp={this.props.reset}
              onMouseLeave={this.props.reset}
            >
              {!this.props.paused ? (
                <span role='img' aria-label='Pause'>
                  ⏸
                </span>
              ) : (
                <>
                  <span role='img' aria-label='Play'>
                    ▶️
                  </span>
                  <span className="pie__controls--reset">Hold To Reset</span>
                </>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Pie;
