
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white font-montserrat">
      <Navigation />
      
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-yellow-400">404</h1>
          <p className="text-2xl text-gray-300 mb-8">Oops! Page not found</p>
          <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
          <Link to="/">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
