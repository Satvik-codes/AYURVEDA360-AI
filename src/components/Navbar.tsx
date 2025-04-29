
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MenuIcon,
  X,
  Leaf,
  Home,
  UserCircle,
  BookOpen,
  ShoppingBag,
  Users,
  MessageCircle
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "Dosha Quiz", path: "/dosha-quiz", icon: <UserCircle size={18} /> },
    { name: "Journal", path: "/journal", icon: <BookOpen size={18} /> },
    { name: "Marketplace", path: "/marketplace", icon: <ShoppingBag size={18} /> },
    { name: "Community", path: "/community", icon: <Users size={18} /> },
    { name: "Consult", path: "/consult", icon: <MessageCircle size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full bg-gradient-to-r from-ayurveda-cream to-white/95 backdrop-blur-sm border-b border-ayurveda-sand">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-ayurveda-sage p-1.5 rounded-full">
            <Leaf size={22} className="text-white" />
          </div>
          <span className="text-xl font-serif font-medium text-ayurveda-deepPurple">
            Ayurveda<span className="text-ayurveda-terracotta">360</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-medium text-foreground hover:text-ayurveda-terracotta transition-colors flex items-center gap-1.5"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" className="border-ayurveda-lavender text-ayurveda-deepPurple hover:bg-ayurveda-lavender/10">
            Sign In
          </Button>
          <Button className="bg-ayurveda-sage hover:bg-ayurveda-sage/90 text-white">
            Start Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="rounded-full">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col gap-8 mt-8">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-lg font-medium text-foreground hover:text-ayurveda-terracotta transition-colors flex items-center gap-3 py-2"
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <Button variant="outline" className="border-ayurveda-lavender text-ayurveda-deepPurple hover:bg-ayurveda-lavender/10 w-full">
                  Sign In
                </Button>
                <Button className="bg-ayurveda-sage hover:bg-ayurveda-sage/90 text-white w-full">
                  Start Free
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
