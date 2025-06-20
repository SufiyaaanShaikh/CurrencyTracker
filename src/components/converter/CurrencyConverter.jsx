// src/components/converter/CurrencyConverter.jsx
import React, { useContext, useState, useEffect } from "react";
import { Select } from "../common/Select";
import { ThemeContext } from "../common/ThemeProvider";
import { currencies, FRANKFURTER_API_BASE } from "../../constants/currencies";
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
    if (converterFrom === converterTo) {
      setConverterResult({
        amount: converterAmount,
        from: converterFrom,
        to: converterTo,
        result: converterAmount.toFixed(2),
        rate: 1,
        date: new Date().toISOString().split("T")[0],
      });
      return;
    }
    if (converterAmount <= 0) {
      setConverterResult(null);
      return;
    }

    if (converterAmount > 100000000000000) {
      setConverterResult({
        amount: converterAmount,
        from: converterFrom,
        to: converterTo,
        result: `Amount exceeds limit`,
        rate: 0,
        date: new Date().toISOString().split("T")[0],
      });
      return;
    }

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
    <div
      className={`p-6 rounded-xl shadow-sm border ${
        isDark ? "bg-zinc-800 border-zinc-700" : "bg-white border-gray-200"
      }`}
    >
      <h3
        className={`font-semibold mb-4 flex items-center gap-2 ${
          isDark ? "text-gray-200" : "text-gray-800"
        }`}
      >
        <TrendingUp
          size={20}
          className={isDark ? "text-blue-400" : "text-blue-600"}
        />
        Quick Converter
      </h3>

      <div className="space-y-4">
        <div>
          <input
            type="number"
            value={converterAmount}
            onChange={(e) => setConverterAmount(parseFloat(e.target.value))}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              isDark
                ? "bg-zinc-700 border-zinc-600 text-white focus:ring-blue-500"
                : "bg-white border-gray-300 text-gray-900 focus:ring-blue-500"
            }`}
            placeholder="Amount"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
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

        {converterLoading ? (
          <div className="flex items-center justify-center p-4">
            <div
              className={`animate-spin rounded-full h-6 w-6 border-b-2 ${
                isDark ? "border-blue-400" : "border-blue-600"
              }`}
            ></div>
            <span
              className={`ml-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              Converting...
            </span>
          </div>
        ) : converterResult ? (
          <div
            className={`p-4 rounded-lg ${
              isDark ? "bg-zinc-700" : "bg-gray-50"
            }`}
          >
            <div
              className={`text-xl font-semibold ${
                isDark ? "text-green-400" : "text-green-600"
              } ${converterResult.rate === 0 ? "text-red-600" : ""}`}
            >
              {converterResult.result}{" "}
              {converterResult.rate == 0 ? "" : converterResult.to}
            </div>
            <div
              className={`text-sm mt-1 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {converterResult.rate === 0
                ? ""
                : ` 1 ${converterResult.from} = ${converterResult.rate.toFixed(
                    4
                  )}
              ${converterResult.to}`}
            </div>
            <div
              className={`text-xs mt-2 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              As of {converterResult.date}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
