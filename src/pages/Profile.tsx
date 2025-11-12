import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Settings, BookOpen, Calendar, Heart, LogOut, Bell, CheckCircle2, Clock, TrendingUp, Award, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import logo from "@/assets/logo.png";

const Profile = () => {
  const navigate = useNavigate();

  const profileSections = [
    {
      title: "My Learning",
      icon: BookOpen,
      description: "Track your educational progress",
      action: () => navigate("/education"),
      stats: "12 articles read",
    },
    {
      title: "My Consultations",
      icon: Calendar,
      description: "View your doctor appointments",
      action: () => navigate("/doctor"),
      stats: "2 upcoming",
    },
    {
      title: "My Symptoms",
      icon: Heart,
      description: "Track and manage your symptoms",
      action: () => navigate("/education"),
      stats: "5 tracked",
    },
    {
      title: "My Wellness Journey",
      icon: TrendingUp,
      description: "View your progress and achievements",
      action: () => navigate("/education"),
      stats: "30 days active",
    },
  ];

  const achievements = [
    {
      title: "Learning Explorer",
      description: "Completed 10 educational articles",
      icon: BookOpen,
      completed: true,
    },
    {
      title: "Wellness Warrior",
      description: "Tracked symptoms for 7 days",
      icon: Heart,
      completed: true,
    },
    {
      title: "Nutrition Expert",
      description: "Read all nutrition guides",
      icon: Award,
      completed: false,
    },
  ];

  const recentActivity = [
    {
      title: "Read: Understanding Hot Flashes",
      time: "2 hours ago",
      icon: BookOpen,
    },
    {
      title: "Booked consultation",
      time: "1 day ago",
      icon: Calendar,
    },
    {
      title: "Tracked sleep symptoms",
      time: "2 days ago",
      icon: Heart,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-calm relative overflow-hidden px-4 py-8 pb-20">
      <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      
      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Profile Header */}
        <Card className="mb-8 border-border/50 bg-card/90 backdrop-blur-sm p-8 shadow-soft">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img 
                src={logo} 
                alt="Nishu Health Logo" 
                className="h-16 w-auto"
              />
            </div>
            <h1 className="mb-2 text-3xl font-bold text-foreground">
              Welcome Back
            </h1>
            <p className="text-muted-foreground">
              Your perimenopause wellness journey
            </p>
          </div>
        </Card>

        {/* Stats Overview */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <Card className="border border-border/50 bg-card p-4 text-center shadow-sm">
            <div className="mb-2 flex justify-center">
              <div className="rounded-full bg-primary/10 p-3">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
            </div>
            <p className="text-2xl font-bold text-foreground">12</p>
            <p className="text-xs text-muted-foreground">Articles Read</p>
          </Card>
          <Card className="border border-border/50 bg-card p-4 text-center shadow-sm">
            <div className="mb-2 flex justify-center">
              <div className="rounded-full bg-secondary/10 p-3">
                <Calendar className="h-5 w-5 text-secondary" />
              </div>
            </div>
            <p className="text-2xl font-bold text-foreground">2</p>
            <p className="text-xs text-muted-foreground">Consultations</p>
          </Card>
          <Card className="border border-border/50 bg-card p-4 text-center shadow-sm">
            <div className="mb-2 flex justify-center">
              <div className="rounded-full bg-accent/10 p-3">
                <Heart className="h-5 w-5 text-accent" />
              </div>
            </div>
            <p className="text-2xl font-bold text-foreground">30</p>
            <p className="text-xs text-muted-foreground">Days Active</p>
          </Card>
        </div>

        {/* Profile Sections */}
        <div className="mb-8 space-y-4">
          {profileSections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <Card
                key={idx}
                className="border border-border/50 bg-card p-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
                onClick={section.action}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/20 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground">
                        {section.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">{section.stats}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Achievements */}
        <Card className="mb-8 border border-border/50 bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-foreground flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Achievements
          </h2>
          <div className="space-y-3">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-4 rounded-lg p-4 border ${
                    achievement.completed
                      ? "bg-primary/5 border-primary/20"
                      : "bg-muted/50 border-border/50"
                  }`}
                >
                  <div
                    className={`rounded-full p-2 ${
                      achievement.completed ? "bg-primary/20" : "bg-muted"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        achievement.completed ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-semibold ${
                        achievement.completed ? "text-card-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                  {achievement.completed && (
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  )}
                </div>
              );
            })}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="mb-8 border border-border/50 bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-foreground flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Recent Activity
          </h2>
          <div className="space-y-3">
            {recentActivity.map((activity, idx) => {
              const Icon = activity.icon;
              return (
                <div key={idx} className="flex items-center gap-4 rounded-lg p-3 hover:bg-muted/50 transition-colors">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-card-foreground">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Community Links */}
        <Card className="mb-8 border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5 p-6 shadow-soft">
          <h2 className="mb-4 text-xl font-bold text-foreground">
            Connect with Community
          </h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Join our supportive community of women on similar journeys
          </p>
          <Button
            asChild
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a
              href="https://www.instagram.com/nishu_health"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Instagram className="h-4 w-4" />
              Follow on Instagram
            </a>
          </Button>
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

