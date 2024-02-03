import { M_City } from "@/models";

export interface CardSelectCityProps {
  onSelect: (value: M_City) => void;
  cities: M_City[];
  citySelected: M_City;
}
