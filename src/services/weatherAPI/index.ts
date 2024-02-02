import axios from "../api";
import { config } from "@/config";

interface getWeatherLocationProps {
  lat: number;
  lon: number;
  exclude?: string;
  units?: "standard" | "metric" | "imperial";
  lang?: string;
}
export const getWeatherLocation = async ({
  lat,
  lon,
  exclude,
  units,
  lang,
}: getWeatherLocationProps) => {
  const response = await axios.get("", {
    params: {
      lat,
      lon,
      appid: config.apiKey,
      exclude,
      units,
      lang,
    },
  });
  return response.data;
};
