import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, Apple, Leaf, Droplets, Fish, Milk, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Nutrition = () => {
  const navigate = useNavigate();

  const nutritionCategories = [
    {
      title: "Essential Nutrients",
      icon: Apple,
      color: "primary",
      items: [
        "Calcium: Dairy products, leafy greens, fortified foods",
        "Vitamin D: Sunlight, fatty fish, fortified milk",
        "Magnesium: Nuts, seeds, whole grains, dark chocolate",
        "Iron: Lentils, spinach, lean meats, fortified cereals",
      ],
    },
    {
      title: "Hormone-Balancing Foods",
      icon: Leaf,
      color: "secondary",
      items: [
        "Phytoestrogens: Soy products, flaxseeds, sesame seeds",
        "Omega-3 Fatty Acids: Fatty fish, walnuts, chia seeds",
        "Fiber: Whole grains, fruits, vegetables, legumes",
        "Antioxidants: Berries, green tea, colorful vegetables",
      ],
    },
    {
      title: "Hydration & Fluids",
      icon: Droplets,
      color: "accent",
      items: [
        "Water: 8-10 glasses daily",
        "Herbal Teas: Chamomile, peppermint, green tea",
        "Coconut Water: Natural electrolytes",
        "Limit: Caffeine, alcohol, sugary drinks",
      ],
    },
  ];

  const mealIdeas = [
    {
      meal: "Breakfast",
      suggestions: [
        "Oats with berries and nuts",
        "Greek yogurt with fruits and seeds",
        "Whole grain toast with avocado",
        "Smoothie with spinach, banana, and protein",
      ],
    },
    {
      meal: "Lunch",
      suggestions: [
        "Dal with brown rice and sabzi",
        "Quinoa salad with vegetables",
        "Grilled fish with vegetables",
        "Lentil soup with whole grain bread",
      ],
    },
    {
      meal: "Dinner",
      suggestions: [
        "Light meal 2-3 hours before sleep",
        "Steamed vegetables with paneer/tofu",
        "Soup with whole grains",
        "Avoid heavy, spicy foods",
      ],
    },
    {
      meal: "Snacks",
      suggestions: [
        "Nuts and seeds",
        "Fresh fruits",
        "Yogurt with berries",
        "Hummus with vegetables",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-calm relative overflow-hidden px-4 py-8 pb-20">
      <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      
      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-primary/20 p-4">
              <UtensilsCrossed className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="mb-2 text-4xl font-bold text-foreground">
            Nutrition Guide
          </h1>
          <p className="text-lg text-muted-foreground">
            Nourish your body with the right foods during perimenopause
          </p>
        </div>

        {/* Nutrition Categories */}
        <div className="mb-8 space-y-6">
          {nutritionCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card
                key={idx}
                className="border-border/50 bg-card/90 backdrop-blur-sm p-6 shadow-soft"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className={`rounded-full p-3 ${
                    category.color === 'primary' ? 'bg-primary/20' :
                    category.color === 'secondary' ? 'bg-secondary/20' :
                    'bg-accent/20'
                  }`}>
                    <Icon className={`h-6 w-6 ${
                      category.color === 'primary' ? 'text-primary' :
                      category.color === 'secondary' ? 'text-secondary' :
                      'text-accent'
                    }`} />
                  </div>
                  <h2 className="text-2xl font-semibold text-card-foreground">
                    {category.title}
                  </h2>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* Meal Ideas */}
        <Card className="mb-8 border-border/50 bg-card/90 backdrop-blur-sm p-6 shadow-soft">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            Meal Ideas for Perimenopause
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {mealIdeas.map((mealPlan, idx) => (
              <div key={idx} className="rounded-lg bg-primary/5 p-4 border border-primary/10">
                <h3 className="mb-3 text-lg font-semibold text-card-foreground">
                  {mealPlan.meal}
                </h3>
                <ul className="space-y-2">
                  {mealPlan.suggestions.map((suggestion, sugIdx) => (
                    <li key={sugIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                      <span>{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        {/* Supplements Section */}
        <Card className="mb-8 border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5 p-6 shadow-soft">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Important Supplements
          </h2>
          <p className="mb-4 text-muted-foreground">
            While a balanced diet is essential, some supplements can help during perimenopause:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Fish className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-card-foreground">Omega-3 Fatty Acids</p>
                <p className="text-sm text-muted-foreground">Supports heart health and reduces inflammation</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Milk className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-card-foreground">Calcium & Vitamin D</p>
                <p className="text-sm text-muted-foreground">Essential for bone health</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Leaf className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-card-foreground">Magnesium</p>
                <p className="text-sm text-muted-foreground">Helps with sleep and muscle relaxation</p>
              </div>
            </li>
          </ul>
          <p className="mt-4 text-sm italic text-muted-foreground">
            Always consult with a healthcare provider before starting any supplements
          </p>
        </Card>

        <Button
          onClick={() => navigate("/doctor")}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          size="lg"
        >
          Consult a Nutritionist
        </Button>
      </div>
    </div>
  );
};

export default Nutrition;

