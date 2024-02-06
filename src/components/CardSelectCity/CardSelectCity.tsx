"use client";
import React from "react";
import { CardSelectCityProps } from "./model";
import styles from "./cardselectcity.module.css";
import { CustomDropdown } from "..";
import { M_City } from "@/models";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCity } from "@/redux/features/weatherSlice";

export const CardSelectCity: React.FC<CardSelectCityProps> = ({
  cities,
}: CardSelectCityProps) => {
  const city = useAppSelector((state) => state.weatherReducer.currentCity);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.card}>
      <p className={styles.title}>
        Selecciona una ciudad para ver el clima actual
      </p>
      <CustomDropdown
        selected={city ?? cities[0]}
        options={cities}
        onSelect={(value: M_City) => {
          dispatch(setCity(value));
        }}
      />
    </div>
  );
};
