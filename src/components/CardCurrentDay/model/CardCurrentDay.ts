import { Daily, Hourly } from "@/models";

export interface CardCurrentDayProps {
  currentDay: Daily;
  hours: Hourly[];
}
