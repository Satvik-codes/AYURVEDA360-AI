
import React from "react";
import { motion } from "framer-motion";
import { users } from "@/data/mock";
import { 
  MessageSquare, 
  Calendar, 
  BookOpen, 
  Users, 
  Heart, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CommunityPreview = () => {
  const categories = [
    { 
      icon: <MessageSquare size={18} />, 
      name: "Discussions", 
      count: 120,
      color: "bg-ayurveda-lavender/20 text-ayurveda-lavender"
    },
    { 
      icon: <Calendar size={18} />, 
      name: "Seasonal Challenges", 
      count: 8,
      color: "bg-ayurveda-terracotta/20 text-ayurveda-terracotta"
    },
    { 
      icon: <BookOpen size={18} />, 
      name: "Knowledge Library", 
      count: 64,
      color: "bg-ayurveda-sage/20 text-ayurveda-sage"
    },
    { 
      icon: <Users size={18} />, 
      name: "Practitioner Connect", 
      count: 24,
      color: "bg-ayurveda-deepPurple/20 text-ayurveda-deepPurple"
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-ayurveda-deepPurple">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Connect with like-minded individuals on their Ayurvedic journey, share experiences, and learn from certified practitioners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Community Categories */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="ayurveda-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className={`w-10 h-10 rounded-full ${category.color} flex items-center justify-center mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {category.name === "Discussions" && "Engage in meaningful conversations about Ayurvedic practices and wellness journeys."}
                  {category.name === "Seasonal Challenges" && "Join guided seasonal detoxes, meditation challenges, and wellness rituals."}
                  {category.name === "Knowledge Library" && "Access ancient texts, modern research, and practical Ayurvedic wisdom."}
                  {category.name === "Practitioner Connect" && "Find and connect with certified Ayurvedic doctors and wellness coaches."}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">{category.count}</span>
                  <span>{category.name === "Discussions" || category.name === "Knowledge Library" ? "posts" : "active"}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Members */}
          <motion.div
            className="ayurveda-card p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-serif font-medium mb-4">Active Members</h3>
            
            <div className="space-y-4 mb-6">
              {users.slice(0, 5).map((user, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.role}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button className="bg-ayurveda-deepPurple hover:bg-ayurveda-deepPurple/90 text-white w-full">
                Join Community
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <p className="text-xs text-center mt-3 text-muted-foreground">
                1,240+ members have joined
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPreview;
