"use client";
import React, { useEffect } from "react";
import styles from "./cardcurrentDay.module.css";
import { CardCurrentDayProps } from "./model";
import { formatSpanishDate, getWeatherState } from "@/utils";
import { CardDay, Loader } from "..";
import { CardDayHours } from "../CardDayHours";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setWeatherState } from "@/redux/features/weatherSlice";
export const CardCurrentDay: React.FC<CardCurrentDayProps> = ({
  loading,
}: CardCurrentDayProps) => {
  const dispatch = useAppDispatch();
  const weatherCity = useAppSelector((state) => state.weatherReducer.weather);

  useEffect(() => {
    if (!weatherCity) return;
    dispatch(
      setWeatherState(
        getWeatherState({
          id: weatherCity?.hourly[0].weather[0].id,
          dt: weatherCity?.hourly[0].dt,
        })
      )
    );
  }, [dispatch, weatherCity]);

  if (!weatherCity) return null;
  const formattedDate = formatSpanishDate(weatherCity?.daily[0].dt);
  return (
    <div className={styles.card}>
      {loading ? (
        <div className={styles.loadingContainer}>
          <Loader />
        </div>
      ) : null}
      <p className={styles.title}>
        {formattedDate.dayOfWeek +
          " " +
          formattedDate.dayOfMonth +
          " " +
          formattedDate.month}
      </p>
      <div className={styles.rowContainer}>
        <CardDay title="Tiempo Hoy" day={weatherCity.daily[0]} />
        <CardDayHours />
      </div>
    </div>
  );
};
