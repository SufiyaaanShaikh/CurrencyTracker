// src/components/header/AppHeader.jsx
import React, { useContext } from "react";
import { CircleDollarSign } from "lucide-react";
import { HeaderButtons } from "./HeaderButtons";
import { ThemeContext } from "../common/ThemeProvider";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export const AppHeader = ({ onExport, chartData, error }) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  
  return (
    <header className={`fixed z-10 w-full border-b ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200'} shadow-sm`}>
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4 py-3">

        <Link 
          to="/" 
          className="flex items-center gap-2 group"
        >
          <div className={`p-2 rounded-lg ${isDark ? 'bg-zinc-800 text-blue-400' : 'bg-blue-100 text-blue-600'} group-hover:opacity-90 transition-opacity`}>
            <CircleDollarSign size={24} />
          </div>
          <span className={`text-xl font-semibold ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
            Currency Tracker
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Navbar />
          <HeaderButtons onExport={onExport} chartData={chartData} error={error} />
        </div>
      </div>
    </header>
  );
};