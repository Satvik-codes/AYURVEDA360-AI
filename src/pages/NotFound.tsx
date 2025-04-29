
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-16">
        <div className="text-center px-4">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-ayurveda-lavender/20 mb-6">
            <span className="text-4xl font-serif font-medium text-ayurveda-deepPurple">404</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-ayurveda-deepPurple">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto">
            The page you're looking for is currently unavailable or doesn't exist. Let's guide you back to your wellness journey.
          </p>
          <Button asChild className="bg-ayurveda-sage hover:bg-ayurveda-sage/90 text-white">
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
