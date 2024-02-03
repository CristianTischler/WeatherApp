import { M_City } from "@/models";

export interface CustomDropdownProps {
  options: M_City[];
  onSelect: (value: M_City) => void;
  selected: M_City;
}
