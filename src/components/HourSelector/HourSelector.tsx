import React, { ChangeEvent, useState } from "react";
import { HourSelectorProps } from "./model";
import { Hourly } from "@/models";
import styles from "./hourSelector.module.css";

export const HourSelector: React.FC<HourSelectorProps> = ({
  hourlyData,
  onSelectHour,
}: HourSelectorProps) => {
  const [selectedHourIndex, setSelectedHourIndex] = useState(0);
  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedHourIndex = parseInt(e.target.value, 10);
    setSelectedHourIndex(selectedHourIndex);
    const selected: Hourly = hourlyData[selectedHourIndex];
    onSelectHour(selected);
  };
  const sliderMaxValue = hourlyData.length - 1;

  return (
    <div className={styles.hourSelector}>
      <div className={styles.sliderContainer}>
        <input
          alt="hourSlider"
          type="range"
          id="hourSlider"
          className={styles.hourSlider}
          min={0}
          max={sliderMaxValue}
          step={1}
          value={selectedHourIndex}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};
