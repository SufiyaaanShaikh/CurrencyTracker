// src/components/header/HeaderButtons.jsx
import React, { useContext } from "react";
import { Button } from "../common/Button";
import { Download, Sun, Moon } from "lucide-react";
import { ThemeContext } from "../common/ThemeProvider";
import { useLocation } from "react-router-dom";

export const HeaderButtons = ({ onExport, chartData }) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
   const location = useLocation();

  return (
    <div className="flex items-center gap-2">
      {location.pathname == "/exchange-rate" ? ( <Button
        onClick={onExport}
        disabled={!chartData.length}
        variant="success"
        icon={Download}
        className="sm:flex"
      >
        Export CSV
      </Button>) : null}
      <Button
        onClick={toggleTheme}
        variant="secondary"
        className="p-2"
        icon={isDark ? Sun : Moon}
      />
    </div>
  );
};