import { M_WeatherData } from "@/models";
import { config } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.apiUrl }),
  endpoints: (builder) => ({
    getWeather: builder.query<
      M_WeatherData,
      {
        lat: number;
        lon: number;
        exclude?: string;
        units?: "standard" | "metric" | "imperial";
        lang?: string;
      }
    >({
      query: ({ lat, lon, exclude, lang, units }) =>
        `?lat=${lat}&lon=${lon}&appid=${config.apiKey}&exclude=${exclude}&units=${units}&lang=${lang}`,
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
