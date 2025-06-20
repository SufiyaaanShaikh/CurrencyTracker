// src/App.jsx
import { useState } from "react";
import { ThemeProvider } from "./components/common/ThemeProvider";
import { AppHeader } from "./components/header/AppHeader";
import { MainLayout } from "./components/MainLayout";
import { useCurrencyData } from "./hooks/useCurrencyData";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { AppFooter } from "./components/footer/AppFooter";
import ScrollToTop from "./components/common/ScrollToTop ";
import { Toaster } from "react-hot-toast";

export default function App() {
  const { chartData, exportToCSV, error } = useCurrencyData();

  return (
    <ThemeProvider>
      <Toaster />
      <AppHeader onExport={exportToCSV} error={error} chartData={chartData} />
      <Routes>
        <Route path="/exchange-rate" element={<MainLayout />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTop />
      <AppFooter />
    </ThemeProvider>
  );
}
