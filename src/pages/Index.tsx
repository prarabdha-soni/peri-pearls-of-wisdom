import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Heart, BookOpen, Users } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Your Journey Through Menopause, Supported
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Understanding perimenopause, menopause, and post-menopause with expert guidance and community support
          </p>
          
          {/* Video Section */}
          <Card className="mb-8 overflow-hidden border-border bg-card p-6">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              Recognizing the First Signs of Perimenopause
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
            <p className="mt-4 text-sm text-muted-foreground">
              Learn about the early symptoms and what to expect during perimenopause
            </p>
          </Card>

          <Button
            onClick={() => navigate("/education")}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Learn More About Your Symptoms
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary/5 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            How We Support You
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border bg-card p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                Educational Resources
              </h3>
              <p className="mb-4 text-muted-foreground">
                Evidence-based information about symptoms, causes, and management strategies
              </p>
              <Button
                variant="outline"
                onClick={() => navigate("/education")}
                className="w-full"
              >
                Explore Resources
              </Button>
            </Card>

            <Card className="border-border bg-card p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                Expert Consultation
              </h3>
              <p className="mb-4 text-muted-foreground">
                Connect with healthcare specialists who understand your journey
              </p>
              <Button
                variant="outline"
                onClick={() => navigate("/consult")}
                className="w-full"
              >
                Book Consultation
              </Button>
            </Card>

            <Card className="border-border bg-card p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                Community Support
              </h3>
              <p className="mb-4 text-muted-foreground">
                Join a supportive community of women sharing similar experiences
              </p>
              <Button
                variant="outline"
                onClick={() => navigate("/education")}
                className="w-full"
              >
                Join Community
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            You're Not Alone in This Journey
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Get the support, information, and care you deserve during every stage of menopause
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              onClick={() => navigate("/education")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Start Learning
            </Button>
            <Button
              onClick={() => navigate("/consult")}
              variant="outline"
              size="lg"
            >
              Talk to a Specialist
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
