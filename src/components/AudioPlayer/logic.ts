export const getFormattedTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  const formmatedMinutes = minutes > 9 ? minutes : `0${minutes}`;
  const formmatedSeconds = seconds > 9 ? seconds : `0${seconds}`;

  return `${formmatedMinutes}:${formmatedSeconds}`;
};
