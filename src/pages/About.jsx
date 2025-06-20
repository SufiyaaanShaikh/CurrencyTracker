// src/pages/About.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../components/common/ThemeProvider';
import { Globe, LineChart, Calendar, Users } from 'lucide-react';
import aboutImage1 from '../assets/about1.svg';
import aboutImage2 from '../assets/about2.svg';

const About = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen pt-20 transition-colors duration-300 ${isDark ? 'bg-zinc-900 text-zinc-100' : 'bg-zinc-50 text-zinc-900'}`}>
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Currency Tracker</h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
            Simplifying global currency exchange tracking for everyone
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className={`inline-flex p-3 rounded-xl mb-4 ${isDark ? 'bg-zinc-800 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
              <Globe size={24} />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className={`mb-6 text-lg ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
              We aim to simplify the way you explore and understand global currency exchange rates.
            </p>
            <p className={`text-lg ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
              Our platform helps you track historical exchange rate data between different currencies, offering a clear view of trends and changes over time. Whether you're planning a trip, analyzing markets, or just curious, we provide reliable and accurate data right at your fingertips.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src={aboutImage1} 
              alt="Finance illustration" 
              className="w-full max-w-md"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1 flex justify-center">
            <img 
              src={aboutImage2} 
              alt="Analytics illustration" 
              className="w-full max-w-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className={`inline-flex p-3 rounded-xl mb-4 ${isDark ? 'bg-zinc-800 text-green-400' : 'bg-green-100 text-green-600'}`}>
              <LineChart size={24} />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-4">
              {[
                { icon: <LineChart size={18} />, text: "Historical exchange rate tracking between major currencies" },
                { icon: <Calendar size={18} />, text: "Clean and user-friendly data visualization" },
                { icon: <Globe size={18} />, text: "Compare currency values over days, weeks, or months" },
                { icon: <Users size={18} />, text: "Perfect for travelers, students, and analysts alike" }
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className={`mr-3 mt-0.5 p-1 rounded-full ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {item.icon}
                  </span>
                  <span className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`py-12 text-center rounded-xl ${isDark ? 'bg-zinc-800' : 'bg-white'} shadow-sm`}>
          <h2 className="text-2xl font-semibold mb-6">Ready to get started?</h2>
          <p className={`max-w-2xl mx-auto mb-8 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
            Join thousands of users who track currencies with our platform every day.
          </p>
          <Link 
            to="/exchange-rate" 
            className={`inline-flex items-center px-8 py-3 rounded-xl font-medium transition-colors ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
          >
            Track Currencies Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;