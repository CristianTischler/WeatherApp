"use client";

import {
  CardCurrentDay,
  CardSelectCity,
  CardsFiveDaysContainer,
  Loader,
} from "@/components";
import { M_City, M_WeatherData } from "@/models";
import { getWeatherLocation } from "@/services/weatherAPI";
import { useEffect, useState } from "react";
import styles from "./home.module.css";
import classNames from "classnames";

const HomeScreen = () => {
  const [city, setCity] = useState<M_City>();
  const [weather, setWeather] = useState<M_WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState<M_City[]>([
    {
      name: "Buenos Aires",
      long: -58.3816,
      lat: -34.6037,
    },
    {
      name: "Nueva York",
      long: -74.006,
      lat: 40.7128,
    },
    {
      name: "París",
      long: 2.3522,
      lat: 48.8566,
    },
    {
      name: "Sídney",
      long: 151.2093,
      lat: -33.8688,
    },
    {
      name: "Río de Janeiro",
      long: -43.1729,
      lat: -22.9068,
    },
  ]);

  const fetch = async ({ lat, lon }: { lat: number; lon: number }) => {
    setLoading(true);
    const cityWeather: M_WeatherData = await getWeatherLocation({
      lat: lat,
      lon: lon,
      exclude: "minutely,alerts",
      units: "metric",
      lang: "es",
    });
    setWeather(cityWeather);
    setLoading(false);
  };

  useEffect(() => {
    if (city) fetch({ lat: city?.lat, lon: city?.long });
    else {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            if (cities[0].name !== "Mi ubicación") {
              setCities([
                {
                  name: "Mi ubicación",
                  long: position.coords.longitude,
                  lat: position.coords.latitude,
                },
                ...cities,
              ]);
            }
            setCity({
              name: "Mi ubicación",
              long: position.coords.longitude,
              lat: position.coords.latitude,
            });
            fetch({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            });
          },
          (error) => {
            console.error("Error getting geolocation:", error.message);
          }
        );
      } else {
        console.error("Geolocation is not supported by your browser");
      }
    }
  }, [city]);

  return (
    <div className={styles.container}>
      <div
        className={classNames(
          styles.grid,
          weather === null ? styles.grid_withOut : null
        )}
      >
        {weather !== null ? (
          <>
            <div className={styles.currentDay}>
              <CardCurrentDay
                loading={loading}
                currentDay={weather.daily[0]}
                hours={weather.hourly}
              />
            </div>
            <div className={styles.fiveDays}>
              <CardsFiveDaysContainer days={weather.daily} loading={loading} />
            </div>
          </>
        ) : loading ? (
          <div className={styles.loadingContainer}>
            <Loader />
          </div>
        ) : null}
        <div className={styles.selectCity}>
          <CardSelectCity
            citySelected={city ?? cities[0]}
            onSelect={(value: M_City) => setCity(value)}
            cities={cities}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
