export const formatTime = (sec) => {
  const minutes = Math.floor(sec / 60);
  const seconds = Math.round((sec / 60 - minutes) * 60);
  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};
