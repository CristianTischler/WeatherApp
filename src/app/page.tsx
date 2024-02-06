import React from "react";
import { Metadata } from "next";
import styles from "./page.module.css";
import HomeScreen from "@/screens/Home";

export const metadata: Metadata = {
  title: "PruebaTecnica",
  description: "Prueba tecnica Personal Pay - Frontend",
};

export default function HomePage() {
  return (
    <main className={styles.main}>
      <HomeScreen />
    </main>
  );
}
