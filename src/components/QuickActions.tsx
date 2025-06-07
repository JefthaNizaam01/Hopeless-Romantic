
import { Heart, X, Star, MessageCircle, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuickActionsProps {
  onAction: (action: 'left' | 'right') => void;
}

const QuickActions = ({ onAction }: QuickActionsProps) => {
  return (
    <div className="flex justify-center items-center space-x-4">
      {/* Pass */}
      <Button
        variant="outline"
        size="lg"
        className="w-14 h-14 rounded-full border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50"
        onClick={() => onAction('left')}
      >
        <X className="w-6 h-6 text-gray-500" />
      </Button>

      {/* Super Like */}
      <Button
        variant="outline"
        size="lg"
        className="w-12 h-12 rounded-full border-2 border-blue-300 hover:border-blue-400 hover:bg-blue-50"
      >
        <Star className="w-5 h-5 text-blue-500" />
      </Button>

      {/* Like */}
      <Button
        variant="outline"
        size="lg"
        className="w-16 h-16 rounded-full border-2 border-romance-300 hover:border-romance-400 hover:bg-romance-50 love-gradient text-white border-none"
        onClick={() => onAction('right')}
      >
        <Heart className="w-7 h-7 fill-current" />
      </Button>

      {/* Send Love Letter */}
      <Button
        variant="outline"
        size="lg"
        className="w-12 h-12 rounded-full border-2 border-purple-300 hover:border-purple-400 hover:bg-purple-50"
      >
        <MessageCircle className="w-5 h-5 text-purple-500" />
      </Button>

      {/* Send Gift */}
      <Button
        variant="outline"
        size="lg"
        className="w-12 h-12 rounded-full border-2 border-pink-300 hover:border-pink-400 hover:bg-pink-50"
      >
        <Gift className="w-5 h-5 text-pink-500" />
      </Button>
    </div>
  );
};

export default QuickActions;
