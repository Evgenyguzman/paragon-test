export const getHoursMinutesStringFromSeconds = (seconds: number) => {
  const hours = Math.floor(seconds / 60 / 60);
  const minutes =
    Math.floor(seconds / 60) - hours * 60;
  return ("00" + hours).slice(-2) + ":" + ("00" + minutes).slice(-2);
}