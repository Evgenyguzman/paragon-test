export const getHoursFromTime = (datetime: Date): number => {
  const finalHours = datetime.getHours() + datetime.getMinutes() / 60;
  return finalHours;
};
