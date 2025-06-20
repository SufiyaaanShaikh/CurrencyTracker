// src/components/charts/CurrencyChart.jsx
import React, { useContext } from "react";
import {
  LineChart,
  BarChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
} from "recharts";
import { CustomTooltip } from "./CustomTooltip";
import { ThemeContext } from "../common/ThemeProvider";
import { LoadingSpinner } from "../common/LoadingSpinner";
import { ErrorMessage } from "../common/ErrorMessage";
import { chartColors } from "../../constants/chartColors";

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
    <div className={`p-6 rounded-xl shadow-sm border mb-5 ${
      isDark
        ? "bg-zinc-800 border-zinc-700"
        : "bg-white border-gray-200"
    }`}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className={`text-xl font-semibold ${isDark ? "text-gray-200" : "text-gray-800"}`}>
          Exchange Rate History
        </h2>
        <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
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
                  stroke={isDark ? "#3f3f46" : "#e5e7eb"}  
                />
                <XAxis
                  dataKey="date"
                  stroke={isDark ? "#a1a1aa" : "#6b7280"} 
                  fontSize={12}
                />
                <YAxis
                  stroke={isDark ? "#a1a1aa" : "#6b7280"} 
                  fontSize={12}
                />
                <Tooltip 
                  content={<CustomTooltip />}
                  contentStyle={{
                    backgroundColor: isDark ? '#27272a' : '#fff',  
                    borderColor: isDark ? '#3f3f46' : '#e5e7eb',  
                    borderRadius: '0.5rem',
                    color: isDark ? '#f4f4f5' : '#18181b'  
                  }}
                />
                <Legend 
                  wrapperStyle={{
                    color: isDark ? '#e4e4e7' : '#3f3f46' 
                  }}
                />
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
                  stroke={isDark ? "#3f3f46" : "#e5e7eb"}
                />
                <XAxis
                  dataKey="date"
                  stroke={isDark ? "#a1a1aa" : "#6b7280"}
                  fontSize={12}
                />
                <YAxis
                  stroke={isDark ? "#a1a1aa" : "#6b7280"}
                  fontSize={12}
                />
                <Tooltip 
                  content={<CustomTooltip />}
                  contentStyle={{
                    backgroundColor: isDark ? '#27272a' : '#fff',
                    borderColor: isDark ? '#3f3f46' : '#e5e7eb',
                    borderRadius: '0.5rem',
                    color: isDark ? '#f4f4f5' : '#18181b'
                  }}
                />
                <Legend 
                  wrapperStyle={{
                    color: isDark ? '#e4e4e7' : '#3f3f46'
                  }}
                />
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
        <div className={`text-center py-8 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          No data available for the selected date range and currency pairs.
        </div>
      )}
    </div>
  );
};