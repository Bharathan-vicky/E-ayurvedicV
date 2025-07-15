
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
    },
    {
      title: "Neem Face Pack",
      description: "Natural face pack that treats acne and improves skin complexion.",
      category: "Skin Health",
      ingredients: ["Neem powder", "Turmeric", "Yogurt", "Honey"],
      imageSrc: "https://images.unsplash.com/photo-1596467746588-d0a99025245a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Mix 2 tablespoons neem powder with 1 tablespoon yogurt",
          "Add a pinch of turmeric powder",
          "Add 1 teaspoon honey for moisturizing",
          "Mix to form a smooth paste",
          "Apply evenly on clean face and leave for 15-20 minutes"
        ],
        benefits: [
          "Treats acne and prevents breakouts",
          "Reduces skin inflammation",
          "Purifies and detoxifies skin",
          "Improves skin texture and complexion",
          "Has natural antibacterial properties"
        ],
        dosage: "Apply 2-3 times per week",
        precautions: [
          "Do a patch test before first use",
          "Avoid contact with eyes",
          "May cause dryness if used too frequently",
          "Rinse thoroughly after use"
        ],
        ayurvedicProperties: {
          taste: "Bitter, astringent",
          potency: "Cooling",
          effect: "Balances Pitta and Kapha"
        }
      }
    },
    {
      title: "Cumin, Coriander & Fennel Tea",
      description: "Three-seed tea that balances digestion and reduces bloating.",
      category: "Digestive Health",
      ingredients: ["Cumin seeds", "Coriander seeds", "Fennel seeds", "Water"],
      imageSrc: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Mix equal parts cumin, coriander, and fennel seeds (1 tsp each)",
          "Boil 3 cups of water in a pot",
          "Add the seed mixture and simmer for 10 minutes",
          "Strain the tea into cups",
          "Drink warm or at room temperature"
        ],
        benefits: [
          "Improves digestion and reduces bloating",
          "Balances all three doshas",
          "Relieves gas and stomach discomfort",
          "Supports healthy metabolism",
          "Aids in weight management"
        ],
        dosage: "1-2 cups daily, between meals or after eating",
        precautions: [
          "Generally safe for most people",
          "Start with smaller amounts if sensitive",
          "Avoid if allergic to any of the seeds",
          "May interact with certain medications"
        ],
        ayurvedicProperties: {
          taste: "Sweet, pungent, bitter",
          potency: "Cooling to neutral",
          effect: "Tridoshic - balances all doshas"
        }
      }
    },
    {
      title: "Brahmi Tonic",
      description: "Memory-enhancing herb preparation that supports cognitive function.",
      category: "Brain Health",
      ingredients: ["Brahmi powder", "Water", "Honey", "Ghee"],
      imageSrc: "https://images.unsplash.com/photo-1554631221-f9603e6808be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
      detailedInfo: {
        preparation: [
          "Mix 1/2 teaspoon brahmi powder with warm water",
          "Add 1/4 teaspoon ghee for better absorption",
          "Stir well to combine",
          "Add honey to taste",
          "Consume on empty stomach for best results"
        ],
        benefits: [
          "Enhances memory and cognitive function",
          "Reduces anxiety and stress",
          "Improves focus and concentration",
          "Supports nervous system health",
          "Promotes mental clarity"
        ],
        dosage: "1/2 teaspoon powder daily, preferably morning",
        precautions: [
          "May cause drowsiness in some individuals",
          "Avoid during pregnancy",
          "Can interact with seizure medications",
          "Start with smaller doses"
        ],
        ayurvedicProperties: {
          taste: "Bitter, astringent, sweet",
          potency: "Cooling",
          effect: "Balances Pitta and Vata"
        }
      }
    },
    {
      title: "Amla Juice",
      description: "Vitamin C-rich juice that boosts immunity and improves skin health.",
      category: "Immunity",
      ingredients: ["Amla (Indian gooseberry)", "Water", "Honey"],
      imageSrc: "https://images.unsplash.com/photo-1596046416768-257e6d1326a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      detailedInfo: {
        preparation: [
          "Deseed and chop 4-5 fresh amla fruits",
          "Blend with 1 cup water until smooth",
          "Strain the juice through fine mesh",
          "Add honey to balance tartness",
          "Consume fresh immediately"
        ],
        benefits: [
          "Extremely high in vitamin C",
          "Boosts immune system function",
          "Improves skin health and hair growth",
          "Supports liver detoxification",
          "Helps manage cholesterol levels"
        ],
        dosage: "1/4 to 1/2 cup daily, on empty stomach",
        precautions: [
          "May cause acidity in sensitive individuals",
          "Can lower blood sugar levels",
          "Avoid if taking blood-thinning medications",
          "Start with small amounts"
        ],
        ayurvedicProperties: {
          taste: "Sour, astringent, sweet, bitter, pungent",
          potency: "Cooling",
          effect: "Balances all three doshas"
        }
      }
    },
    {
      title: "Tulsi (Holy Basil) Tea",
      description: "Aromatic tea that strengthens immunity and relieves respiratory issues.",
      category: "Respiratory Health",
      ingredients: ["Tulsi leaves", "Water", "Honey", "Ginger (optional)"],
      imageSrc: "https://images.unsplash.com/photo-1564890807764-1feef868b6f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Boil 2 cups of water in a pot",
          "Add 8-10 fresh tulsi leaves (or 1 tsp dried)",
          "Optional: add small piece of ginger",
          "Simmer for 5-7 minutes",
          "Strain and add honey to taste"
        ],
        benefits: [
          "Strengthens immune system",
          "Relieves cough and cold symptoms",
          "Reduces stress and anxiety",
          "Supports respiratory health",
          "Has natural antimicrobial properties"
        ],
        dosage: "2-3 cups daily, especially during illness",
        precautions: [
          "Generally safe for most people",
          "May lower blood sugar levels",
          "Avoid excessive amounts during pregnancy",
          "Can interact with blood-thinning medications"
        ],
        ayurvedicProperties: {
          taste: "Pungent, bitter",
          potency: "Heating",
          effect: "Balances Kapha and Vata"
        }
      }
    },
    {
      title: "Ajwain Water",
      description: "Digestive aid that relieves gas and improves absorption of nutrients.",
      category: "Digestive Health",
      ingredients: ["Ajwain (carom seeds)", "Water"],
      imageSrc: "https://images.unsplash.com/photo-1556679343-c1c1c9308e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      detailedInfo: {
        preparation: [
          "Soak 1 teaspoon ajwain seeds in water overnight",
          "Alternatively, boil seeds in water for 2-3 minutes",
          "Strain the water",
          "Drink warm on empty stomach",
          "Can chew the seeds for additional benefits"
        ],
        benefits: [
          "Relieves gas and bloating",
          "Improves digestion and metabolism",
          "Helps with indigestion and acidity",
          "Supports weight loss",
          "Reduces abdominal pain"
        ],
        dosage: "1 cup daily, preferably morning on empty stomach",
        precautions: [
          "May cause acidity if taken in excess",
          "Avoid during pregnancy",
          "Can interact with blood pressure medications",
          "Start with smaller amounts"
        ],
        ayurvedicProperties: {
          taste: "Pungent, bitter",
          potency: "Heating",
          effect: "Balances Kapha and Vata"
        }
      }
    },
    {
      title: "Cinnamon Honey Mix",
      description: "Antioxidant-rich blend that supports heart health and balances blood sugar.",
      category: "Metabolic Health",
      ingredients: ["Ceylon cinnamon powder", "Raw honey"],
      imageSrc: "https://images.unsplash.com/photo-1612165399085-c7dd9a7d7f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Mix 1/2 teaspoon cinnamon powder with 1 tablespoon honey",
          "Stir to form a smooth paste",
          "Can be taken directly or mixed with warm water",
          "Best taken in the morning",
          "Use Ceylon cinnamon for safety"
        ],
        benefits: [
          "Helps regulate blood sugar levels",
          "Supports heart health",
          "Rich in antioxidants",
          "May aid in weight management",
          "Has anti-inflammatory properties"
        ],
        dosage: "1 teaspoon of mixture daily, preferably morning",
        precautions: [
          "Use Ceylon cinnamon, not cassia",
          "Monitor blood sugar if diabetic",
          "Avoid excessive amounts",
          "May interact with diabetes medications"
        ],
        ayurvedicProperties: {
          taste: "Sweet, pungent, astringent",
          potency: "Heating",
          effect: "Balances Kapha and Vata"
        }
      }
    },
    {
      title: "Ghee and Black Pepper",
      description: "Warming remedy for coughs and congestion that soothes the throat.",
      category: "Respiratory Health",
      ingredients: ["Ghee (clarified butter)", "Black pepper", "Honey"],
      imageSrc: "https://images.unsplash.com/photo-1620405116976-f735da1c78cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Warm 1 teaspoon ghee slightly",
          "Add a pinch of freshly ground black pepper",
          "Mix with 1 teaspoon honey",
          "Take slowly, allowing it to coat the throat",
          "Can be taken 2-3 times daily during illness"
        ],
        benefits: [
          "Soothes sore throat and cough",
          "Reduces chest congestion",
          "Provides natural antimicrobial action",
          "Lubricates respiratory passages",
          "Supports immune function"
        ],
        dosage: "1 teaspoon mixture, 2-3 times daily during illness",
        precautions: [
          "Not suitable for those with dairy allergies",
          "Avoid if experiencing fever",
          "Use only pure, organic ghee",
          "May not be suitable for Pitta constitution in excess"
        ],
        ayurvedicProperties: {
          taste: "Sweet, pungent",
          potency: "Heating",
          effect: "Balances Vata and Kapha"
        }
      }
    },
    {
      title: "Mustard Oil Massage",
      description: "Warming oil treatment for joint pain and muscle stiffness.",
      category: "Pain Relief",
      ingredients: ["Mustard oil", "Camphor (optional)", "Eucalyptus oil (optional)"],
      imageSrc: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Warm mustard oil slightly (not too hot)",
          "Add a small amount of camphor if desired",
          "Mix in 2-3 drops eucalyptus oil for added relief",
          "Massage gently into affected areas",
          "Leave on for 30 minutes before bathing"
        ],
        benefits: [
          "Relieves joint pain and arthritis",
          "Reduces muscle stiffness",
          "Improves blood circulation",
          "Provides warmth to affected areas",
          "Has natural anti-inflammatory properties"
        ],
        dosage: "Apply once daily, preferably evening",
        precautions: [
          "Do patch test before first use",
          "Avoid on broken or irritated skin",
          "May cause skin irritation in sensitive individuals",
          "Don't apply to face or sensitive areas"
        ],
        ayurvedicProperties: {
          taste: "Pungent",
          potency: "Heating",
          effect: "Reduces Kapha and Vata"
        }
      }
    },
    {
      title: "Coconut Oil Hair Treatment",
      description: "Nourishing oil that strengthens hair and soothes the scalp.",
      category: "Hair Care",
      ingredients: ["Virgin coconut oil", "Curry leaves (optional)", "Hibiscus flowers (optional)"],
      imageSrc: "https://images.unsplash.com/photo-1609108158312-bed14e5122e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Warm 2-3 tablespoons virgin coconut oil",
          "Optional: heat with curry leaves for added nutrients",
          "Optional: add hibiscus flowers for hair growth",
          "Strain if using herbs",
          "Massage into scalp and hair from roots to tips"
        ],
        benefits: [
          "Nourishes and strengthens hair",
          "Prevents hair breakage and split ends",
          "Soothes dry and itchy scalp",
          "Adds natural shine and softness",
          "May promote hair growth"
        ],
        dosage: "Apply 2-3 times per week, leave for 1-2 hours",
        precautions: [
          "May feel heavy on fine hair",
          "Do patch test if sensitive skin",
          "Use virgin, unrefined coconut oil",
          "May solidify in cold weather - warm slightly"
        ],
        ayurvedicProperties: {
          taste: "Sweet",
          potency: "Cooling",
          effect: "Balances Pitta and Vata"
        }
      }
    },
    {
      title: "Cardamom Infused Water",
      description: "Aromatic drink that freshens breath and aids digestion.",
      category: "Digestive Health",
      ingredients: ["Green cardamom pods", "Water", "Mint leaves (optional)"],
      imageSrc: "https://images.unsplash.com/photo-1631210882920-a6e6a5d27da9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Crush 4-5 green cardamom pods lightly",
          "Boil 2 cups water and add crushed cardamom",
          "Simmer for 5-7 minutes",
          "Add fresh mint leaves if desired",
          "Strain and serve warm or cool"
        ],
        benefits: [
          "Freshens breath naturally",
          "Aids digestion and reduces bloating",
          "Relieves nausea and stomach upset",
          "Has antimicrobial properties",
          "Supports respiratory health"
        ],
        dosage: "1-2 cups daily, after meals",
        precautions: [
          "Generally safe for most people",
          "May interact with certain medications",
          "Avoid excessive amounts",
          "Use fresh, good quality cardamom"
        ],
        ayurvedicProperties: {
          taste: "Sweet, pungent",
          potency: "Cooling",
          effect: "Balances all three doshas"
        }
      }
    },
    {
      title: "Jaggery and Ginger",
      description: "Sweet and spicy combination that relieves cough and cold symptoms.",
      category: "Respiratory Health",
      ingredients: ["Jaggery", "Fresh ginger", "Water"],
      imageSrc: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Grate 1 inch fresh ginger",
          "Mix with 1 tablespoon jaggery",
          "Add small amount of water to form paste",
          "Take directly or mix with warm water",
          "Can also be made into a decoction by boiling"
        ],
        benefits: [
          "Relieves cough and cold symptoms",
          "Soothes sore throat",
          "Provides natural energy",
          "Supports immune function",
          "Aids in expectoration"
        ],
        dosage: "1 teaspoon mixture, 2-3 times daily during illness",
        precautions: [
          "High in sugar - diabetics should be cautious",
          "May increase Pitta if used excessively",
          "Use organic, unrefined jaggery",
          "Avoid if experiencing fever"
        ],
        ayurvedicProperties: {
          taste: "Sweet, pungent",
          potency: "Heating",
          effect: "Balances Vata and Kapha"
        }
      }
    },
    {
      title: "Rose Water Toner",
      description: "Gentle toner that refreshes and balances skin pH.",
      category: "Skin Health",
      ingredients: ["Rose water", "Aloe vera gel (optional)", "Witch hazel (optional)"],
      imageSrc: "https://images.unsplash.com/photo-1586182987320-4f17e36640df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      detailedInfo: {
        preparation: [
          "Use pure, organic rose water as base",
          "Optional: mix with equal parts aloe vera gel",
          "Optional: add few drops witch hazel for oily skin",
          "Store in spray bottle or apply with cotton pad",
          "Use on clean skin morning and evening"
        ],
        benefits: [
          "Balances skin pH naturally",
          "Provides gentle hydration",
          "Soothes irritated or inflamed skin",
          "Has natural antimicrobial properties",
          "Refreshes and revitalizes skin"
        ],
        dosage: "Apply twice daily, morning and evening",
        precautions: [
          "Use pure rose water without chemicals",
          "Do patch test before first use",
          "Avoid contact with eyes",
          "Store in cool place to maintain freshness"
        ],
        ayurvedicProperties: {
          taste: "Sweet, astringent",
          potency: "Cooling",
          effect: "Balances Pitta and Vata"
        }
      }
    },
    {
      title: "Shatavari Milk",
      description: "Hormone-balancing tonic that supports female reproductive health.",
      category: "Women's Health",
      ingredients: ["Shatavari powder", "Milk", "Honey", "Cardamom"],
      imageSrc: "https://images.unsplash.com/photo-1626682440957-12466531adbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Heat 1 cup milk in a saucepan",
          "Add 1/2 teaspoon shatavari powder",
          "Add pinch of cardamom for flavor",
          "Simmer for 5 minutes while stirring",
          "Add honey to taste when cooled slightly"
        ],
        benefits: [
          "Supports female reproductive health",
          "Helps balance hormones naturally",
          "Increases milk production in nursing mothers",
          "Provides adaptogenic stress relief",
          "Supports overall vitality"
        ],
        dosage: "1 cup daily, preferably evening",
        precautions: [
          "Consult healthcare provider if pregnant",
          "May interact with hormone medications",
          "Start with smaller doses",
          "Avoid if allergic to asparagus family"
        ],
        ayurvedicProperties: {
          taste: "Sweet, bitter",
          potency: "Cooling",
          effect: "Balances Pitta and Vata"
        }
      }
    },
    {
      title: "Clove Oil for Toothache",
      description: "Natural analgesic that provides quick relief from dental pain.",
      category: "Pain Relief",
      ingredients: ["Clove essential oil", "Carrier oil (coconut/sesame)", "Cotton swab"],
      imageSrc: "https://images.unsplash.com/photo-1609688669309-fc15db557633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Mix 2-3 drops clove oil with 1 teaspoon carrier oil",
          "Soak cotton swab in the mixture",
          "Apply directly to affected tooth",
          "Hold for 10-15 minutes",
          "Rinse mouth with warm salt water afterward"
        ],
        benefits: [
          "Provides quick pain relief",
          "Has natural antibacterial properties",
          "Reduces inflammation in gums",
          "Helps prevent infection",
          "Traditional remedy for dental problems"
        ],
        dosage: "Apply as needed for pain relief, up to 3 times daily",
        precautions: [
          "Always dilute clove oil before use",
          "Don't apply to broken skin",
          "Avoid swallowing in large amounts",
          "See dentist for persistent problems"
        ],
        ayurvedicProperties: {
          taste: "Pungent, bitter",
          potency: "Heating",
          effect: "Balances Kapha and Vata"
        }
      }
    },
    {
      title: "Licorice Root Tea",
      description: "Soothing tea that supports adrenal health and respiratory function.",
      category: "Stress Relief",
      ingredients: ["Licorice root", "Water", "Honey (optional)"],
      imageSrc: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Add 1 teaspoon dried licorice root to 2 cups water",
          "Bring to boil and simmer for 10-15 minutes",
          "Strain the tea",
          "Add honey if desired for sweetness",
          "Drink warm for best results"
        ],
        benefits: [
          "Supports adrenal gland function",
          "Soothes respiratory irritation",
          "Helps manage stress naturally",
          "Supports digestive health",
          "Has natural anti-inflammatory properties"
        ],
        dosage: "1 cup daily, not exceeding 3 weeks continuous use",
        precautions: [
          "Avoid if you have high blood pressure",
          "Can interact with certain medications",
          "Don't use during pregnancy",
          "Limit duration of use"
        ],
        ayurvedicProperties: {
          taste: "Sweet",
          potency: "Cooling",
          effect: "Balances Vata and Pitta"
        }
      }
    },
    {
      title: "Sesame Oil Pulling",
      description: "Ancient practice for oral hygiene and detoxification.",
      category: "Oral Health",
      ingredients: ["Sesame oil (organic, cold-pressed)"],
      imageSrc: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      detailedInfo: {
        preparation: [
          "Take 1 tablespoon organic sesame oil in mouth",
          "Swish gently for 15-20 minutes",
          "Don't swallow - spit into trash (not sink)",
          "Rinse mouth with warm water",
          "Brush teeth normally afterward"
        ],
        benefits: [
          "Improves oral hygiene",
          "Reduces harmful bacteria in mouth",
          "Supports gum health",
          "May help with bad breath",
          "Traditional detoxification practice"
        ],
        dosage: "Once daily, preferably morning on empty stomach",
        precautions: [
          "Never swallow the oil after pulling",
          "Start with 5-10 minutes if new to practice",
          "Use only organic, cold-pressed oil",
          "Not recommended for children under 5"
        ],
        ayurvedicProperties: {
          taste: "Sweet",
          potency: "Heating",
          effect: "Balances Vata and Kapha"
        }
      }
    },
    {
      title: "Basil and Mint Decoction",
      description: "Refreshing herbal drink that supports respiratory and digestive health.",
      category: "Respiratory Health",
      ingredients: ["Fresh basil leaves", "Fresh mint leaves", "Water", "Honey"],
      imageSrc: "https://images.unsplash.com/photo-1629897048514-3dd7414fe72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Boil 2 cups water in a pot",
          "Add 8-10 fresh basil leaves",
          "Add 6-8 fresh mint leaves",
          "Simmer for 5-7 minutes",
          "Strain and add honey to taste"
        ],
        benefits: [
          "Supports respiratory function",
          "Aids digestion and reduces bloating",
          "Provides natural antimicrobial action",
          "Refreshes and energizes",
          "Helps with seasonal allergies"
        ],
        dosage: "1-2 cups daily, especially during seasonal changes",
        precautions: [
          "Generally safe for most people",
          "May interact with blood-thinning medications",
          "Avoid excessive amounts during pregnancy",
          "Use fresh, clean herbs"
        ],
        ayurvedicProperties: {
          taste: "Pungent, sweet",
          potency: "Cooling to warming",
          effect: "Balances Kapha and Vata"
        }
      }
    },
    {
      title: "Arjuna Bark Tea",
      description: "Heart-supporting herb that promotes cardiovascular health.",
      category: "Heart Health",
      ingredients: ["Arjuna bark powder", "Water", "Honey (optional)"],
      imageSrc: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Add 1/2 teaspoon arjuna bark powder to 2 cups water",
          "Boil and simmer for 10-15 minutes",
          "Strain the decoction",
          "Add honey if desired",
          "Drink warm, preferably on empty stomach"
        ],
        benefits: [
          "Supports heart muscle function",
          "May help maintain healthy blood pressure",
          "Supports cardiovascular circulation",
          "Has natural antioxidant properties",
          "Traditional heart tonic"
        ],
        dosage: "1 cup daily, preferably morning",
        precautions: [
          "Consult doctor if on heart medications",
          "May interact with blood pressure drugs",
          "Monitor blood pressure regularly",
          "Not recommended during pregnancy"
        ],
        ayurvedicProperties: {
          taste: "Astringent",
          potency: "Cooling",
          effect: "Balances Pitta and Kapha"
        }
      }
    },
    {
      title: "Guduchi (Giloy) Juice",
      description: "Immunity-boosting herb that supports overall health and vitality.",
      category: "Immunity",
      ingredients: ["Fresh Guduchi stem", "Water", "Honey"],
      imageSrc: "https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Take 4-6 inches of fresh guduchi stem",
          "Crush and extract juice",
          "Mix with equal amount of water",
          "Add honey to taste",
          "Consume fresh on empty stomach"
        ],
        benefits: [
          "Boosts immune system significantly",
          "Supports liver detoxification",
          "Helps manage blood sugar levels",
          "Reduces inflammation",
          "Supports overall vitality"
        ],
        dosage: "2-3 tablespoons daily, on empty stomach",
        precautions: [
          "May cause constipation in some people",
          "Can lower blood sugar levels",
          "Avoid during autoimmune conditions",
          "Use fresh stem for best results"
        ],
        ayurvedicProperties: {
          taste: "Bitter, astringent",
          potency: "Heating",
          effect: "Balances all three doshas"
        }
      }
    },
    {
      title: "Moringa Leaf Powder Drink",
      description: "Nutrient-dense superfood that provides comprehensive nutrition.",
      category: "Nutrition",
      ingredients: ["Moringa leaf powder", "Water or milk", "Honey", "Lemon juice"],
      imageSrc: "https://images.unsplash.com/photo-1544948503-7ad532d1de56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Mix 1 teaspoon moringa powder with 1 cup water or milk",
          "Stir well to avoid lumps",
          "Add lemon juice for vitamin C absorption",
          "Sweeten with honey if desired",
          "Consume immediately after preparation"
        ],
        benefits: [
          "Extremely high in vitamins and minerals",
          "Provides complete protein profile",
          "Supports energy and vitality",
          "Rich in antioxidants",
          "Supports healthy blood sugar levels"
        ],
        dosage: "1 teaspoon powder daily, preferably morning",
        precautions: [
          "Start with smaller amounts",
          "May have mild laxative effect initially",
          "Avoid excessive amounts during pregnancy",
          "Choose organic, pure powder"
        ],
        ayurvedicProperties: {
          taste: "Bitter, astringent",
          potency: "Heating",
          effect: "Balances Kapha and Vata"
        }
      }
    },
    {
      title: "Pomegranate Juice",
      description: "Antioxidant-rich fruit juice that supports heart and skin health.",
      category: "Heart Health",
      ingredients: ["Fresh pomegranate", "Water (optional)", "Mint leaves"],
      imageSrc: "https://images.unsplash.com/photo-1589059170935-34e0b4353358?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      detailedInfo: {
        preparation: [
          "Remove seeds from fresh pomegranate",
          "Blend seeds with small amount of water",
          "Strain to remove pulp if desired",
          "Add fresh mint leaves for flavor",
          "Consume immediately for best nutrition"
        ],
        benefits: [
          "Extremely high in antioxidants",
          "Supports cardiovascular health",
          "May help maintain healthy blood pressure",
          "Supports skin health and anti-aging",
          "Has anti-inflammatory properties"
        ],
        dosage: "1/2 to 1 cup daily, preferably morning",
        precautions: [
          "High in natural sugars",
          "May interact with blood-thinning medications",
          "Can stain teeth and clothing",
          "Choose organic when possible"
        ],
        ayurvedicProperties: {
          taste: "Sweet, astringent, sour",
          potency: "Cooling",
          effect: "Balances Pitta and Vata"
        }
      }
    },
    {
      title: "Bael Fruit Juice",
      description: "Digestive tonic that soothes intestinal problems and supports gut health.",
      category: "Digestive Health",
      ingredients: ["Ripe bael fruit pulp", "Water", "Jaggery or honey"],
      imageSrc: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Scoop pulp from ripe bael fruit",
          "Mash pulp with water to desired consistency",
          "Strain to remove seeds and fibers",
          "Sweeten with jaggery or honey",
          "Serve chilled for best taste"
        ],
        benefits: [
          "Soothes digestive problems",
          "Helps with diarrhea and dysentery",
          "Supports healthy gut bacteria",
          "Provides natural fiber",
          "Has cooling effect on body"
        ],
        dosage: "1/2 cup daily, especially during digestive issues",
        precautions: [
          "May cause constipation if consumed in excess",
          "Choose fully ripe fruit",
          "Diabetics should monitor sugar content",
          "Consume fresh for best results"
        ],
        ayurvedicProperties: {
          taste: "Sweet, astringent",
          potency: "Cooling",
          effect: "Balances Pitta and Vata"
        }
      }
    },
    {
      title: "Shankhpushpi Brain Tonic",
      description: "Memory and intelligence enhancing herb for cognitive support.",
      category: "Brain Health",
      ingredients: ["Shankhpushpi powder", "Brahmi powder", "Milk", "Honey"],
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Mix 1/4 teaspoon shankhpushpi with 1/4 teaspoon brahmi",
          "Heat 1 cup milk and add the herb mixture",
          "Simmer for 5 minutes while stirring",
          "Strain if desired",
          "Add honey when cooled slightly"
        ],
        benefits: [
          "Enhances memory and concentration",
          "Supports cognitive function",
          "Reduces mental fatigue",
          "Calms the nervous system",
          "Improves learning ability"
        ],
        dosage: "1 cup daily, preferably evening",
        precautions: [
          "May cause drowsiness in some",
          "Avoid during pregnancy",
          "Start with smaller doses",
          "Consult doctor if on medications"
        ],
        ayurvedicProperties: {
          taste: "Bitter, sweet",
          potency: "Cooling",
          effect: "Balances Pitta and Vata"
        }
      }
    },
    {
      title: "Bottle Gourd Juice",
      description: "Cooling vegetable juice that supports kidney health and weight management.",
      category: "Kidney Health",
      ingredients: ["Fresh bottle gourd", "Water", "Mint leaves", "Salt (pinch)"],
      imageSrc: "https://images.unsplash.com/photo-1609501676725-7186f34a2ea0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Peel and chop fresh bottle gourd",
          "Blend with small amount of water",
          "Strain the juice through fine mesh",
          "Add mint leaves and pinch of salt",
          "Consume fresh on empty stomach"
        ],
        benefits: [
          "Supports kidney function",
          "Aids in weight management",
          "Provides natural hydration",
          "Has cooling effect on body",
          "Supports healthy digestion"
        ],
        dosage: "1/2 cup daily, morning on empty stomach",
        precautions: [
          "Ensure bottle gourd is fresh and not bitter",
          "Bitter bottle gourd can be toxic",
          "Start with small amounts",
          "Consume immediately after preparation"
        ],
        ayurvedicProperties: {
          taste: "Sweet, astringent",
          potency: "Cooling",
          effect: "Balances Pitta and Kapha"
        }
      }
    },
    {
      title: "Hibiscus Flower Tea",
      description: "Beautiful red tea that supports heart health and blood pressure management.",
      category: "Heart Health",
      ingredients: ["Dried hibiscus flowers", "Water", "Honey", "Lemon juice"],
      imageSrc: "https://images.unsplash.com/photo-1563885306667-6a6b4a0ab6c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Add 2 tablespoons dried hibiscus flowers to 2 cups water",
          "Bring to boil and steep for 5-10 minutes",
          "Strain the beautiful red tea",
          "Add honey and lemon juice to taste",
          "Can be served hot or iced"
        ],
        benefits: [
          "May help lower blood pressure",
          "Rich in vitamin C and antioxidants",
          "Supports heart health",
          "Has natural diuretic properties",
          "Beautiful color and refreshing taste"
        ],
        dosage: "1-2 cups daily, preferably between meals",
        precautions: [
          "May interact with blood pressure medications",
          "Can lower blood pressure significantly",
          "Avoid during pregnancy",
          "May affect estrogen levels"
        ],
        ayurvedicProperties: {
          taste: "Sour, astringent",
          potency: "Cooling",
          effect: "Balances Pitta and Kapha"
        }
      }
    },
    {
      title: "Drumstick Leaf Soup",
      description: "Nutrient-rich soup using moringa leaves for overall health.",
      category: "Nutrition",
      ingredients: ["Fresh drumstick leaves", "Water", "Turmeric", "Salt", "Lemon"],
      imageSrc: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      detailedInfo: {
        preparation: [
          "Clean and remove drumstick leaves from stems",
          "Boil 2 cups water with pinch of turmeric",
          "Add leaves and cook for 5-7 minutes",
          "Add salt to taste",
          "Finish with lemon juice before serving"
        ],
        benefits: [
          "Extremely high in vitamins and minerals",
          "Supports immune system function",
          "Provides iron for anemia prevention",
          "Rich in protein and calcium",
          "Supports lactation in nursing mothers"
        ],
        dosage: "1 cup 2-3 times per week",
        precautions: [
          "Use only tender, fresh leaves",
          "Avoid roots and bark",
          "May have mild laxative effect",
          "Pregnant women should consult doctor"
        ],
        ayurvedicProperties: {
          taste: "Bitter, astringent",
          potency: "Heating",
          effect: "Balances Kapha and Vata"
        }
      }
    },
    {
      title: "Kutki Root Decoction",
      description: "Liver-supporting herb that aids in detoxification and digestion.",
      category: "Liver Health",
      ingredients: ["Kutki root powder", "Water", "Honey (optional)"],
      imageSrc: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Add 1/4 teaspoon kutki powder to 2 cups water",
          "Boil and simmer for 10-15 minutes",
          "Strain the bitter decoction",
          "Add small amount of honey if needed",
          "Drink warm on empty stomach"
        ],
        benefits: [
          "Supports liver detoxification",
          "Aids in bile production",
          "Supports healthy digestion",
          "Has hepatoprotective properties",
          "Traditional liver tonic"
        ],
        dosage: "1/2 cup daily, preferably morning",
        precautions: [
          "Very bitter taste",
          "Avoid during pregnancy",
          "Don't exceed recommended dose",
          "Consult doctor if liver problems exist"
        ],
        ayurvedicProperties: {
          taste: "Bitter",
          potency: "Cooling",
          effect: "Balances Pitta and Kapha"
        }
      }
    },
    {
      title: "Punarnava Root Tea",
      description: "Kidney-supporting herb that helps with fluid retention and urinary health.",
      category: "Kidney Health",
      ingredients: ["Punarnava root powder", "Water", "Ginger (optional)"],
      imageSrc: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Add 1/2 teaspoon punarnava powder to 2 cups water",
          "Optional: add small piece of ginger",
          "Boil and simmer for 10 minutes",
          "Strain the tea",
          "Drink warm, preferably morning"
        ],
        benefits: [
          "Supports kidney function",
          "Has natural diuretic properties",
          "Helps reduce fluid retention",
          "Supports urinary tract health",
          "Traditional kidney tonic"
        ],
        dosage: "1 cup daily, preferably morning",
        precautions: [
          "Monitor kidney function if disease present",
          "May increase urination",
          "Avoid during pregnancy",
          "Consult doctor for kidney problems"
        ],
        ayurvedicProperties: {
          taste: "Bitter, astringent",
          potency: "Cooling",
          effect: "Balances Pitta and Kapha"
        }
      }
    },
    {
      title: "Gooseberry (Amla) Candy",
      description: "Preserved amla that provides vitamin C and supports immunity year-round.",
      category: "Immunity",
      ingredients: ["Fresh amla", "Jaggery", "Salt", "Turmeric"],
      imageSrc: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Remove seeds from fresh amla and chop",
          "Mix with jaggery, pinch of salt, and turmeric",
          "Cook on low heat until water evaporates",
          "Spread on plate to cool and dry",
          "Store in airtight container"
        ],
        benefits: [
          "Provides vitamin C throughout the year",
          "Supports immune system function",
          "Aids in iron absorption",
          "Supports hair and skin health",
          "Natural preservative method"
        ],
        dosage: "1-2 pieces daily as needed",
        precautions: [
          "High in natural sugars",
          "Store in dry place to prevent mold",
          "Diabetics should consume moderately",
          "Use fresh, good quality amla"
        ],
        ayurvedicProperties: {
          taste: "Sour, sweet, astringent",
          potency: "Cooling",
          effect: "Balances all three doshas"
        }
      }
    },
    {
      title: "Bilva Leaf Juice",
      description: "Sacred leaf juice that supports digestive health and diabetes management.",
      category: "Digestive Health",
      ingredients: ["Fresh bilva leaves", "Water", "Honey"],
      imageSrc: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Wash fresh bilva leaves thoroughly",
          "Crush leaves to extract juice",
          "Mix with equal amount of water",
          "Add honey to taste",
          "Consume fresh on empty stomach"
        ],
        benefits: [
          "Supports healthy blood sugar levels",
          "Aids digestive function",
          "Has antimicrobial properties",
          "Supports liver health",
          "Traditional sacred medicine"
        ],
        dosage: "2-3 tablespoons daily, morning on empty stomach",
        precautions: [
          "Use only fresh, clean leaves",
          "May cause stomach upset if taken in excess",
          "Monitor blood sugar if diabetic",
          "Avoid if allergic to the plant"
        ],
        ayurvedicProperties: {
          taste: "Bitter, astringent",
          potency: "Cooling",
          effect: "Balances Pitta and Kapha"
        }
      }
    },
    {
      title: "Manjistha Root Tea",
      description: "Blood-purifying herb that supports skin health and lymphatic function.",
      category: "Skin Health",
      ingredients: ["Manjistha root powder", "Water", "Honey (optional)"],
      imageSrc: "https://images.unsplash.com/photo-1556909094-f1bbdba54fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Add 1/2 teaspoon manjistha powder to 2 cups water",
          "Boil and simmer for 10-12 minutes",
          "Strain the reddish tea",
          "Add honey if desired for taste",
          "Drink warm, preferably evening"
        ],
        benefits: [
          "Purifies blood naturally",
          "Supports clear, healthy skin",
          "Aids lymphatic drainage",
          "Has anti-inflammatory properties",
          "Traditional blood cleanser"
        ],
        dosage: "1 cup daily, preferably evening",
        precautions: [
          "May cause red coloration in urine (harmless)",
          "Avoid during pregnancy",
          "Can interact with certain medications",
          "Start with smaller doses"
        ],
        ayurvedicProperties: {
          taste: "Bitter, sweet, astringent",
          potency: "Cooling",
          effect: "Balances Pitta and Kapha"
        }
      }
    },
    {
      title: "Bhringraj Hair Oil",
      description: "Traditional hair oil that promotes hair growth and prevents premature graying.",
      category: "Hair Care",
      ingredients: ["Bhringraj leaves", "Coconut oil", "Curry leaves", "Fenugreek seeds"],
      imageSrc: "https://images.unsplash.com/photo-1614029655965-2b40a2f1ee24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Heat 1 cup coconut oil in a pan",
          "Add fresh bhringraj leaves and curry leaves",
          "Add 1 tablespoon fenugreek seeds",
          "Heat on low flame for 10-15 minutes",
          "Strain and store in glass bottle"
        ],
        benefits: [
          "Promotes healthy hair growth",
          "Prevents premature graying",
          "Strengthens hair follicles",
          "Reduces hair fall",
          "Nourishes scalp deeply"
        ],
        dosage: "Apply 2-3 times per week, leave for 1-2 hours",
        precautions: [
          "Do patch test before first use",
          "Use only fresh herbs",
          "Store in cool, dry place",
          "Avoid if allergic to any ingredient"
        ],
        ayurvedicProperties: {
          taste: "Bitter, astringent",
          potency: "Cooling",
          effect: "Balances Pitta and Vata"
        }
      }
    },
    {
      title: "Kalmegh (Andrographis) Decoction",
      description: "Bitter herb that supports liver health and immune function.",
      category: "Liver Health",
      ingredients: ["Kalmegh powder", "Water", "Honey", "Ginger"],
      imageSrc: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Add 1/4 teaspoon kalmegh powder to 2 cups water",
          "Add small piece of ginger",
          "Boil and simmer for 10 minutes",
          "Strain the very bitter decoction",
          "Add honey to make it palatable"
        ],
        benefits: [
          "Supports liver detoxification",
          "Boosts immune system function",
          "Has natural antimicrobial properties",
          "Supports healthy digestion",
          "Traditional fever reducer"
        ],
        dosage: "1/2 cup daily, preferably morning",
        precautions: [
          "Extremely bitter taste",
          "Avoid during pregnancy",
          "May cause stomach upset in sensitive individuals",
          "Consult doctor if on medications"
        ],
        ayurvedicProperties: {
          taste: "Bitter",
          potency: "Cooling",
          effect: "Balances Pitta and Kapha"
        }
      }
    },
    {
      title: "Vidanga Seed Powder",
      description: "Anti-parasitic herb that supports digestive health and deworming.",
      category: "Digestive Health",
      ingredients: ["Vidanga seed powder", "Honey", "Warm water"],
      imageSrc: "https://images.unsplash.com/photo-1609688669522-7c8bc36f2a0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Mix 1/4 teaspoon vidanga powder with 1 teaspoon honey",
          "Form into small paste",
          "Take directly or mix with warm water",
          "Consume on empty stomach",
          "Follow with warm water"
        ],
        benefits: [
          "Natural anti-parasitic properties",
          "Supports intestinal health",
          "Aids in deworming",
          "Improves digestion",
          "Traditional remedy for worms"
        ],
        dosage: "1/4 teaspoon daily for 7-10 days, then break",
        precautions: [
          "Not for continuous long-term use",
          "Avoid during pregnancy",
          "Can cause stomach upset if taken in excess",
          "Consult practitioner for proper dosing"
        ],
        ayurvedicProperties: {
          taste: "Pungent, bitter",
          potency: "Heating",
          effect: "Balances Kapha and Vata"
        }
      }
    },
    {
      title: "Pippali (Long Pepper) Honey",
      description: "Respiratory tonic that supports lung health and digestive fire.",
      category: "Respiratory Health",
      ingredients: ["Pippali powder", "Raw honey"],
      imageSrc: "https://images.unsplash.com/photo-1609688669309-fc15db557633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Mix pinch of pippali powder with 1 teaspoon honey",
          "Stir to form smooth paste",
          "Take directly on tongue",
          "Let it slowly dissolve in mouth",
          "Follow with warm water if needed"
        ],
        benefits: [
          "Supports respiratory function",
          "Strengthens digestive fire",
          "Helps with cough and cold",
          "Supports lung health",
          "Traditional rasayana (rejuvenative)"
        ],
        dosage: "Small pinch with honey, 1-2 times daily",
        precautions: [
          "Very potent - use only small amounts",
          "May cause burning sensation",
          "Avoid if Pitta is aggravated",
          "Not suitable for children under 12"
        ],
        ayurvedicProperties: {
          taste: "Pungent, sweet",
          potency: "Heating",
          effect: "Balances Kapha and Vata"
        }
      }
    },
    {
      title: "Yashtimadhu (Licorice) Milk",
      description: "Soothing tonic that supports adrenal health and soothes inflammation.",
      category: "Stress Relief",
      ingredients: ["Yashtimadhu powder", "Milk", "Honey", "Cardamom"],
      imageSrc: "https://images.unsplash.com/photo-1551412222-8c7a69b0e6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      detailedInfo: {
        preparation: [
          "Heat 1 cup milk gently",
          "Add 1/2 teaspoon yashtimadhu powder",
          "Add pinch of cardamom",
          "Simmer for 5 minutes",
          "Add honey when cooled slightly"
        ],
        benefits: [
          "Supports adrenal gland function",
          "Soothes throat and respiratory irritation",
          "Helps manage stress naturally",
          "Supports healthy cortisol levels",
          "Natural anti-inflammatory"
        ],
        dosage: "1 cup daily, preferably evening",
        precautions: [
          "Avoid if high blood pressure",
          "Can raise sodium levels",
          "Don't use during pregnancy",
          "Limit to 3 weeks continuous use"
        ],
        ayurvedicProperties: {
          taste: "Sweet",
          potency: "Cooling",
          effect: "Balances Vata and Pitta"
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
