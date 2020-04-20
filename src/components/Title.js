import React from 'react';

const Title = (props) => {
  return <h1 className="title">{props.title}</h1>;
};

Title.defaultProps = {
  title: 'Pomodoro Timer',
};

export default Title;
