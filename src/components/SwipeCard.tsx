
import { useState } from "react";
import { Heart, X, Star, MapPin, Sparkles, Camera, Music, Book, Coffee, Diamond, Shield } from "lucide-react";
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

  const rotation = currentX * 0.1;
  const opacity = 1 - Math.abs(currentX) / 300;

  return (
    <Card
      className={`absolute inset-0 overflow-hidden cursor-grab glass-strong premium-shadow rounded-3xl ${
        isDragging ? 'cursor-grabbing' : ''
      } ${isActive ? 'pointer-events-auto' : 'pointer-events-none'} particle-bg floating-card`}
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
      {/* Profile Image with Parallax Effect */}
      <div className="relative h-2/3 overflow-hidden">
        <div 
          className="w-full h-full relative transition-transform duration-500 ease-out"
          onClick={handleImageClick}
          style={{
            transform: `scale(${1 + Math.abs(currentX) / 1000})`,
          }}
        >
          <img
            src={images[currentImageIndex]}
            alt={profile.name}
            className="w-full h-full object-cover transition-all duration-700"
          />
          
          {/* Image indicators */}
          {images.length > 1 && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-8 h-1 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        
        {/* Premium Badge */}
        {profile.premium && (
          <div className="absolute top-4 left-4 glass neon-glow rounded-full p-2">
            <Diamond className="w-4 h-4 text-yellow-400 animate-pulse" />
          </div>
        )}
        
        {/* Verified Badge */}
        {profile.verified && (
          <div className="absolute top-4 left-16 glass rounded-full p-2">
            <Shield className="w-4 h-4 text-blue-400" />
          </div>
        )}

        {/* Compatibility Score with Animation */}
        <div className="absolute top-4 right-4 glass-strong rounded-2xl p-3 pulse-ring">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400 fill-current animate-spin-slow" />
            <span className="text-sm font-bold text-white text-shimmer">{profile.compatibility}%</span>
          </div>
        </div>

        {/* Swipe Indicators with Enhanced Effects */}
        {currentX > 50 && (
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white p-6 rounded-full neon-glow animate-bounce-slow">
              <Heart className="w-10 h-10 fill-current" />
            </div>
          </div>
        )}
        
        {currentX < -50 && (
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-pink-500/30 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-gradient-to-r from-red-400 to-pink-500 text-white p-6 rounded-full animate-bounce-slow">
              <X className="w-10 h-10" />
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Profile Info */}
      <div className="p-6 h-1/3 overflow-y-auto glass backdrop-blur-xl">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-romance-700 to-romance-900 bg-clip-text text-transparent">
                {profile.name}
              </h2>
              <span className="text-xl text-romance-600">{profile.age}</span>
              {profile.zodiacSign && (
                <Badge variant="outline" className="gradient-border text-xs">
                  ♈ {profile.zodiacSign}
                </Badge>
              )}
            </div>
            
            <div className="flex items-center text-romance-600 text-sm mb-2">
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
              <div className="text-sm text-romance-600 mb-2">
                💼 {profile.job}
              </div>
            )}
            
            {profile.education && (
              <div className="text-sm text-romance-600 mb-2">
                🎓 {profile.education}
              </div>
            )}
          </div>
          
          <div className="text-right">
            <Badge variant="secondary" className="aurora-gradient text-white mb-2 animate-glow">
              {profile.romanticStyle}
            </Badge>
          </div>
        </div>

        <p className="text-romance-700 mb-4 text-sm leading-relaxed font-medium">
          {profile.bio}
        </p>

        <div className="space-y-3">
          <div className="glass rounded-lg p-3">
            <span className="text-xs font-bold text-romance-600 uppercase tracking-wide flex items-center">
              <Sparkles className="w-3 h-3 mr-1" />
              Love Language
            </span>
            <p className="text-sm text-romance-700 font-medium mt-1">{profile.loveLanguage}</p>
          </div>
          
          <div className="glass rounded-lg p-3">
            <span className="text-xs font-bold text-romance-600 uppercase tracking-wide flex items-center mb-2">
              <Heart className="w-3 h-3 mr-1" />
              Interests
            </span>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest, index) => {
                const getIcon = (interest: string) => {
                  if (interest.toLowerCase().includes('music')) return <Music className="w-3 h-3" />;
                  if (interest.toLowerCase().includes('book') || interest.toLowerCase().includes('read')) return <Book className="w-3 h-3" />;
                  if (interest.toLowerCase().includes('photo') || interest.toLowerCase().includes('camera')) return <Camera className="w-3 h-3" />;
                  if (interest.toLowerCase().includes('coffee')) return <Coffee className="w-3 h-3" />;
                  return <Sparkles className="w-3 h-3" />;
                };
                
                return (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="glass text-xs border-romance-300 text-romance-700 hover:aurora-gradient hover:text-white transition-all duration-300 flex items-center space-x-1"
                  >
                    {getIcon(interest)}
                    <span>{interest}</span>
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SwipeCard;
