"use client";
import React, { useState } from "react";
import { CardsFiveDaysContainerProps } from "./model";
import styles from "./cardsfivedayscontainer.module.css";
import { CardDay, Loader } from "..";

export const CardsFiveDaysContainer: React.FC<CardsFiveDaysContainerProps> = ({
  days,
  loading,
}: CardsFiveDaysContainerProps) => {
  const daysToRender = days.slice(1, 6);
  return (
    <div className={styles.card}>
      {loading ? (
        <div className={styles.loadingContainer}>
          <Loader />
        </div>
      ) : null}
      {daysToRender.map((day, index) => {
        return <CardDay key={index} day={day} />;
      })}
    </div>
  );
};
