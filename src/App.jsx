// src/App.jsx
import { useState } from "react";
import { ThemeProvider } from "./components/common/ThemeProvider";
import { AppHeader } from "./components/header/AppHeader";
import { MainLayout } from "./components/MainLayout";
import { useCurrencyData } from "./hooks/useCurrencyData";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const { chartData, exportToCSV } = useCurrencyData();

  return (
    <ThemeProvider>
      <AppHeader onExport={exportToCSV} chartData={chartData} />
      <Routes>
        
        <Route path="/exchange-rate" element={<MainLayout />} />
      </Routes>
    </ThemeProvider>
  );
}
