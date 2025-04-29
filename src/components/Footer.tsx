
import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Instagram, Twitter, Facebook, Youtube, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ayurveda-cream/70 border-t border-ayurveda-sand mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and about */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-ayurveda-sage p-1.5 rounded-full">
                <Leaf size={22} className="text-white" />
              </div>
              <span className="text-xl font-serif font-medium text-ayurveda-deepPurple">
                Ayurveda<span className="text-ayurveda-terracotta">360</span>
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              A modern approach to ancient Ayurvedic wisdom, personalized for your mind, body, and spirit.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-ayurveda-deepPurple hover:text-ayurveda-terracotta transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-ayurveda-deepPurple hover:text-ayurveda-terracotta transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-ayurveda-deepPurple hover:text-ayurveda-terracotta transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-ayurveda-deepPurple hover:text-ayurveda-terracotta transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-medium text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/dosha-quiz" className="text-sm hover:text-ayurveda-terracotta transition-colors">Dosha Quiz</Link></li>
              <li><Link to="/journal" className="text-sm hover:text-ayurveda-terracotta transition-colors">Ayurvedic Journal</Link></li>
              <li><Link to="/marketplace" className="text-sm hover:text-ayurveda-terracotta transition-colors">Marketplace</Link></li>
              <li><Link to="/community" className="text-sm hover:text-ayurveda-terracotta transition-colors">Community</Link></li>
              <li><Link to="/consult" className="text-sm hover:text-ayurveda-terracotta transition-colors">Consult a Vaidya</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-ayurveda-terracotta transition-colors">Ayurvedic Blog</a></li>
              <li><a href="#" className="text-sm hover:text-ayurveda-terracotta transition-colors">Recipes & Remedies</a></li>
              <li><a href="#" className="text-sm hover:text-ayurveda-terracotta transition-colors">Meditation Library</a></li>
              <li><a href="#" className="text-sm hover:text-ayurveda-terracotta transition-colors">Research Papers</a></li>
              <li><a href="#" className="text-sm hover:text-ayurveda-terracotta transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@ayurveda360.com" className="text-sm hover:text-ayurveda-terracotta transition-colors flex items-center gap-2">
                  <Mail size={16} />
                  hello@ayurveda360.com
                </a>
              </li>
              <li className="text-sm">Worldwide virtual consultations</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-ayurveda-sand flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2025 Ayurveda360. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-xs text-gray-500 hover:text-ayurveda-terracotta">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-ayurveda-terracotta">Terms of Service</a>
            <a href="#" className="text-xs text-gray-500 hover:text-ayurveda-terracotta">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
