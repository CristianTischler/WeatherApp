"use client";
import React from "react";
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
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCity, setWeatherCity } from "@/redux/features/weatherSlice";
const HomeScreen = () => {
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

  const weatherCity = useAppSelector((state) => state.weatherReducer.weather);
  const city = useAppSelector((state) => state.weatherReducer.currentCity);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetch = async ({ lat, lon }: { lat: number; lon: number }) => {
      setLoading(true);
      const cityWeather: M_WeatherData = await getWeatherLocation({
        lat: lat,
        lon: lon,
        exclude: "minutely,alerts",
        units: "metric",
        lang: "es",
      });
      dispatch(setWeatherCity(cityWeather));
      setLoading(false);
    };
    if (city !== null) fetch({ lat: city?.lat, lon: city?.long });
  }, [city, cities, dispatch]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (cities[0].name !== "Mi ubicación") {
            const myLocation = {
              name: "Mi ubicación",
              long: position.coords.longitude,
              lat: position.coords.latitude,
            };
            setCities([myLocation, ...cities]);
            dispatch(setCity(myLocation));
          }
        },
        (error) => {
          console.error("Error getting geolocation:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.container} data-testid="home">
      <div
        className={classNames(
          styles.grid,
          weatherCity === null ? styles.grid_withOut : null
        )}
      >
        {weatherCity !== null ? (
          <>
            <div className={styles.currentDay} data-testid="currentDayCard">
              <CardCurrentDay loading={loading} />
            </div>
            <div
              className={styles.fiveDays}
              data-testid="cardsFiveDaysContainer"
            >
              <CardsFiveDaysContainer loading={loading} />
            </div>
          </>
        ) : loading ? (
          <div className={styles.loadingContainer}>
            <Loader />
          </div>
        ) : null}
        <div className={styles.selectCity} data-testid="cardSelectCity">
          <CardSelectCity cities={cities} />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
