import type {  NextPage } from "next";

import { Data } from "./api/weather";


const Weather: NextPage<Data> = (weather) => {


  return (
    <div>{weather && <p>東京の天気：{weather.weather[0].main}</p>}</div>
  );
}

export default Weather;

export const getServerSideProps = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${process.env.OPEN_WEATHER_API_KEY}&lang=ja`
  );
  const data: Data = await response.json();

  return { props: data };
}
