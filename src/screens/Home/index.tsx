"use client";

import { CardCurrentDay, CardsFiveDaysContainer } from "@/components";
import { M_WeatherData } from "@/models";
import { getWeatherLocation } from "@/services/weatherAPI";
import { useEffect, useState } from "react";

const HomeScreen = () => {
  const [weather, setWeather] = useState<M_WeatherData | null>(null);
  const fetch = async () => {
    const buenosAires: M_WeatherData = await getWeatherLocation({
      lat: -34.61315,
      lon: -58.37723,
      exclude: "minutely,alerts",
      units: "metric",
      lang: "es",
    });
    console.log("tiempo", new Date(buenosAires.daily[0].dt * 1000)); //Lo convierto de segundos a milisegundos
    console.log("buenosAires", buenosAires);
    setWeather(buenosAires);
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <h1>HOME SCREEN</h1>
      {weather !== null ? (
        <>
          <CardCurrentDay
            currentDay={weather.daily[0]}
            hours={weather.hourly}
          />
          <CardsFiveDaysContainer days={weather.daily} />
        </>
      ) : null}
    </div>
  );
};

export default HomeScreen;
