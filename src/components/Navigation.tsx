
import { Heart, MessageCircle, User, Compass, Sparkles, Crown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { icon: Compass, label: "Discover", path: "/discovery" },
    { icon: Heart, label: "Matches", path: "/matches" },
    { icon: Sparkles, label: "Home", path: "/" },
    { icon: MessageCircle, label: "Messages", path: "/messages" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 glass-strong backdrop-blur-xl border-t border-white/20 z-50">
      <div className="flex justify-around items-center py-3 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center p-3 rounded-2xl transition-all duration-300 relative",
                isActive 
                  ? "text-white aurora-gradient neon-glow scale-110" 
                  : "text-gray-400 hover:text-romance-500 glass hover:bg-white/10"
              )}
            >
              {isActive && (
                <div className="absolute inset-0 aurora-gradient rounded-2xl animate-pulse opacity-20"></div>
              )}
              <Icon 
                className={cn(
                  "w-6 h-6 mb-1 relative z-10",
                  isActive && item.label === "Home" && "animate-heart-beat",
                  isActive && "drop-shadow-lg"
                )} 
              />
              <span className={cn(
                "text-xs font-medium relative z-10",
                isActive && "font-bold text-shadow"
              )}>
                {item.label}
              </span>
              
              {/* Premium indicator for some items */}
              {(item.label === "Matches" || item.label === "Messages") && (
                <Crown className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1 animate-sparkle" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
