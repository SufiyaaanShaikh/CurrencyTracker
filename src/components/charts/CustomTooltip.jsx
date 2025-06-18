// src/components/charts/CustomTooltip.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../common/ThemeProvider";

export const CustomTooltip = ({ active, payload, label }) => {
  const { isDark } = useContext(ThemeContext);
  if (active && payload && payload.length) {
    return (
      <div
        className={`p-3 rounded-lg shadow-lg border ${
          isDark
            ? "bg-gray-800 border-gray-600 text-white"
            : "bg-white border-gray-300 text-gray-900"
        }`}
      >
        <p className="font-semibold">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.dataKey}: {entry.value?.toFixed(4)}
          </p>
        ))}
      </div>
    );
  }
  return null;
};