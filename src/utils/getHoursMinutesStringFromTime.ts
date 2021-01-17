export const getHoursMinutesStringFromTime = (datetime: Date): string => {
  return (
    ("00" + datetime.getHours()).slice(-2) +
    ":" +
    ("00" + datetime.getMinutes()).slice(-2)
  );
};
