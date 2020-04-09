import React from 'react';

const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

Title.defaultProps = {
  title: 'Pomodoro Timer',
};

export default Title;
