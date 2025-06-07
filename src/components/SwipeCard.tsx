
import { useState } from "react";
import { Heart, X, Star, MapPin, Coffee } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Profile {
  id: number;
  name: string;
  age: number;
  image: string;
  bio: string;
  interests: string[];
  romanticStyle: string;
  loveLanguage: string;
  compatibility: number;
}

interface SwipeCardProps {
  profile: Profile;
  isActive: boolean;
  onSwipe: (direction: 'left' | 'right') => void;
  style?: React.CSSProperties;
}

const SwipeCard = ({ profile, isActive, onSwipe, style }: SwipeCardProps) => {
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleStart = (clientX: number) => {
    setStartX(clientX);
    setIsDragging(true);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    setCurrentX(clientX - startX);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    
    const threshold = 100;
    if (Math.abs(currentX) > threshold) {
      onSwipe(currentX > 0 ? 'right' : 'left');
    }
    
    setCurrentX(0);
    setIsDragging(false);
  };

  const rotation = currentX * 0.1;
  const opacity = 1 - Math.abs(currentX) / 300;

  return (
    <Card
      className={`absolute inset-0 bg-white border-2 border-romance-200 rounded-3xl overflow-hidden shadow-xl cursor-grab ${
        isDragging ? 'cursor-grabbing' : ''
      } ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
      style={{
        transform: `translateX(${currentX}px) rotate(${rotation}deg)`,
        opacity: opacity,
        ...style,
      }}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      {/* Profile Image */}
      <div className="relative h-2/3">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-full object-cover"
        />
        
        {/* Compatibility Score */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 border border-romance-200">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-bold text-romance-700">{profile.compatibility}%</span>
          </div>
        </div>

        {/* Swipe Indicators */}
        {currentX > 50 && (
          <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
            <div className="bg-green-500 text-white p-4 rounded-full">
              <Heart className="w-8 h-8 fill-current" />
            </div>
          </div>
        )}
        
        {currentX < -50 && (
          <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
            <div className="bg-red-500 text-white p-4 rounded-full">
              <X className="w-8 h-8" />
            </div>
          </div>
        )}
      </div>

      {/* Profile Info */}
      <div className="p-6 h-1/3 overflow-y-auto">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-2xl font-bold text-romance-800">{profile.name}, {profile.age}</h2>
            <div className="flex items-center text-romance-600 text-sm mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              <span>2 miles away</span>
            </div>
          </div>
          <div className="text-right">
            <Badge variant="secondary" className="bg-romance-100 text-romance-700 mb-1">
              {profile.romanticStyle}
            </Badge>
          </div>
        </div>

        <p className="text-romance-700 mb-3 text-sm leading-relaxed">{profile.bio}</p>

        <div className="space-y-2">
          <div>
            <span className="text-xs font-semibold text-romance-600 uppercase tracking-wide">Love Language</span>
            <p className="text-sm text-romance-700">{profile.loveLanguage}</p>
          </div>
          
          <div>
            <span className="text-xs font-semibold text-romance-600 uppercase tracking-wide">Interests</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {profile.interests.map((interest, index) => (
                <Badge key={index} variant="outline" className="text-xs border-romance-300 text-romance-600">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SwipeCard;
