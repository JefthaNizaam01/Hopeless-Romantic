import { useState, useEffect } from "react";
import { Heart, Settings, Zap, Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import SwipeCard from "@/components/SwipeCard";
import QuickActions from "@/components/QuickActions";

const Index = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [timeOfDay, setTimeOfDay] = useState("");
  
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay("morning");
    else if (hour < 18) setTimeOfDay("afternoon");
    else setTimeOfDay("evening");
  }, []);
  
  const profiles = [
    {
      id: 1,
      name: "Emma",
      age: 26,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop"
      ],
      bio: "Believer in serendipity and late-night conversations under the stars. Looking for someone who writes love letters and believes in fairy tales.",
      interests: ["Poetry", "Vintage Books", "Sunset Photography", "Classical Music", "Art Galleries"],
      romanticStyle: "Classic Romantic",
      loveLanguage: "Words of Affirmation",
      compatibility: 94,
      verified: true,
      premium: true,
      zodiacSign: "Pisces",
      height: "5'6\"",
      education: "Literature PhD",
      job: "Museum Curator"
    },
    {
      id: 2,
      name: "Alexander",
      age: 28,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop"
      ],
      bio: "Writing love letters is an art form. Looking for my muse. Believer in grand gestures and meaningful connections.",
      interests: ["Classic Literature", "Jazz Music", "Handwritten Letters", "Wine Tasting", "Philosophy"],
      romanticStyle: "Old Soul",
      loveLanguage: "Quality Time",
      compatibility: 89,
      verified: true,
      zodiacSign: "Scorpio",
      height: "6'1\"",
      education: "English Literature MA",
      job: "Published Author"
    },
    {
      id: 3,
      name: "Sofia",
      age: 24,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=400&h=600&fit=crop"
      ],
      bio: "Dancing in the rain and believing in fairy tale endings. Life is a beautiful story waiting to be written together.",
      interests: ["Ballet", "Stargazing", "Romantic Movies", "Cooking", "Travel"],
      romanticStyle: "Dreamy Romantic",
      loveLanguage: "Physical Touch",
      compatibility: 92,
      verified: true,
      premium: true,
      zodiacSign: "Cancer",
      height: "5'4\"",
      education: "Fine Arts BFA",
      job: "Ballet Instructor"
    }
  ];

  const handleSwipe = (direction: 'left' | 'right') => {
    console.log(`Swiped ${direction} on ${profiles[currentCardIndex]?.name}`);
    if (currentCardIndex < profiles.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setCurrentCardIndex(0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100">
        <div className="flex items-center justify-between p-4 max-w-md mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white fill-current" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Hopeless Romantic</h1>
              <p className="text-sm text-gray-500">Good {timeOfDay}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="w-10 h-10 rounded-full">
              <Crown className="w-5 h-5 text-yellow-500" />
            </Button>
            <Button variant="ghost" size="sm" className="w-10 h-10 rounded-full">
              <Zap className="w-5 h-5 text-blue-500" />
            </Button>
            <Button variant="ghost" size="sm" className="w-10 h-10 rounded-full">
              <Settings className="w-5 h-5 text-gray-500" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 pb-24 max-w-md mx-auto">
        {/* Daily Quote Card */}
        <Card className="mb-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-0 shadow-sm">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Daily Inspiration</h3>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."
              </p>
              <p className="text-gray-500 text-xs mt-2">— Lao Tzu</p>
            </div>
          </div>
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
                transform: `translateY(${(index - currentCardIndex) * 4}px) scale(${1 - (index - currentCardIndex) * 0.02})`,
                opacity: index <= currentCardIndex + 2 ? 1 - (index - currentCardIndex) * 0.15 : 0,
              }}
            />
          ))}
          
          {/* No more cards message */}
          {currentCardIndex >= profiles.length && (
            <Card className="absolute inset-0 flex items-center justify-center text-center p-8 bg-white shadow-lg rounded-2xl">
              <div>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">You've seen everyone nearby!</h3>
                <p className="text-gray-600 mb-6">Check back later for new connections</p>
                <Button onClick={() => setCurrentCardIndex(0)} className="btn-primary">
                  Start Over
                </Button>
              </div>
            </Card>
          )}
        </div>

        {/* Quick Actions */}
        <QuickActions onAction={handleSwipe} />

        {/* Today's Connections */}
        <Card className="mt-6 p-6 bg-white shadow-sm border-0">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Today's Connections</h3>
            <span className="text-sm text-gray-500">3 new</span>
          </div>
          <div className="flex space-x-4">
            {profiles.slice(0, 3).map((profile, index) => (
              <div key={profile.id} className="flex-1 text-center">
                <div className="relative w-16 h-16 rounded-2xl bg-gray-100 mx-auto mb-2 overflow-hidden">
                  <img 
                    src={profile.image} 
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <p className="text-sm font-medium text-gray-900">{profile.name}</p>
                <p className="text-xs text-gray-500">{profile.compatibility}% match</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Stats Card */}
        <Card className="mt-4 p-4 bg-white shadow-sm border-0">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">127</div>
              <div className="text-xs text-gray-500">Admirers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">23</div>
              <div className="text-xs text-gray-500">Matches</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">8</div>
              <div className="text-xs text-gray-500">Messages</div>
            </div>
          </div>
        </Card>
      </div>

      <Navigation />
    </div>
  );
};

export default Index;