import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Settings, BookOpen, Calendar, Heart, LogOut, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Profile = () => {
  const navigate = useNavigate();

  const profileSections = [
    {
      title: "My Learning",
      icon: BookOpen,
      description: "Track your educational progress",
      action: () => navigate("/education"),
    },
    {
      title: "My Consultations",
      icon: Calendar,
      description: "View your doctor appointments",
      action: () => navigate("/doctor"),
    },
    {
      title: "My Symptoms",
      icon: Heart,
      description: "Track and manage your symptoms",
      action: () => navigate("/education"),
    },
    {
      title: "Notifications",
      icon: Bell,
      description: "Manage your notification preferences",
      action: () => {},
    },
    {
      title: "Settings",
      icon: Settings,
      description: "App settings and preferences",
      action: () => {},
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-calm relative overflow-hidden px-4 py-8 pb-20">
      <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      
      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Profile Header */}
        <Card className="mb-8 border-border/50 bg-card/90 backdrop-blur-sm p-8 shadow-soft">
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarFallback className="bg-primary/20 text-primary text-2xl">
                <User className="h-12 w-12" />
              </AvatarFallback>
            </Avatar>
            <h1 className="mb-2 text-3xl font-bold text-foreground">
              Welcome Back
            </h1>
            <p className="text-muted-foreground">
              Your perimenopause wellness journey
            </p>
          </div>
        </Card>

        {/* Profile Sections */}
        <div className="mb-8 space-y-4">
          {profileSections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <Card
                key={idx}
                className="border-border/50 bg-card/90 backdrop-blur-sm p-6 shadow-soft hover:shadow-lg transition-all cursor-pointer"
                onClick={section.action}
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/20 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {section.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {section.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Community Links */}
        <Card className="mb-8 border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5 p-6 shadow-soft">
          <h2 className="mb-4 text-xl font-bold text-foreground">
            Connect with Community
          </h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Join our supportive community of women on similar journeys
          </p>
          <div className="space-y-2">
            <Button
              asChild
              variant="outline"
              className="w-full"
            >
              <a
                href="https://wa.me/group_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join WhatsApp Group
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full"
            >
              <a
                href="https://www.instagram.com/nishu_health"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Instagram
              </a>
            </Button>
          </div>
        </Card>

        {/* Logout */}
        <Button
          variant="outline"
          className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
          size="lg"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Profile;

