import { M_City, M_WeatherData } from ".";

export interface I_WeatherState {
  weatherState: "sunny" | "night" | "rainy";
  weather: M_WeatherData | null;
  currentCity: M_City;
}
