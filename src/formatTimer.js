export const formatTimer = (time) => {
  const getSeconds = `0${time % 60}`.slice(-2);
  const minutes = `0${Math.floor(time / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
