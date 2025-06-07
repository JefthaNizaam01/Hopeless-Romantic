
import { useState, useEffect } from "react";
import { Heart, MessageCircle, User, Sparkles, Coffee, BookOpen, Crown, Zap, Settings, Diamond } from "lucide-react";
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
      bio: "Believer in serendipity and late-night conversations under the stars ✨ Looking for someone who writes love letters and believes in fairy tales",
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
      bio: "Writing love letters is an art form. Looking for my muse 💕 Believer in grand gestures and meaningful connections",
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
      bio: "Dancing in the rain and believing in fairy tale endings 🌙 Life is a beautiful story waiting to be written together",
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

  const loveQuotes = [
    { quote: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", author: "Lao Tzu" },
    { quote: "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.", author: "Unknown" },
    { quote: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.", author: "Maya Angelou" },
  ];

  const currentQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 particle-bg">
        <div className="absolute inset-0 aurora-gradient opacity-20"></div>
      </div>

      {/* Premium Header */}
      <div className="sticky top-0 z-50 glass-strong backdrop-blur-xl border-b border-white/20">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <div className="relative pulse-ring">
              <Heart className="w-8 h-8 text-romance-500 animate-heart-beat fill-current" />
            </div>
            <div>
              <h1 className="text-2xl font-script font-bold text-shimmer">Hopeless Romantic</h1>
              <p className="text-xs text-romance-600 opacity-80">Good {timeOfDay}, find your soulmate</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="glass rounded-full p-2 neon-glow">
              <Crown className="w-5 h-5 text-yellow-400" />
            </Button>
            <Button variant="ghost" size="sm" className="glass rounded-full p-2">
              <Settings className="w-5 h-5 text-romance-600" />
            </Button>
            <Button variant="ghost" size="sm" className="glass rounded-full p-2">
              <Zap className="w-5 h-5 text-purple-400" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 pb-20 relative z-10">
        <div className="max-w-sm mx-auto">
          {/* Enhanced Daily Quote Card */}
          <Card className="mb-6 glass-strong premium-shadow floating-card gradient-border particle-bg">
            <div className="p-5">
              <div className="flex items-center space-x-2 mb-3">
                <BookOpen className="w-5 h-5 text-romance-600 animate-float" />
                <span className="text-sm font-bold text-romance-700">Daily Love Inspiration</span>
                <Sparkles className="w-4 h-4 text-yellow-400 animate-sparkle" />
              </div>
              <p className="text-romance-800 font-script text-lg italic leading-relaxed mb-3">
                "{currentQuote.quote}"
              </p>
              <div className="flex justify-between items-center">
                <p className="text-right text-sm text-romance-600 font-medium">- {currentQuote.author}</p>
                <div className="w-2 h-2 bg-romance-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </Card>

          {/* Enhanced Swipe Cards */}
          <div className="relative h-[600px] mb-6">
            {profiles.map((profile, index) => (
              <SwipeCard
                key={profile.id}
                profile={profile}
                isActive={index === currentCardIndex}
                onSwipe={handleSwipe}
                style={{
                  zIndex: profiles.length - index,
                  transform: `translateY(${(index - currentCardIndex) * 8}px) scale(${1 - (index - currentCardIndex) * 0.03}) rotateY(${(index - currentCardIndex) * 2}deg)`,
                  opacity: index <= currentCardIndex + 2 ? 1 - (index - currentCardIndex) * 0.2 : 0,
                }}
              />
            ))}
            
            {/* No more cards message */}
            {currentCardIndex >= profiles.length && (
              <Card className="absolute inset-0 glass-strong premium-shadow rounded-3xl flex items-center justify-center text-center p-8">
                <div>
                  <Heart className="w-16 h-16 text-romance-400 mx-auto mb-4 animate-float" />
                  <h3 className="text-xl font-bold text-romance-700 mb-2">You've seen everyone nearby!</h3>
                  <p className="text-romance-600 mb-4">Check back later for new connections</p>
                  <Button onClick={() => setCurrentCardIndex(0)} className="aurora-gradient text-white">
                    Start Over
                  </Button>
                </div>
              </Card>
            )}
          </div>

          {/* Enhanced Quick Actions */}
          <QuickActions onAction={handleSwipe} />

          {/* Premium Today's Connections */}
          <Card className="mt-6 glass-strong premium-shadow floating-card">
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <h3 className="font-bold text-romance-700">Today's Soul Connections</h3>
                  <Sparkles className="w-4 h-4 text-yellow-400 animate-sparkle" />
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-romance-500 font-medium">3 new</span>
                </div>
              </div>
              <div className="flex space-x-4">
                {profiles.slice(0, 3).map((profile, index) => (
                  <div key={profile.id} className="flex-1 text-center group">
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-romance-200 to-romance-300 mx-auto mb-3 overflow-hidden floating-card group-hover:scale-110 transition-all duration-300">
                      <img 
                        src={profile.image} 
                        alt={profile.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-1 right-1">
                        <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white animate-pulse"></div>
                      </div>
                      {profile.premium && (
                        <div className="absolute bottom-1 left-1">
                          <Diamond className="w-3 h-3 text-yellow-400" />
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-romance-600 font-bold">{profile.name}</p>
                    <p className="text-xs text-romance-500">{profile.compatibility}% match</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Premium Stats Card */}
          <Card className="mt-4 glass-strong premium-shadow">
            <div className="p-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-romance-700 animate-pulse-slow">127</div>
                  <div className="text-xs text-romance-500">Admirers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-romance-700 animate-pulse-slow">23</div>
                  <div className="text-xs text-romance-500">Matches</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-romance-700 animate-pulse-slow">8</div>
                  <div className="text-xs text-romance-500">Love Letters</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Enhanced Bottom Navigation */}
      <Navigation />
    </div>
  );
};

export default Index;
