import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Moon, Flame, Weight, Brain, Wind, Play, Pause, ArrowLeft, CheckCircle2, Lightbulb, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";

const Symptoms = () => {
  const { symptom } = useParams<{ symptom: string }>();
  const navigate = useNavigate();
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState<'inhale' | 'hold' | 'exhale' | 'pause'>('inhale');

  useEffect(() => {
    if (isBreathingActive) {
      const cycle = setInterval(() => {
        setBreathingPhase((prev) => {
          if (prev === 'inhale') return 'hold';
          if (prev === 'hold') return 'exhale';
          if (prev === 'exhale') return 'pause';
          return 'inhale';
        });
      }, 4000);
      return () => clearInterval(cycle);
    }
  }, [isBreathingActive]);

  const getBreathingText = () => {
    switch (breathingPhase) {
      case 'inhale': return { text: 'Breathe In', instruction: 'Slowly inhale through your nose...' };
      case 'hold': return { text: 'Hold', instruction: 'Hold your breath gently...' };
      case 'exhale': return { text: 'Breathe Out', instruction: 'Slowly exhale through your mouth...' };
      case 'pause': return { text: 'Pause', instruction: 'Rest for a moment...' };
    }
  };

  const breathingInfo = getBreathingText();

  const symptomData: Record<string, any> = {
    sleep: {
      icon: Moon,
      title: "Sleep Support",
      color: "primary",
      description: "Managing sleep disturbances with calming practices and natural solutions",
      content: {
        whatItFeelsLike: "Difficulty falling asleep despite feeling tired, waking up multiple times during the night, or waking up very early and being unable to fall back asleep. You may feel exhausted even after a full night's rest.",
        whyItHappens: [
          "Hormonal Changes: Declining estrogen and progesterone levels disrupt your body's natural sleep-wake cycle",
          "Night Sweats: Hot flashes during sleep can wake you suddenly, leaving you drenched and uncomfortable",
          "Increased Stress: Anxiety and mood changes common in perimenopause can make it harder to relax"
        ],
        tips: {
          environment: [
            "Keep your bedroom cool with a fan or air conditioning",
            "Use breathable cotton bedding and nightwear",
            "Block out light with curtains or an eye mask",
            "Reduce noise with earplugs or white noise"
          ],
          nutrition: [
            "Avoid tea, coffee, and caffeinated drinks after 4 PM",
            "Try warm haldi doodh (turmeric milk) before bedtime",
            "Eat a light dinner at least 2-3 hours before sleep",
            "Include magnesium-rich foods: almonds, bananas, spinach"
          ],
          relaxation: [
            "Practice pranayama or deep breathing exercises",
            "Try gentle yoga or stretching before bed",
            "Establish a consistent sleep schedule",
            "Avoid screens for at least 30 minutes before sleep"
          ]
        },
        supplements: [
          "Magnesium: Helps relax muscles and calm the nervous system",
          "Melatonin: Natural sleep hormone (consult doctor for dosage)",
          "Ashwagandha: Adaptogenic herb that may help with stress and sleep",
          "Valerian Root: Traditional herb for sleep support"
        ],
        affirmations: [
          "My body knows how to rest and restore itself",
          "I am creating a peaceful sleep environment",
          "Each night brings me closer to restful sleep",
          "I release the day's stress and welcome peaceful rest"
        ]
      }
    },
    "hot-flashes": {
      icon: Flame,
      title: "Hot Flashes",
      color: "accent",
      description: "Cooling techniques and breathing exercises to manage hot flashes",
      content: {
        whatItFeelsLike: "Sudden feelings of intense heat, often starting in the face and chest, spreading throughout the body. Accompanied by sweating, rapid heartbeat, and sometimes chills afterward.",
        whyItHappens: [
          "Hormonal Fluctuations: Changes in estrogen levels affect the hypothalamus (temperature control center)",
          "Stress Triggers: Emotional stress, spicy foods, alcohol, and caffeine can trigger episodes",
          "Body Temperature Regulation: Your body's thermostat becomes more sensitive during this transition"
        ],
        tips: {
          cooling: [
            "Wear cotton clothing in layers for easy adjustment",
            "Keep a small fan nearby",
            "Sip cool water or coconut water throughout the day",
            "Use cooling gel packs or a damp cloth on your neck"
          ],
          lifestyle: [
            "Avoid spicy foods, alcohol, and caffeine",
            "Practice deep breathing when you feel a flash coming on",
            "Maintain a cool room temperature",
            "Consider acupuncture or acupressure"
          ],
          breathing: [
            "Practice 'cooling breath' (Sitali pranayama): Inhale through rolled tongue, exhale through nose",
            "Use 4-7-8 breathing: Inhale 4 counts, hold 7, exhale 8",
            "Focus on slow, deep breaths during an episode"
          ]
        },
        supplements: [
          "Black Cohosh: Traditional herb for hot flash relief",
          "Soy Isoflavones: Plant-based compounds that may help balance hormones",
          "Evening Primrose Oil: May help with hormonal balance",
          "Vitamin E: Some studies suggest it may reduce hot flash frequency"
        ],
        affirmations: [
          "This sensation is temporary and will pass",
          "My body is adapting beautifully to change",
          "I am calm and cool, inside and out",
          "I breathe through this moment with ease"
        ]
      }
    },
    weight: {
      icon: Weight,
      title: "Weight & Metabolism",
      color: "secondary",
      description: "Practical diet, exercise, and mindful eating guidance",
      content: {
        whatItFeelsLike: "Weight gain, especially around the midsection, despite no change in diet or exercise. Metabolism seems slower, and it's harder to lose weight than before.",
        whyItHappens: [
          "Metabolic Changes: Metabolism naturally slows with age and hormonal changes",
          "Muscle Loss: Decreased estrogen can lead to muscle mass reduction",
          "Hormonal Shifts: Insulin resistance may increase, affecting how your body processes sugar",
          "Stress Hormones: Increased cortisol can contribute to abdominal weight gain"
        ],
        tips: {
          nutrition: [
            "Include dal, sabzi, and whole grains in every meal",
            "Focus on protein: lentils, paneer, tofu, fish, eggs",
            "Eat smaller, more frequent meals to stabilize blood sugar",
            "Include healthy fats: ghee, nuts, seeds, avocado"
          ],
          exercise: [
            "Regular morning walks (30-45 minutes)",
            "Strength training 2-3 times per week to maintain muscle",
            "Yoga for flexibility and stress reduction",
            "Gentle cardio: swimming, cycling, dancing"
          ],
          mindfulEating: [
            "Eat slowly and chew thoroughly",
            "Listen to your body's hunger and fullness cues",
            "Avoid emotional eating triggers",
            "Practice gratitude before meals"
          ]
        },
        supplements: [
          "Omega-3 Fatty Acids: Support metabolism and reduce inflammation",
          "Vitamin D: Important for bone health and may support weight management",
          "Probiotics: Support gut health and metabolism",
          "Green Tea Extract: May support metabolism (consult doctor first)"
        ],
        affirmations: [
          "My body is strong and capable",
          "I nourish my body with love and care",
          "I move my body in ways that feel good",
          "I honor my body's changing needs"
        ]
      }
    },
    emotional: {
      icon: Brain,
      title: "Emotional Wellness",
      color: "primary",
      description: "Mood tracking, spiritual support, and stress relief techniques",
      content: {
        whatItFeelsLike: "Irritability, anxiety, sudden feelings of sadness, mood swings, or feeling overwhelmed. You may feel like you're on an emotional rollercoaster.",
        whyItHappens: [
          "Hormonal Fluctuations: Estrogen and progesterone affect neurotransmitters like serotonin",
          "Life Stressors: Multiple responsibilities and life changes can compound emotional challenges",
          "Sleep Disruption: Poor sleep affects mood regulation",
          "Physical Symptoms: Dealing with other symptoms can impact emotional well-being"
        ],
        tips: {
          stressRelief: [
            "Practice daily meditation or mindfulness",
            "Try journaling to process emotions",
            "Connect with loved ones and share your feelings",
            "Engage in activities that bring you joy"
          ],
          spiritual: [
            "Read spiritual stories or quotes that inspire you",
            "Practice gratitude daily",
            "Spend time in nature",
            "Listen to calming music or bhajans"
          ],
          selfCare: [
            "Set boundaries and say no when needed",
            "Take breaks throughout the day",
            "Practice deep breathing exercises",
            "Consider therapy or counseling support"
          ]
        },
        supplements: [
          "Ashwagandha: Adaptogenic herb that may help with stress and anxiety",
          "Omega-3 Fatty Acids: Support brain health and mood",
          "B-Complex Vitamins: Important for nervous system function",
          "Magnesium: Helps with relaxation and stress management"
        ],
        affirmations: [
          "My emotions are valid and temporary",
          "I am strong enough to handle this phase",
          "I give myself permission to feel and heal",
          "This too shall pass, and I am growing through it"
        ]
      }
    }
  };

  const currentSymptom = symptomData[symptom || 'sleep'];
  if (!currentSymptom) {
    return (
      <div className="min-h-screen bg-gradient-calm p-8">
        <Card className="mx-auto max-w-2xl p-8 text-center">
          <h1 className="mb-4 text-2xl font-bold">Symptom not found</h1>
          <Button onClick={() => navigate("/education")}>Back to Education</Button>
        </Card>
      </div>
    );
  }

  const Icon = currentSymptom.icon;
  const colorClass = currentSymptom.color;

  return (
    <div className="min-h-screen bg-gradient-calm relative overflow-hidden px-4 py-8 pb-20">
      <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      
      <div className="relative z-10 mx-auto max-w-4xl">
        <Button
          onClick={() => navigate("/education")}
          variant="ghost"
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Education
        </Button>

        <Card className="mb-6 border-border/50 bg-card/90 backdrop-blur-sm p-8 shadow-soft">
          <div className="mb-6 flex items-center gap-4">
            <div className={`rounded-full p-4 ${
              colorClass === 'primary' ? 'bg-primary/20' :
              colorClass === 'secondary' ? 'bg-secondary/20' :
              'bg-accent/20'
            }`}>
              <Icon className={`h-8 w-8 ${
                colorClass === 'primary' ? 'text-primary' :
                colorClass === 'secondary' ? 'text-secondary' :
                'text-accent'
              }`} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{currentSymptom.title}</h1>
              <p className="text-muted-foreground">{currentSymptom.description}</p>
            </div>
          </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border/50 bg-card/90 backdrop-blur-sm p-6 shadow-soft">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-card-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              What It Feels Like
            </h2>
            <p className="text-muted-foreground leading-relaxed">{currentSymptom.content.whatItFeelsLike}</p>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm p-6 shadow-soft">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-card-foreground">
              <Lightbulb className="h-5 w-5 text-primary" />
              Why It Happens
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              {currentSymptom.content.whyItHappens.map((reason: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Tips Section */}
        <Card className="mt-6 border-border/50 bg-card/90 backdrop-blur-sm p-6 shadow-soft">
          <h2 className="mb-4 text-xl font-semibold text-card-foreground">Tips to Manage</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(currentSymptom.content.tips).map(([category, tips]: [string, any]) => (
              <div key={category}>
                <h3 className="mb-3 font-semibold text-card-foreground capitalize">{category}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {tips.map((tip: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        {/* Breathing Exercise */}
        {(symptom === 'hot-flashes' || symptom === 'emotional' || symptom === 'sleep') && (
          <Card className="mt-6 border-border/50 bg-card/90 backdrop-blur-sm p-6 shadow-soft">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Wind className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold text-card-foreground">Guided Breathing Exercise</h2>
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

            {isBreathingActive && (
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className={`relative flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 ${breathingPhase === 'inhale' ? 'animate-breathe' : 'scale-100'}`}>
                    <div className="h-32 w-32 rounded-full bg-primary/40" />
                    <div className="absolute text-2xl font-semibold text-primary">
                      {breathingInfo.text}
                    </div>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground">{breathingInfo.instruction}</p>
              </div>
            )}
          </Card>
        )}

        {/* Supplements */}
        <Card className="mt-6 border-border/50 bg-card/90 backdrop-blur-sm p-6 shadow-soft">
          <h2 className="mb-4 text-xl font-semibold text-card-foreground">Supplement Support</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Always consult with a healthcare provider before starting any supplements
          </p>
          <ul className="space-y-2 text-muted-foreground">
            {currentSymptom.content.supplements.map((supplement: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span>{supplement}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Affirmations */}
        <Card className="mt-6 border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5 p-6 shadow-soft">
          <div className="mb-4 flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-card-foreground">Daily Affirmations</h2>
          </div>
          <div className="space-y-3">
            {currentSymptom.content.affirmations.map((affirmation: string, idx: number) => (
              <div key={idx} className="rounded-lg bg-card/50 p-4 border border-primary/10">
                <p className="text-muted-foreground italic">"{affirmation}"</p>
              </div>
            ))}
          </div>
        </Card>

        <Button
          onClick={() => navigate("/consult")}
          className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90"
          size="lg"
        >
          Talk to a Specialist
        </Button>
      </div>
    </div>
  );
};

export default Symptoms;

