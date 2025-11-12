import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Moon, Heart, Sparkles } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-primary/10 p-6">
              <Moon className="h-16 w-16 text-primary" />
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-foreground">
            Understanding Perimenopause
          </h1>
          <p className="text-lg text-muted-foreground">
            Your guide to managing sleep disturbances and other symptoms during this natural transition
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <Card className="border-border bg-card p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Moon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                  Sleep Support First
                </h3>
                <p className="text-muted-foreground">
                  Get specialized guidance on managing sleep disturbances caused by hormonal changes
                </p>
              </div>
            </div>
          </Card>

          <Card className="border-border bg-card p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-secondary/10 p-3">
                <Heart className="h-6 w-6 text-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                  Comprehensive Care
                </h3>
                <p className="text-muted-foreground">
                  Learn about other common symptoms and how to manage them effectively
                </p>
              </div>
            </div>
          </Card>

          <Card className="border-border bg-card p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-accent/10 p-3">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                  Expert Consultation
                </h3>
                <p className="text-muted-foreground">
                  Connect with specialists through convenient teleconsultation services
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Button
          onClick={() => navigate("/education")}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          size="lg"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
