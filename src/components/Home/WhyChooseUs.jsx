import React, { useContext } from "react";
import { ThemeContext } from "../common/ThemeProvider";
import { BarChart2, ShieldCheck, Zap, Send } from "lucide-react";

export function WhyChooseUs() {
  const { isDark } = useContext(ThemeContext);

  const features = [
    {
      icon: <BarChart2 size={28} />,
      title: "Great Market Value",
      description: "Lorem ipsum dolor sit amet with consectetur adipisicing elit the help eiusmod tempor."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Verified Mining Process",
      description: "Lorem ipsum dolor sit amet with consectetur adipisicing elit the help eiusmod tempor."
    },
    {
      icon: <Zap size={28} />,
      title: "Fastest Miner",
      description: "Lorem ipsum dolor sit amet with consectetur adipisicing elit the help eiusmod tempor."
    },
    {
      icon: <Send size={28} />,
      title: "Secure Transaction",
      description: "Lorem ipsum dolor sit amet with consectetur adipisicing elit the help eiusmod tempor."
    }
  ];

  return (
    <div className={`py-16 ${isDark ? "bg-zinc-900" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
            Why you choose Currency Tracker
          </h2>
          <p className={`mt-4 text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Lorem Ipsum dolor sit amet consectetur adipisicing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 ${isDark ? "bg-zinc-800 hover:bg-zinc-700" : "bg-white hover:bg-gray-100 shadow-sm"}`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${isDark ? "bg-blue-900/30 text-blue-400" : "bg-blue-100 text-blue-600"}`}>
                {feature.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                {feature.title}
              </h3>
              <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}