import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram } from "lucide-react";

const symptoms = [
  { id: "weight-changes", label: "Weight Changes" },
  { id: "hair-changes", label: "Hair Changes" },
  { id: "skin-changes", label: "Skin Changes" },
  { id: "hot-flashes", label: "Hot Flashes" },
  { id: "irregular-periods", label: "Irregular Periods" },
  { id: "mood-changes", label: "Mood Changes" },
  { id: "sleep-issues", label: "Sleep Issues" },
  { id: "vaginal-dryness", label: "Vaginal Dryness" },
  { id: "brain-fog", label: "Brain Fog" },
  { id: "fatigue", label: "Fatigue" },
];

const advice: Record<string, string> = {
  "weight-changes":
    "Include dal, sabzi, and roti in balanced portions. Try morning walks or yoga. Reduce fried foods and maida-based snacks. Consult an Ayurvedic doctor or nutritionist familiar with Indian diets for personalized guidance.",
  "hair-changes":
    "Apply coconut or castor oil regularly. Include protein-rich foods like moong dal, curd, and eggs. Avoid tight hairstyles. Consider amla powder or Bhringraj oil. Consult a dermatologist if hair loss is severe.",
  "skin-changes":
    "Use moisturizers with glycerin or natural oils like almond oil. Drink plenty of water and include haldi (turmeric) in your diet. Apply sunscreen daily, especially in Indian heat. Try besan-curd face packs for natural care.",
  "hot-flashes":
    "Wear cotton sarees or loose kurtas for better ventilation. Drink nimbu pani or coconut water to stay cool. Practice pranayama breathing. If severe, visit a gynecologist to discuss hormone options available in India.",
  "irregular-periods":
    "Track your cycle using a diary or mobile app. Maintain regular meal times with sattvic foods. Do light exercise like walking or yoga. See your doctor if bleeding is very heavy or if you have gaps longer than 60 days.",
  "mood-changes":
    "Practice meditation or join a yoga class. Talk to trusted friends or family members. Include ashwagandha or shatavari after consulting an Ayurvedic practitioner. Don't hesitate to seek counseling if feelings persist.",
  "sleep-issues":
    "Follow a regular sleep schedule. Keep your room cool with a fan. Avoid tea/coffee after 4 PM. Try drinking warm haldi doodh (turmeric milk) before bed. Avoid heavy dinners and late-night screen time.",
  "vaginal-dryness":
    "Stay well-hydrated. Use water-based lubricants available at medical stores. Include healthy fats from ghee and nuts in your diet. Consult a gynecologist for vaginal moisturizers or hormone creams if needed.",
  "brain-fog":
    "Stay mentally active—do sudoku, crosswords, or read. Get 7-8 hours of sleep. Include brahmi or almonds in your diet. Keep to-do lists. Regular morning walks improve focus and memory.",
  fatigue:
    "Ensure 7-8 hours of sleep. Eat iron-rich foods like palak, dates, and jaggery. Include vitamin B12 sources or supplements if vegetarian. Practice light yoga or pranayama. Avoid skipping breakfast.",
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
