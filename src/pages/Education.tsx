import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Moon, Lightbulb, CheckCircle2, Flame, Weight, Cloud, Activity, MessageCircle, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Education = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-4xl font-bold text-foreground">
          Understanding Your Symptoms
        </h1>
        <p className="mb-8 text-muted-foreground">
          Evidence-based information about perimenopause symptoms and management
        </p>

        <Card className="mb-8 border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10 p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-full bg-primary/20 p-3">
              <Moon className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Sleep Disturbances
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-card-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                What It Feels Like
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Difficulty falling asleep despite feeling tired, waking up multiple times during the night,
                or waking up very early and being unable to fall back asleep. You may feel exhausted even
                after a full night's rest.
              </p>
            </div>

            <Separator className="bg-border" />

            <div>
              <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-card-foreground">
                <Lightbulb className="h-5 w-5 text-primary" />
                Why It Happens
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong>Hormonal Changes:</strong> Declining estrogen and progesterone levels disrupt
                    your body's natural sleep-wake cycle
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong>Night Sweats:</strong> Hot flashes during sleep can wake you suddenly, leaving
                    you drenched and uncomfortable
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong>Increased Stress:</strong> Anxiety and mood changes common in perimenopause
                    can make it harder to relax
                  </span>
                </li>
              </ul>
            </div>

            <Separator className="bg-border" />

            <div>
              <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-card-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Tips to Improve Sleep
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold text-card-foreground">Sleep Environment</h4>
                  <ul className="space-y-1.5 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                      <span>Keep your bedroom cool with a fan or air conditioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                      <span>Use breathable cotton bedding and nightwear</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                      <span>Block out light with curtains or an eye mask</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                      <span>Reduce noise with earplugs or white noise</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-card-foreground">Nutrition & Timing</h4>
                  <ul className="space-y-1.5 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                      <span>Avoid tea, coffee, and caffeinated drinks after 4 PM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                      <span>Try warm haldi doodh (turmeric milk) before bedtime</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                      <span>Eat a light dinner at least 2-3 hours before sleep</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                      <span>Include magnesium-rich foods: almonds, bananas, spinach</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-card-foreground">Relaxation Practices</h4>
                  <ul className="space-y-1.5 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                      <span>Practice pranayama or deep breathing exercises</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                      <span>Try gentle yoga or stretching before bed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                      <span>Establish a consistent sleep schedule</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                      <span>Avoid screens for at least 30 minutes before sleep</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={() => navigate("/consult")}
            className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90"
            size="lg"
          >
            Talk to a Sleep Specialist
          </Button>
        </Card>

        <div className="mb-6">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Other Common Symptoms
          </h2>
          <p className="mb-6 text-muted-foreground">
            Perimenopause affects women differently. Here are other symptoms you might experience:
          </p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <Card className="border-border bg-card p-6">
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-full bg-accent/10 p-2">
                <Flame className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">
                Hot Flashes
              </h3>
            </div>
            <p className="mb-3 text-sm text-muted-foreground">
              Sudden feelings of intense heat, often with sweating and rapid heartbeat.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Tips:</strong> Wear cotton clothing, stay hydrated with coconut water,
              practice cooling pranayama breathing.
            </p>
          </Card>

          <Card className="border-border bg-card p-6">
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-full bg-accent/10 p-2">
                <Weight className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">
                Weight Changes
              </h3>
            </div>
            <p className="mb-3 text-sm text-muted-foreground">
              Weight gain, especially around the midsection, despite no change in diet.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Tips:</strong> Include dal, sabzi, and whole grains. Try morning walks
              or yoga. Reduce fried foods.
            </p>
          </Card>

          <Card className="border-border bg-card p-6">
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-full bg-accent/10 p-2">
                <Cloud className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">
                Mood Swings
              </h3>
            </div>
            <p className="mb-3 text-sm text-muted-foreground">
              Irritability, anxiety, or sudden feelings of sadness without clear cause.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Tips:</strong> Practice meditation, talk to loved ones, consider
              ashwagandha (consult doctor first).
            </p>
          </Card>

          <Card className="border-border bg-card p-6">
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-full bg-accent/10 p-2">
                <Activity className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">
                Joint Pain
              </h3>
            </div>
            <p className="mb-3 text-sm text-muted-foreground">
              Aches and stiffness in joints, especially in the morning.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Tips:</strong> Stay active with gentle exercises, maintain healthy weight,
              include anti-inflammatory foods like haldi.
            </p>
          </Card>
        </div>

        <Button
          onClick={() => navigate("/consult")}
          className="mb-8 w-full bg-primary text-primary-foreground hover:bg-primary/90"
          size="lg"
        >
          Connect with a Specialist
        </Button>

        <Card className="border-border bg-gradient-to-br from-secondary/5 to-accent/5 p-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Join Our Support Community
          </h2>
          <p className="mb-6 text-muted-foreground">
            Connect with others experiencing perimenopause. Share experiences, ask questions,
            and get peer support in a safe space.
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

export default Education;
