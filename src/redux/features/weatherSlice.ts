import { I_WeatherState } from "@/models";
import { getWeatherState } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState: I_WeatherState = {
  weatherState: "sunny",
  weather: null,
  currentCity: {
    name: "Buenos Aires",
    long: -58.3816,
    lat: -34.6037,
  },
};

interface I_Payload {
  type: any;
  payload: I_WeatherState["weatherState"];
}
interface I_PayloadWeatherCity {
  type: any;
  payload: I_WeatherState["weather"];
}
interface I_PayloadCity {
  type: any;
  payload: I_WeatherState["currentCity"];
}

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherState: (state, action: I_Payload) => {
      state.weatherState = action.payload;
      document.documentElement.setAttribute("data-theme", action.payload);
    },
    setCity: (state, action: I_PayloadCity) => {
      state.currentCity = action.payload;
    },
    setWeatherCity: (state, action: I_PayloadWeatherCity) => {
      state.weather = action.payload;
    },
  },
});

export const { setWeatherState, setWeatherCity, setCity } =
  weatherSlice.actions;
export default weatherSlice.reducer;
