import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../common/ThemeProvider";
import BannerImage from "../../assets/BannerImage.svg";
import BannerImagewhite from "../../assets/BannerImagewhite.svg";
import { ArrowRight } from "lucide-react";
import { Button } from "../common/Button";

function Banner() {
  const { isDark } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <div
      className={`relative w-full h-screen overflow-hidden ${
        isDark ? "bg-zinc-900" : "bg-zinc-50"
      }`}
    >
      <div
        className={`md:gap-8 md:h-screen max-w-7xl mx-auto mt-14 md:mt-0 px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-16`}
      >
        <div className="flex flex-col items-start justify-center w-full md:w-1/2 space-y-6">
          <h1
            className={`text-3xl md:text-5xl font-bold leading-tight ${
              isDark ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            Welcome to Currency Tracker
          </h1>
          <p
            className={`text-xl md:text-2xl ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            Track and compare currency exchange rates in real-time.
          </p>
          <Button
            className={`bg-zinc-100 cursor-pointer hover:bg-zinc-200 text-zinc-900 hover:text-zinc-900 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-100 dark:hover:text-zinc-100`}
            onClick={() => navigate("/exchange-rate")}
          >
            Get Started
            <ArrowRight size={20} className="mt-0.5" />
          </Button>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={isDark ? BannerImagewhite : BannerImage}
            alt="Currency Tracker Banner"
            className="w-full max-w-xl h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
