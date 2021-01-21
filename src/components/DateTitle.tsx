import React from "react";

interface DateTitleProps {
  month: number;
  day: number;
  year: number;
}

export const DateTitle = ({ month, day, year }: DateTitleProps) => {
  return <h2>{`${month}/${day}/${year}`}</h2>;
};
