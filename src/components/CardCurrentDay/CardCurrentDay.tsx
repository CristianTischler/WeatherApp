"use client";
import React, { useEffect, useState } from "react";
import styles from "./cardCurrentDay.module.css";
import Image from "next/image";
import { CardCurrentDayProps } from "./model";
import { formatSpanishDate } from "@/utils";
import { Hourly } from "@/models";
import { HourSelector } from "../HourSelector";
import { CardDay } from "..";
import { CardDayHours } from "../CardDayHours";

export const CardCurrentDay: React.FC<CardCurrentDayProps> = ({
  currentDay,
  hours,
}: CardCurrentDayProps) => {
  const formattedDate = formatSpanishDate(currentDay.dt);

  return (
    <div className={styles.card}>
      <p className={styles.title}>
        {formattedDate.dayOfWeek +
          " " +
          formattedDate.dayOfMonth +
          " " +
          formattedDate.month}
      </p>
      <div className={styles.rowContainer}>
        <CardDay day={currentDay} title="Tiempo Hoy" />
        <CardDayHours hours={hours} />
      </div>
    </div>
  );
};
