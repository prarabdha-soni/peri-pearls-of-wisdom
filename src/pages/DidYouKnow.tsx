import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const facts = [
  {
    title: "It Can Start Earlier Than You Think",
    content: "Perimenopause may begin in your late 30s or early 40s, sometimes even earlier.",
  },
  {
    title: "Stress Management Helps",
    content: "Managing stress through meditation, yoga, or breathing exercises can significantly ease symptoms.",
  },
  {
    title: "You're Not Alone",
    content: "The majority of Indian women don't seek help for hot flashes and other symptoms—but support is available.",
  },
  {
    title: "Lifestyle Makes a Difference",
    content: "Regular exercise, a balanced diet, and adequate sleep can help manage perimenopause symptoms.",
  },
  {
    title: "It's a Natural Transition",
    content: "Perimenopause is a normal part of aging—not a disease. Your body is simply adjusting to hormonal changes.",
  },
];

const DidYouKnow = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % facts.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + facts.length) % facts.length);
  };

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-4xl font-bold text-foreground">Did You Know?</h1>
        <p className="mb-8 text-muted-foreground">
          Helpful facts and positive insights about perimenopause.
        </p>

        <div className="relative mb-8">
          <Card className="border-border bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
            <div className="mb-4 text-sm font-medium text-primary">
              Fact {currentIndex + 1} of {facts.length}
            </div>
            <h2 className="mb-4 text-2xl font-bold text-card-foreground">
              {facts[currentIndex].title}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {facts[currentIndex].content}
            </p>
          </Card>

          <div className="mt-6 flex items-center justify-between">
            <Button
              onClick={handlePrevious}
              variant="outline"
              size="icon"
              className="border-border"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {facts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to fact ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="border-border"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Button
          onClick={() => navigate("/home")}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          size="lg"
        >
          Get Your Personalized Guidance
        </Button>
      </div>
    </div>
  );
};

export default DidYouKnow;
