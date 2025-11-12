import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Moon, Lightbulb, CheckCircle2, Flame, Weight, Cloud, Activity, Instagram, ArrowRight, Heart, Wind, Brain, Sparkles } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Education = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-calm relative overflow-hidden px-4 py-8 pb-20">
      {/* Floating decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-secondary/10 rounded-full blur-xl animate-float-slow" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-foreground">
            Your Journey Through Menopause
          </h1>
          <p className="text-lg text-muted-foreground">
            Evidence-based information about perimenopause, menopause, and post-menopause care
          </p>
        </div>
        
        {/* Interactive Timeline - Mobile First */}
        <Card className="mb-8 border border-border/50 bg-card p-4 md:p-6 shadow-sm">
          <h2 className="mb-4 text-xl md:text-2xl font-bold text-foreground text-center">
            Understanding the Stages
          </h2>
          
          <Tabs defaultValue="perimenopause" className="w-full">
            {/* Mobile: Horizontal Scrollable Tabs */}
            <div className="mb-4 md:mb-6 overflow-x-auto scrollable-tabs -mx-4 px-4 md:mx-0 md:px-0">
              <TabsList className="inline-flex h-auto w-full min-w-max md:grid md:grid-cols-3 md:w-full md:min-w-0 gap-2 md:gap-1 p-1 bg-muted/50">
                <TabsTrigger 
                  value="perimenopause" 
                  className="flex-shrink-0 px-4 py-2.5 text-xs md:text-sm font-medium rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground whitespace-nowrap"
                >
                  Perimenopause
                </TabsTrigger>
                <TabsTrigger 
                  value="menopause" 
                  className="flex-shrink-0 px-4 py-2.5 text-xs md:text-sm font-medium rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground whitespace-nowrap"
                >
                  Menopause
                </TabsTrigger>
                <TabsTrigger 
                  value="postmenopause" 
                  className="flex-shrink-0 px-4 py-2.5 text-xs md:text-sm font-medium rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground whitespace-nowrap"
                >
                  Post-Menopause
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="perimenopause" className="space-y-4 mt-4 md:mt-2">
              <div className="rounded-lg bg-primary/5 p-4 md:p-6 border border-primary/20">
                <h3 className="mb-3 text-lg md:text-xl font-semibold text-card-foreground flex items-center gap-2">
                  <Moon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Perimenopause (Transition Phase)</span>
                </h3>
                <p className="mb-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  Usually begins in your 40s. Hormones fluctuate, causing irregular periods and various symptoms. 
                  Can last 4-8 years. This is a natural phase where your body is adapting to hormonal changes.
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm md:text-base font-semibold text-card-foreground">Common Symptoms:</h4>
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>Irregular periods</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>Hot flashes and night sweats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>Sleep disturbances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>Mood changes</span>
                    </li>
                  </ul>
                </div>
                <p className="mt-4 text-xs md:text-sm italic text-primary/80">
                  💫 Your body is adapting, this too shall pass.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="menopause" className="space-y-4 mt-4 md:mt-2">
              <div className="rounded-lg bg-secondary/5 p-4 md:p-6 border border-secondary/20">
                <h3 className="mb-3 text-lg md:text-xl font-semibold text-card-foreground flex items-center gap-2">
                  <Heart className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>Menopause (The Milestone)</span>
                </h3>
                <p className="mb-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  Officially reached after 12 consecutive months without a period. Average age is 51, 
                  but can occur earlier or later. This is a significant milestone in your life journey.
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm md:text-base font-semibold text-card-foreground">What to Expect:</h4>
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                      <span>Periods stop completely</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                      <span>Some symptoms may continue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                      <span>Focus on bone and heart health</span>
                    </li>
                  </ul>
                </div>
                <p className="mt-4 text-xs md:text-sm italic text-secondary/80">
                  💫 You've reached an important milestone. Celebrate your strength.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="postmenopause" className="space-y-4 mt-4 md:mt-2">
              <div className="rounded-lg bg-accent/5 p-4 md:p-6 border border-accent/20">
                <h3 className="mb-3 text-lg md:text-xl font-semibold text-card-foreground flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>Post-Menopause (Life After)</span>
                </h3>
                <p className="mb-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  The years following menopause. Some symptoms may ease, but bone health and heart health 
                  become important focuses. This is a time for continued self-care and wellness.
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm md:text-base font-semibold text-card-foreground">Focus Areas:</h4>
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <span>Bone density maintenance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <span>Cardiovascular health</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <span>Continued symptom management</span>
                    </li>
                  </ul>
                </div>
                <p className="mt-4 text-xs md:text-sm italic text-accent/80">
                  💫 Your journey continues with wisdom and grace.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Symptom-Specific Modules */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl md:text-2xl font-bold text-foreground text-center">
            Symptom-Specific Support
          </h2>
          <p className="mb-6 text-sm md:text-base text-center text-muted-foreground px-2">
            Explore detailed guidance for managing specific symptoms with supplements, nutrition, lifestyle tips, and calming practices
          </p>

          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            {/* Sleep Module */}
            <Card className="border border-border/50 bg-card p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-full bg-primary/20 p-2 md:p-3">
                  <Moon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="text-base md:text-xl font-semibold text-card-foreground">
                  Sleep Support
                </h3>
              </div>
              <p className="mb-4 text-xs md:text-sm text-muted-foreground leading-relaxed">
                Detailed content plus calming meditations, nature sounds for sleep, and nutrition tips to help you rest peacefully.
              </p>
              <Button
                onClick={() => navigate("/symptoms/sleep")}
                variant="outline"
                size="sm"
                className="w-full text-xs md:text-sm"
              >
                Explore Sleep Solutions
                <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </Card>

            {/* Hot Flashes Module */}
            <Card className="border border-border/50 bg-card p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-full bg-accent/20 p-2 md:p-3">
                  <Flame className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <h3 className="text-base md:text-xl font-semibold text-card-foreground">
                  Hot Flashes
                </h3>
              </div>
              <p className="mb-4 text-xs md:text-sm text-muted-foreground leading-relaxed">
                Breathing exercises, cooling advice, and mindset affirmations to help you manage hot flashes with ease.
              </p>
              <Button
                onClick={() => navigate("/symptoms/hot-flashes")}
                variant="outline"
                size="sm"
                className="w-full text-xs md:text-sm"
              >
                Learn Cooling Techniques
                <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </Card>

            {/* Weight & Metabolism Module */}
            <Card className="border border-border/50 bg-card p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-full bg-secondary/20 p-2 md:p-3">
                  <Weight className="h-5 w-5 md:h-6 md:w-6 text-secondary" />
                </div>
                <h3 className="text-base md:text-xl font-semibold text-card-foreground">
                  Weight & Metabolism
                </h3>
              </div>
              <p className="mb-4 text-xs md:text-sm text-muted-foreground leading-relaxed">
                Practical diet & exercise advice, mindful eating guides, and metabolism support strategies.
              </p>
              <Button
                onClick={() => navigate("/symptoms/weight")}
                variant="outline"
                size="sm"
                className="w-full text-xs md:text-sm"
              >
                Discover Weight Management
                <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </Card>

            {/* Emotional Wellness Module */}
            <Card className="border border-border/50 bg-card p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-full bg-primary/20 p-2 md:p-3">
                  <Brain className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="text-base md:text-xl font-semibold text-card-foreground">
                  Emotional Wellness
                </h3>
              </div>
              <p className="mb-4 text-xs md:text-sm text-muted-foreground leading-relaxed">
                Mood tracking, spiritual stories or quotes, stress relief techniques, and emotional support.
              </p>
              <Button
                onClick={() => navigate("/symptoms/emotional")}
                variant="outline"
                size="sm"
                className="w-full text-xs md:text-sm"
              >
                Nurture Your Mind
                <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </Card>
          </div>
        </div>

        {/* Common Symptoms Overview */}
        <Card className="mb-8 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-full bg-primary/20 p-3">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Common Symptoms Across All Stages
            </h2>
          </div>

          <p className="mb-6 text-muted-foreground">
            Every woman's experience is unique. Here are symptoms that may occur during perimenopause, 
            menopause, or post-menopause:
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm p-4">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-full bg-accent/10 p-2">
                  <Flame className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  Hot Flashes
                </h3>
              </div>
              <p className="mb-2 text-sm text-muted-foreground">
                Sudden feelings of intense heat, often with sweating and rapid heartbeat.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Tips:</strong> Wear cotton clothing, stay hydrated with coconut water,
                practice cooling pranayama breathing.
              </p>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur-sm p-4">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-full bg-accent/10 p-2">
                  <Weight className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  Weight Changes
                </h3>
              </div>
              <p className="mb-2 text-sm text-muted-foreground">
                Weight gain, especially around the midsection, despite no change in diet.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Tips:</strong> Include dal, sabzi, and whole grains. Regular exercise like 
                morning walks or yoga.
              </p>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur-sm p-4">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-full bg-accent/10 p-2">
                  <Cloud className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  Mood Swings
                </h3>
              </div>
              <p className="mb-2 text-sm text-muted-foreground">
                Irritability, anxiety, or sudden feelings of sadness.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Tips:</strong> Practice meditation, talk to loved ones, regular exercise helps. 
                Consider ashwagandha (consult doctor first).
              </p>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur-sm p-4">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-full bg-accent/10 p-2">
                  <Activity className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  Joint Pain
                </h3>
              </div>
              <p className="mb-2 text-sm text-muted-foreground">
                Aches and stiffness in joints, especially in the morning.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Tips:</strong> Stay active with gentle exercises, maintain healthy weight, 
                include calcium-rich foods (milk, curd) and anti-inflammatory foods like haldi.
              </p>
            </Card>
          </div>
        </Card>

        <Button
          onClick={() => navigate("/consult")}
          className="mb-8 w-full bg-primary text-primary-foreground hover:bg-primary/90"
          size="lg"
        >
          Connect with a Specialist
        </Button>

      </div>
    </div>
  );
};

export default Education;
