import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Rocket, Home, Compass } from 'lucide-react';
import { ThemeContext } from '../components/common/ThemeProvider';

const NotFoundPage = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-300 ${isDark ? 'bg-zinc-900 text-zinc-100' : 'bg-zinc-50 text-zinc-900'}`}>
     
      <div className="relative mb-12">
        <div className={`text-9xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'} opacity-90`}>
          404
        </div>
        <Rocket 
          size={48}
          className={`absolute -top-6 -right-10 animate-bounce ${isDark ? 'text-orange-400' : 'text-orange-500'}`}
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Oops! Lost in Space
      </h1>
      <p className={`text-lg mb-8 max-w-md text-center ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
        The page you're looking for doesn't exist or has been launched into orbit.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
        >
          <Home size={20} />
          Return Home
        </Link>
        <Link
          to="/exchange-rate"
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${isDark ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-100 hover:bg-zinc-200'} ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}
        >
          <Compass size={20} />
          Explore Rates
        </Link>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-16 ${isDark ? 'bg-gradient-to-t from-zinc-800 to-transparent' : 'bg-gradient-to-t from-zinc-100 to-transparent'}`}></div>
    </div>
  );
};

export default NotFoundPage;