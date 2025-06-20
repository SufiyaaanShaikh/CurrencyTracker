// src/components/currency/CurrencyPair.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../common/ThemeProvider";
import { X } from "lucide-react";

export const CurrencyPair = ({ pair, onRemove, isRemovable }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-xl border transition-colors ${
        isDark 
          ? "bg-zinc-800 border-zinc-700 hover:bg-zinc-700" 
          : "bg-white border-gray-200 hover:bg-gray-50"
      }`}
    >
      <span
        className={`text-sm font-medium ${
          isDark ? "text-gray-200" : "text-gray-800"
        }`}
      >
        <span className="font-semibold">{pair.base}</span> → <span className="font-semibold">{pair.target}</span>
      </span>
      {isRemovable && (
        <button
          onClick={onRemove}
          className={`p-1.5 rounded-full transition-colors ${
            isDark
              ? "hover:bg-zinc-600 text-gray-300 hover:text-white"
              : "hover:bg-gray-200 text-gray-500 hover:text-gray-700"
          }`}
          aria-label={`Remove ${pair.base}-${pair.target} pair`}
        >
          <X size={16} className="stroke-[2.5]" />
        </button>
      )}
    </div>
  );
};