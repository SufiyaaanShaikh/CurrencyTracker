import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeContext } from "../common/ThemeProvider";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark } = useContext(ThemeContext);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Exchange Rate", path: "/exchange-rate" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className={`sticky top-0 z-50 ${isDark ? 'bg-zinc-900' : 'bg-white'}`}>
      <div className=" mx-auto">
        <div className="flex justify-between items-center h-14">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-2 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                    : 'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 cursor-pointer rounded-lg focus:outline-none ${
                isDark ? 'text-zinc-300 hover:bg-zinc-800' : 'text-zinc-700 hover:bg-zinc-100'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden absolute w-max  right-0 ${isDark ? 'bg-zinc-900' : 'bg-white'} border-b ${isDark ? 'border-zinc-800' : 'border-gray-200'} shadow-md transition-all duration-200 ease-in-out`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isDark
                      ? 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                      : 'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;