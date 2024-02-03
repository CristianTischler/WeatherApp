"use client";
import React, { useEffect, useState } from "react";
import styles from "./cardCurrentDay.module.css";
import Image from "next/image";
import { CardCurrentDayProps } from "./model";
import { formatSpanishDate } from "@/utils";
import { Hourly } from "@/models";
import { HourSelector } from "../HourSelector";
import { CardDay, Loader } from "..";
import { CardDayHours } from "../CardDayHours";

export const CardCurrentDay: React.FC<CardCurrentDayProps> = ({
  currentDay,
  hours,
  loading,
}: CardCurrentDayProps) => {
  const formattedDate = formatSpanishDate(currentDay.dt);

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
        <CardDay day={currentDay} title="Tiempo Hoy" />
        <CardDayHours hours={hours} />
      </div>
    </div>
  );
};
