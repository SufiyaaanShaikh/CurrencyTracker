// src/components/common/Select.jsx
import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeProvider";

export const Select = ({
  value,
  onChange,
  options,
  placeholder,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-2.5 cursor-pointer text-left border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
          isDark
            ? "bg-zinc-700 border-zinc-600 text-white hover:bg-zinc-600"
            : "bg-white border-gray-300 text-gray-900 hover:bg-gray-50"
        }`}
      >
        {value
          ? options.find((opt) => opt.code === value)?.name || value
          : placeholder}
      </button>

      {isOpen && (
        <div
            className={`absolute z-[2] w-full mt-1 border rounded-xl shadow-lg max-h-60 overflow-auto ${
            isDark ? "bg-zinc-800 border-zinc-700" : "bg-white border-gray-200"
          }`}
        >
          {options.map((option) => (
            <button
              key={option.code}
              onClick={() => {
                onChange(option.code);
                setIsOpen(false);
              }}
              className={`w-full cursor-pointer px-4 py-2.5 text-left transition-colors flex items-center ${
                isDark
                  ? "hover:bg-zinc-700 text-gray-200"
                  : "hover:bg-gray-100 text-gray-800"
              } ${
                value === option.code
                  ? isDark
                    ? "bg-blue-900/30 text-blue-400"
                    : "bg-blue-100 text-blue-600"
                  : ""
              }`}
            >
              {option.flag && <span className="mr-2">{option.flag}</span>}
              <span>
                {option.name} <span className="text-xs opacity-75">({option.code})</span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};