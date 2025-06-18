// src/App.jsx
import React, { useState } from "react";
import { ThemeProvider } from "./components/common/ThemeProvider";
import { AppHeader } from "./components/header/AppHeader";
import { MainLayout } from "./components/MainLayout";
import { useCurrencyData } from "./hooks/useCurrencyData";
import { currencies } from "./constants/currencies";

export default function App() {
  const {
    availableCurrencies,
    currencyPairs,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    chartData,
    loading,
    error,
    apiStatus,
    addCurrencyPair,
    removeCurrencyPair,
    exportToCSV,
    loadData,
  } = useCurrencyData();

  const [newBaseCurrency, setNewBaseCurrency] = useState("");
  const [newTargetCurrency, setNewTargetCurrency] = useState("");
  const [chartType, setChartType] = useState("line");

  const handleAddCurrencyPair = () => {
    addCurrencyPair({
      base: newBaseCurrency,
      target: newTargetCurrency,
    });
    setNewBaseCurrency("");
    setNewTargetCurrency("");
  };

  return (
    <ThemeProvider>
      <AppHeader onExport={exportToCSV} chartData={chartData} />
      <div className="min-h-screen pt-32 transition-colors duration-200 dark:bg-gray-900 dark:text-white bg-gray-50 text-gray-900">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <MainLayout
            currencyPairs={currencyPairs}
            newBaseCurrency={newBaseCurrency}
            newTargetCurrency={newTargetCurrency}
            setNewBaseCurrency={setNewBaseCurrency}
            setNewTargetCurrency={setNewTargetCurrency}
            addCurrencyPair={handleAddCurrencyPair}
            removeCurrencyPair={removeCurrencyPair}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            chartType={chartType}
            setChartType={setChartType}
            chartData={chartData}
            loading={loading}
            error={error}
            onRetry={loadData}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}