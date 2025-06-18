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
        className={`w-full px-3 py-2 text-left border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          isDark
            ? "bg-gray-800 border-gray-600 text-white"
            : "bg-white border-gray-300 text-gray-900"
        }`}
      >
        {value
          ? options.find((opt) => opt.code === value)?.name || value
          : placeholder}
      </button>

      {isOpen && (
        <div
          className={`absolute z-[2] w-full mt-1 border rounded-lg shadow-lg max-h-60 overflow-auto ${
            isDark ? "bg-gray-800 border-gray-600" : "bg-white border-gray-300"
          }`}
        >
          {options.map((option) => (
            <button
              key={option.code}
              onClick={() => {
                onChange(option.code);
                setIsOpen(false);
              }}
              className={`w-full px-3 py-2 text-left hover:bg-opacity-75 ${
                isDark
                  ? "hover:bg-gray-700 text-white"
                  : "hover:bg-gray-100 text-gray-900"
              }`}
            >
              <span className="mr-2">{option.flag}</span>
              {option.name} ({option.code})
            </button>
          ))}
        </div>
      )}
    </div>
  );
};