import React, { useContext } from 'react'
import { ThemeContext } from '../common/ThemeProvider'
import BannerImage  from "../../assets/BannerImage2.svg"

function Banner() {

   const { isDark } = useContext(ThemeContext);

  return (
    <div className={`relative w-full h-screen overflow-hidden ${isDark ? 'dark:bg-gray-900' : 'bg-white'}`}>
    <div className={`banner h-screen max-w-7xl py-2 px-4 gap-5 m-auto flex bg-white ${isDark ? 'dark:bg-gray-900' : 'bg-gray-50'}`}>
      <div className="flex flex-col items-baseline justify-center w-full h-full ">
        <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
          Welcome to Currency Tracker
        </h1>
        <p className={`text-lg text-left mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Track and compare currency exchange rates in real-time.
        </p>
        <button className={`px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors ${isDark ? 'dark:bg-blue-800 dark:hover:bg-blue-700' : ''}`}>
          Get Started
        </button>
      </div>
      <div className=" flex items-center justify-center w-full h-full">
    
        <div className=' max-w-xl'>
        <img 
          src={BannerImage }
          alt="Currency Tracker Banner" 
          className="w-full h-auto object-cover mt-8"
        />
        </div>
      </div>

    </div>
    </div>
  )
}

export default Banner