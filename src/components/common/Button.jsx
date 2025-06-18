// src/components/common/Button.jsx
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export const Button = ({
  children,
  onClick,
  disabled = false,
  className = "",
  variant = "primary",
  icon: Icon,
}) => {
  const { isDark } = useContext(ThemeContext);

  const variants = {
    primary: isDark
      ? "bg-blue-800 hover:bg-blue-700 text-blue-200"
      : "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: isDark
      ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
      : "bg-gray-200 hover:bg-gray-300 text-gray-700",
    success: isDark
      ? "bg-green-800 hover:bg-green-700 text-green-200"
      : "bg-green-600 hover:bg-green-700 text-white",
    danger: isDark
      ? "bg-red-800 hover:bg-red-700 text-red-200"
      : "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-3 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${variants[variant]} ${className}`}
    >
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
};