import axios, { AxiosResponse } from "axios";
import { config } from "@/config";

const api = axios.create({
  baseURL: config.apiUrl,
  timeoutErrorMessage: "Timeout error",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// api.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response;
//   },
//   (error) => {
//     console.log("services/axios/index.ts: ERROR= ", error);
//     return Promise.reject(error);
//   }
// );

export default api;
