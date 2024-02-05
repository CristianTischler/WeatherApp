"use client";
import React, { useEffect, useState } from "react";
import { CustomDropdownProps } from "./model";
import styles from "./customdropdown.module.css";
import { M_City } from "@/models";
import { Arrow } from "./assets";
import classNames from "classnames";

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  onSelect,
  selected,
}: CustomDropdownProps) => {
  const [selectedOption, setSelectedOption] = useState(selected ?? options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: M_City) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };
  useEffect(() => {
    setSelectedOption(selected);
  }, [selected]);

  return (
    <div
      className={styles.dropdown_container}
      onClick={() => setIsOpen(!isOpen)}
      style={{
        borderBottomRightRadius: isOpen ? 0 : 8,
        borderBottomLeftRadius: isOpen ? 0 : 8,
      }}
    >
      <div className={styles.arrow}>
        <Arrow isOpen={isOpen} size={35} circleColor="#ffff" />
      </div>

      <div className={styles.selected_option} data-testid="selected-option-div">
        {selectedOption.name}
      </div>
      <ul
        className={classNames(styles.options_list, isOpen ? styles.open : null)}
        data-testid="listOptions"
      >
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(option)}
            data-testid={`option-${option.name}`}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
