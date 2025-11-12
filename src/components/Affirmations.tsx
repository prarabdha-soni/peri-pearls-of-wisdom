import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, RefreshCw, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const affirmations = [
  "I am strong enough to handle this phase.",
  "My emotions are valid and temporary.",
  "I give myself permission to feel and heal.",
  "This too shall pass, and I am growing through it.",
  "I am creating a peaceful environment for myself.",
  "I release the day's stress and welcome peaceful rest.",
  "I am calm and cool, inside and out.",
  "I breathe through this moment with ease.",
  "I am strong and capable.",
  "I nourish myself with love and care.",
  "I honor my changing needs.",
  "I am enough, exactly as I am.",
  "You are not alone in this journey.",
  "Every phase of life brings wisdom.",
  "You deserve peace and comfort.",
];

const mythDebunks = [
  {
    myth: "Menopause means you're old",
    truth: "Menopause is a natural transition that can happen at various ages. It's a phase of life, not a sign of aging."
  },
  {
    myth: "You'll gain weight no matter what",
    truth: "While metabolism changes, with proper nutrition, exercise, and supplements, you can maintain a healthy weight."
  },
  {
    myth: "Hot flashes last forever",
    truth: "Hot flashes typically decrease over time and can be managed with lifestyle changes and supplements."
  },
  {
    myth: "You can't do anything about mood swings",
    truth: "Mood changes can be managed through stress relief, supplements, and support. You're not powerless."
  },
  {
    myth: "It's all in your head",
    truth: "Perimenopause symptoms are real and physical. Your experience is valid and deserves proper support."
  }
];

export const AffirmationsBanner = () => {
  const [currentAffirmation, setCurrentAffirmation] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [currentMyth, setCurrentMyth] = useState<typeof mythDebunks[0] | null>(null);

  useEffect(() => {
    const getDailyAffirmation = () => {
      const today = new Date().getDate();
      return affirmations[today % affirmations.length];
    };
    setCurrentAffirmation(getDailyAffirmation());
  }, []);

  const showMythDebunk = () => {
    const randomMyth = mythDebunks[Math.floor(Math.random() * mythDebunks.length)];
    setCurrentMyth(randomMyth);
    setShowDialog(true);
  };

  if (!currentAffirmation) return null;

  return (
    <>
      <Card className="border-border/50 bg-gradient-to-r from-primary/10 to-secondary/10 p-4 shadow-soft">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground mb-1">Today's Affirmation</p>
              <p className="text-base text-muted-foreground italic">"{currentAffirmation}"</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={showMythDebunk}
              className="text-xs"
            >
              Myth Debunk
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const today = new Date().getDate();
                setCurrentAffirmation(affirmations[(today + 1) % affirmations.length]);
              }}
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Myth Debunked</DialogTitle>
            <DialogDescription>
              Let's gently correct a common misconception
            </DialogDescription>
          </DialogHeader>
          {currentMyth && (
            <div className="space-y-4">
              <div className="rounded-lg bg-destructive/10 p-4 border border-destructive/20">
                <p className="text-sm font-semibold text-destructive mb-2">Myth:</p>
                <p className="text-sm text-muted-foreground">"{currentMyth.myth}"</p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4 border border-primary/20">
                <p className="text-sm font-semibold text-primary mb-2">Truth:</p>
                <p className="text-sm text-muted-foreground">"{currentMyth.truth}"</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AffirmationsBanner;

