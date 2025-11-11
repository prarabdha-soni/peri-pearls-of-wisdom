import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram } from "lucide-react";

const symptoms = [
  { id: "hot-flashes", label: "Hot Flashes" },
  { id: "irregular-periods", label: "Irregular Periods" },
  { id: "mood-changes", label: "Mood Changes" },
  { id: "sleep-issues", label: "Sleep Issues" },
  { id: "vaginal-dryness", label: "Vaginal Dryness" },
  { id: "brain-fog", label: "Brain Fog" },
  { id: "fatigue", label: "Fatigue" },
  { id: "weight-changes", label: "Weight Changes" },
];

const advice: Record<string, string> = {
  "hot-flashes":
    "Try layered clothing, cooling drinks, and paced breathing exercises. If severe, consult a doctor about hormone therapy options.",
  "irregular-periods":
    "Track your cycle to identify patterns. Maintain a healthy diet and exercise routine. See your doctor if bleeding is very heavy or prolonged.",
  "mood-changes":
    "Practice stress-reduction techniques like meditation or yoga. Stay connected with friends and family. Consider therapy if feelings persist.",
  "sleep-issues":
    "Establish a regular sleep schedule, keep your bedroom cool, and avoid screens before bed. Limit caffeine in the afternoon.",
  "vaginal-dryness":
    "Use water-based lubricants and vaginal moisturizers. Stay hydrated. Talk to your doctor about estrogen creams if needed.",
  "brain-fog":
    "Stay mentally active with puzzles or reading. Get adequate sleep and exercise. Keep lists to help with memory.",
  fatigue:
    "Prioritize rest and sleep. Eat a balanced diet rich in iron and B vitamins. Regular exercise can actually boost energy levels.",
  "weight-changes":
    "Focus on whole foods and portion control. Include strength training to maintain muscle mass. Stay active with activities you enjoy.",
};

const Home = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const toggleSymptom = (symptomId: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptomId)
        ? prev.filter((id) => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-4xl font-bold text-foreground">
          Your Perimenopause Guidance
        </h1>
        <p className="mb-8 text-muted-foreground">
          Select the symptoms you're experiencing to get personalized advice and support.
        </p>

        <Card className="mb-8 border-border bg-card p-6">
          <h2 className="mb-4 text-xl font-semibold text-card-foreground">
            What symptoms are you experiencing?
          </h2>
          <div className="space-y-3">
            {symptoms.map((symptom) => (
              <div key={symptom.id} className="flex items-center space-x-3">
                <Checkbox
                  id={symptom.id}
                  checked={selectedSymptoms.includes(symptom.id)}
                  onCheckedChange={() => toggleSymptom(symptom.id)}
                  className="border-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                />
                <label
                  htmlFor={symptom.id}
                  className="cursor-pointer text-base text-foreground"
                >
                  {symptom.label}
                </label>
              </div>
            ))}
          </div>
        </Card>

        {selectedSymptoms.length > 0 && (
          <div className="mb-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">What Could Happen</h2>
            <p className="text-muted-foreground">
              Here's personalized advice for the symptoms you've selected:
            </p>
            {selectedSymptoms.map((symptomId) => {
              const symptom = symptoms.find((s) => s.id === symptomId);
              return (
                <Card
                  key={symptomId}
                  className="border-l-4 border-l-primary bg-card p-6"
                >
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                    {symptom?.label}
                  </h3>
                  <p className="text-muted-foreground">{advice[symptomId]}</p>
                </Card>
              );
            })}
          </div>
        )}

        <Card className="border-border bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Join Our Community
          </h2>
          <p className="mb-6 text-muted-foreground">
            Connect with others going through similar experiences and get support from our community.
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
                href="https://instagram.com/your_page"
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
    </div>
  );
};

export default Home;
