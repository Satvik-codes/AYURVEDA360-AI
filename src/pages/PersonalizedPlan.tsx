
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Calendar } from "lucide-react";

const PersonalizedPlan = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { dominantDosha } = location.state || { dominantDosha: "vata" };

  const routines = {
    vata: [
      { time: "6:00 AM", activity: "Wake up before sunrise", benefit: "Establishes natural rhythm" },
      { time: "6:30 AM", activity: "Warm oil self-massage (Abhyanga)", benefit: "Grounds vata energy" },
      { time: "7:00 AM", activity: "Gentle yoga with standing poses", benefit: "Creates stability" },
      { time: "8:00 AM", activity: "Warm breakfast with healthy fats", benefit: "Sustained energy" },
      { time: "12:00 PM", activity: "Largest meal of the day with all six tastes", benefit: "Optimal digestion" },
      { time: "2:00 PM", activity: "Short walk after lunch", benefit: "Aids digestion" },
      { time: "6:00 PM", activity: "Light dinner (soup or stew)", benefit: "Easy to digest" },
      { time: "9:00 PM", activity: "Calming bedtime routine with warm milk", benefit: "Promotes deep sleep" },
      { time: "10:00 PM", activity: "Sleep", benefit: "Rejuvenation" }
    ],
    pitta: [
      { time: "6:00 AM", activity: "Wake up naturally with sunrise", benefit: "Balanced energy" },
      { time: "6:30 AM", activity: "Cool oil self-massage (Coconut oil)", benefit: "Cools pitta heat" },
      { time: "7:00 AM", activity: "Moderate yoga with cooling poses", benefit: "Releases tension" },
      { time: "8:00 AM", activity: "Light breakfast with fruits", benefit: "Gentle start to digestion" },
      { time: "12:00 PM", activity: "Balanced lunch with cooling foods", benefit: "Peak digestion time" },
      { time: "3:00 PM", activity: "Mental work and focused activities", benefit: "Productive thinking" },
      { time: "6:00 PM", activity: "Moderate dinner (avoid spicy foods)", benefit: "Maintains metabolism" },
      { time: "8:00 PM", activity: "Moonlight walk or gentle activity", benefit: "Cools the system" },
      { time: "10:30 PM", activity: "Sleep", benefit: "Recovery" }
    ],
    kapha: [
      { time: "5:30 AM", activity: "Wake up early before sunrise", benefit: "Overcomes kapha heaviness" },
      { time: "6:00 AM", activity: "Dry brushing or stimulating massage", benefit: "Activates circulation" },
      { time: "6:30 AM", activity: "Vigorous yoga with sun salutations", benefit: "Builds heat and energy" },
      { time: "7:30 AM", activity: "Light breakfast (optional)", benefit: "Maintains metabolism" },
      { time: "12:00 PM", activity: "Main meal of the day with warming spices", benefit: "Efficient digestion" },
      { time: "2:00 PM", activity: "Active work period", benefit: "Counteracts afternoon heaviness" },
      { time: "5:00 PM", activity: "Vigorous exercise", benefit: "Stimulates metabolism" },
      { time: "6:30 PM", activity: "Light dinner (soups or steamed vegetables)", benefit: "Easy digestion" },
      { time: "9:30 PM", activity: "Sleep", benefit: "Adequate rest without excess" }
    ]
  };

  const foods = {
    vata: {
      recommended: ["Sweet fruits (bananas, mangoes)", "Warm grains (oats, rice)", "Healthy oils (ghee, olive oil)", "Root vegetables", "Nuts and seeds"],
      avoid: ["Raw vegetables", "Dried fruits", "Cold foods and drinks", "Beans (unless well-cooked)", "Carbonated beverages"]
    },
    pitta: {
      recommended: ["Sweet fruits (melons, pears)", "Cooling vegetables (cucumber)", "Basmati rice", "Milk and butter", "Coconut"],
      avoid: ["Hot spices", "Sour fruits", "Fermented foods", "Alcohol", "Coffee and chocolate"]
    },
    kapha: {
      recommended: ["Astringent fruits (apples, cranberries)", "Leafy greens", "Beans and legumes", "Light grains (millet, barley)", "Honey"],
      avoid: ["Dairy products", "Oily and fried foods", "Excessive nuts", "Sweet fruits", "Cold foods and drinks"]
    }
  };

  const herbs = {
    vata: ["Ashwagandha", "Licorice", "Ginger", "Cardamom", "Cumin"],
    pitta: ["Coriander", "Fennel", "Mint", "Rose", "Shatavari"],
    kapha: ["Ginger", "Black pepper", "Turmeric", "Cinnamon", "Fenugreek"]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gradient-to-b from-ayurveda-cream to-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <Button 
              variant="outline" 
              className="border-ayurveda-lavender text-ayurveda-deepPurple hover:bg-ayurveda-lavender/10"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Results
            </Button>
            <Button className="bg-ayurveda-sage hover:bg-ayurveda-sage/90 text-white">
              <Download size={16} className="mr-2" />
              Download Plan
            </Button>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-ayurveda-deepPurple">
            Your {dominantDosha.charAt(0).toUpperCase() + dominantDosha.slice(1)} Balancing Plan
          </h1>
          
          <p className="text-lg text-gray-700 mb-8">
            This personalized plan is designed to help balance your {dominantDosha} dosha and promote overall wellbeing 
            based on Ayurvedic principles. Follow these recommendations for at least 30 days to notice significant improvements.
          </p>

          <div className="space-y-12">
            {/* Daily Routine Section */}
            <section className="ayurveda-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <Calendar size={24} className="text-ayurveda-terracotta" />
                <h2 className="text-2xl font-serif font-medium">Recommended Daily Routine</h2>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/5">Time</TableHead>
                    <TableHead className="w-2/5">Activity</TableHead>
                    <TableHead className="w-2/5">Benefit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {routines[dominantDosha as keyof typeof routines].map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.time}</TableCell>
                      <TableCell>{item.activity}</TableCell>
                      <TableCell className="text-gray-600">{item.benefit}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </section>

            {/* Dietary Recommendations */}
            <section className="ayurveda-card p-8">
              <h2 className="text-2xl font-serif font-medium mb-6">Dietary Recommendations</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-4 text-ayurveda-terracotta">Foods to Favor</h3>
                  <ul className="space-y-2">
                    {foods[dominantDosha as keyof typeof foods].recommended.map((food, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-ayurveda-sage/10 text-ayurveda-sage border-ayurveda-sage/20">
                          Recommended
                        </Badge>
                        <span>{food}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-4 text-ayurveda-terracotta">Foods to Limit</h3>
                  <ul className="space-y-2">
                    {foods[dominantDosha as keyof typeof foods].avoid.map((food, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-ayurveda-lavender/10 text-ayurveda-lavender border-ayurveda-lavender/20">
                          Limit
                        </Badge>
                        <span>{food}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Herbal Support */}
            <section className="ayurveda-card p-8">
              <h2 className="text-2xl font-serif font-medium mb-6">Beneficial Herbs & Spices</h2>
              <div className="flex flex-wrap gap-2">
                {herbs[dominantDosha as keyof typeof herbs].map((herb, index) => (
                  <Badge key={index} variant="secondary" className="bg-ayurveda-cream text-ayurveda-deepPurple px-3 py-1">
                    {herb}
                  </Badge>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Button
              className="bg-ayurveda-terracotta hover:bg-ayurveda-terracotta/90 text-white"
              onClick={() => navigate("/journal")}
            >
              Track Your Progress in Journal
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PersonalizedPlan;
