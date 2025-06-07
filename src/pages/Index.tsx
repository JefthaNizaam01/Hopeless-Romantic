
import { useState } from "react";
import { Heart, MessageCircle, User, Sparkles, Coffee, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import SwipeCard from "@/components/SwipeCard";
import QuickActions from "@/components/QuickActions";

const Index = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
  const profiles = [
    {
      id: 1,
      name: "Emma",
      age: 26,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop",
      bio: "Believer in serendipity and late-night conversations under the stars ✨",
      interests: ["Poetry", "Vintage Books", "Sunset Photography"],
      romanticStyle: "Classic Romantic",
      loveLanguage: "Words of Affirmation",
      compatibility: 94
    },
    {
      id: 2,
      name: "Alexander",
      age: 28,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      bio: "Writing love letters is an art form. Looking for my muse 💕",
      interests: ["Classic Literature", "Jazz Music", "Handwritten Letters"],
      romanticStyle: "Old Soul",
      loveLanguage: "Quality Time",
      compatibility: 89
    },
    {
      id: 3,
      name: "Sofia",
      age: 24,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop",
      bio: "Dancing in the rain and believing in fairy tale endings 🌙",
      interests: ["Ballet", "Stargazing", "Romantic Movies"],
      romanticStyle: "Dreamy Romantic",
      loveLanguage: "Physical Touch",
      compatibility: 92
    }
  ];

  const handleSwipe = (direction: 'left' | 'right') => {
    console.log(`Swiped ${direction} on ${profiles[currentCardIndex]?.name}`);
    if (currentCardIndex < profiles.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setCurrentCardIndex(0); // Reset to beginning
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-romance-50 via-white to-romance-100">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-romance-200">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-romance-500 animate-heart-beat" />
            <h1 className="text-2xl font-script font-bold text-romance-700">Hopeless Romantic</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-romance-600">
              <Sparkles className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-romance-600">
              <MessageCircle className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 pb-20">
        <div className="max-w-sm mx-auto">
          {/* Daily Romantic Quote */}
          <Card className="mb-6 p-4 romantic-gradient border-romance-200">
            <div className="flex items-center space-x-2 mb-2">
              <BookOpen className="w-5 h-5 text-romance-600" />
              <span className="text-sm font-medium text-romance-700">Daily Love Quote</span>
            </div>
            <p className="text-romance-800 font-script text-lg italic">
              "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."
            </p>
            <p className="text-right text-sm text-romance-600 mt-2">- Lao Tzu</p>
          </Card>

          {/* Swipe Cards */}
          <div className="relative h-[600px] mb-6">
            {profiles.map((profile, index) => (
              <SwipeCard
                key={profile.id}
                profile={profile}
                isActive={index === currentCardIndex}
                onSwipe={handleSwipe}
                style={{
                  zIndex: profiles.length - index,
                  transform: `translateY(${(index - currentCardIndex) * 10}px) scale(${1 - (index - currentCardIndex) * 0.05})`,
                }}
              />
            ))}
          </div>

          {/* Quick Actions */}
          <QuickActions onAction={handleSwipe} />

          {/* Today's Matches Preview */}
          <Card className="mt-6 p-4 border-romance-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-romance-700">Today's Connections</h3>
              <span className="text-sm text-romance-500">3 new</span>
            </div>
            <div className="flex space-x-3">
              {profiles.slice(0, 3).map((profile) => (
                <div key={profile.id} className="flex-1 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-romance-200 to-romance-300 mx-auto mb-2 relative overflow-hidden">
                    <img 
                      src={profile.image} 
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-1 right-1">
                      <div className="w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                  </div>
                  <p className="text-xs text-romance-600 font-medium">{profile.name}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
};

export default Index;
