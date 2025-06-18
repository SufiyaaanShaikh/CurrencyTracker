// src/components/header/AppHeader.jsx
import React, { useContext } from "react";
import { CircleDollarSign, TrendingUp } from "lucide-react";
import GooeyNav from "../GooeyNav";
import { HeaderButtons } from "./HeaderButtons";
import { navItems } from "../../constants/navItems";
import { ThemeContext } from "../common/ThemeProvider";
import Navbar from "./Navbar";

export const AppHeader = ({ onExport, chartData }) => {
  
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={`fixed w-full flex justify-between items-center ${isDark ? "dark:bg-gray-900" : "bg-gray-50"}`}>
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4 py-2">
        <div className={`text-white flex items-center justify-center gap-2`}>
          <CircleDollarSign size={24} className={` ${isDark? "text-gray-200" : "text-gray-800"}`} />
          <p className={`text-xl ${isDark? "text-gray-200" : "text-gray-800"}`}>Currency Tracker</p>
        </div>
       <Navbar />
        <HeaderButtons onExport={onExport} chartData={chartData} />
      </div>
    </div>
  );
};