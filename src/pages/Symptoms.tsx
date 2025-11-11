import { Flame, Calendar, Brain, Moon, Droplet, Cloud, Zap, Weight, Sparkles, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const symptoms = [
  {
    icon: Weight,
    title: "Weight Changes",
    description: "Unexplained weight gain, especially around the midsection.",
  },
  {
    icon: Sparkles,
    title: "Hair Changes",
    description: "Thinning hair, hair loss, or changes in hair texture and growth.",
  },
  {
    icon: User,
    title: "Skin Changes",
    description: "Dryness, increased wrinkles, or changes in skin texture and elasticity.",
  },
  {
    icon: Flame,
    title: "Hot Flashes",
    description: "Sudden feelings of warmth, often most intense over the face, neck and chest.",
  },
  {
    icon: Calendar,
    title: "Irregular Periods",
    description: "Changes in menstrual flow, frequency, or duration as your cycle becomes unpredictable.",
  },
  {
    icon: Cloud,
    title: "Mood Changes",
    description: "Irritability, anxiety, or feelings of sadness that come and go.",
  },
  {
    icon: Moon,
    title: "Sleep Issues",
    description: "Difficulty falling asleep or staying asleep through the night.",
  },
  {
    icon: Droplet,
    title: "Vaginal Dryness",
    description: "Reduced moisture and elasticity in vaginal tissues.",
  },
  {
    icon: Brain,
    title: "Brain Fog",
    description: "Difficulty concentrating, forgetfulness, or mental cloudiness.",
  },
  {
    icon: Zap,
    title: "Fatigue",
    description: "Persistent tiredness or lack of energy despite adequate rest.",
  },
];

const Symptoms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-4xl font-bold text-foreground">
          What Are Perimenopause Symptoms?
        </h1>
        <p className="mb-8 text-muted-foreground">
          Understanding the common signs your body may experience during this natural transition.
        </p>

        <div className="space-y-4">
          {symptoms.map((symptom, index) => {
            const Icon = symptom.icon;
            return (
              <Card
                key={index}
                className="border-border bg-card p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                      {symptom.title}
                    </h3>
                    <p className="text-muted-foreground">{symptom.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Button
          onClick={() => navigate("/did-you-know")}
          className="mt-8 w-full bg-primary text-primary-foreground hover:bg-primary/90"
          size="lg"
        >
          Continue to Learn More
        </Button>
      </div>
    </div>
  );
};

export default Symptoms;
