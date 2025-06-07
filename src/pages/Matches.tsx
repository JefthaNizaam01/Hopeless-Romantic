
import { useState } from "react";
import { Heart, MessageCircle, Star, Gift, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Matches = () => {
  const [activeTab, setActiveTab] = useState("recent");

  const matches = [
    {
      id: 1,
      name: "Emma",
      age: 26,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
      matchedAt: "2 hours ago",
      compatibility: 94,
      isOnline: true,
      lastMessage: "Thanks for the beautiful poem! 💕",
      romanticGestures: 3,
      type: "mutual"
    },
    {
      id: 2,
      name: "Alexander",
      age: 28,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      matchedAt: "1 day ago",
      compatibility: 89,
      isOnline: false,
      lastMessage: "Would love to meet for coffee...",
      romanticGestures: 1,
      type: "super"
    },
    {
      id: 3,
      name: "Sofia",
      age: 24,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      matchedAt: "3 days ago",
      compatibility: 92,
      isOnline: true,
      lastMessage: "That stargazing spot looks magical ✨",
      romanticGestures: 5,
      type: "mutual"
    }
  ];

  const superLikes = [
    {
      id: 4,
      name: "Isabella",
      age: 25,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop",
      message: "Your profile shows such a beautiful soul! I'd love to exchange poetry with you 📚",
      compatibility: 96
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-romance-50 via-white to-romance-100 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-romance-200">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-romance-700 mb-4">Your Matches</h1>
          
          {/* Tabs */}
          <div className="flex space-x-1 bg-romance-100 rounded-lg p-1">
            {[
              { id: "recent", label: "Recent", count: matches.length },
              { id: "super", label: "Super Likes", count: superLikes.length },
              { id: "favorites", label: "Favorites", count: 2 }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                size="sm"
                className={`flex-1 ${
                  activeTab === tab.id 
                    ? "love-gradient text-white border-none" 
                    : "text-romance-600 hover:text-romance-700"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label} ({tab.count})
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "recent" && (
          <div className="space-y-4">
            {matches.map((match) => (
              <Card key={match.id} className="p-4 border-romance-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  {/* Profile Image */}
                  <div className="relative">
                    <img
                      src={match.image}
                      alt={match.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-romance-200"
                    />
                    {match.isOnline && (
                      <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
                    )}
                    {match.type === "super" && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <Star className="w-3 h-3 text-white fill-current" />
                      </div>
                    )}
                  </div>

                  {/* Match Info */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-romance-800">{match.name}, {match.age}</h3>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4 text-romance-500" />
                        <span className="text-sm text-romance-600">{match.compatibility}%</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-romance-600 mb-2">{match.lastMessage}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-romance-500">{match.matchedAt}</span>
                      <div className="flex items-center space-x-1">
                        <Gift className="w-4 h-4 text-romance-400" />
                        <span className="text-xs text-romance-500">{match.romanticGestures} gestures</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1 border-romance-200 text-romance-600">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                  <Button size="sm" className="flex-1 love-gradient text-white border-none">
                    <Coffee className="w-4 h-4 mr-2" />
                    Ask on Date
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "super" && (
          <div className="space-y-4">
            <div className="text-center py-8">
              <Star className="w-16 h-16 text-blue-500 mx-auto mb-4 animate-sparkle" />
              <h3 className="text-xl font-bold text-romance-700 mb-2">Someone Super Liked You!</h3>
              <p className="text-romance-600 mb-6">
                They think you're extra special. See who it is!
              </p>
            </div>

            {superLikes.map((like) => (
              <Card key={like.id} className="p-6 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-romance-50">
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <img
                      src={like.image}
                      alt={like.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-blue-200"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white fill-current" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-romance-800 mb-2">{like.name}</h3>
                  <div className="flex items-center justify-center space-x-1 mb-4">
                    <Heart className="w-4 h-4 text-romance-500" />
                    <span className="text-romance-600">{like.compatibility}% compatibility</span>
                  </div>
                  
                  <div className="bg-white/70 rounded-lg p-4 mb-4">
                    <p className="text-sm text-romance-700 italic">"{like.message}"</p>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1 border-romance-200 text-romance-600">
                      Pass
                    </Button>
                    <Button className="flex-1 love-gradient text-white border-none">
                      <Heart className="w-4 h-4 mr-2 fill-current" />
                      Like Back
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "favorites" && (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-romance-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-romance-600 mb-2">No Favorites Yet</h3>
            <p className="text-romance-500">
              Star your favorite matches to keep them here!
            </p>
          </div>
        )}
      </div>

      <Navigation />
    </div>
  );
};

export default Matches;
