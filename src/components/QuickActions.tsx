
import { Heart, X, Star, MessageCircle, Gift, Zap, Crown, Diamond } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuickActionsProps {
  onAction: (action: 'left' | 'right') => void;
}

const QuickActions = ({ onAction }: QuickActionsProps) => {
  return (
    <div className="flex justify-center items-center space-x-3">
      {/* Enhanced Pass Button */}
      <Button
        variant="outline"
        size="lg"
        className="w-12 h-12 rounded-full glass border-2 border-gray-300/50 hover:border-red-400/50 hover:bg-red-50/50 transition-all duration-300 floating-card"
        onClick={() => onAction('left')}
      >
        <X className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors" />
      </Button>

      {/* Enhanced Super Like */}
      <Button
        variant="outline"
        size="lg"
        className="w-14 h-14 rounded-full glass border-2 border-blue-300/50 hover:border-blue-400/50 hover:bg-blue-50/50 transition-all duration-300 floating-card pulse-ring"
      >
        <Star className="w-6 h-6 text-blue-500 animate-sparkle" />
      </Button>

      {/* Enhanced Like Button */}
      <Button
        variant="outline"
        size="lg"
        className="w-20 h-20 rounded-full aurora-gradient text-white border-none neon-glow floating-card transform hover:scale-110 transition-all duration-300 pulse-ring"
        onClick={() => onAction('right')}
      >
        <Heart className="w-8 h-8 fill-current animate-heart-beat" />
      </Button>

      {/* Enhanced Love Letter */}
      <Button
        variant="outline"
        size="lg"
        className="w-14 h-14 rounded-full glass border-2 border-purple-300/50 hover:border-purple-400/50 hover:bg-purple-50/50 transition-all duration-300 floating-card"
      >
        <MessageCircle className="w-6 h-6 text-purple-500 animate-float" />
      </Button>

      {/* Enhanced Send Gift */}
      <Button
        variant="outline"
        size="lg"
        className="w-12 h-12 rounded-full glass border-2 border-pink-300/50 hover:border-pink-400/50 hover:bg-pink-50/50 transition-all duration-300 floating-card"
      >
        <Gift className="w-5 h-5 text-pink-500 animate-bounce-slow" />
      </Button>
    </div>
  );
};

export default QuickActions;
