"use client";
import React, { useState } from "react";
import { CardsFiveDaysContainerProps } from "./model";
import styles from "./cardsfivedayscontainer.module.css";

export const CardsFiveDaysContainer: React.FC<
  CardsFiveDaysContainerProps
> = ({}: CardsFiveDaysContainerProps) => {
  return (
    <div className={styles.card}>
      <p>CardsFiveDaysContainer</p>
    </div>
  );
};
