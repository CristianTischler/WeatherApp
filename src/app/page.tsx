import React from "react";
import { Metadata } from "next";
import styles from "./page.module.css";
import HomeScreen from "@/screens/Home";

export const metadata: Metadata = {
  title: "Weather App",
  description: "Weather App",
};

export default function HomePage() {
  return (
    <main className={styles.main}>
      <HomeScreen />
    </main>
  );
}
