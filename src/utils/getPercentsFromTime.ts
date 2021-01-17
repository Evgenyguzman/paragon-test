import { getHoursFromTime } from "./getHoursFromTime";

export const getPercentsFromTime = (time: Date): number => {
  const percents = (getHoursFromTime(time) / 24) * 100;
  return percents;
};
