
import PageTransition from "@/components/ui-custom/PageTransition";
import AnimatedCard from "@/components/ui-custom/AnimatedCard";
import { Leaf, Search, Clock, Zap, AlertTriangle, Lightbulb, X, BookOpen } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const HomeRemedies = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const remedies = [
    {
      title: "Turmeric Milk",
      description: "A soothing blend of warm milk and turmeric to boost immunity and reduce inflammation.",
      category: "Immunity",
      ingredients: ["Milk", "Turmeric", "Honey", "Black pepper"],
      imageSrc: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Heat 1 cup of milk (dairy or plant-based) in a saucepan",
          "Add 1/2 teaspoon turmeric powder while milk is warming",
          "Add a pinch of black pepper for better absorption",
          "Sweeten with 1-2 teaspoons honey after removing from heat",
          "Stir well and serve warm before bedtime"
        ],
        benefits: [
          "Reduces inflammation and joint pain",
          "Boosts immune system function",
          "Improves sleep quality",
          "Supports digestive health",
          "Contains powerful antioxidants"
        ],
        dosage: "1 cup daily, preferably before bedtime",
        precautions: [
          "Avoid if allergic to dairy (use plant milk)",
          "Consult doctor if on blood-thinning medications",
          "May stain clothes and teeth temporarily"
        ],
        ayurvedicProperties: {
          taste: "Bitter, pungent",
          potency: "Heating",
          effect: "Balances Kapha and Vata doshas"
        }
      }
    },
    {
      title: "Ginger Tea",
      description: "A warming tea that aids digestion and helps alleviate nausea and cold symptoms.",
      category: "Digestive Health",
      ingredients: ["Fresh ginger", "Water", "Lemon", "Honey"],
      imageSrc: "https://images.unsplash.com/photo-1608632508658-2059d6bc2f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Slice 1-inch fresh ginger root thinly",
          "Boil 2 cups of water in a pot",
          "Add ginger slices and simmer for 10-15 minutes",
          "Strain the tea into a cup",
          "Add lemon juice and honey to taste"
        ],
        benefits: [
          "Improves digestion and reduces bloating",
          "Relieves nausea and motion sickness",
          "Reduces inflammation",
          "Boosts circulation",
          "Helps with cold and flu symptoms"
        ],
        dosage: "2-3 cups daily, especially after meals",
        precautions: [
          "Avoid excessive amounts if pregnant",
          "May interact with blood-thinning medications",
          "Can cause heartburn in sensitive individuals"
        ],
        ayurvedicProperties: {
          taste: "Pungent, sweet",
          potency: "Heating",
          effect: "Balances Kapha and Vata, may increase Pitta"
        }
      }
    },
    {
      title: "Triphala Infusion",
      description: "A traditional blend of three fruits that supports digestive health and detoxification.",
      category: "Digestive Health",
      ingredients: ["Triphala powder", "Water", "Honey (optional)"],
      imageSrc: "https://images.unsplash.com/photo-1605139923904-6cad593eda18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Mix 1/2 teaspoon Triphala powder in warm water",
          "Let it steep for 5-10 minutes",
          "Stir well to dissolve completely",
          "Add honey if desired for taste",
          "Drink on empty stomach"
        ],
        benefits: [
          "Promotes healthy digestion",
          "Supports natural detoxification",
          "Improves bowel regularity",
          "Rich in vitamin C and antioxidants",
          "Supports eye health"
        ],
        dosage: "1/2 to 1 teaspoon daily, preferably at bedtime",
        precautions: [
          "Start with smaller doses to assess tolerance",
          "Avoid during pregnancy and breastfeeding",
          "May cause loose stools initially"
        ],
        ayurvedicProperties: {
          taste: "All six tastes present",
          potency: "Neutral",
          effect: "Balances all three doshas"
        }
      }
    },
    {
      title: "Aloe Vera Juice",
      description: "Fresh aloe vera juice that soothes the digestive tract and promotes skin health.",
      category: "Skin Health",
      ingredients: ["Aloe vera leaf", "Water", "Lemon juice", "Honey"],
      imageSrc: "https://images.unsplash.com/photo-1623019616482-013342bb005c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Cut fresh aloe vera leaf and extract gel",
          "Blend 2-3 tablespoons of gel with 1 cup water",
          "Add lemon juice and honey for taste",
          "Strain if desired for smoother consistency",
          "Consume fresh immediately"
        ],
        benefits: [
          "Soothes digestive irritation",
          "Promotes skin healing and hydration",
          "Supports liver detoxification",
          "Reduces inflammation",
          "Boosts immune system"
        ],
        dosage: "1/4 to 1/2 cup daily, on empty stomach",
        precautions: [
          "Use only the inner gel, avoid the latex",
          "Start with small amounts",
          "Avoid during pregnancy",
          "May interact with diabetes medications"
        ],
        ayurvedicProperties: {
          taste: "Bitter, sweet",
          potency: "Cooling",
          effect: "Balances Pitta, may increase Vata"
        }
      }
    },
    {
      title: "Fenugreek Water",
      description: "Soaked fenugreek seeds that help manage blood sugar and improve digestion.",
      category: "Metabolic Health",
      ingredients: ["Fenugreek seeds", "Water"],
      imageSrc: "https://images.unsplash.com/photo-1515594619990-9d921af1a6d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Soak 1 tablespoon fenugreek seeds in water overnight",
          "Strain the water in the morning",
          "Drink the infused water on empty stomach",
          "Optional: chew the soaked seeds as well",
          "Repeat daily for best results"
        ],
        benefits: [
          "Helps regulate blood sugar levels",
          "Improves insulin sensitivity",
          "Supports healthy cholesterol levels",
          "Aids in weight management",
          "Promotes milk production in nursing mothers"
        ],
        dosage: "1 cup of fenugreek water daily, morning on empty stomach",
        precautions: [
          "Monitor blood sugar if diabetic",
          "May cause digestive upset initially",
          "Avoid excessive amounts during pregnancy",
          "Can interact with blood-thinning medications"
        ],
        ayurvedicProperties: {
          taste: "Bitter, sweet",
          potency: "Heating",
          effect: "Balances Kapha and Vata"
        }
      }
    },
    {
      title: "Ashwagandha Tea",
      description: "A calming tea that helps reduce stress and promote restful sleep.",
      category: "Stress Relief",
      ingredients: ["Ashwagandha powder", "Water", "Milk", "Honey"],
      imageSrc: "https://images.unsplash.com/photo-1551412222-8c7a69b0e6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Heat 1 cup milk or water in a saucepan",
          "Add 1/2 teaspoon ashwagandha powder",
          "Simmer for 5-7 minutes while stirring",
          "Strain if desired for smoother texture",
          "Add honey to taste when cooled slightly"
        ],
        benefits: [
          "Reduces stress and anxiety levels",
          "Improves sleep quality",
          "Enhances physical endurance",
          "Supports adrenal function",
          "Boosts immunity and vitality"
        ],
        dosage: "1 cup daily, preferably in evening",
        precautions: [
          "Avoid during pregnancy and breastfeeding",
          "May interact with immunosuppressive medications",
          "Can lower blood pressure",
          "Consult doctor if on thyroid medications"
        ],
        ayurvedicProperties: {
          taste: "Bitter, astringent, sweet",
          potency: "Heating",
          effect: "Balances Vata and Kapha"
        }
      }
    }
  ];

  const categories = Array.from(new Set(remedies.map(remedy => remedy.category)));

  const filteredRemedies = remedies.filter(remedy =>
    remedy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    remedy.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    remedy.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    remedy.ingredients.some(ingredient => 
      ingredient.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <PageTransition>
      <div className="min-h-screen pt-24">
        {/* Header */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 to-background"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-lg text-foreground animate-fade-up">Home Remedies</h1>
              <p className="mt-6 paragraph animate-fade-up" style={{ animationDelay: "200ms" }}>
                Discover traditional Ayurvedic remedies using common household ingredients for everyday health concerns.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search remedies, ingredients, or categories..."
                  className="w-full rounded-full border border-input bg-background px-10 py-3 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  className={`px-3 py-1 text-xs rounded-full transition-colors ${
                    searchQuery === "" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                  onClick={() => setSearchQuery("")}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      searchQuery === category 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                    onClick={() => setSearchQuery(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Remedies List */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRemedies.length > 0 ? (
                filteredRemedies.map((remedy, index) => (
                  <div 
                    key={remedy.title}
                    className="bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={remedy.imageSrc} 
                        alt={remedy.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-background/80 text-foreground">
                          {remedy.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <Leaf className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">{remedy.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{remedy.description}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-xs font-medium text-muted-foreground mb-2">Key Ingredients:</p>
                        <div className="flex flex-wrap gap-1">
                          {remedy.ingredients.map((ingredient, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {ingredient}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full" variant="outline">
                            <BookOpen className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-2 text-xl">
                              <Leaf className="h-6 w-6 text-primary" />
                              {remedy.title}
                            </DialogTitle>
                          </DialogHeader>
                          
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                            <div className="space-y-6">
                              {/* Preparation Steps */}
                              <div>
                                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                  <Clock className="h-5 w-5 text-primary" />
                                  Preparation
                                </h4>
                                <ol className="space-y-2">
                                  {remedy.detailedInfo.preparation.map((step, idx) => (
                                    <li key={idx} className="flex gap-3 text-sm">
                                      <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                                        {idx + 1}
                                      </span>
                                      <span className="text-muted-foreground">{step}</span>
                                    </li>
                                  ))}
                                </ol>
                              </div>

                              {/* Benefits */}
                              <div>
                                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                  <Zap className="h-5 w-5 text-primary" />
                                  Health Benefits
                                </h4>
                                <ul className="space-y-2">
                                  {remedy.detailedInfo.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex gap-2 text-sm">
                                      <span className="text-primary mt-1">•</span>
                                      <span className="text-muted-foreground">{benefit}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="space-y-6">
                              {/* Dosage */}
                              <div>
                                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                  <Lightbulb className="h-5 w-5 text-primary" />
                                  Recommended Dosage
                                </h4>
                                <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
                                  {remedy.detailedInfo.dosage}
                                </p>
                              </div>

                              {/* Precautions */}
                              <div>
                                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                                  Precautions
                                </h4>
                                <ul className="space-y-2">
                                  {remedy.detailedInfo.precautions.map((precaution, idx) => (
                                    <li key={idx} className="flex gap-2 text-sm">
                                      <span className="text-amber-500 mt-1">⚠</span>
                                      <span className="text-muted-foreground">{precaution}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Ayurvedic Properties */}
                              <div>
                                <h4 className="font-semibold text-lg mb-3">Ayurvedic Properties</h4>
                                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="font-medium">Taste (Rasa):</span>
                                    <span className="text-muted-foreground">{remedy.detailedInfo.ayurvedicProperties.taste}</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span className="font-medium">Potency (Virya):</span>
                                    <span className="text-muted-foreground">{remedy.detailedInfo.ayurvedicProperties.potency}</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span className="font-medium">Effect (Prabhava):</span>
                                    <span className="text-muted-foreground">{remedy.detailedInfo.ayurvedicProperties.effect}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-16 text-center">
                  <h3 className="heading-sm text-muted-foreground">No remedies found</h3>
                  <p className="mt-2 paragraph">Try adjusting your search criteria</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default HomeRemedies;
