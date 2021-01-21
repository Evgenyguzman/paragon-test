import React, { useCallback, useEffect, useMemo, useState } from "react";
import { getDayInfo, Results } from "../utils/getDayInfo";
import { getHoursMinutesStringFromSeconds } from "../utils/getHoursMinutesStringFromSeconds";
import { getHoursMinutesStringFromTime } from "../utils/getHoursMinutesStringFromTime";
import { getPercentsFromTime } from "../utils/getPercentsFromTime";
import { getPosition } from "../utils/getPosition";

import { Button } from "../components/Button";
import { DateTitle } from "../components/DateTitle";
import { GradientLine } from "../components/GradientLine";
import { TextWithLabel } from "../components/TextWithLabel";

const date = new Date();
let currentPosition: GeolocationPosition;

export const HomeScreen = () => {
  const [sunriseSunsetData, setData] = useState<Results | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const updateData = useCallback(async (event?: any) => {
    setError(undefined);
    setIsLoading(true);
    date.setTime(
      date.getTime() + (event ? event.target.value : 0) * 24 * 60 * 60 * 1000
    );

    try {
      const data = await getDayInfo({ position: currentPosition, date });
      setData(data.results);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }, []);

  const initData = useCallback(async () => {
    setIsLoading(true);
    try {
      currentPosition = await getPosition();
      updateData();
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  }, [updateData]);

  useEffect(() => {
    initData();
  }, [initData]);

  return (
    <div className="container">
      {error ? (
        <h1 style={{ color: "#fff" }}>{`Error: ${error}`}</h1>
      ) : sunriseSunsetData ? (
        <div className="content">
          <DateTitle
            month={date.getMonth() + 1}
            day={date.getDate()}
            year={date.getFullYear()}
          />
          <TextWithLabel
            label="Sunrise"
            text={getHoursMinutesStringFromTime(
              new Date(sunriseSunsetData.sunrise)
            )}
          />
          <TextWithLabel
            label="Sunset"
            text={getHoursMinutesStringFromTime(
              new Date(sunriseSunsetData.sunset)
            )}
          />
          <TextWithLabel
            label="Length"
            text={getHoursMinutesStringFromSeconds(
              sunriseSunsetData.day_length
            )}
          />
          <div>
            <Button value={-7} onClick={updateData}>
              - 7 days
            </Button>
            <Button value={-1} onClick={updateData}>
              - 1 day
            </Button>
            <Button value={1} onClick={updateData}>
              + 1 day
            </Button>
            <Button value={7} onClick={updateData}>
              + 7 days
            </Button>
          </div>
          <GradientLine
            id="linGrad1"
            from={useMemo(
              () =>
                getPercentsFromTime(
                  new Date(sunriseSunsetData.civil_twilight_begin)
                ),
              [sunriseSunsetData]
            )}
            to={useMemo(
              () =>
                getPercentsFromTime(
                  new Date(sunriseSunsetData.civil_twilight_end)
                ),
              [sunriseSunsetData]
            )}
          />
        </div>
      ) : isLoading ? (
        <h1 style={{ color: "#fff" }}>Loading...</h1>
      ) : null}
    </div>
  );
};
