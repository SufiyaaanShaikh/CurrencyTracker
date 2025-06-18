// src/hooks/useCurrencyData.js
import { useState, useEffect } from "react";
import { FRANKFURTER_API_BASE } from "../constants/currencies";

export const useCurrencyData = (initialPairs = [{ base: "EUR", target: "USD", id: 1 }]) => {
  const [availableCurrencies, setAvailableCurrencies] = useState([]);
  const [currencyPairs, setCurrencyPairs] = useState(initialPairs);
  const [startDate, setStartDate] = useState("2024-11-01");
  const [endDate, setEndDate] = useState("2024-11-25");
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cache, setCache] = useState({});
  const [apiStatus, setApiStatus] = useState("ready");

  const fetchAvailableCurrencies = async () => {
    try {
      const response = await fetch(`${FRANKFURTER_API_BASE}/currencies`);
      if (response.ok) {
        const currencyData = await response.json();
        const enrichedCurrencies = Object.entries(currencyData).map(
          ([code, name]) => ({
            code,
            name,
            flag: currencies.find((c) => c.code === code)?.flag || "🏳️",
          })
        );
        setAvailableCurrencies(enrichedCurrencies);
        setApiStatus("connected");
      }
    } catch (error) {
      console.warn("Failed to fetch currencies from API:", error);
      setApiStatus("offline");
    }
  };

  const fetchExchangeRates = async (base, target, start, end) => {
    const cacheKey = `${base}-${target}-${start}-${end}`;

    if (cache[cacheKey]) {
      return cache[cacheKey];
    }

    try {
      const url = `${FRANKFURTER_API_BASE}/${start}..${end}?base=${base}&symbols=${target}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      const transformedData = Object.entries(data.rates).map(([date, rates]) => ({
        date,
        rate: rates[target],
        timestamp: `${date}T00:00:00Z`,
      }));

      transformedData.sort((a, b) => new Date(a.date) - new Date(b.date));
      setCache((prev) => ({ ...prev, [cacheKey]: transformedData }));
      return transformedData;
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
      throw new Error(`Failed to fetch ${base}/${target} rates: ${error.message}`);
    }
  };

  const loadData = async () => {
    setLoading(true);
    setError(null);

    try {
      const allData = {};

      for (const pair of currencyPairs) {
        const data = await fetchExchangeRates(pair.base, pair.target, startDate, endDate);
        allData[`${pair.base}-${pair.target}`] = data;
      }

      const dates = [
        ...new Set(Object.values(allData).flat().map((item) => item.date)),
      ].sort();

      const combinedData = dates.map((date) => {
        const dataPoint = { date };
        currencyPairs.forEach((pair) => {
          const pairKey = `${pair.base}-${pair.target}`;
          const pairData = allData[pairKey];
          const dayData = pairData.find((item) => item.date === date);
          dataPoint[pairKey] = dayData ? dayData.rate : null;
        });
        return dataPoint;
      });

      setChartData(combinedData);
    } catch (err) {
      setError(err.message || "Failed to fetch exchange rates");
    } finally {
      setLoading(false);
    }
  };

  const addCurrencyPair = (newPair) => {
    if (newPair.base && newPair.target && newPair.base !== newPair.target) {
      setCurrencyPairs([...currencyPairs, { ...newPair, id: Date.now() }]);
    }
  };

  const removeCurrencyPair = (id) => {
    setCurrencyPairs(currencyPairs.filter((pair) => pair.id !== id));
  };

  const exportToCSV = () => {
    const headers = ["Date", ...currencyPairs.map((pair) => `${pair.base}-${pair.target}`)];
    const csvContent = [
      headers.join(","),
      ...chartData.map((row) =>
        [row.date, ...currencyPairs.map((pair) => row[`${pair.base}-${pair.target}`] || "")].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "exchange-rates.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    fetchAvailableCurrencies();
  }, []);

  useEffect(() => {
    if (currencyPairs.length > 0) {
      loadData();
    }
  }, [currencyPairs, startDate, endDate]);

  return {
    availableCurrencies,
    currencyPairs,
    setCurrencyPairs,
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
  };
};