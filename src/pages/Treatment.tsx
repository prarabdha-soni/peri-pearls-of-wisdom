import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Pill, Stethoscope, AlertCircle, CheckCircle2, Shield, FileText, ArrowRight } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Treatment = () => {
  const navigate = useNavigate();

  const treatmentCategories = [
    {
      title: "Hormone Replacement Therapy (HRT)",
      icon: Pill,
      description: "Prescription-based hormone therapy to manage symptoms",
      requiresPrescription: true,
      info: [
        "Available only with doctor's prescription",
        "Can help with hot flashes, night sweats, and mood changes",
        "Available in various forms: pills, patches, gels, creams",
        "Regular monitoring and follow-ups required",
      ],
    },
    {
      title: "Bioidentical Hormones",
      icon: Pill,
      description: "Plant-based hormones that are identical to body's natural hormones",
      requiresPrescription: true,
      info: [
        "Requires doctor's prescription and supervision",
        "Custom-compounded based on individual needs",
        "May help with hormonal balance",
        "Regular blood tests and monitoring needed",
      ],
    },
    {
      title: "Prescription Medications",
      icon: Pill,
      description: "Medications prescribed by healthcare providers for specific symptoms",
      requiresPrescription: true,
      info: [
        "Antidepressants for mood changes (prescription required)",
        "Blood pressure medications for hot flashes (prescription required)",
        "Sleep aids for insomnia (prescription required)",
        "All medications must be prescribed by a qualified doctor",
      ],
    },
  ];

  const naturalSupplements = [
    {
      title: "Natural Supplements",
      description: "These can be taken alongside prescribed treatments, with doctor's approval",
      items: [
        "Black Cohosh: May help with hot flashes (consult doctor first)",
        "Evening Primrose Oil: May support hormonal balance",
        "Soy Isoflavones: Plant-based compounds for hormone support",
        "Vitamin D & Calcium: Essential for bone health",
        "Magnesium: For sleep and muscle relaxation",
        "Omega-3 (Algae-based): For heart and brain health",
      ],
      note: "Always inform your doctor about all supplements you're taking",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden px-4 py-8 pb-20">
      <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      
      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-primary/20 p-4">
              <Pill className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="mb-2 text-4xl font-bold text-foreground">
            Treatment Options
          </h1>
          <p className="text-lg text-muted-foreground">
            Medical treatments available with doctor's prescription
          </p>
        </div>

        {/* Important Alert */}
        <Alert className="mb-8 border-2 border-primary/30 bg-primary/5">
          <AlertCircle className="h-5 w-5 text-primary" />
          <AlertTitle className="text-lg font-bold text-foreground mb-2">
            Important: Doctor's Prescription Required
          </AlertTitle>
          <AlertDescription className="text-muted-foreground">
            All medical treatments listed here require a prescription from a qualified healthcare provider. 
            Do not self-medicate. Always consult with a doctor before starting any treatment.
          </AlertDescription>
        </Alert>

        {/* Treatment Categories */}
        <div className="mb-8 space-y-6">
          {treatmentCategories.map((treatment, idx) => {
            const Icon = treatment.icon;
            return (
              <Card
                key={idx}
                className="border-2 border-primary/20 bg-card p-6 shadow-sm"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="rounded-full bg-primary/20 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <h2 className="text-2xl font-semibold text-card-foreground">
                        {treatment.title}
                      </h2>
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <p className="mb-4 text-muted-foreground">
                      {treatment.description}
                    </p>
                    <div className="rounded-lg bg-primary/5 p-4 border border-primary/10">
                      <p className="mb-3 flex items-center gap-2 font-semibold text-primary">
                        <Stethoscope className="h-4 w-4" />
                        Requires Doctor's Prescription
                      </p>
                      <ul className="space-y-2">
                        {treatment.info.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Natural Supplements Section */}
        <Card className="mb-8 border border-border/50 bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Natural Supplements (With Doctor's Approval)
          </h2>
          <p className="mb-4 text-muted-foreground">
            {naturalSupplements[0].description}
          </p>
          <ul className="mb-4 space-y-2">
            {naturalSupplements[0].items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-lg bg-secondary/5 p-4 border border-secondary/10">
            <p className="text-sm font-semibold text-card-foreground flex items-center gap-2">
              <FileText className="h-4 w-4 text-secondary" />
              {naturalSupplements[0].note}
            </p>
          </div>
        </Card>

        {/* Consultation CTA */}
        <Card className="mb-8 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5 p-6 shadow-sm">
          <div className="text-center">
            <h2 className="mb-3 text-2xl font-bold text-foreground">
              Ready to Discuss Treatment Options?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Book a consultation with our specialists to discuss which treatment options are right for you
            </p>
            <Button
              onClick={() => navigate("/doctor")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              size="lg"
            >
              <Stethoscope className="mr-2 h-5 w-5" />
              Book Doctor Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Card>

        {/* Disclaimer */}
        <Alert className="border-border/50 bg-muted/50">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-xs text-muted-foreground">
            <strong>Disclaimer:</strong> This information is for educational purposes only and does not replace 
            professional medical advice. Always consult with a qualified healthcare provider before starting any 
            treatment or making changes to your healthcare regimen.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default Treatment;

