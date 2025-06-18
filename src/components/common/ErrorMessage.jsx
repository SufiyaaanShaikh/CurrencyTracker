// src/components/common/ErrorMessage.jsx
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export const ErrorMessage = ({ message, onRetry }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className={`p-4 rounded-lg border ${
        isDark
          ? "bg-red-900 border-red-700 text-red-200"
          : "bg-red-50 border-red-200 text-red-800"
      }`}
    >
      <p className="font-semibold">Error loading data</p>
      <p className="text-sm mt-1">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className={`mt-2 px-3 py-1 rounded text-sm font-medium ${
            isDark
              ? "bg-red-800 hover:bg-red-700 text-red-200"
              : "bg-red-100 hover:bg-red-200 text-red-800"
          }`}
        >
          Retry
        </button>
      )}
    </div>
  );
};