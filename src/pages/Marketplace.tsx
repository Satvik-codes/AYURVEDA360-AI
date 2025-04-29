
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ProductCard = ({ product }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-square w-full overflow-hidden bg-gray-100">
        <div className="h-full w-full bg-ayurveda-cream/50" />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-serif">{product.name}</CardTitle>
            <CardDescription>{product.brand}</CardDescription>
          </div>
          {product.doshas && (
            <div className="flex gap-1">
              {product.doshas.map((dosha) => {
                let bgColor = "";
                if (dosha === "Vata") bgColor = "bg-ayurveda-lavender/20";
                if (dosha === "Pitta") bgColor = "bg-ayurveda-terracotta/20";
                if (dosha === "Kapha") bgColor = "bg-ayurveda-sage/20";

                return (
                  <TooltipProvider key={dosha}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Badge variant="outline" className={`text-xs ${bgColor}`}>
                          {dosha.charAt(0)}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Balances {dosha}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              })}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
        </div>
        <p className="text-sm text-gray-700 line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="text-lg font-medium">${product.price}</div>
        <Button size="sm" className="bg-ayurveda-sage hover:bg-ayurveda-sage/90 text-white">
          <ShoppingCart size={14} className="mr-1" />
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};

const Marketplace = () => {
  const products = [
    {
      id: 1,
      name: "Triphala Powder",
      brand: "Banyan Botanicals",
      description: "Traditional Ayurvedic formula for digestion and detoxification",
      price: 18.99,
      rating: 4,
      reviewCount: 127,
      doshas: ["Vata", "Pitta", "Kapha"]
    },
    {
      id: 2,
      name: "Ashwagandha Root",
      brand: "Organic India",
      description: "Adaptogenic herb to support stress response and energy levels",
      price: 22.50,
      rating: 5,
      reviewCount: 89,
      doshas: ["Vata"]
    },
    {
      id: 3,
      name: "Brahmi Oil",
      brand: "Kama Ayurveda",
      description: "Traditional hair oil for scalp health and mental clarity",
      price: 32.00,
      rating: 4,
      reviewCount: 56,
      doshas: ["Pitta"]
    },
    {
      id: 4,
      name: "Copper Tongue Scraper",
      brand: "Surya Spa",
      description: "Traditional Ayurvedic tool for oral hygiene and detoxification",
      price: 12.99,
      rating: 5,
      reviewCount: 213,
      doshas: ["Vata", "Pitta", "Kapha"]
    },
    {
      id: 5,
      name: "Tulsi Tea",
      brand: "Organic India",
      description: "Sacred basil tea blend to promote calm and balance",
      price: 14.50,
      rating: 4,
      reviewCount: 76,
      doshas: ["Kapha"]
    },
    {
      id: 6,
      name: "Neem Powder",
      brand: "Banyan Botanicals",
      description: "Traditional blood purifier and skin support",
      price: 16.95,
      rating: 3,
      reviewCount: 42,
      doshas: ["Pitta"]
    }
  ];

  const categories = [
    "Herbs & Supplements",
    "Self-Care Tools",
    "Oils & Balms",
    "Teas & Elixirs",
    "Books & Education",
    "Home & Lifestyle"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-medium text-ayurveda-deepPurple mb-2">Ayurvedic Marketplace</h1>
        <p className="text-gray-600 mb-8">Ethically sourced, traditional Ayurvedic products</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <div>
              <h3 className="font-medium mb-3">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <Button variant="ghost" className="w-full justify-start hover:bg-ayurveda-cream/50">
                      {category}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3">Filter by Dosha</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-ayurveda-lavender/20 text-ayurveda-deepPurple hover:bg-ayurveda-lavender/40 cursor-pointer">
                  Vata
                </Badge>
                <Badge className="bg-ayurveda-terracotta/20 text-ayurveda-deepPurple hover:bg-ayurveda-terracotta/40 cursor-pointer">
                  Pitta
                </Badge>
                <Badge className="bg-ayurveda-sage/20 text-ayurveda-deepPurple hover:bg-ayurveda-sage/40 cursor-pointer">
                  Kapha
                </Badge>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
