"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./carday.module.css";
import { CarDayProps } from "./model";
import { formatSpanishDate } from "@/utils";

export const CardDay: React.FC<CarDayProps> = ({ day, title }: CarDayProps) => {
  const formattedDate = formatSpanishDate(day.dt);
  return (
    <div className={styles.currentDay}>
      <p>{title ?? formattedDate.dayOfWeek + " " + formattedDate.dayOfMonth}</p>
      <div className={styles.icon}>
        <Image
          src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          alt="Weather icon"
          width={80}
          height={80}
        />
        <p className={styles.description}>
          {day.weather[0].description.charAt(0).toUpperCase() +
            day.weather[0].description.slice(1)}
        </p>
      </div>
      <div className={styles.currentDayTemp}>
        <p className={styles.maxTemp}>{day.temp.max.toPrecision(3)} °C</p>
        <p className={styles.minTemp}>{day.temp.min.toPrecision(3)} °C</p>
      </div>
    </div>
  );
};
