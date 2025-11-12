import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/sonner";
import { Video, Shield, Clock, CheckCircle2, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Consult = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    symptomFocus: "",
    preferredDate: "",
    preferredTime: "",
    additionalNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.symptomFocus || !formData.preferredDate) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Consultation request submitted! We'll contact you within 24 hours.");

    setTimeout(() => {
      navigate("/education");
    }, 2000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background px-4 py-8 pb-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-foreground">
            Connect with a Specialist
          </h1>
          <p className="text-muted-foreground">
            Book a convenient teleconsultation with experienced perimenopause specialists
          </p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <Card className="border-border bg-card p-6 text-center">
            <div className="mb-3 flex justify-center">
              <div className="rounded-full bg-primary/10 p-3">
                <Video className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h3 className="mb-2 font-semibold text-card-foreground">Video Consultation</h3>
            <p className="text-sm text-muted-foreground">
              Talk to specialists from the comfort of your home
            </p>
          </Card>

          <Card className="border-border bg-card p-6 text-center">
            <div className="mb-3 flex justify-center">
              <div className="rounded-full bg-secondary/10 p-3">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
            </div>
            <h3 className="mb-2 font-semibold text-card-foreground">100% Private</h3>
            <p className="text-sm text-muted-foreground">
              Your information is secure and confidential
            </p>
          </Card>

          <Card className="border-border bg-card p-6 text-center">
            <div className="mb-3 flex justify-center">
              <div className="rounded-full bg-accent/10 p-3">
                <Clock className="h-6 w-6 text-accent" />
              </div>
            </div>
            <h3 className="mb-2 font-semibold text-card-foreground">Flexible Timing</h3>
            <p className="text-sm text-muted-foreground">
              Choose a time that works best for you
            </p>
          </Card>
        </div>

        <Card className="mb-8 border-border bg-card p-8">
          <h2 className="mb-6 text-2xl font-bold text-card-foreground">
            Schedule Your Consultation
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="symptomFocus">
                Primary Symptom Focus <span className="text-destructive">*</span>
              </Label>
              <Select value={formData.symptomFocus} onValueChange={(value) => handleChange("symptomFocus", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your main concern" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sleep">Sleep Disturbances</SelectItem>
                  <SelectItem value="hot-flashes">Hot Flashes</SelectItem>
                  <SelectItem value="mood">Mood Changes</SelectItem>
                  <SelectItem value="weight">Weight Management</SelectItem>
                  <SelectItem value="joint-pain">Joint Pain</SelectItem>
                  <SelectItem value="multiple">Multiple Symptoms</SelectItem>
                  <SelectItem value="general">General Consultation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="preferredDate">
                  Preferred Date <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="preferredDate"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={formData.preferredDate}
                  onChange={(e) => handleChange("preferredDate", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredTime">Preferred Time</Label>
                <Select value={formData.preferredTime} onValueChange={(value) => handleChange("preferredTime", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12 PM - 3 PM)</SelectItem>
                    <SelectItem value="evening">Evening (3 PM - 6 PM)</SelectItem>
                    <SelectItem value="night">Night (6 PM - 9 PM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
              <Textarea
                id="additionalNotes"
                placeholder="Tell us more about your symptoms or any specific concerns..."
                rows={4}
                value={formData.additionalNotes}
                onChange={(e) => handleChange("additionalNotes", e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
              <Calendar className="mr-2 h-5 w-5" />
              Request Consultation
            </Button>
          </form>
        </Card>

        <Card className="border-border bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">How Teleconsultation Works</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                1
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-card-foreground">Submit Your Request</h3>
                <p className="text-sm text-muted-foreground">
                  Fill out the form with your details and preferred consultation time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                2
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-card-foreground">Confirmation Call</h3>
                <p className="text-sm text-muted-foreground">
                  Our team will contact you within 24 hours to confirm your appointment and share the video link.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                3
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-card-foreground">Attend Your Session</h3>
                <p className="text-sm text-muted-foreground">
                  Join the video call at your scheduled time. The consultation typically lasts 30-45 minutes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                4
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-card-foreground">Follow-up Care</h3>
                <p className="text-sm text-muted-foreground">
                  Receive personalized recommendations and access to follow-up support as needed.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="mt-8 border-border bg-accent/5 p-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
            <div>
              <h3 className="mb-2 font-semibold text-card-foreground">Privacy Assurance</h3>
              <p className="text-sm text-muted-foreground">
                Your personal information and medical details are completely confidential. We use secure,
                encrypted platforms for all consultations. Your data will never be shared with third parties
                without your explicit consent.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Consult;
