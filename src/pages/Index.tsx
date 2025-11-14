import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Heart, BookOpen, Users, Instagram, Play, Shield, CheckCircle2, ArrowRight, Video, FileText, UtensilsCrossed, Pill, Stethoscope, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

const Index = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: "Book Consultation",
      description: "Talk to a specialist",
      icon: Stethoscope,
      color: "primary",
      action: () => navigate("/doctor"),
    },
    {
      title: "Learn About Symptoms",
      description: "Educational resources",
      icon: BookOpen,
      color: "secondary",
      action: () => navigate("/education"),
    },
    {
      title: "Nutrition Guide",
      description: "Vegetarian meal plans",
      icon: UtensilsCrossed,
      color: "accent",
      action: () => navigate("/nutrition"),
    },
    {
      title: "Treatment Options",
      description: "With doctor's prescription",
      icon: Pill,
      color: "primary",
      action: () => navigate("/treatment"),
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-20">
      {/* Hero Section */}
      <section className="relative z-10 px-4 py-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          {/* Logo and Branding */}
          <div className="mb-6 text-center">
            <div className="mb-3 flex justify-center">
              <img 
                src={logo} 
                alt="Nishu Health Logo" 
                className="h-16 w-auto md:h-20"
              />
            </div>
            <h1 className="mb-2 text-4xl font-bold leading-tight text-primary md:text-5xl">
              Nishu Health
            </h1>
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 border border-primary/20">
              <p className="text-sm font-semibold text-primary">Perimenopause Care</p>
            </div>
          </div>

          {/* Main Message */}
          <Card className="mb-6 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/5 p-6 shadow-sm">
            <p className="text-lg font-semibold text-foreground leading-relaxed text-center md:text-xl">
              Relax, it's just a hormonal change, you just need to take proper supplement
            </p>
          </Card>

          {/* Quick Actions */}
          <div className="mb-6">
            <h2 className="mb-4 text-xl font-bold text-foreground">
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, idx) => {
                const Icon = action.icon;
                return (
                  <Card
                    key={idx}
                    className="border border-border/50 bg-card p-4 shadow-sm hover:shadow-md transition-all cursor-pointer"
                    onClick={action.action}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <div className={`rounded-full p-2 ${
                        action.color === 'primary' ? 'bg-primary/10' :
                        action.color === 'secondary' ? 'bg-secondary/10' :
                        'bg-accent/10'
                      }`}>
                        <Icon className={`h-4 w-4 ${
                          action.color === 'primary' ? 'text-primary' :
                          action.color === 'secondary' ? 'text-secondary' :
                          'text-accent'
                        }`} />
                      </div>
                      <h3 className="text-sm font-semibold text-card-foreground">
                        {action.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {action.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Follow Instagram */}
          <Card className="mb-6 border border-border/50 bg-card p-4 shadow-sm">
            <Button
              asChild
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
              size="default"
            >
              <a
                href="https://www.instagram.com/nishu_health"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Instagram className="h-4 w-4" />
                Follow @nishu_health on Instagram
              </a>
            </Button>
          </Card>

          {/* Instagram Video Section */}
          <a
            href="https://www.instagram.com/reel/DQ96tkwkxZZ/?igsh=eXFjbXRubW01ZXhr"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-6 no-underline"
          >
            <Card className="overflow-hidden border border-border/50 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <div className="p-5">
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    Recognizing the First Signs of Perimenopause
                  </h2>
                  <Instagram className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
                <p className="mb-4 text-xs text-muted-foreground">
                  Watch this educational video to learn about early perimenopause symptoms
                </p>
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/5 flex items-center justify-center relative group-hover:from-primary/15 group-hover:via-primary/8 group-hover:to-secondary/8 transition-all">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10">
                    <div className="mb-2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors" />
                        <div className="relative bg-white rounded-full p-3 shadow-lg">
                          <Instagram className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <Play className="h-3 w-3" />
                      <span className="text-xs">Watch on Instagram</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary rounded-full blur-2xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-secondary rounded-full blur-2xl" />
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <span>Tap anywhere to open</span>
                  <Instagram className="h-3 w-3" />
                </div>
              </div>
            </Card>
          </a>

          {/* Educational Video */}
          <Card className="mb-6 overflow-hidden border border-border/50 bg-card p-5 shadow-sm">
            <h2 className="mb-3 text-base font-semibold text-foreground">
              Educational Video
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <video 
                controls 
                className="h-full w-full object-cover"
                poster="/placeholder.svg"
              >
                <source src="/perimenopause-symptom.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Card>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative z-10 px-4 py-8 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-1 text-center text-2xl font-bold text-foreground">
            How We Help
          </h2>
          <p className="mb-6 text-center text-sm text-muted-foreground">
            Comprehensive perimenopause care tailored to your needs
          </p>
          
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border border-border/50 bg-card p-5 shadow-sm hover:shadow-md transition-all">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-card-foreground">
                  Education & Resources
                </h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                Learn about perimenopause stages, symptoms, and natural management strategies
              </p>
              <Button
                variant="ghost"
                onClick={() => navigate("/education")}
                className="w-full text-primary hover:text-primary/80 text-sm"
                size="sm"
              >
                Explore Education
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Card>

            <Card className="border border-border/50 bg-card p-5 shadow-sm hover:shadow-md transition-all">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-full bg-secondary/10 p-3">
                  <Stethoscope className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-base font-semibold text-card-foreground">
                  Expert Consultations
                </h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                Book virtual consultations with specialists who understand perimenopause
              </p>
              <Button
                variant="ghost"
                onClick={() => navigate("/doctor")}
                className="w-full text-primary hover:text-primary/80 text-sm"
                size="sm"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Card>

            <Card className="border border-border/50 bg-card p-5 shadow-sm hover:shadow-md transition-all">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-full bg-accent/10 p-3">
                  <Sparkles className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-base font-semibold text-card-foreground">
                  Personalized Care
                </h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                Get personalized nutrition plans, supplement guidance, and treatment options
              </p>
              <Button
                variant="ghost"
                onClick={() => navigate("/nutrition")}
                className="w-full text-primary hover:text-primary/80 text-sm"
                size="sm"
              >
                View Plans
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative z-10 px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold text-foreground">
            Why Choose Nishu Health
          </h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-primary/10 p-2 flex-shrink-0">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-card-foreground">Evidence-Based Care</h3>
                <p className="text-sm text-muted-foreground">
                  Science-backed information and treatment recommendations
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="rounded-full bg-primary/10 p-2 flex-shrink-0">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-card-foreground">Insurance Accepted</h3>
                <p className="text-sm text-muted-foreground">
                  Most major insurance plans accepted for consultations
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="rounded-full bg-primary/10 p-2 flex-shrink-0">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-card-foreground">Virtual Consultations</h3>
                <p className="text-sm text-muted-foreground">
                  Convenient telehealth appointments from your home
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="rounded-full bg-primary/10 p-2 flex-shrink-0">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-card-foreground">Comprehensive Support</h3>
                <p className="text-sm text-muted-foreground">
                  Education, nutrition, treatment, and community support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
