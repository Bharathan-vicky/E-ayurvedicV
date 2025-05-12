import { useEffect, useState } from "react";
import PageTransition from "@/components/ui-custom/PageTransition";
import AnimatedCard from "@/components/ui-custom/AnimatedCard";
import { Input } from "@/components/ui/input";
import { 
  Tabs, TabsContent, TabsList, TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { 
  Leaf, Search, SlidersHorizontal, X, Coffee, Droplets, 
  Fingerprint, BookOpen, Flame, Snowflake, FlaskConical, BookText
} from "lucide-react";
import { 
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle 
} from "@/components/ui/dialog";

// Ayurvedic plant database
const plants = [
  {
    id: 1,
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    ayurvedicName: "Ashwagandha",
    image: "https://images.unsplash.com/photo-1590114062695-f4ca7b50a3c5",
    description: "Known as 'Indian Winter cherry' or 'Indian Ginseng', Ashwagandha is one of the most important herbs in Ayurveda.",
    benefits: ["Reduces anxiety and stress", "Improves cognitive function", "Boosts immunity", "Increases energy levels"],
    properties: {
      rasa: ["Bitter", "Astringent"],
      virya: "Heating",
      vipaka: "Pungent",
      doshaEffect: {
        vata: "Balances",
        pitta: "Increases (in excess)",
        kapha: "Balances"
      }
    },
    uses: [
      "Stress and anxiety management",
      "Improving memory and cognitive function",
      "Boosting immune system",
      "Supporting healthy sleep patterns"
    ],
    contraindications: [
      "Pregnancy (consult before use)",
      "Auto-immune conditions (monitor with healthcare provider)",
      "May interact with thyroid medication"
    ],
    researchStudies: [
      {
        title: "Effects of Ashwagandha on stress and anxiety",
        link: "#",
        findings: "Study showed significant reduction in stress and anxiety scores compared to placebo."
      },
      {
        title: "Ashwagandha and cognitive improvement",
        link: "#",
        findings: "Participants demonstrated improved reaction time and task performance after 8 weeks of supplementation."
      }
    ],
    season: "All seasons (especially beneficial in winter)",
    remedies: [
      {
        name: "Ashwagandha Milk",
        ingredients: ["1 tsp Ashwagandha powder", "1 cup milk", "Honey to taste", "Pinch of cardamom"],
        preparation: "Mix Ashwagandha powder in warm milk. Add honey and cardamom. Drink before bedtime for better sleep."
      }
    ]
  },
  {
    id: 2,
    name: "Turmeric",
    scientificName: "Curcuma longa",
    ayurvedicName: "Haridra",
    image: "https://images.unsplash.com/photo-1615485500834-bc10199bc727",
    description: "A powerful anti-inflammatory herb that has been used in Ayurvedic medicine for thousands of years.",
    benefits: ["Reduces inflammation", "Antioxidant properties", "Supports digestive health", "Purifies blood"],
    properties: {
      rasa: ["Bitter", "Astringent"],
      virya: "Heating",
      vipaka: "Pungent",
      doshaEffect: {
        vata: "Balances",
        pitta: "Balances (in moderation)",
        kapha: "Balances"
      }
    },
    uses: [
      "Anti-inflammatory for joint health",
      "Supporting digestive function",
      "Purifying blood",
      "Skin conditions and wound healing"
    ],
    contraindications: [
      "Gallbladder problems",
      "Blood-thinning medications",
      "Excessive consumption during pregnancy"
    ],
    researchStudies: [
      {
        title: "Turmeric and inflammatory markers",
        link: "#",
        findings: "Curcumin from turmeric significantly reduced inflammatory markers in patients with arthritis."
      }
    ],
    season: "All seasons",
    remedies: [
      {
        name: "Golden Milk",
        ingredients: ["1/2 tsp Turmeric powder", "1 cup milk", "Pinch of black pepper", "Honey to taste"],
        preparation: "Heat milk with turmeric and black pepper. Simmer for 5 minutes. Add honey after removing from heat."
      }
    ]
  },
  {
    id: 3,
    name: "Tulsi",
    scientificName: "Ocimum sanctum",
    ayurvedicName: "Tulsi",
    image: "https://images.unsplash.com/photo-1593256629313-151f72791cd3",
    description: "Holy Basil or Tulsi is revered as an adaptogenic herb that promotes mental balance and resilience to stress.",
    benefits: ["Adaptogenic", "Improves respiratory health", "Anti-microbial", "Reduces stress"],
    properties: {
      rasa: ["Pungent", "Bitter"],
      virya: "Heating",
      vipaka: "Pungent",
      doshaEffect: {
        vata: "Balances",
        pitta: "Balances (fresh) / Increases (dry)",
        kapha: "Balances"
      }
    },
    uses: [
      "Respiratory conditions like cough and cold",
      "Adapting to stress",
      "Fever and infection support",
      "Purifying air"
    ],
    contraindications: [
      "May affect fertility",
      "Blood-thinning medications",
      "Consult before using with diabetes medications"
    ],
    researchStudies: [
      {
        title: "Tulsi as an adaptogen",
        link: "#",
        findings: "Research indicates Tulsi's ability to normalize physiological processes during stress response."
      }
    ],
    season: "Best in rainy season and winter",
    remedies: [
      {
        name: "Tulsi Tea",
        ingredients: ["15-20 fresh Tulsi leaves", "1 cup water", "Honey", "Ginger (optional)"],
        preparation: "Boil water with Tulsi leaves and ginger. Steep for 5 minutes, strain and add honey."
      }
    ]
  },
  {
    id: 4,
    name: "Brahmi",
    scientificName: "Bacopa monnieri",
    ayurvedicName: "Brahmi",
    image: "https://images.unsplash.com/photo-1591134103816-e3b2cb7f7155",
    description: "A renowned herb in Ayurvedic medicine, particularly valued for its cognitive-enhancing properties.",
    benefits: ["Enhances memory", "Reduces anxiety", "Improves concentration", "Anti-inflammatory"],
    properties: {
      rasa: ["Bitter", "Sweet", "Astringent"],
      virya: "Cooling",
      vipaka: "Sweet",
      doshaEffect: {
        vata: "Balances",
        pitta: "Balances",
        kapha: "Balances (in moderation)"
      }
    },
    uses: [
      "Memory enhancement",
      "ADHD and attention issues",
      "Alzheimer's support",
      "Anxiety and stress management"
    ],
    contraindications: [
      "May increase secretions in intestines, lungs",
      "Can interact with some medications",
      "Excessive drowsiness with sedatives"
    ],
    researchStudies: [
      {
        title: "Brahmi and cognitive enhancement",
        link: "#",
        findings: "Regular consumption showed significant improvement in memory retention and recall ability."
      }
    ],
    season: "All seasons",
    remedies: [
      {
        name: "Brahmi Ghee",
        ingredients: ["2 tbsp Brahmi powder or paste", "1 cup ghee"],
        preparation: "Heat ghee, add Brahmi, simmer on low heat for 15 minutes. Strain and store. Take 1 tsp daily."
      }
    ]
  },
  {
    id: 5,
    name: "Triphala",
    scientificName: "Combination of three fruits",
    ayurvedicName: "Triphala",
    image: "https://images.unsplash.com/photo-1546714875-1701448d2642",
    description: "A traditional Ayurvedic herbal formulation consisting of three fruits: Amalaki, Bibhitaki, and Haritaki.",
    benefits: ["Digestive health", "Detoxification", "Eye health", "Natural laxative"],
    properties: {
      rasa: ["Astringent", "Sour", "Sweet", "Bitter", "Pungent"],
      virya: "Neutral",
      vipaka: "Sweet",
      doshaEffect: {
        vata: "Balances",
        pitta: "Balances",
        kapha: "Balances"
      }
    },
    uses: [
      "Digestive disorders",
      "Cleansing and detoxification",
      "Eye wash for conjunctivitis",
      "Oral health"
    ],
    contraindications: [
      "Pregnancy and breastfeeding (consult practitioner)",
      "Diarrhea",
      "May interact with certain medications"
    ],
    researchStudies: [
      {
        title: "Triphala as a colon cleanser",
        link: "#",
        findings: "Regular use of Triphala improved bowel movements and reduced symptoms of constipation."
      }
    ],
    season: "All seasons",
    remedies: [
      {
        name: "Triphala Tea",
        ingredients: ["1 tsp Triphala powder", "1 cup hot water"],
        preparation: "Add Triphala to hot water, steep for 10 minutes, and strain. Drink before bed."
      }
    ]
  },
  {
    id: 6,
    name: "Ginger",
    scientificName: "Zingiber officinale",
    ayurvedicName: "Adrak",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    description: "A warming herb used in Ayurvedic medicine to improve digestion and reduce inflammation.",
    benefits: ["Digestive aid", "Anti-inflammatory", "Immune booster", "Reduces nausea"],
    properties: {
      rasa: ["Pungent", "Sweet"],
      virya: "Heating",
      vipaka: "Sweet",
      doshaEffect: {
        vata: "Balances",
        pitta: "Increases (in excess)",
        kapha: "Balances"
      }
    },
    uses: [
      "Digestive disorders",
      "Cold and flu",
      "Nausea and motion sickness",
      "Joint pain"
    ],
    contraindications: [
      "High doses during pregnancy (small amounts are safe)",
      "Gallstones",
      "Blood-thinning medications"
    ],
    researchStudies: [
      {
        title: "Ginger effects on nausea and vomiting",
        link: "#",
        findings: "Significant reduction in severity and duration of nausea in study participants."
      }
    ],
    season: "Winter and rainy season",
    remedies: [
      {
        name: "Ginger Tea",
        ingredients: ["1-inch fresh ginger", "1 cup water", "Lemon and honey to taste"],
        preparation: "Boil water with sliced ginger for 10 minutes. Add lemon and honey after straining."
      }
    ]
  }
];

const PlantProperties = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [filteredPlants, setFilteredPlants] = useState(plants);
  const [filters, setFilters] = useState({
    rasa: "",
    virya: "",
    vipaka: "",
    dosha: ""
  });

  // Filter plants based on search and filters
  useEffect(() => {
    let result = plants;
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((plant) => 
        plant.name.toLowerCase().includes(query) || 
        plant.scientificName.toLowerCase().includes(query) ||
        plant.ayurvedicName.toLowerCase().includes(query)
      );
    }
    
    // Apply Rasa filter
    if (filters.rasa) {
      result = result.filter((plant) => 
        plant.properties.rasa.includes(filters.rasa)
      );
    }
    
    // Apply Virya filter
    if (filters.virya) {
      result = result.filter((plant) => 
        plant.properties.virya === filters.virya
      );
    }
    
    // Apply Vipaka filter
    if (filters.vipaka) {
      result = result.filter((plant) => 
        plant.properties.vipaka === filters.vipaka
      );
    }
    
    // Apply Dosha filter
    if (filters.dosha) {
      result = result.filter((plant) => {
        if (filters.dosha === "Vata") return plant.properties.doshaEffect.vata.includes("Balances");
        if (filters.dosha === "Pitta") return plant.properties.doshaEffect.pitta.includes("Balances");
        if (filters.dosha === "Kapha") return plant.properties.doshaEffect.kapha.includes("Balances");
        return true;
      });
    }
    
    setFilteredPlants(result);
  }, [searchQuery, filters]);

  // Reset filters
  const resetFilters = () => {
    setFilters({
      rasa: "",
      virya: "",
      vipaka: "",
      dosha: ""
    });
    setSearchQuery("");
  };

  // Close plant dialog
  const closePlantDialog = () => {
    setSelectedPlant(null);
  };

  const suitablePlants = [
    {
      dosha: "Vata",
      plants: plants.filter(p => p.properties.doshaEffect.vata.includes("Balances"))
    },
    {
      dosha: "Pitta",
      plants: plants.filter(p => p.properties.doshaEffect.pitta.includes("Balances"))
    },
    {
      dosha: "Kapha",
      plants: plants.filter(p => p.properties.doshaEffect.kapha.includes("Balances"))
    }
  ];

  const rasaOptions = ["Sweet", "Sour", "Salty", "Bitter", "Pungent", "Astringent"];
  const viryaOptions = ["Heating", "Cooling"];
  const vipakaOptions = ["Sweet", "Sour", "Pungent"];
  const doshaOptions = ["Vata", "Pitta", "Kapha"];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 to-background"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-xl animate-fade-up">
                Ayurvedic Plant Database
              </h1>
              <p className="mt-6 text-xl animate-fade-up" style={{ animationDelay: "200ms" }}>
                Explore the healing properties of medicinal plants and herbs used in Ayurvedic medicine,
                classified by their traditional properties and doshas they balance.
              </p>
            </div>
          </div>
        </section>

        {/* Plant Database Section */}
        <section>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search plants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <Button
                  variant={showFilters ? "default" : "outline"}
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>
                
                {(filters.rasa || filters.virya || filters.vipaka || filters.dosha) && (
                  <Button variant="ghost" onClick={resetFilters}>
                    <X className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                )}
              </div>
            </div>
            
            {/* Filters */}
            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div>
                  <p className="text-sm font-medium mb-2">Rasa (Taste)</p>
                  <Select 
                    value={filters.rasa}
                    onValueChange={(value) => setFilters({...filters, rasa: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select taste" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All</SelectItem>
                      {rasaOptions.map((rasa) => (
                        <SelectItem key={rasa} value={rasa}>{rasa}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Virya (Potency)</p>
                  <Select 
                    value={filters.virya}
                    onValueChange={(value) => setFilters({...filters, virya: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select potency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All</SelectItem>
                      {viryaOptions.map((virya) => (
                        <SelectItem key={virya} value={virya}>{virya}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Vipaka (Post-digestive)</p>
                  <Select 
                    value={filters.vipaka}
                    onValueChange={(value) => setFilters({...filters, vipaka: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select post-digestive effect" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All</SelectItem>
                      {vipakaOptions.map((vipaka) => (
                        <SelectItem key={vipaka} value={vipaka}>{vipaka}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Dosha Balance</p>
                  <Select 
                    value={filters.dosha}
                    onValueChange={(value) => setFilters({...filters, dosha: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select dosha" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All</SelectItem>
                      {doshaOptions.map((dosha) => (
                        <SelectItem key={dosha} value={dosha}>{dosha}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
            
            {/* Plant Grid */}
            {filteredPlants.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlants.map((plant) => (
                  <AnimatedCard
                    key={plant.id}
                    title={plant.name}
                    description={`${plant.scientificName} • ${plant.ayurvedicName}`}
                    imageSrc={plant.image}
                    onClick={() => setSelectedPlant(plant)}
                    badge={plant.properties.doshaEffect.vata.includes("Balances") && 
                          plant.properties.doshaEffect.pitta.includes("Balances") && 
                          plant.properties.doshaEffect.kapha.includes("Balances") ? "Tridoshic" : null}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No plants found matching your criteria. Try adjusting your filters.</p>
                <Button className="mt-4" onClick={resetFilters}>Reset Filters</Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Personalized Recommendations */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="heading-lg">Dosha-Specific Plant Recommendations</h2>
              <p className="mt-4 text-muted-foreground">
                Discover herbs and plants that can help balance your dominant dosha.
              </p>
            </div>
            
            <Tabs defaultValue="vata">
              <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
                <TabsTrigger value="vata">Vata</TabsTrigger>
                <TabsTrigger value="pitta">Pitta</TabsTrigger>
                <TabsTrigger value="kapha">Kapha</TabsTrigger>
              </TabsList>
              
              {suitablePlants.map((item) => (
                <TabsContent key={item.dosha.toLowerCase()} value={item.dosha.toLowerCase()} className="mt-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {item.plants.slice(0, 6).map((plant) => (
                      <div 
                        key={plant.id} 
                        className="flex items-center"
                        onClick={() => setSelectedPlant(plant)}
                      >
                        <Leaf className="h-3 w-3 mr-2 text-primary" />
                        <span className="hover:text-primary cursor-pointer">{plant.name}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Seasonal Guidance */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="heading-lg text-center">Seasonal Herb Guide</h2>
              <p className="mt-4 text-muted-foreground text-center mb-8">
                Adapt your herbal regimen according to seasonal changes for optimal balance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center mb-4">
                    <Flame className="h-8 w-8 text-orange-500 mr-3" />
                    <h3 className="text-xl font-serif font-medium">Summer (Pitta Season)</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Leaf className="h-3 w-3 mr-2 text-primary" />
                      <span>Cooling herbs like Aloe Vera</span>
                    </li>
                    <li className="flex items-center">
                      <Leaf className="h-3 w-3 mr-2 text-primary" />
                      <span>Rose and Jasmine</span>
                    </li>
                    <li className="flex items-center">
                      <Leaf className="h-3 w-3 mr-2 text-primary" />
                      <span>Sweet and bitter tastes</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center mb-4">
                    <Droplets className="h-8 w-8 text-blue-500 mr-3" />
                    <h3 className="text-xl font-serif font-medium">Monsoon (Vata-Pitta)</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Leaf className="h-3 w-3 mr-2 text-primary" />
                      <span>Ginger and Tulsi</span>
                    </li>
                    <li className="flex items-center">
                      <Leaf className="h-3 w-3 mr-2 text-primary" />
                      <span>Turmeric for immunity</span>
                    </li>
                    <li className="flex items-center">
                      <Leaf className="h-3 w-3 mr-2 text-primary" />
                      <span>Warming spices</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center mb-4">
                    <Snowflake className="h-8 w-8 text-sky-500 mr-3" />
                    <h3 className="text-xl font-serif font-medium">Winter (Vata Season)</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Leaf className="h-3 w-3 mr-2 text-primary" />
                      <span>Warming herbs like Ashwagandha</span>
                    </li>
                    <li className="flex items-center">
                      <Leaf className="h-3 w-3 mr-2 text-primary" />
                      <span>Cinnamon and Cardamom</span>
                    </li>
                    <li className="flex items-center">
                      <Leaf className="h-3 w-3 mr-2 text-primary" />
                      <span>Sesame oil based remedies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Home Remedies */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="heading-lg text-center">Common Ayurvedic Remedies</h2>
              <p className="mt-4 text-muted-foreground text-center mb-8">
                Simple herbal preparations you can make at home for everyday wellness.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center mb-4">
                    <Coffee className="h-6 w-6 text-amber-700 mr-3" />
                    <h3 className="text-xl font-serif font-medium">Golden Milk</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    A soothing bedtime drink that promotes relaxation and joint health.
                  </p>
                  <div>
                    <h4 className="font-medium mb-2">Ingredients:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>1 cup milk (dairy or plant-based)</li>
                      <li>1/2 teaspoon turmeric powder</li>
                      <li>Pinch of black pepper</li>
                      <li>1/4 teaspoon cinnamon</li>
                      <li>Honey to taste</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center mb-4">
                    <FlaskConical className="h-6 w-6 text-emerald-600 mr-3" />
                    <h3 className="text-xl font-serif font-medium">Digestive CCF Tea</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    A classic Ayurvedic blend that supports healthy digestion and metabolism.
                  </p>
                  <div>
                    <h4 className="font-medium mb-2">Ingredients:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>1/3 teaspoon cumin seeds</li>
                      <li>1/3 teaspoon coriander seeds</li>
                      <li>1/3 teaspoon fennel seeds</li>
                      <li>1 cup boiling water</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center mb-4">
                    <Fingerprint className="h-6 w-6 text-indigo-500 mr-3" />
                    <h3 className="text-xl font-serif font-medium">Brahmi Hair Oil</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Nourishes hair and scalp while calming the mind.
                  </p>
                  <div>
                    <h4 className="font-medium mb-2">Ingredients:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>2 tablespoons dried Brahmi leaves</li>
                      <li>1 cup coconut oil</li>
                      <li>Few curry leaves (optional)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-6 w-6 text-rose-500 mr-3" />
                    <h3 className="text-xl font-serif font-medium">Triphala Water</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    A gentle overnight detox and digestive support.
                  </p>
                  <div>
                    <h4 className="font-medium mb-2">Ingredients:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>1/2 teaspoon Triphala powder</li>
                      <li>1 cup room temperature water</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Plant Detail Dialog */}
        <Dialog open={!!selectedPlant} onOpenChange={(open) => !open && closePlantDialog()}>
          <DialogContent className="max-h-screen overflow-y-auto sm:max-w-3xl">
            {selectedPlant && (
              <>
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl">{selectedPlant.name}</DialogTitle>
                  <DialogDescription className="text-base opacity-90">
                    {selectedPlant.scientificName} • {selectedPlant.ayurvedicName}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-6">
                  <div className="aspect-video w-full rounded-lg overflow-hidden mb-6">
                    <img 
                      src={selectedPlant.image} 
                      alt={selectedPlant.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{selectedPlant.description}</p>
                  
                  <Tabs defaultValue="properties">
                    <TabsList className="w-full">
                      <TabsTrigger value="properties" className="flex-1">
                        <Fingerprint className="mr-2 h-4 w-4" />
                        Properties
                      </TabsTrigger>
                      <TabsTrigger value="uses" className="flex-1">
                        <BookText className="mr-2 h-4 w-4" />
                        Uses
                      </TabsTrigger>
                      <TabsTrigger value="research" className="flex-1">
                        <FlaskConical className="mr-2 h-4 w-4" />
                        Research
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="properties" className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-2">Ayurvedic Properties</h4>
                          <ul className="space-y-2">
                            <li>
                              <span className="font-medium">Rasa (Taste):</span>{" "}
                              {selectedPlant.properties.rasa.join(", ")}
                            </li>
                            <li>
                              <span className="font-medium">Virya (Potency):</span>{" "}
                              {selectedPlant.properties.virya}
                            </li>
                            <li>
                              <span className="font-medium">Vipaka (Post-digestive):</span>{" "}
                              {selectedPlant.properties.vipaka}
                            </li>
                          </ul>
                          
                          <h4 className="font-medium mt-4 mb-2">Dosha Effects</h4>
                          <ul className="space-y-2">
                            <li>
                              <span className="font-medium">Vata:</span>{" "}
                              {selectedPlant.properties.doshaEffect.vata}
                            </li>
                            <li>
                              <span className="font-medium">Pitta:</span>{" "}
                              {selectedPlant.properties.doshaEffect.pitta}
                            </li>
                            <li>
                              <span className="font-medium">Kapha:</span>{" "}
                              {selectedPlant.properties.doshaEffect.kapha}
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Benefits</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {selectedPlant.benefits.map((benefit) => (
                              <li key={benefit}>{benefit}</li>
                            ))}
                          </ul>
                          
                          {selectedPlant.contraindications && (
                            <>
                              <h4 className="font-medium mt-4 mb-2">Cautions & Contraindications</h4>
                              <ul className="list-disc pl-5 space-y-1 text-amber-700 dark:text-amber-500">
                                {selectedPlant.contraindications.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="uses" className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-2">Common Uses</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {selectedPlant.uses.map((use) => (
                              <li key={use}>{use}</li>
                            ))}
                          </ul>
                          
                          <h4 className="font-medium mt-4 mb-2">Seasonal Usage</h4>
                          <p>{selectedPlant.season}</p>
                        </div>
                        
                        <div>
                          {selectedPlant.remedies && selectedPlant.remedies.length > 0 && (
                            <>
                              <h4 className="font-medium mb-2">Remedies</h4>
                              {selectedPlant.remedies.map((remedy) => (
                                <div key={remedy.name} className="mb-4">
                                  <p className="font-medium text-sm">{remedy.name}</p>
                                  <p className="text-sm text-muted-foreground mb-1">Ingredients:</p>
                                  <ul className="list-disc pl-5 space-y-1 text-sm">
                                    {remedy.ingredients.map((item, i) => (
                                      <li key={i}>{item}</li>
                                    ))}
                                  </ul>
                                  <p className="text-sm text-muted-foreground mt-2 mb-1">Preparation:</p>
                                  <p className="text-sm">{remedy.preparation}</p>
                                </div>
                              ))}
                            </>
                          )}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="research" className="pt-6">
                      {selectedPlant.researchStudies && selectedPlant.researchStudies.length > 0 ? (
                        <div>
                          <h4 className="font-medium mb-4">Research Studies</h4>
                          {selectedPlant.researchStudies.map((study) => (
                            <div key={study.title} className="mb-6 p-4 bg-muted rounded-lg">
                              <h5 className="font-medium">{study.title}</h5>
                              <p className="mt-2 text-muted-foreground">{study.findings}</p>
                              <a href={study.link} className="text-primary text-sm mt-2 inline-block">
                                Read more →
                              </a>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground italic">
                          Research information is currently being compiled for this plant.
                        </p>
                      )}
                    </TabsContent>
                  </Tabs>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </PageTransition>
  );
};

export default PlantProperties;
