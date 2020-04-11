import React from 'react';

const Info = (props) => {
  return (
    <div className='info'>
      {!props.info && (
        <button className='info__button' onClick={props.toggleInfo}>
          Info
        </button>
      )}
      {props.info && (
        <div className='info__overlay' onClick={props.toggleInfo}>
          <div className='info__modal'>
            <p className='info__paragraph'>
              The Pomodoro Technique was first developed by Francesco Cirillo,
              way back in the early 1990s.
            </p>
            <p className='info__paragraph'>
              The term "pomodoro" is the Italian word for "tomato". The
              technique was named after a tomato-shaped timer that Cirillo used
              while in university.
            </p>
            <p className='info__paragraph'>
              The basic of the technique are this...
            </p>
            <ul className='info__list'>
              <li className='info__item'>
                Decide on a task you want to accomplish.
              </li>
              <li>Set the timer for 25 minutes.</li>
              <li>
                Give the task your full, undivided attention until the timer
                rings. This counts as one Pomodoro.
              </li>
              <li>When the timer rings, take a short, 5-minute break.</li>
              <li>After 4 Pomodoros, take a longer, 15-minute break.</li>
            </ul>
            <p className='info__paragraph'>And there you have it! </p>
            <p className='info__paragraph'>Enjoy!</p>
            <span className='info__emoji'>🥳</span>
            <button className='info__button' onClick={props.toggleInfo}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
