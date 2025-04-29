
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-ayurveda-deepPurple to-ayurveda-lavender p-8 md:p-12 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 max-w-2xl">
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-medium text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Begin your Ayurvedic journey today
            </motion.h2>
            <motion.p 
              className="text-lg text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Discover your unique constitution, receive personalized recommendations, and connect with a community dedicated to holistic wellness.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button className="bg-white text-ayurveda-deepPurple hover:bg-white/90 rounded-full px-8 py-6">
                Start Free Trial
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <p className="text-sm text-white/80 mt-3">
                No credit card required. 14-day free trial.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
