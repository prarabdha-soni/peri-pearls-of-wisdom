import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  MessageCircle,
  PhoneCall,
  Leaf,
  Dumbbell,
} from "lucide-react";
import { cn } from "@/lib/utils";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      key: "home",
      icon: Home,
      label: "Home",
      onClick: () => navigate("/"),
      isActive: location.pathname === "/",
    },
    {
      key: "chat-doctor",
      icon: MessageCircle,
      label: "Chat Doctor",
      onClick: () => window.open("https://wa.me/919266106798", "_blank"),
    },
    {
      key: "call-doctor",
      icon: PhoneCall,
      label: "Call Doctor",
      onClick: () => {
        window.location.href = "tel:+919266106798";
      },
    },
    {
      key: "ayurvedic",
      icon: Leaf,
      label: "Ayurvedic",
      onClick: () => window.open("https://wa.me/919266106798?text=I%20want%20to%20consult%20an%20Ayurvedic%20expert", "_blank"),
    },
    {
      key: "fitness",
      icon: Dumbbell,
      label: "Fitness",
      onClick: () => window.open("https://wa.me/919266106798?text=I%20want%20to%20consult%20a%20fitness%20expert", "_blank"),
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="mx-auto flex max-w-md items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = item.isActive;
          return (
            <button
              key={item.key}
              onClick={item.onClick}
              className={cn(
                "flex flex-col items-center justify-center gap-1 rounded-lg px-3 py-2 transition-all duration-200",
                active
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              <Icon className={cn("h-5 w-5 transition-colors", active ? "text-primary" : "text-muted-foreground")} />
              <span className={cn("text-[10px] font-medium leading-tight", active ? "text-primary" : "text-muted-foreground")}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;

