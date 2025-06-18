// src/components/header/HeaderButtons.jsx
import React, { useContext } from "react";
import { Button } from "../common/Button";
import { Download, Sun, Moon } from "lucide-react";
import { ThemeContext } from "../common/ThemeProvider";

export const HeaderButtons = ({ onExport, chartData }) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={onExport}
        disabled={!chartData.length}
        variant="success"
        icon={Download}
        className="sm:flex"
      >
        Export CSV
      </Button>
      <Button
        onClick={toggleTheme}
        variant="secondary"
        className="p-2"
        icon={isDark ? Sun : Moon}
      />
    </div>
  );
};