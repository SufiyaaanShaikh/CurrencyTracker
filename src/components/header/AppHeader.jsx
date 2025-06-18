// src/components/header/AppHeader.jsx
import React, { useContext } from "react";
import { CircleDollarSign, TrendingUp } from "lucide-react";
import { HeaderButtons } from "./HeaderButtons";
import { ThemeContext } from "../common/ThemeProvider";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export const AppHeader = ({ onExport, chartData, error }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className={`fixed z-10 w-full flex justify-between items-center ${
        isDark ? "dark:bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4 py-2">
        <div className={`text-white flex items-center justify-center gap-2`}>
          <CircleDollarSign
            size={24}
            className={` ${isDark ? "text-gray-200" : "text-gray-800"}`}
          />
          <Link
            to="/"
            className={`text-xl ${isDark ? "text-gray-200" : "text-gray-800"}`}
          >
            Currency Tracker
          </Link>
        </div>
        <div className="flex justify-center items-center gap-2">
        <Navbar />
        <HeaderButtons onExport={onExport} chartData={chartData} error={error}/>
        </div>
      </div>
    </div>
  );
};
