"use client";
import React, { useState } from "react";

interface ArrowProps {
  isOpen: boolean;
  size?: number;
  circleColor?: string;
  arrowColor?: string;
}
export const Arrow: React.FC<ArrowProps> = ({
  isOpen,
  size,
  arrowColor,
  circleColor,
}: ArrowProps) => {
  return (
    <svg
      width={size ?? "60"}
      height={size ?? "60"}
      viewBox="0 0 60 60"
      fill="none"
    >
      <circle cx="30" cy="30" r="30" fill={circleColor ?? "#D9D9D9"} />
      {isOpen ? (
        <path
          d="M28.4446 17.9243C29.2451 16.934 30.7549 16.934 31.5554 17.9243L44.6877 34.1713C45.7449 35.4792 44.814 37.4286 43.1323 37.4286H16.8677C15.186 37.4286 14.2551 35.4792 15.3123 34.1713L28.4446 17.9243Z"
          fill={arrowColor ?? "black"}
        />
      ) : (
        <path
          d="M31.5554 42.6471C30.7549 43.6374 29.2451 43.6374 28.4446 42.6471L15.3123 26.4001C14.2551 25.0922 15.186 23.1428 16.8677 23.1428L43.1323 23.1428C44.814 23.1428 45.7449 25.0922 44.6877 26.4001L31.5554 42.6471Z"
          fill={arrowColor ?? "black"}
        />
      )}
    </svg>
  );
};
