// src/components/MainLayout.jsx
import React, { useContext, useState } from "react";
import { CurrencyChart } from "./charts/CurrencyChart";
import { CurrencyPairList } from "./currency/CurrencyPairList";
import { CurrencyConverter } from "./converter/CurrencyConverter";
import { Select } from "./common/Select";
import { Button } from "./common/Button";
import { ThemeContext } from "./common/ThemeProvider";
import { Calendar, Globe, Plus, BarChart3, LineChartIcon } from "lucide-react";
import { currencies } from "../constants/currencies";
import { useCurrencyData } from "../hooks/useCurrencyData";

export const MainLayout = () => {
  const {
    currencyPairs,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    chartData,
    loading,
    error,
    addCurrencyPair,
    removeCurrencyPair,
    loadData: onRetry,
  } = useCurrencyData();

  const { isDark } = useContext(ThemeContext);

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
    <div className={`min-h-screen pt-20 transition-colors duration-200 ${isDark ? "bg-zinc-900 text-gray-200" : "bg-gray-50 text-gray-900"}`}>
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Controls Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Currency Pairs */}
            <div
              className={`p-4 rounded-xl shadow-sm ${
                isDark
                  ? "bg-zinc-800 border border-zinc-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <h3
                className={`font-semibold mb-3 flex items-center gap-2 ${
                  isDark ? "text-gray-200" : "text-gray-800"
                }`}
              >
                <Globe
                  size={18}
                  className={` ${isDark ? "text-blue-400" : "text-blue-600"}`}
                />
                Currency Pairs
              </h3>

              <CurrencyPairList
                pairs={currencyPairs}
                onRemove={removeCurrencyPair}
              />

              {/* Add new pair */}
              <div className="space-y-2">
                <Select
                  value={newBaseCurrency}
                  onChange={setNewBaseCurrency}
                  options={currencies}
                  placeholder="Select base currency"
                />
                <Select
                  value={newTargetCurrency}
                  onChange={setNewTargetCurrency}
                  options={currencies}
                  placeholder="Select target currency"
                />
                <Button
                  onClick={handleAddCurrencyPair}
                  disabled={
                    !newBaseCurrency ||
                    !newTargetCurrency ||
                    newBaseCurrency === newTargetCurrency
                  }
                  variant="primary"
                  icon={Plus}
                >
                  Add Pair
                </Button>
              </div>
            </div>

            {/* Date Range */}
            <div
              className={`p-4 rounded-xl shadow-sm ${
                isDark
                  ? "bg-zinc-800 border border-zinc-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <h3
                className={`font-semibold mb-3 flex items-center gap-2 ${
                  isDark ? "text-gray-200" : "text-gray-800"
                }`}
              >
                <Calendar
                  size={18}
                  className={` ${isDark ? "text-blue-400" : "text-blue-600"}`}
                />
                Date Range
              </h3>

              <div className="space-y-3">
                <div>
                  <label
                    className={`block text-sm font-medium mb-1 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDark
                        ? "bg-zinc-700 border-zinc-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-1 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDark
                        ? "bg-zinc-700 border-zinc-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Chart Controls */}
            <div
              className={`p-4 rounded-xl shadow-sm ${
                isDark
                  ? "bg-zinc-800 border border-zinc-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <h3
                className={`font-semibold mb-3 ${
                  isDark ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Chart Options
              </h3>

              <div className="flex gap-2">
                <Button
                  onClick={() => setChartType("line")}
                  variant={chartType === "line" ? "primary" : isDark ? "secondary" : "outline"}
                  icon={LineChartIcon}
                >
                  Line
                </Button>
                <Button
                  onClick={() => setChartType("bar")}
                  variant={chartType === "bar" ? "primary" : isDark ? "secondary" : "outline"}
                  icon={BarChart3}
                >
                  Bar
                </Button>
              </div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="lg:col-span-3">
            <div className={`p-4 rounded-xl shadow-sm h-full ${
              isDark ? "bg-zinc-800 border border-zinc-700" : "bg-white border border-gray-200"
            }`}>
              <CurrencyChart
                chartData={chartData}
                currencyPairs={currencyPairs}
                chartType={chartType}
                loading={loading}
                error={error}
                startDate={startDate}
                endDate={endDate}
                onRetry={onRetry}
              />
            
              <CurrencyConverter />
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};