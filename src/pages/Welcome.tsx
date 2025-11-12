import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Moon, Heart, Sparkles, Wind, Play, Pause } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState<'inhale' | 'hold' | 'exhale' | 'pause'>('inhale');
  const [breathCount, setBreathCount] = useState(0);

  useEffect(() => {
    if (isBreathingActive) {
      const cycle = setInterval(() => {
        setBreathingPhase((prev) => {
          if (prev === 'inhale') {
            return 'hold';
          } else if (prev === 'hold') {
            return 'exhale';
          } else if (prev === 'exhale') {
            return 'pause';
          } else {
            setBreathCount((c) => c + 1);
            return 'inhale';
          }
        });
      }, 4000); // 4 seconds per phase

      return () => clearInterval(cycle);
    }
  }, [isBreathingActive]);

  const getBreathingText = () => {
    switch (breathingPhase) {
      case 'inhale':
        return { text: 'Breathe In', instruction: 'Slowly inhale through your nose...' };
      case 'hold':
        return { text: 'Hold', instruction: 'Hold your breath gently...' };
      case 'exhale':
        return { text: 'Breathe Out', instruction: 'Slowly exhale through your mouth...' };
      case 'pause':
        return { text: 'Pause', instruction: 'Rest for a moment...' };
    }
  };

  const breathingInfo = getBreathingText();

  return (
    <div className="min-h-screen bg-gradient-waves relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-float-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-1/3 w-18 h-18 bg-primary/15 rounded-full blur-xl animate-float-slow" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 px-4 py-12">
        <div className="mx-auto max-w-3xl">
          {/* Main Title */}
          <div className="mb-8 text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-primary/20 p-6 animate-float-slow">
                <Moon className="h-16 w-16 text-primary" />
              </div>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-foreground leading-tight">
              Perimenopause Care
            </h1>
            <p className="text-xl text-muted-foreground">
              Your comprehensive wellness guide
            </p>
          </div>

          {/* Breathing Exercise Card */}
          <Card className="mb-8 border-border/50 bg-card/90 backdrop-blur-sm p-8 shadow-soft">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Wind className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold text-card-foreground">
                  Guided Breathing
                </h2>
              </div>
              <Button
                onClick={() => setIsBreathingActive(!isBreathingActive)}
                variant={isBreathingActive ? "default" : "outline"}
                size="sm"
              >
                {isBreathingActive ? (
                  <>
                    <Pause className="mr-2 h-4 w-4" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Start
                  </>
                )}
              </Button>
            </div>

            {isBreathingActive ? (
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className={`relative flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 ${breathingPhase === 'inhale' ? 'animate-breathe' : breathingPhase === 'exhale' ? 'scale-100' : 'scale-110'}`}>
                    <div className="h-32 w-32 rounded-full bg-primary/40" />
                    <div className="absolute text-2xl font-semibold text-primary">
                      {breathingInfo.text}
                    </div>
                  </div>
                </div>
                <p className="mb-2 text-lg text-muted-foreground">
                  {breathingInfo.instruction}
                </p>
                <p className="text-sm text-muted-foreground">
                  Breath count: {breathCount}
                </p>
              </div>
            ) : (
              <p className="text-center text-muted-foreground">
                Take a moment to center yourself with a gentle breathing exercise. 
                Click Start to begin a calming 4-4-4-4 breathing pattern.
              </p>
            )}
          </Card>

          {/* Feature Cards */}
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm p-6 text-center shadow-soft hover:shadow-lg transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/20 p-4">
                  <Moon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                Sleep Support First
              </h3>
              <p className="text-sm text-muted-foreground">
                Get specialized guidance on managing sleep disturbances
              </p>
            </Card>

            <Card className="border-border/50 bg-card/90 backdrop-blur-sm p-6 text-center shadow-soft hover:shadow-lg transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-secondary/20 p-4">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                Comprehensive Care
              </h3>
              <p className="text-sm text-muted-foreground">
                Learn about symptoms and how to manage them effectively
              </p>
            </Card>

            <Card className="border-border/50 bg-card/90 backdrop-blur-sm p-6 text-center shadow-soft hover:shadow-lg transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-accent/20 p-4">
                  <Sparkles className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                Expert Consultation
              </h3>
              <p className="text-sm text-muted-foreground">
                Connect with specialists through teleconsultation
              </p>
            </Card>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => navigate("/education")}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft"
            size="lg"
          >
            Begin Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
