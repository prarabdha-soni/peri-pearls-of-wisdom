import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, Apple, Leaf, Droplets, Fish, Milk, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Nutrition = () => {
  const navigate = useNavigate();

  const nutritionCategories = [
    {
      title: "Essential Nutrients (Vegetarian)",
      icon: Apple,
      color: "primary",
      items: [
        "Calcium: Dairy products (milk, curd, paneer), leafy greens (spinach, kale), fortified foods",
        "Vitamin D: Sunlight exposure, fortified milk, fortified cereals",
        "Magnesium: Nuts (almonds, cashews), seeds (pumpkin, sunflower), whole grains, dark chocolate",
        "Iron: Lentils (dal), spinach, beans, fortified cereals, dates",
      ],
    },
    {
      title: "Hormone-Balancing Foods (Vegetarian)",
      icon: Leaf,
      color: "secondary",
      items: [
        "Phytoestrogens: Soy products (tofu, soy milk), flaxseeds, sesame seeds",
        "Omega-3 Fatty Acids: Walnuts, chia seeds, flaxseeds, hemp seeds",
        "Fiber: Whole grains (brown rice, oats), fruits, vegetables, legumes (dal, chickpeas)",
        "Antioxidants: Berries, green tea, colorful vegetables (carrots, bell peppers, tomatoes)",
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
      meal: "Breakfast (Vegetarian)",
      suggestions: [
        "Oats with berries and nuts",
        "Curd/yogurt with fruits and seeds",
        "Whole grain toast with avocado or paneer",
        "Smoothie with spinach, banana, and plant-based protein",
        "Poha with vegetables and peanuts",
      ],
    },
    {
      meal: "Lunch (Vegetarian)",
      suggestions: [
        "Dal with brown rice and sabzi",
        "Quinoa salad with vegetables",
        "Paneer/tofu curry with roti and vegetables",
        "Lentil soup with whole grain bread",
        "Rajma or chole with rice",
      ],
    },
    {
      meal: "Dinner (Vegetarian)",
      suggestions: [
        "Light meal 2-3 hours before sleep",
        "Steamed vegetables with paneer/tofu",
        "Soup with whole grains",
        "Khichdi with vegetables",
        "Avoid heavy, spicy foods",
      ],
    },
    {
      meal: "Snacks (Vegetarian)",
      suggestions: [
        "Nuts and seeds (almonds, walnuts)",
        "Fresh fruits",
        "Yogurt with berries",
        "Hummus with vegetables",
        "Roasted chickpeas",
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
            Vegetarian Nutrition Guide
          </h1>
          <p className="text-lg text-muted-foreground">
            Nourish your body with vegetarian foods during perimenopause
          </p>
        </div>

        {/* Supplements Section - Moved to Top */}
        <Card className="mb-8 border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5 p-6 shadow-soft">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Important Supplements
          </h2>
          <p className="mb-4 text-muted-foreground">
            While a balanced vegetarian diet is essential, some supplements can help during perimenopause:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Fish className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-card-foreground">Omega-3 Fatty Acids (Algae-based)</p>
                <p className="text-sm text-muted-foreground">Supports heart health and reduces inflammation. Choose plant-based sources like algae oil.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Milk className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-card-foreground">Calcium & Vitamin D</p>
                <p className="text-sm text-muted-foreground">Essential for bone health. Get from dairy, fortified foods, and sunlight.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Leaf className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-card-foreground">Magnesium</p>
                <p className="text-sm text-muted-foreground">Helps with sleep and muscle relaxation. Found in nuts, seeds, and whole grains.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Leaf className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-card-foreground">Iron (Plant-based)</p>
                <p className="text-sm text-muted-foreground">Important for energy. Get from lentils, spinach, and fortified cereals. Pair with vitamin C for better absorption.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Leaf className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-card-foreground">B12 (Essential for Vegetarians)</p>
                <p className="text-sm text-muted-foreground">Important for nerve function and energy. Consider supplementation as it's mainly found in animal products.</p>
              </div>
            </li>
          </ul>
          <p className="mt-4 text-sm italic text-muted-foreground">
            Always consult with a healthcare provider before starting any supplements
          </p>
        </Card>

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

