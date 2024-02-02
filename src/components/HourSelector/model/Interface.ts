import { Hourly } from "@/models";

export interface HourSelectorProps {
  hourlyData: Hourly[];
  onSelectHour: (hour: Hourly) => void;
}
