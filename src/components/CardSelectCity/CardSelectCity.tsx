"use client";
import React, { use, useEffect, useState } from "react";
import { CardSelectCityProps } from "./model";
import styles from "./cardselectcity.module.css";
import { CustomDropdown } from "..";
import { M_City } from "@/models";

export const CardSelectCity: React.FC<CardSelectCityProps> = ({
  onSelect,
  cities,
  citySelected,
}: CardSelectCityProps) => {
  const [selectedOption, setSelectedOption] = useState(
    citySelected ?? cities[0]
  );
  useEffect(() => {
    setSelectedOption(citySelected);
  }, [citySelected]);

  return (
    <div className={styles.card}>
      <p className={styles.title}>
        Selecciona una ciudad para ver el clima actual
      </p>
      <CustomDropdown
        selected={selectedOption}
        options={cities}
        onSelect={(value: M_City) => {
          onSelect(value);
        }}
      />
    </div>
  );
};
