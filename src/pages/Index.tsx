import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Instagram, Stethoscope } from "lucide-react";
import logo from "@/assets/logo.png";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-calm pb-20">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <img 
              src={logo} 
              alt="Nishu Health Logo" 
              className="h-16 w-auto md:h-20"
            />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-foreground">
            Nishu Health
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Relax, it's just a hormonal change. You just need to take proper supplements.
          </p>
        </div>

        {/* Product Card - Alloy Health Style */}
        <Card className="max-w-2xl mx-auto mb-8 overflow-hidden shadow-soft border-border/50 relative">
          {/* Doctor Access Badge */}
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full flex items-center gap-2">
              <Stethoscope className="h-4 w-4" />
              <span className="text-xs font-semibold">INCLUDES UNLIMITED DOCTOR ACCESS</span>
            </Badge>
          </div>

          {/* Product Image */}
          <div className="bg-[hsl(30,25%,90%)] dark:bg-muted p-12 flex items-center justify-center">
            <img 
              src="/estradiol.png" 
              alt="Estradiol Tablets" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="p-8">
            <div className="flex gap-2 mb-4">
              <Badge variant="secondary" className="rounded-full">Most Popular</Badge>
              <Badge variant="outline" className="rounded-full">Daily Pill</Badge>
            </div>

            <h2 className="text-4xl font-bold text-foreground mb-4">
              Estradiol Pill
            </h2>

            <div className="mb-2">
              <span className="text-3xl font-bold text-primary">Starting at ₹600</span>
            </div>

            <p className="text-muted-foreground mb-6">
              (30 days of treatment)
            </p>

            <p className="text-foreground leading-relaxed mb-8">
              So long, symptoms! The estradiol pill is proven to provide effective, fast relief from your menopause symptoms. The estradiol we offer is FDA-approved, bioidentical & plant-based.
            </p>

            <Button 
              size="lg" 
              className="w-full rounded-full shadow-soft hover:shadow-lg transition-all"
              onClick={() => navigate('/consult')}
            >
              Get Started
            </Button>
          </div>
        </Card>

        {/* Video Section */}
        <Card className="max-w-2xl mx-auto mb-8 overflow-hidden shadow-soft border-border/50">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Recognizing the First Signs of Perimenopause
            </h3>
          </div>
          <video 
            className="w-full"
            controls
            poster="/perimenopause-symptom.mp4"
          >
            <source src="/perimenopause-symptom.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Card>

        {/* Follow Instagram */}
        <Card className="max-w-2xl mx-auto border border-border/50 bg-card p-6 shadow-sm">
          <Button
            asChild
            className="w-full rounded-full shadow-soft hover:shadow-lg transition-all"
            size="lg"
          >
            <a
              href="https://www.instagram.com/nishu_health"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Instagram className="h-5 w-5" />
              Follow @nishu_health on Instagram
            </a>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Index;
