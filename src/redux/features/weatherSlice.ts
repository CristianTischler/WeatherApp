import { I_WeatherState } from "@/models";
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

// interface I_PayloadWeatherState {
//   payload: I_WeatherState["weatherState"];
// }
// interface I_PayloadWeatherCity {
//   payload: I_WeatherState["weather"];
// }
// interface I_PayloadCity {
//   payload: I_WeatherState["currentCity"];
// }
interface Payload<T> {
  payload: T;
}

type WeatherState = {
  weatherState: I_WeatherState["weatherState"];
  weather: I_WeatherState["weather"];
  currentCity: I_WeatherState["currentCity"];
};
export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherState: (state, action: Payload<WeatherState["weatherState"]>) => {
      state.weatherState = action.payload;
      document.documentElement.setAttribute("data-theme", action.payload);
    },
    setCity: (state, action: Payload<WeatherState["currentCity"]>) => {
      state.currentCity = action.payload;
    },
    setWeatherCity: (state, action: Payload<WeatherState["weather"]>) => {
      state.weather = action.payload;
    },
  },
});

export const { setWeatherState, setWeatherCity, setCity } =
  weatherSlice.actions;
export default weatherSlice.reducer;
