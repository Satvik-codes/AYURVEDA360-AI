
import React from "react";
import { motion } from "framer-motion";
import { 
  UserCircle, 
  NotebookPen, 
  ShoppingBag, 
  Users, 
  MessageCircle, 
  HeartPulse 
} from "lucide-react";

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  delay: number;
}) => {
  return (
    <motion.div
      className="ayurveda-card p-6 flex flex-col items-start h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
    >
      <div className="bg-gradient-to-br from-ayurveda-sage to-ayurveda-deepPurple p-3 rounded-lg text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-medium mb-3">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <UserCircle size={24} />,
      title: "Personalized Wellness",
      description: "Get customized recommendations based on your unique body constitution, lifestyle, and current imbalances."
    },
    {
      icon: <NotebookPen size={24} />,
      title: "Ayurvedic Journal",
      description: "Track your daily habits, meals, and emotions in a guided journal that helps identify patterns and triggers."
    },
    {
      icon: <ShoppingBag size={24} />,
      title: "Ethical Marketplace",
      description: "Shop for authentic, ethically sourced Ayurvedic products with complete transparency about origins and benefits."
    },
    {
      icon: <Users size={24} />,
      title: "Supportive Community",
      description: "Connect with like-minded individuals on similar wellness journeys to share experiences and inspiration."
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Expert Consultations",
      description: "Schedule virtual sessions with certified Ayurvedic practitioners who understand your health history."
    },
    {
      icon: <HeartPulse size={24} />,
      title: "Wearable Integration",
      description: "Connect your fitness devices to enhance your Ayurvedic profile with real-time health data and insights."
    }
  ];

  return (
    <section className="py-16 bg-ayurveda-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-ayurveda-deepPurple">
            Modern Wellness, Ancient Wisdom
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ayurveda360 brings timeless healing traditions into your daily life through technology and personalization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
