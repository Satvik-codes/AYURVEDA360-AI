
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wind, ArrowRight, ArrowDown } from "lucide-react";

const DoshaCard = ({ title, element, color, icon, description }: { 
  title: string; 
  element: string;
  color: string;
  icon: React.ReactNode;
  description: string;
}) => {
  return (
    <div className={`ayurveda-card p-6 flex flex-col h-full`}>
      <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-serif font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-1">{element}</p>
      <p className="text-sm mb-5 flex-grow">{description}</p>
      <Link to="/dosha-quiz" className="text-sm font-medium hover:underline hover:text-ayurveda-terracotta flex items-center gap-1">
        Learn more
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </div>
  );
};

const DoshaIntro = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-ayurveda-deepPurple">Discover Your Dosha</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            In Ayurveda, your unique constitution is determined by three doshas: Vata, Pitta, and Kapha. Understanding your dominant dosha is the first step toward balance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <DoshaCard 
              title="Vata" 
              element="Air & Space"
              color="bg-ayurveda-lavender/20"
              icon={<Wind size={32} className="text-ayurveda-lavender" />}
              description="Creative, quick, and lively. Vata types are energetic, imaginative, and enjoy change and excitement."
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <DoshaCard 
              title="Pitta" 
              element="Fire & Water"
              color="bg-ayurveda-terracotta/20"
              icon={<ArrowRight size={32} className="text-ayurveda-terracotta" />}
              description="Sharp, intense, and focused. Pitta types are ambitious, intelligent, and have strong digestion and metabolism."
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <DoshaCard 
              title="Kapha" 
              element="Earth & Water"
              color="bg-ayurveda-sage/20"
              icon={<ArrowDown size={32} className="text-ayurveda-sage" />}
              description="Calm, strong, and steady. Kapha types are compassionate, patient, and have excellent endurance."
            />
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-ayurveda-lavender hover:bg-ayurveda-lavender/90 text-white">
            <Link to="/dosha-quiz">Take the Dosha Quiz</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoshaIntro;
