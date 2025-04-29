
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Leaf, Send, UserCircle } from "lucide-react";
import Navbar from '@/components/Navbar';
import { fetchConsultResponse } from '@/api/consultApi';
import { ChatMessage } from '@/api/consult';

const Consult = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Namaste! I am your Ayurvedic consultant. How may I assist you with your health and wellness today?'
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userInput.trim()) return;
    
    // Add user message to chat
    const newMessages = [...messages, { role: 'user' as const, content: userInput }];
    setMessages(newMessages);
    setUserInput('');
    setLoading(true);
    
    try {
      const ayurvedicPrompt = "Act as a highly experienced Ayurvedic doctor with deep knowledge of Ayurvedic principles such as the three doshas (Vata, Pitta, Kapha), dhatus, agni (digestive fire), and prakriti (body constitution). Begin by asking all necessary clarifying questions to understand my condition in depth, including the nature, duration, intensity, and location of symptoms; any patterns or triggers; my daily routines; mental and emotional state; dietary habits; sleep quality; bowel and urinary patterns; menstrual health (if applicable); and lifestyle factors like stress, exercise, and environment. Once you gather all essential information, analyze the symptoms through the lens of Ayurveda to identify the root imbalance or doshic disturbance causing them. Then, provide a thorough explanation of the possible causes and suggest specific Ayurvedic remedies tailored to my constitution and current imbalance. This may include diet modifications, herbal formulations, daily and seasonal routines (dinacharya and ritucharya), yoga or pranayama practices, and lifestyle changes. Your advice should follow classical Ayurvedic texts but also be adapted to modern-day practicalities. Please make the response detailed, holistic, and personalized based on the symptom profile you uncover.";
      
      const data = await fetchConsultResponse(newMessages, ayurvedicPrompt);
      
      // Add AI response to chat
      setMessages([...newMessages, { role: 'assistant' as const, content: data.response }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages([...newMessages, { role: 'assistant' as const, content: 'I apologize, but I encountered an issue connecting to the Ayurvedic knowledge base. Please try again later.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-ayurveda-cream to-white">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex flex-col h-full gap-6">
          <div className="text-center mb-2">
            <h1 className="text-3xl font-serif font-medium text-ayurveda-deepPurple">Ayurvedic Consultation</h1>
            <p className="text-ayurveda-terracotta mt-2">Speak with our AI-powered Ayurvedic consultant for personalized health guidance</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md flex-1 flex flex-col overflow-hidden border border-ayurveda-sand">
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] px-4 py-3 rounded-lg ${
                        message.role === 'user' 
                          ? 'bg-ayurveda-sage text-white rounded-br-none' 
                          : 'bg-ayurveda-lavender/20 text-gray-800 rounded-bl-none'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {message.role === 'assistant' ? (
                          <>
                            <div className="bg-ayurveda-sage p-1 rounded-full">
                              <Leaf size={14} className="text-white" />
                            </div>
                            <span className="font-medium text-sm text-ayurveda-deepPurple">Ayurvedic Consultant</span>
                          </>
                        ) : (
                          <>
                            <UserCircle size={18} className="text-white" />
                            <span className="font-medium text-sm text-white">You</span>
                          </>
                        )}
                      </div>
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] px-4 py-3 rounded-lg bg-ayurveda-lavender/20 text-gray-800 rounded-bl-none">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="bg-ayurveda-sage p-1 rounded-full">
                          <Leaf size={14} className="text-white" />
                        </div>
                        <span className="font-medium text-sm text-ayurveda-deepPurple">Ayurvedic Consultant</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-ayurveda-deepPurple/70 animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-ayurveda-deepPurple/70 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 rounded-full bg-ayurveda-deepPurple/70 animate-bounce" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4">
              <div className="flex gap-2">
                <Textarea
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Describe your health concerns or ask a question..."
                  className="min-h-[60px] resize-none border-ayurveda-lavender focus:border-ayurveda-sage focus-visible:ring-ayurveda-sage/30"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage(e);
                    }
                  }}
                />
                <Button 
                  type="submit" 
                  className="bg-ayurveda-sage hover:bg-ayurveda-sage/90 flex-shrink-0 self-end"
                  disabled={loading || !userInput.trim()}
                >
                  <Send size={18} />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Consult;
