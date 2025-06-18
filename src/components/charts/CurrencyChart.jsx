// src/components/charts/CurrencyChart.jsx
import React, { useContext } from "react";
import {
  LineChart,
  AreaChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { CustomTooltip } from "./CustomTooltip";
import { ThemeContext } from "../common/ThemeProvider";
import { chartColors } from "../../constants/chartColors";
import { LoadingSpinner } from "../common/LoadingSpinner";
import { ErrorMessage } from "../common/ErrorMessage";

export const CurrencyChart = ({
  chartData,
  currencyPairs,
  chartType,
  loading,
  error,
  startDate,
  endDate,
  onRetry,
}) => {
  const { isDark } = useContext(ThemeContext);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={onRetry} />;

  return (
    <div className="p-6 rounded-lg mb-3.5 border dark:bg-gray-800 dark:border-gray-700 bg-white border-gray-200">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl font-semibold">Exchange Rate History</h2>
        <div className="text-sm dark:text-gray-400 text-gray-600">
          {startDate} to {endDate}
        </div>
      </div>

      {chartData.length > 0 ? (
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === "line" ? (
              <LineChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={isDark ? "#374151" : "#e5e7eb"}
                />
                <XAxis
                  dataKey="date"
                  stroke={isDark ? "#9ca3af" : "#6b7280"}
                  fontSize={12}
                />
                <YAxis
                  stroke={isDark ? "#9ca3af" : "#6b7280"}
                  fontSize={12}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                {currencyPairs.map((pair, index) => (
                  <Line
                    key={pair.id}
                    type="monotone"
                    dataKey={`${pair.base}-${pair.target}`}
                    stroke={chartColors[index % chartColors.length]}
                    strokeWidth={2}
                    dot={{ r: 0 }}
                    activeDot={{ r: 6 }}
                  />
                ))}
              </LineChart>
            ) : (
              <BarChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={isDark ? "#374151" : "#e5e7eb"}
                />
                <XAxis
                  dataKey="date"
                  stroke={isDark ? "#9ca3af" : "#6b7280"}
                  fontSize={12}
                />
                <YAxis
                  stroke={isDark ? "#9ca3af" : "#6b7280"}
                  fontSize={12}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                {currencyPairs.map((pair, index) => (
                  <Bar
                    key={pair.id}
                    dataKey={`${pair.base}-${pair.target}`}
                    fill={chartColors[index % chartColors.length]}
                  />
                ))}
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="text-center py-8 dark:text-gray-400 text-gray-600">
          No data available for the selected date range and currency pairs.
        </div>
      )}
    </div>
  );
};