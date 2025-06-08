import { Heart, MessageCircle, User, Compass, Sparkles } from "lucide-react";
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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-gray-200">
      <div className="flex justify-around items-center py-2 px-4 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center p-3 rounded-xl transition-all duration-200 min-w-0",
                isActive 
                  ? "text-primary bg-primary/5" 
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              )}
            >
              <Icon 
                className={cn(
                  "w-5 h-5 mb-1",
                  isActive && "text-primary"
                )} 
              />
              <span className={cn(
                "text-xs font-medium truncate",
                isActive ? "text-primary font-semibold" : "text-gray-500"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;