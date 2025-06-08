import { Heart, X, Star, MessageCircle, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuickActionsProps {
  onAction: (action: 'left' | 'right') => void;
}

const QuickActions = ({ onAction }: QuickActionsProps) => {
  return (
    <div className="flex justify-center items-center space-x-4 py-4">
      {/* Pass Button */}
      <Button
        variant="outline"
        size="lg"
        className="w-14 h-14 rounded-full border-2 border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-200 shadow-sm"
        onClick={() => onAction('left')}
      >
        <X className="w-6 h-6 text-gray-500 hover:text-red-500 transition-colors" />
      </Button>

      {/* Super Like */}
      <Button
        variant="outline"
        size="lg"
        className="w-12 h-12 rounded-full border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 shadow-sm"
      >
        <Star className="w-5 h-5 text-blue-500" />
      </Button>

      {/* Like Button */}
      <Button
        size="lg"
        className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        onClick={() => onAction('right')}
      >
        <Heart className="w-7 h-7 fill-current" />
      </Button>

      {/* Message */}
      <Button
        variant="outline"
        size="lg"
        className="w-12 h-12 rounded-full border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 shadow-sm"
      >
        <MessageCircle className="w-5 h-5 text-purple-500" />
      </Button>

      {/* Gift */}
      <Button
        variant="outline"
        size="lg"
        className="w-14 h-14 rounded-full border-2 border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-all duration-200 shadow-sm"
      >
        <Gift className="w-6 h-6 text-gray-500 hover:text-pink-500 transition-colors" />
      </Button>
    </div>
  );
};

export default QuickActions;