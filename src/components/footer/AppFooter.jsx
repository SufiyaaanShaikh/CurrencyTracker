// src/components/footer/AppFooter.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../common/ThemeProvider";
import {
  Home,
  LineChart,
  Info,
  Mail,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

export const AppFooter = () => {
  const { isDark } = useContext(ThemeContext);

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    {
      name: "Exchange Rates",
      path: "/exchange-rate",
      icon: <LineChart size={18} />,
    },
    { name: "About", path: "/about", icon: <Info size={18} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={18} /> },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/SufiyaaanShaikh",
      icon: <Github size={18} />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: <Twitter size={18} />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sufiyanshaikh9594",
      icon: <Linkedin size={18} />,
    },
  ];

  return (
    <footer
      className={`border-t ${
        isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div
                className={`p-2 rounded-lg ${
                  isDark
                    ? "bg-zinc-800 text-blue-400"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                <LineChart size={24} />
              </div>
              <span
                className={`text-xl font-semibold ${
                  isDark ? "text-zinc-100" : "text-zinc-900"
                }`}
              >
                Currency Tracker
              </span>
            </div>
            <p
              className={`text-sm ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              Track and compare currency exchange rates in real-time with our
              comprehensive platform.
            </p>
          </div>
          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                isDark ? "text-zinc-100" : "text-zinc-900"
              }`}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`flex items-center gap-2 text-sm ${
                      isDark
                        ? "text-zinc-400 hover:text-white"
                        : "text-zinc-600 hover:text-zinc-900"
                    } transition-colors`}
                  >
                    <span
                      className={`${
                        isDark ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      {link.icon}
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                isDark ? "text-zinc-100" : "text-zinc-900"
              }`}
            >
              Contact Us
            </h3>
            <address
              className={`not-italic space-y-2 text-sm ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              <p>123 Crypto Street</p>
              <p>Blockchain City, BC 10001</p>
              <p>Email: support@currencytracker.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </address>
          </div>
          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                isDark ? "text-zinc-100" : "text-zinc-900"
              }`}
            >
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg ${
                    isDark
                      ? "bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                      : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
                  } transition-colors`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`mt-12 pt-6 border-t ${
            isDark ? "border-zinc-800" : "border-gray-200"
          } text-center text-sm ${isDark ? "text-zinc-500" : "text-zinc-500"}`}
        >
          <p>
            Built with ❤️ by{" "}
            <a
              href="https://github.com/SufiyaaanShaikh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
              aria-label="Sufiyan Shaikh's GitHub Profile"
            >
              {" "}
              Sufiyan Shaikh{" "}
            </a>
          </p>
          <p>
            © {new Date().getFullYear()} Currency Tracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
