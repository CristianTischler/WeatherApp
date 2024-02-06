"use client";
import { formatSpanishDate, getWeatherState } from "@/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Hourly } from "@/models";
import { CarDayHoursProps } from "./model";
import { HourSelector } from "../HourSelector";
import styles from "./carddayhours.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setWeatherState } from "@/redux/features/weatherSlice";

export const CardDayHours: React.FC<CarDayHoursProps> = () => {
  const weatherCity = useAppSelector((state) => state.weatherReducer.weather);
  const [selectedHour, setSelectedHour] = useState<Hourly | null>(
    weatherCity?.hourly[0] ?? null
  );
  const [selectedHourFormatted, setSelectedHourFormatted] = useState({
    dayOfWeek: "",
    dayOfMonth: 0,
    month: "",
    hour: 0,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!selectedHour) return;
    const formatedHour = formatSpanishDate(selectedHour.dt);
    setSelectedHourFormatted(formatedHour);
    dispatch(
      setWeatherState(
        getWeatherState({ id: selectedHour.weather[0].id, dt: selectedHour.dt })
      )
    );
  }, [selectedHour]);

  useEffect(() => {
    if (!weatherCity) return;
    setSelectedHour(weatherCity?.hourly[0]);
  }, [weatherCity]);
  if (!weatherCity) return null;

  return (
    <div className={styles.currentHour}>
      <div className={styles.rowTitle}>
        <p className={styles.title1}>
          {selectedHourFormatted.dayOfWeek +
            " " +
            selectedHourFormatted.dayOfMonth}
        </p>

        <p className={styles.title2} data-testid="hourTag">
          {selectedHourFormatted.hour}:00 hs
        </p>
      </div>
      <div className={styles.selectedHour}>
        <div className={styles.iconCurrentHour}>
          <Image
            src={`http://openweathermap.org/img/wn/${selectedHour?.weather[0].icon}@2x.png`}
            alt="Weather icon"
            width={80}
            height={80}
          />
          <p className={styles.descriptionCurrentHour}>
            {selectedHour
              ? selectedHour.weather[0].description.charAt(0).toUpperCase() +
                selectedHour.weather[0].description.slice(1)
              : null}
          </p>
        </div>
        <div className={styles.currentHourTemp}>
          <p className={styles.descriptionCurrentHour}>Temperatura:</p>
          <p className={styles.maxTemp}>{selectedHour?.temp.toFixed(1)} °C</p>
          <p className={styles.descriptionCurrentHour}>Humedad:</p>
          <p className={styles.humidity}>{selectedHour?.humidity} %</p>
        </div>
      </div>
      <div className={styles.hourSelector}>
        <HourSelector
          hourlyData={weatherCity?.hourly}
          onSelectHour={(hour) => {
            setSelectedHour(hour);
          }}
        />
      </div>
    </div>
  );
};
