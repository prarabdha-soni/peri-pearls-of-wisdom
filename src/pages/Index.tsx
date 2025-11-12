import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Heart, BookOpen, Users } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-block rounded-full bg-primary/10 px-6 py-2">
            <p className="text-sm font-medium text-primary">Nishu Health</p>
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-6xl md:leading-tight">
            Relax, it's just a hormonal change
          </h1>
          <p className="mb-12 text-xl text-muted-foreground md:text-2xl">
            You just need to take proper supplements
          </p>
          
          {/* Video Section */}
          <Card className="mb-8 overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm p-8 shadow-soft">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">
              Recognizing the First Signs of Perimenopause
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
            <p className="mt-6 text-muted-foreground">
              Watch this calming guide to understand the early symptoms and what to expect during perimenopause
            </p>
          </Card>

          <Button
            onClick={() => navigate("/education")}
            size="lg"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft px-8 py-6 text-lg"
          >
            Discover Natural Solutions
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-hero px-4 py-16">
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

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-foreground">
            Embrace Your Natural Balance
          </h2>
          <p className="mb-10 text-lg text-muted-foreground leading-relaxed">
            Start your journey to hormonal wellness with personalized supplement guidance and caring support
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
