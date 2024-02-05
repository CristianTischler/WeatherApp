"use client";
import { formatSpanishDate } from "@/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Hourly } from "@/models";
import { CarDayHoursProps } from "./model";
import { HourSelector } from "../HourSelector";
import styles from "./carddayhours.module.css";

export const CardDayHours: React.FC<CarDayHoursProps> = ({
  hours,
}: CarDayHoursProps) => {
  const [localHours, setLocalHours] = useState<Hourly[]>(hours);
  const [selectedHour, setSelectedHour] = useState<Hourly>(hours[0]);
  const [selectedHourFormatted, setSelectedHourFormatted] = useState({
    dayOfWeek: "",
    dayOfMonth: 0,
    month: "",
    hour: 0,
  });

  useEffect(() => {
    const formatedHour = formatSpanishDate(selectedHour.dt);
    setSelectedHourFormatted(formatedHour);
  }, [selectedHour]);
  useEffect(() => {
    setSelectedHour(hours[0]);
    setLocalHours(hours);
  }, [hours]);
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
            src={`http://openweathermap.org/img/wn/${selectedHour.weather[0].icon}@2x.png`}
            alt="Weather icon"
            width={80}
            height={80}
          />
          <p className={styles.descriptionCurrentHour}>
            {selectedHour.weather[0].description.charAt(0).toUpperCase() +
              selectedHour.weather[0].description.slice(1)}
          </p>
        </div>
        <div className={styles.currentHourTemp}>
          <p className={styles.descriptionCurrentHour}>Temperatura:</p>
          <p className={styles.maxTemp}>{selectedHour.temp.toFixed(1)} °C</p>
          <p className={styles.descriptionCurrentHour}>Humedad:</p>
          <p className={styles.humidity}>{selectedHour.humidity} %</p>
        </div>
      </div>
      <div className={styles.hourSelector}>
        <HourSelector
          hourlyData={localHours}
          onSelectHour={(hour) => {
            setSelectedHour(hour);
          }}
        />
      </div>
    </div>
  );
};
