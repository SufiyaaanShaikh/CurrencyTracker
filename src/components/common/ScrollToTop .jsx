import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../common/ThemeProvider";
import { Rocket } from "lucide-react";
import { useContext } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { isDark } = useContext(ThemeContext);
  const [showRocket, setShowRocket] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    
    if (window.scrollY > 300) {
      setShowRocket(true);
      const timer = setTimeout(() => setShowRocket(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  if (!showRocket) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 ${
        isDark ? "text-blue-400" : "text-blue-600"
      }`}
      aria-hidden="true"
    >
      <div className="relative">
        <Rocket
          size={36}
          className="animate-[flyUp_0.8s_ease-in-out_forwards]"
        />
        <div className="absolute bottom-0 left-1/2 w-1 h-16 bg-gradient-to-t from-blue-500/30 to-transparent transform -translate-x-1/2" />
      </div>
      

      <style jsx global>{`
        @keyframes flyUp {
          0% { 
            transform: translateY(0) rotate(0deg); 
            opacity: 1; 
          }
          50% { 
            transform: translateY(-40px) rotate(-45deg); 
            opacity: 0.9; 
          }
          100% { 
            transform: translateY(-950px) rotate(-45deg); 
            opacity: 0; 
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollToTop;