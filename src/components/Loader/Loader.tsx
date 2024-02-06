"use client";
import React from "react";
import styles from "./loader.module.css";
import { LoaderProps } from "./model";

export const Loader: React.FC<LoaderProps> = ({ size }: LoaderProps) => {
  return (
    <div
      className={styles.loadership_ZCKDK}
      style={{ width: size, height: size }}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
