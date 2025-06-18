// src/components/currency/CurrencyPair.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../common/ThemeProvider";
import { X } from "lucide-react";

export const CurrencyPair = ({ pair, onRemove, isRemovable }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className={`flex items-center justify-between p-2 rounded border ${
        isDark ? "bg-gray-800 border-gray-600" : "bg-gray-50 border-gray-200"
      }`}
    >
      <span
        className={`text-sm font-medium ${
          isDark ? "text-gray-200" : "text-gray-700"
        }`}
      >
        {pair.base} → {pair.target}
      </span>
      {isRemovable && (
        <button
          onClick={onRemove}
          className={`p-1 rounded hover:bg-opacity-75 ${
            isDark
              ? "hover:bg-gray-700 text-gray-400"
              : "hover:bg-gray-200 text-gray-500"
          }`}
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
};