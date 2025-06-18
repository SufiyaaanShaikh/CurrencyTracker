// src/components/common/LoadingSpinner.jsx
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export const LoadingSpinner = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className="flex items-center justify-center p-8">
      <div
        className={`animate-spin rounded-full h-8 w-8 border-b-2 ${
          isDark ? "border-blue-400" : "border-blue-600"
        }`}
      ></div>
      <span className={`ml-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
        Loading exchange rates...
      </span>
    </div>
  );
};