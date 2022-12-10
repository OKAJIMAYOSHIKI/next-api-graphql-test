import { NextApiRequest, NextApiResponse } from 'next';

export type Data = {
  coord: {
    lon: number
    lat: number
  }
  weather: [
    {
      id: number
      main: string
      description: string
      icon:02n
    }
  ]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
  }
  clouds: {
    all: number
  }
  dt: number,
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: 200
}

const weather = async (_req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${process.env.OPEN_WEATHER_API_KEY}&lang=ja`
  );
  const data: Data = await response.json();
  res.status(200).json(data);
};

export default weather;