
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
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-romance-200">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center p-2 rounded-lg transition-all duration-200",
                isActive 
                  ? "text-romance-600 bg-romance-100" 
                  : "text-gray-500 hover:text-romance-500"
              )}
            >
              <Icon 
                className={cn(
                  "w-6 h-6 mb-1",
                  isActive && item.label === "Home" && "animate-heart-beat"
                )} 
              />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
