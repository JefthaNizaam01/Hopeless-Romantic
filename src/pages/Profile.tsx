
import { useState } from "react";
import { Camera, Edit, Settings, Heart, Star, Gift, MapPin, Book, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);

  const userProfile = {
    name: "You",
    age: 25,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
    bio: "A hopeless romantic who believes in fairy tale endings and writes poetry under the moonlight ✨",
    location: "New York, NY",
    romanticStyle: "Classic Romantic",
    loveLanguage: "Words of Affirmation",
    interests: ["Poetry", "Vintage Books", "Jazz Music", "Stargazing", "Art Galleries", "Coffee Shops"],
    lookingFor: "A genuine connection with someone who appreciates the little things in life",
    profileCompletion: 85
  };

  const stats = [
    { label: "Profile Views", value: "124", icon: Heart },
    { label: "Likes Received", value: "89", icon: Star },
    { label: "Gifts Sent", value: "12", icon: Gift }
  ];

  const recentActivity = [
    { type: "match", text: "You matched with Emma", time: "2 hours ago" },
    { type: "like", text: "Someone liked your profile", time: "5 hours ago" },
    { type: "view", text: "Your profile was viewed 8 times", time: "1 day ago" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-romance-50 via-white to-romance-100 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-romance-200">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold text-romance-700">Your Profile</h1>
          <div className="flex space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setEditMode(!editMode)}
              className="text-romance-600"
            >
              <Edit className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-romance-600">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Profile Card */}
        <Card className="overflow-hidden border-romance-200">
          <div className="relative h-64 bg-gradient-to-br from-romance-200 to-romance-300">
            <img
              src={userProfile.image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <Button
              variant="secondary"
              size="sm"
              className="absolute bottom-4 right-4 bg-white/90 hover:bg-white"
            >
              <Camera className="w-4 h-4 mr-2" />
              Change Photo
            </Button>
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-romance-800">{userProfile.name}, {userProfile.age}</h2>
                <div className="flex items-center text-romance-600 mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{userProfile.location}</span>
                </div>
              </div>
              <Badge className="bg-romance-100 text-romance-700 border-romance-200">
                {userProfile.romanticStyle}
              </Badge>
            </div>

            <p className="text-romance-700 mb-4">{userProfile.bio}</p>

            {/* Profile Completion */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-romance-600">Profile Completion</span>
                <span className="text-sm text-romance-500">{userProfile.profileCompletion}%</span>
              </div>
              <Progress value={userProfile.profileCompletion} className="h-2" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-romance-700 mb-1">Love Language</h4>
                <p className="text-sm text-romance-600">{userProfile.loveLanguage}</p>
              </div>
              <div>
                <h4 className="font-semibold text-romance-700 mb-1">Looking For</h4>
                <p className="text-sm text-romance-600">{userProfile.lookingFor}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 text-center border-romance-200">
              <stat.icon className="w-6 h-6 text-romance-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-romance-700">{stat.value}</div>
              <div className="text-xs text-romance-600">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Interests */}
        <Card className="p-6 border-romance-200">
          <h3 className="font-semibold text-romance-700 mb-4 flex items-center">
            <Heart className="w-5 h-5 mr-2" />
            Interests & Hobbies
          </h3>
          <div className="flex flex-wrap gap-2">
            {userProfile.interests.map((interest, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="border-romance-300 text-romance-600 hover:bg-romance-50"
              >
                {interest}
              </Badge>
            ))}
          </div>
          {editMode && (
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-3 border-romance-300 text-romance-600"
            >
              Add Interest
            </Button>
          )}
        </Card>

        {/* Recent Activity */}
        <Card className="p-6 border-romance-200">
          <h3 className="font-semibold text-romance-700 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-romance-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-romance-700">{activity.text}</p>
                  <p className="text-xs text-romance-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Romantic Preferences */}
        <Card className="p-6 romantic-gradient border-romance-200">
          <h3 className="font-semibold text-romance-700 mb-4">Romantic Preferences</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-romance-700">Ideal Date</span>
              <span className="text-romance-600">Candlelit dinner & stargazing</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-romance-700">Favorite Season</span>
              <span className="text-romance-600">Autumn</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-romance-700">Communication Style</span>
              <span className="text-romance-600">Deep conversations</span>
            </div>
          </div>
        </Card>

        {/* Premium Features */}
        <Card className="p-6 love-gradient text-white border-none">
          <div className="text-center">
            <Star className="w-12 h-12 mx-auto mb-3 animate-sparkle" />
            <h3 className="text-xl font-bold mb-2">Upgrade to Romantic Premium</h3>
            <p className="text-romance-100 mb-4">
              Unlock unlimited likes, see who liked you, and send unlimited love letters!
            </p>
            <Button variant="secondary" className="bg-white text-romance-600 hover:bg-romance-50">
              Upgrade Now
            </Button>
          </div>
        </Card>
      </div>

      <Navigation />
    </div>
  );
};

export default Profile;
