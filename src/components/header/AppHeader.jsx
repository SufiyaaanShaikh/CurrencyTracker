// src/components/header/AppHeader.jsx
import React from "react";
import { CircleDollarSign, TrendingUp } from "lucide-react";
import GooeyNav from "../GooeyNav";
import { HeaderButtons } from "./HeaderButtons";
import { navItems } from "../../constants/navItems";

export const AppHeader = ({ onExport, chartData }) => {
  return (
    <div className="fixed bg-gray-900 w-full flex justify-between items-center">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4 py-2">
        <div className="text-white flex items-center justify-center gap-2">
          <CircleDollarSign />
          <p className="text-xl">Currency Tracker</p>
        </div>
        <GooeyNav
          items={navItems}
          particleCount={7}
          particleDistances={[50, 10]}
          particleR={30}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
        <HeaderButtons onExport={onExport} chartData={chartData} />
      </div>
    </div>
  );
};