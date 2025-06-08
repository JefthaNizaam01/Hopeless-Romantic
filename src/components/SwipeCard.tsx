import { useState } from "react";
import { Heart, X, Star, MapPin, Sparkles, Shield, Diamond } from "lucide-react";
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
  verified?: boolean;
  premium?: boolean;
  zodiacSign?: string;
  height?: string;
  education?: string;
  job?: string;
  images?: string[];
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = profile.images || [profile.image];

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

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    
    if (clickX > width / 2 && currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else if (clickX <= width / 2 && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const rotation = currentX * 0.05;
  const opacity = 1 - Math.abs(currentX) / 400;

  return (
    <Card
      className={cn(
        "absolute inset-0 overflow-hidden cursor-grab bg-white border-0 shadow-xl rounded-2xl",
        isDragging ? 'cursor-grabbing' : '',
        isActive ? 'pointer-events-auto' : 'pointer-events-none'
      )}
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
      <div className="relative h-2/3 overflow-hidden">
        <div 
          className="w-full h-full relative transition-transform duration-300"
          onClick={handleImageClick}
        >
          <img
            src={images[currentImageIndex]}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
          
          {/* Image indicators */}
          {images.length > 1 && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-8 h-1 rounded-full transition-all duration-300",
                    index === currentImageIndex ? 'bg-white' : 'bg-white/40'
                  )}
                />
              ))}
            </div>
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex space-x-2">
          {profile.premium && (
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full flex items-center space-x-1">
              <Diamond className="w-3 h-3" />
              <span className="text-xs font-semibold">Premium</span>
            </div>
          )}
          
          {profile.verified && (
            <div className="bg-blue-500 text-white px-2 py-1 rounded-full flex items-center space-x-1">
              <Shield className="w-3 h-3" />
              <span className="text-xs font-semibold">Verified</span>
            </div>
          )}
        </div>

        {/* Compatibility Score */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-bold text-gray-800">{profile.compatibility}%</span>
          </div>
        </div>

        {/* Swipe Indicators */}
        {currentX > 50 && (
          <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-green-500 text-white p-4 rounded-full">
              <Heart className="w-8 h-8 fill-current" />
            </div>
          </div>
        )}
        
        {currentX < -50 && (
          <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-red-500 text-white p-4 rounded-full">
              <X className="w-8 h-8" />
            </div>
          </div>
        )}
      </div>

      {/* Profile Info */}
      <div className="p-6 h-1/3 overflow-y-auto bg-white">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
              <span className="text-xl text-gray-600">{profile.age}</span>
              {profile.zodiacSign && (
                <Badge variant="outline" className="text-xs border-gray-200">
                  {profile.zodiacSign}
                </Badge>
              )}
            </div>
            
            <div className="flex items-center text-gray-500 text-sm mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span>2 miles away</span>
              {profile.height && (
                <>
                  <span className="mx-2">•</span>
                  <span>{profile.height}</span>
                </>
              )}
            </div>
            
            {profile.job && (
              <div className="text-sm text-gray-600 mb-1">
                💼 {profile.job}
              </div>
            )}
            
            {profile.education && (
              <div className="text-sm text-gray-600 mb-3">
                🎓 {profile.education}
              </div>
            )}
          </div>
          
          <Badge className="bg-primary/10 text-primary border-primary/20">
            {profile.romanticStyle}
          </Badge>
        </div>

        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          {profile.bio}
        </p>

        <div className="space-y-3">
          <div className="bg-gray-50 rounded-lg p-3">
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide flex items-center mb-2">
              <Sparkles className="w-3 h-3 mr-1" />
              Love Language
            </span>
            <p className="text-sm text-gray-800 font-medium">{profile.loveLanguage}</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-3">
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide flex items-center mb-2">
              <Heart className="w-3 h-3 mr-1" />
              Interests
            </span>
            <div className="flex flex-wrap gap-1">
              {profile.interests.slice(0, 4).map((interest, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-xs border-gray-200 text-gray-600 hover:bg-gray-100"
                >
                  {interest}
                </Badge>
              ))}
              {profile.interests.length > 4 && (
                <Badge variant="outline" className="text-xs border-gray-200 text-gray-500">
                  +{profile.interests.length - 4} more
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SwipeCard;