// src/components/header/HeaderButtons.jsx
import React, { useContext, useEffect } from "react";
import { Button } from "../common/Button";
import { Download, Sun, Moon } from "lucide-react";
import { ThemeContext } from "../common/ThemeProvider";
import { useLocation } from "react-router-dom";

export const HeaderButtons = ({ onExport, chartData, error }) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  useEffect(() => {
    console.log(chartData);
  }, [chartData]);

  return (
    <div className="flex items-center gap-2">
      {location.pathname == "/exchange-rate" ? (
        <Button
          onClick={onExport}
          disabled={error >= 1 || !chartData || chartData.length === 0}
          variant="success"
          icon={Download}
          className="sm:flex"
        >
         <p className="hidden sm:inline">Export CSV</p>
        </Button>
      ) : null}
      <Button
        onClick={toggleTheme}
        variant="secondary"
        className="p-2 cursor-pointer"
        icon={isDark ? Sun : Moon}
      />
    </div>
  );
};
