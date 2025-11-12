import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Heart, BookOpen, Users, Instagram, MessageCircle, Play } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-calm relative overflow-hidden pb-20">
      {/* Floating decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-primary/15 rounded-full blur-xl animate-float" />
      <div className="absolute top-32 left-20 w-16 h-16 bg-secondary/15 rounded-full blur-xl animate-float-slow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-40 right-1/4 w-24 h-24 bg-accent/15 rounded-full blur-xl animate-float" style={{ animationDelay: '2.5s' }} />

      {/* Hero Section */}
      <section className="relative z-10 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
          <div className="mb-8 inline-block rounded-full bg-primary/10 px-6 py-2">
            <p className="text-sm font-medium text-primary">Nishu Health</p>
          </div>
          <h1 className="mb-8 text-5xl font-bold leading-tight text-foreground md:text-7xl md:leading-tight">
            Perimenopause Care
          </h1>
          
          {/* Instagram Video Section - Prominently Displayed */}
          <Card className="mb-8 overflow-hidden border-2 border-primary/30 bg-card/90 backdrop-blur-sm p-6 shadow-soft">
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Recognizing the First Signs of Perimenopause
            </h2>
            <p className="mb-6 text-muted-foreground">
              Watch this educational video to learn about early perimenopause symptoms
            </p>
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 relative group">
              {/* Instagram Video Thumbnail/Preview */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
                <div className="mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl" />
                    <Instagram className="h-16 w-16 text-white relative z-10 mx-auto" />
                  </div>
                </div>
                <p className="text-lg font-semibold text-white mb-2 text-center">
                  Watch on Instagram
                </p>
                <p className="text-white/90 mb-6 text-center text-sm max-w-xs">
                  Learn about early perimenopause symptoms and what to expect
                </p>
                <Button
                  asChild
                  size="lg"
                  className="gap-2 bg-white text-primary hover:bg-white/90 shadow-lg"
                >
                  <a
                    href="https://www.instagram.com/reel/DQ96tkwkxZZ/?igsh=eXFjbXRubW01ZXhr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Play className="h-5 w-5" />
                    Watch Video
                  </a>
                </Button>
              </div>
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary rounded-full blur-3xl" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Instagram className="h-4 w-4" />
              <span>Tap to watch on Instagram</span>
            </div>
          </Card>

          {/* Local Video Fallback */}
          <Card className="mb-8 overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm p-8 shadow-soft">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">
              Educational Video
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-muted">
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

          <Button
            onClick={() => navigate("/education")}
            size="lg"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft px-8 py-6 text-lg"
          >
            Discover Natural Solutions
          </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 bg-gradient-hero px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground">
            Your Wellness Journey
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            Natural, science-backed support for every stage
          </p>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm p-8 text-center shadow-soft hover:shadow-lg transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-5">
                  <BookOpen className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                Natural Supplements
              </h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Evidence-based supplement recommendations tailored for hormonal balance
              </p>
              <Button
                variant="outline"
                onClick={() => navigate("/education")}
                className="w-full rounded-full"
              >
                Learn More
              </Button>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur-sm p-8 text-center shadow-soft hover:shadow-lg transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 p-5">
                  <Heart className="h-10 w-10 text-secondary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                Expert Guidance
              </h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Personalized advice from specialists who understand your unique needs
              </p>
              <Button
                variant="outline"
                onClick={() => navigate("/consult")}
                className="w-full rounded-full"
              >
                Get Consultation
              </Button>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur-sm p-8 text-center shadow-soft hover:shadow-lg transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-gradient-to-br from-accent/20 to-primary/20 p-5">
                  <Users className="h-10 w-10 text-accent" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                Calm Community
              </h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Connect with a peaceful, supportive community of women on similar journeys
              </p>
              <Button
                variant="outline"
                onClick={() => navigate("/education")}
                className="w-full rounded-full"
              >
                Join Us
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Links Section */}
      <section className="relative z-10 px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm p-8 shadow-soft">
            <h2 className="mb-4 text-center text-2xl font-bold text-foreground">
              Join Our Support Community
            </h2>
            <p className="mb-6 text-center text-muted-foreground">
              Connect with women at all stages - perimenopause, menopause, and post-menopause. 
              Share experiences, ask questions, and get peer support in a safe, understanding space.
            </p>

            <div className="space-y-3">
              <Button
                asChild
                className="w-full bg-[#25D366] text-white hover:bg-[#25D366]/90"
                size="lg"
              >
                <a
                  href="https://wa.me/group_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Join WhatsApp Support Group
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full border-border hover:bg-accent"
                size="lg"
              >
                <a
                  href="https://www.instagram.com/nishu_health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Instagram className="h-5 w-5" />
                  Follow Us on Instagram
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-foreground">
            Get Started with Perimenopause Care
          </h2>
          <p className="mb-10 text-lg text-muted-foreground leading-relaxed">
            Access personalized supplement guidance and expert support for your wellness journey
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              onClick={() => navigate("/education")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-soft px-8 py-6 text-lg"
            >
              Begin Your Journey
            </Button>
            <Button
              onClick={() => navigate("/consult")}
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-lg"
            >
              Speak with Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
