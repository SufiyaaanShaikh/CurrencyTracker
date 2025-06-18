// src/components/converter/CurrencyConverter.jsx
import React, { useContext, useState, useEffect } from "react";
import { Select } from "../common/Select";
import { Button } from "../common/Button";
import { ThemeContext } from "../common/ThemeProvider";
import { currencies } from "../../constants/currencies";
import { FRANKFURTER_API_BASE } from "../../constants/currencies";
import { TrendingUp } from "lucide-react";

export const CurrencyConverter = () => {
  const { isDark } = useContext(ThemeContext);
  const [converterFrom, setConverterFrom] = useState("EUR");
  const [converterTo, setConverterTo] = useState("USD");
  const [converterAmount, setConverterAmount] = useState(100);
  const [converterResult, setConverterResult] = useState(null);
  const [converterLoading, setConverterLoading] = useState(false);

  const convertCurrency = async () => {
    if (!converterFrom || !converterTo || !converterAmount) return;

    setConverterLoading(true);
    try {
      const response = await fetch(
        `${FRANKFURTER_API_BASE}/latest?base=${converterFrom}&symbols=${converterTo}`
      );
      if (response.ok) {
        const data = await response.json();
        const rate = data.rates[converterTo];
        const result = (converterAmount * rate).toFixed(2);
        setConverterResult({
          amount: converterAmount,
          from: converterFrom,
          to: converterTo,
          result: result,
          rate: rate,
          date: data.date,
        });
      }
    } catch (error) {
      console.error("Conversion error:", error);
    } finally {
      setConverterLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (converterFrom && converterTo && converterAmount) {
        convertCurrency();
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [converterFrom, converterTo, converterAmount]);

  return (
    <div className="p-4 rounded-lg border dark:bg-gray-800 dark:border-gray-700 bg-white border-gray-200">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <TrendingUp size={18} />
        Quick Converter
      </h3>

      <div className="space-y-3">
        <div>
          <input
            type="number"
            value={converterAmount}
            onChange={(e) =>
              setConverterAmount(parseFloat(e.target.value) || 0)
            }
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDark
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300 text-gray-900"
            }`}
            placeholder="Amount"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Select
            value={converterFrom}
            onChange={setConverterFrom}
            options={currencies}
            placeholder="From"
          />
          <Select
            value={converterTo}
            onChange={setConverterTo}
            options={currencies}
            placeholder="To"
          />
        </div>

        {converterResult && (
          <div className={`p-3 rounded-lg ${isDark ? "bg-gray-700" : "bg-gray-50"}`}>
            <div className={`text-lg font-semibold ${isDark ? "text-green-400" : "text-green-600"}`}>
              {converterResult.result} {converterResult.to}
            </div>
            <div className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              1 {converterResult.from} = {converterResult.rate.toFixed(4)} {converterResult.to}
            </div>
            <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>
              As of {converterResult.date}
            </div>
          </div>
        )}

        {converterLoading && (
          <div className="flex items-center justify-center py-2">
            <div
              className={`animate-spin rounded-full h-4 w-4 border-b-2 ${
                isDark ? "border-blue-400" : "border-blue-600"
              }`}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};