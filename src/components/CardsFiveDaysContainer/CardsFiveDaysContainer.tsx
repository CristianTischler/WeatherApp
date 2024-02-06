"use client";
import React from "react";
import { CardsFiveDaysContainerProps } from "./model";
import styles from "./cardsfivedayscontainer.module.css";
import { CardDay, Loader } from "..";
import { useAppSelector } from "@/redux/hooks";

export const CardsFiveDaysContainer: React.FC<CardsFiveDaysContainerProps> = ({
  loading,
}: CardsFiveDaysContainerProps) => {
  const weatherCity = useAppSelector((state) => state.weatherReducer.weather);
  const daysToRender = weatherCity?.daily.slice(1, 6);
  return (
    <div className={styles.card}>
      {loading ? (
        <div className={styles.loadingContainer}>
          <Loader />
        </div>
      ) : null}
      {daysToRender?.map((day, index) => {
        return <CardDay key={index} day={day} />;
      })}
    </div>
  );
};
