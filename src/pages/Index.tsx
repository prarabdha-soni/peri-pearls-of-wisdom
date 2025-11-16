import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Instagram, Stethoscope } from "lucide-react";
import logo from "@/assets/logo.png";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-calm pb-24">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="mb-6 flex justify-center">
            <img 
              src={logo} 
              alt="Nishu Health Logo" 
              className="h-20 w-auto md:h-24"
            />
          </div>
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-6 py-2.5 text-sm font-medium">
            Virtual Clinic for Female Health Care
          </Badge>
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Connect with Doctors
            <br />
            <span className="text-primary">Anytime, Anywhere</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            Get personalized PCOD/PCOS/perimenopause treatment from experienced specialists through WhatsApp consultations. Includes prescription medications delivered to your door.
          </p>
          
          <Button 
            size="lg" 
            className="rounded-full shadow-lg hover:shadow-xl transition-all px-8 py-6 text-lg bg-[#25D366] hover:bg-[#20BA5A] text-white"
            asChild
          >
            <a
              href="https://wa.me/919266106798"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Connect with a Doctor Now
            </a>
          </Button>
        </div>

        {/* How It Works */}
        <Card className="max-w-3xl mx-auto mb-16 overflow-hidden shadow-lg border-border/50">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-10 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">How Our Virtual Clinic Works</h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-sm">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Connect on WhatsApp</h3>
                  <p className="text-muted-foreground leading-relaxed">Message us directly to discuss your symptoms and concerns with our healthcare specialists</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-sm">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Get Diagnosed</h3>
                  <p className="text-muted-foreground leading-relaxed">Our experienced doctors will assess your condition and create a personalized treatment plan</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-sm">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Receive Treatment</h3>
                  <p className="text-muted-foreground leading-relaxed">Get prescribed medications delivered discreetly to your home with ongoing support</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Product Card - Alloy Health Style */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">Our Treatments <span className="text-muted-foreground text-2xl md:text-3xl">(with Doctor Consultation)</span></h2>
          <Card className="overflow-hidden shadow-lg border-border/50 relative mb-8 hover:shadow-xl transition-shadow duration-300">
          {/* Doctor Access Badge */}
          <div className="absolute top-6 right-6 z-10">
            <Badge className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full flex items-center gap-2 shadow-sm">
              <Stethoscope className="h-4 w-4" />
              <span className="text-xs font-bold tracking-wide">INCLUDES UNLIMITED DOCTOR ACCESS</span>
            </Badge>
          </div>

          {/* Product Image */}
          <div className="bg-gradient-to-br from-[hsl(30,25%,95%)] to-[hsl(30,25%,88%)] dark:bg-muted p-16 flex items-center justify-center">
            <img 
              src="/estradiol.png" 
              alt="Estradiol Tablets" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="p-10 md:p-12">
            <div className="flex gap-3 mb-5">
              <Badge variant="secondary" className="rounded-full px-4 py-1.5 font-semibold">Most Popular</Badge>
              <Badge variant="outline" className="rounded-full px-4 py-1.5">Daily Pill</Badge>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
              Estradiol Pill
            </h2>

            <div className="mb-3">
              <span className="text-4xl font-bold text-primary">Starting at ₹600</span>
            </div>

            <p className="text-muted-foreground mb-8 text-lg">
              (30 days of treatment)
            </p>

            <p className="text-foreground leading-relaxed mb-10 text-lg">
              So long, symptoms! The estradiol pill is proven to provide effective, fast relief from your menopause symptoms. The estradiol we offer is FDA-approved, bioidentical & plant-based.
            </p>

            <Button 
              size="lg" 
              className="w-full rounded-full shadow-lg hover:shadow-xl transition-all text-lg py-6"
              onClick={() => navigate('/consult')}
            >
              Get Started
            </Button>
          </div>
        </Card>

        {/* Daily Cortisol Support Product Card */}
        <Card className="max-w-3xl mx-auto mb-8 overflow-hidden shadow-lg border-border/50 hover:shadow-xl transition-shadow duration-300">
          {/* Product Image */}
          <div className="bg-gradient-to-br from-[hsl(30,25%,95%)] to-[hsl(30,25%,88%)] dark:bg-muted p-16 flex items-center justify-center">
            <img 
              src="/sleep.png" 
              alt="Daily Cortisol Support" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="p-10 md:p-12">
            <div className="flex gap-3 mb-5">
              <Badge variant="secondary" className="rounded-full px-4 py-1.5 font-semibold">Sleep Support</Badge>
              <Badge variant="outline" className="rounded-full px-4 py-1.5">Daily Supplement</Badge>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
              Daily Cortisol Support
            </h2>

            <div className="mb-3">
              <span className="text-4xl font-bold text-primary">Starting at ₹600</span>
            </div>

            <p className="text-muted-foreground mb-8 text-lg">
              (30 days of treatment)
            </p>

            <p className="text-foreground leading-relaxed mb-10 text-lg">
              A daily supplement clinically formulated to support calm focus, better sleep, cognitive clarity, and emotional resilience.
            </p>

            <Button 
              size="lg" 
              className="w-full rounded-full shadow-lg hover:shadow-xl transition-all text-lg py-6"
              onClick={() => navigate('/consult')}
            >
              Get Started
            </Button>
          </div>
        </Card>
        </div>

        {/* Video Section */}
        <Card className="max-w-3xl mx-auto mb-10 overflow-hidden shadow-lg border-border/50">
          <div className="p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
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
        <Card className="max-w-3xl mx-auto border border-border/50 bg-card p-8 md:p-10 shadow-lg">
          <Button
            asChild
            className="w-full rounded-full shadow-lg hover:shadow-xl transition-all text-lg py-6"
            size="lg"
          >
            <a
              href="https://www.instagram.com/nishu_health"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3"
            >
              <Instagram className="h-6 w-6" />
              Follow @nishu_health on Instagram
            </a>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Index;
