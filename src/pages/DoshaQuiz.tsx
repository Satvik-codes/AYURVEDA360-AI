
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { doshaQuizQuestions, doshaDescriptions } from "@/data/mock";
import { Wind, ArrowRight, ArrowDown } from "lucide-react";
import { Label } from "@/components/ui/label";

interface DoshaScores {
  vata: number;
  pitta: number;
  kapha: number;
}

const DoshaQuiz = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [doshaScores, setDoshaScores] = useState<DoshaScores>({ vata: 0, pitta: 0, kapha: 0 });
  const [dominantDosha, setDominantDosha] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = answer;
    setAnswers(newAnswers);
  };

  const nextStep = () => {
    if (currentStep < doshaQuizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResults();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResults = () => {
    const scores: DoshaScores = { vata: 0, pitta: 0, kapha: 0 };
    
    answers.forEach((answer, index) => {
      const question = doshaQuizQuestions[index];
      const selectedOption = question.options.find(option => option.text === answer);
      if (selectedOption) {
        scores[selectedOption.dosha as keyof DoshaScores] += 1;
      }
    });
    
    setDoshaScores(scores);
    
    // Determine dominant dosha
    let dominant = 'vata';
    if (scores.pitta > scores[dominant]) dominant = 'pitta';
    if (scores.kapha > scores[dominant]) dominant = 'kapha';
    
    setDominantDosha(dominant);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setDoshaScores({ vata: 0, pitta: 0, kapha: 0 });
    setDominantDosha(null);
    setShowResults(false);
  };

  const getPersonalizedPlan = () => {
    navigate('/personalized-plan', { state: { dominantDosha } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gradient-to-b from-ayurveda-cream to-transparent">
        <div className="container mx-auto px-4">
          {!showResults ? (
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-ayurveda-deepPurple">
                  Discover Your Dosha Profile
                </h1>
                <p className="text-lg text-gray-700">
                  Answer a few questions to understand your Ayurvedic constitution.
                </p>
              </div>
              
              <div className="mb-8 flex justify-center">
                <div className="w-full max-w-lg bg-white/70 backdrop-blur-sm rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-ayurveda-sage to-ayurveda-lavender h-2 rounded-full transition-all"
                    style={{ width: `${(currentStep + 1) / doshaQuizQuestions.length * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <motion.div 
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="ayurveda-card p-8"
              >
                <h3 className="text-xl md:text-2xl font-serif mb-6">
                  {doshaQuizQuestions[currentStep].question}
                </h3>
                
                <div className="space-y-4 mb-8">
                  {doshaQuizQuestions[currentStep].options.map((option, index) => (
                    <div key={index} className="flex items-start">
                      <input 
                        type="radio"
                        id={`option-${index}`}
                        name="dosha-option"
                        value={option.text}
                        checked={answers[currentStep] === option.text}
                        onChange={() => handleAnswer(option.text)}
                        className="sr-only peer"
                      />
                      <Label
                        htmlFor={`option-${index}`}
                        className={`flex items-center gap-3 w-full p-4 border rounded-lg cursor-pointer transition-all ${
                          answers[currentStep] === option.text 
                            ? "border-ayurveda-lavender bg-ayurveda-lavender/5 text-ayurveda-deepPurple" 
                            : "border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          answers[currentStep] === option.text 
                            ? "border-ayurveda-lavender" 
                            : "border-gray-300"
                        }`}>
                          {answers[currentStep] === option.text && (
                            <div className="w-2.5 h-2.5 rounded-full bg-ayurveda-lavender"></div>
                          )}
                        </div>
                        <span>{option.text}</span>
                      </Label>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  {currentStep > 0 ? (
                    <Button
                      variant="outline"
                      onClick={prevStep}
                      className="border-ayurveda-lavender text-ayurveda-deepPurple hover:bg-ayurveda-lavender/10"
                    >
                      Previous
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  
                  <Button
                    onClick={nextStep}
                    className="bg-ayurveda-sage hover:bg-ayurveda-sage/90 text-white"
                    disabled={!answers[currentStep]}
                  >
                    {currentStep < doshaQuizQuestions.length - 1 ? "Next" : "See Results"}
                  </Button>
                </div>
              </motion.div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-block p-4 rounded-full bg-ayurveda-lavender/20 mb-4">
                    {dominantDosha === "vata" && <Wind size={40} className="text-ayurveda-lavender" />}
                    {dominantDosha === "pitta" && <ArrowRight size={40} className="text-ayurveda-terracotta" />}
                    {dominantDosha === "kapha" && <ArrowDown size={40} className="text-ayurveda-sage" />}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-ayurveda-deepPurple">
                    Your Dosha Profile
                  </h1>
                </div>

                {dominantDosha && (
                  <div className="ayurveda-card p-8 mb-8">
                    <h2 className="text-2xl font-serif font-medium mb-2 text-center">
                      {doshaDescriptions[dominantDosha as keyof typeof doshaDescriptions].title}
                    </h2>
                    <p className="text-ayurveda-terracotta text-center mb-6">
                      {doshaDescriptions[dominantDosha as keyof typeof doshaDescriptions].subtitle}
                    </p>
                    
                    <div className="mb-8 text-center">
                      <div className="h-4 bg-gray-100 rounded-full mb-2 overflow-hidden">
                        <div className="h-4 bg-ayurveda-lavender rounded-full" style={{ width: `${(doshaScores.vata / doshaQuizQuestions.length) * 100}%` }}></div>
                      </div>
                      <div className="h-4 bg-gray-100 rounded-full mb-2 overflow-hidden">
                        <div className="h-4 bg-ayurveda-terracotta rounded-full" style={{ width: `${(doshaScores.pitta / doshaQuizQuestions.length) * 100}%` }}></div>
                      </div>
                      <div className="h-4 bg-gray-100 rounded-full mb-2 overflow-hidden">
                        <div className="h-4 bg-ayurveda-sage rounded-full" style={{ width: `${(doshaScores.kapha / doshaQuizQuestions.length) * 100}%` }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-600 mt-1">
                        <span>Vata ({Math.round((doshaScores.vata / doshaQuizQuestions.length) * 100)}%)</span>
                        <span>Pitta ({Math.round((doshaScores.pitta / doshaQuizQuestions.length) * 100)}%)</span>
                        <span>Kapha ({Math.round((doshaScores.kapha / doshaQuizQuestions.length) * 100)}%)</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6">
                      {doshaDescriptions[dominantDosha as keyof typeof doshaDescriptions].description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="font-serif font-medium mb-2">Key Traits</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          {doshaDescriptions[dominantDosha as keyof typeof doshaDescriptions].traits.map((trait, index) => (
                            <li key={index}>{trait}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-serif font-medium mb-2">Imbalance Signs</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          {doshaDescriptions[dominantDosha as keyof typeof doshaDescriptions].imbalanceSigns.map((sign, index) => (
                            <li key={index}>{sign}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-serif font-medium mb-2">Balancing Practices</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        {doshaDescriptions[dominantDosha as keyof typeof doshaDescriptions].balancingPractices.map((practice, index) => (
                          <li key={index}>{practice}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Button
                    onClick={resetQuiz}
                    variant="outline"
                    className="border-ayurveda-lavender text-ayurveda-deepPurple hover:bg-ayurveda-lavender/10"
                  >
                    Retake Quiz
                  </Button>
                  <Button
                    className="bg-ayurveda-sage hover:bg-ayurveda-sage/90 text-white"
                    onClick={getPersonalizedPlan}
                  >
                    Get Personalized Plan
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DoshaQuiz;
