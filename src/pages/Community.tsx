
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageSquare, Users, Calendar } from "lucide-react";

const CommunityPost = ({ post }) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={post.author.avatar} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-base font-medium">{post.author.name}</CardTitle>
            <CardDescription className="text-xs">{post.author.title}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="font-serif text-lg mb-2 text-ayurveda-deepPurple">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.content}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-ayurveda-cream text-ayurveda-deepPurple hover:bg-ayurveda-cream/80">
              {tag}
            </Badge>
          ))}
        </div>
        
        {post.image && (
          <div className="w-full h-48 bg-gray-100 rounded-md overflow-hidden mb-4">
            {/* Image placeholder */}
            <div className="h-full w-full bg-ayurveda-lavender/20" />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-4">
          <Button variant="ghost" size="sm" className="text-gray-500 flex items-center gap-1">
            <Heart size={15} />
            <span>{post.likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-500 flex items-center gap-1">
            <MessageSquare size={15} />
            <span>{post.comments}</span>
          </Button>
        </div>
        <span className="text-xs text-gray-400">{post.timestamp}</span>
      </CardFooter>
    </Card>
  );
};

const EventCard = ({ event }) => {
  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="font-serif text-lg text-ayurveda-deepPurple">{event.title}</CardTitle>
          <Badge className="bg-ayurveda-sage text-white">{event.type}</Badge>
        </div>
        <CardDescription className="flex items-center gap-1">
          <Calendar size={14} />
          {event.date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-3">{event.description}</p>
        <div className="flex items-center gap-2">
          <Users size={16} className="text-gray-400" />
          <span className="text-sm text-gray-500">{event.participants} participants</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="bg-ayurveda-terracotta hover:bg-ayurveda-terracotta/90 text-white w-full">
          Join Event
        </Button>
      </CardFooter>
    </Card>
  );
};

const Community = () => {
  const posts = [
    {
      id: 1,
      author: {
        name: "Aisha Patel",
        title: "Certified Ayurveda Practitioner",
        avatar: ""
      },
      title: "My experience with seasonal transitions as a Vata type",
      content: "As a Vata predominant person, I've always struggled with autumn transitions. Here's what has helped me stay grounded during these challenging months...",
      tags: ["vata-balancing", "seasonal-routines", "personal-story"],
      image: true,
      likes: 24,
      comments: 7,
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      author: {
        name: "Michael Chen",
        title: "Ayurveda Enthusiast",
        avatar: ""
      },
      title: "Question: Best herbs for Pitta digestive issues?",
      content: "I've been experiencing frequent heartburn and acidity after meals. My Ayurvedic practitioner suggested I have a Pitta imbalance. Which herbs have worked best for similar issues?",
      tags: ["pitta-balancing", "digestion", "herbs"],
      image: false,
      likes: 12,
      comments: 16,
      timestamp: "Yesterday"
    },
    {
      id: 3,
      author: {
        name: "Dr. Anand Sharma",
        title: "Ayurvedic Doctor",
        avatar: ""
      },
      title: "The importance of dinacharya (daily routine) for all doshas",
      content: "Establishing a consistent daily routine is one of the most powerful ways to balance your constitution, regardless of your dominant dosha. Here's why...",
      tags: ["dinacharya", "daily-routine", "all-doshas"],
      image: true,
      likes: 56,
      comments: 8,
      timestamp: "3 days ago"
    }
  ];
  
  const events = [
    {
      id: 1,
      title: "Summer Pitta Balancing Workshop",
      type: "Online",
      date: "May 15, 2025 • 7:00 PM EST",
      description: "Learn practical techniques to stay cool and balanced during the hot summer months with Dr. Maya Krishnan.",
      participants: 42
    },
    {
      id: 2,
      title: "Ayurvedic Cooking Basics",
      type: "In-person",
      date: "May 22, 2025 • 2:00 PM PST",
      description: "Join us at the Harmony Center for a hands-on workshop focused on simple, nourishing Ayurvedic cooking techniques.",
      participants: 18
    },
    {
      id: 3,
      title: "21-Day Spring Detox Challenge",
      type: "Online",
      date: "Starts June 1, 2025",
      description: "A guided community challenge to gently cleanse and rejuvenate your body according to Ayurvedic principles.",
      participants: 124
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-medium text-ayurveda-deepPurple mb-2">Ayurvedic Community</h1>
        <p className="text-gray-600 mb-8">Connect with practitioners and enthusiasts on your wellness journey</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">Recent Discussions</h2>
              <Button className="bg-ayurveda-sage hover:bg-ayurveda-sage/90 text-white">New Post</Button>
            </div>

            <Tabs defaultValue="all" className="mb-6">
              <TabsList>
                <TabsTrigger value="all">All Topics</TabsTrigger>
                <TabsTrigger value="questions">Questions</TabsTrigger>
                <TabsTrigger value="experiences">Experiences</TabsTrigger>
                <TabsTrigger value="recipes">Recipes</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div>
              {posts.map((post) => (
                <CommunityPost key={post.id} post={post} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h2 className="text-xl font-medium mb-4">Upcoming Events</h2>
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            <div>
              <h2 className="text-xl font-medium mb-4">Popular Tags</h2>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-ayurveda-cream text-ayurveda-deepPurple">vata-balancing</Badge>
                <Badge className="bg-ayurveda-cream text-ayurveda-deepPurple">pitta-balancing</Badge>
                <Badge className="bg-ayurveda-cream text-ayurveda-deepPurple">kapha-balancing</Badge>
                <Badge className="bg-ayurveda-cream text-ayurveda-deepPurple">seasonal-routines</Badge>
                <Badge className="bg-ayurveda-cream text-ayurveda-deepPurple">herbs</Badge>
                <Badge className="bg-ayurveda-cream text-ayurveda-deepPurple">recipes</Badge>
                <Badge className="bg-ayurveda-cream text-ayurveda-deepPurple">meditation</Badge>
                <Badge className="bg-ayurveda-cream text-ayurveda-deepPurple">yoga</Badge>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
