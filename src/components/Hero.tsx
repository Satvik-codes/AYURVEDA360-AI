
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-ayurveda-cream to-transparent py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-ayurveda-lavender/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-ayurveda-terracotta/10 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-ayurveda-deepPurple mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Discover the wisdom of <span className="text-ayurveda-terracotta">Ayurveda</span>, personalized for your modern life
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience a holistic approach to wellness that adapts to your unique body, mind, and lifestyle through the power of ancient wisdom and AI.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button className="bg-ayurveda-sage hover:bg-ayurveda-sage/90 text-white rounded-full px-8 py-6">
                Take Dosha Quiz
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button variant="outline" className="border-ayurveda-lavender text-ayurveda-deepPurple hover:bg-ayurveda-lavender/10 rounded-full px-8 py-6">
                Explore Ayurveda
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -z-10 w-full h-full bg-ayurveda-sage/20 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1558017487-06bf9f82613a?q=80&w=800&h=800&fit=crop&auto=format" 
                alt="Ayurvedic wellness" 
                className="rounded-full object-cover w-72 h-72 md:w-80 md:h-80 border-4 border-white shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-md animate-gentle-float">
                <img src="https://cdn-icons-png.flaticon.com/512/2382/2382533.png" alt="Ayurvedic herb" className="w-10 h-10" />
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-md animate-pulse-soft">
                <img src="https://cdn-icons-png.flaticon.com/512/8665/8665204.png" alt="Meditation" className="w-10 h-10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
