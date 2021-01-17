const url = "https://api.sunrise-sunset.org/json"

interface GetDayInfoProps {
  position: GeolocationPosition;
  date?: Date;
}

export interface Results {
  day_length: number;
  sunrise: string;
  sunset: string;
  civil_twilight_begin: string;
  civil_twilight_end: string;
}

interface ResponseData {
  results: Results;
  status: string
}

export const getDayInfo = async ({
  position,
  date = new Date(),
}: GetDayInfoProps): Promise<ResponseData> => {
  const dateArr = [date.getFullYear(), date.getMonth() + 1, date.getDate()];

  const result = await fetch(
    `${url}?lat=${position.coords.latitude
    }&lng=${position.coords.longitude}&date=${dateArr.join("-")}&formatted=0`
  )

  return result.json()
};