import type { GetServerSideProps, NextPage } from "next";

import {useState,useEffect} from 'react'
import { User } from "./api/users";
import { Data } from "./api/weather";


const Weather: NextPage = () => {
  const [weather, setWeather] = useState<Data>();
  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch('/api/weather');
      const data: Data = await response.json();
      setWeather(data);
    };
    fetchWeather();
  }, []);

  return (
    <div>{weather && <p>東京の天気：{weather.weather[0].main}</p>}</div>
  );
}

export default Weather;
