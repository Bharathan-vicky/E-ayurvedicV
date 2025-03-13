
import PageTransition from "@/components/ui-custom/PageTransition";
import AnimatedCard from "@/components/ui-custom/AnimatedCard";
import { Leaf, Search, Filter, Info, Droplet, Pill, BookOpen, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PlantProperties = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProperty, setActiveProperty] = useState("All");
  const [selectedPlant, setSelectedPlant] = useState<any>(null);

  const plants = [
    {
      name: "Ashwagandha",
      scientificName: "Withania somnifera",
      properties: ["Adaptogen", "Stress Relief", "Immune Support"],
      description: "Known as Indian Ginseng, this powerful herb helps the body resist physiological and psychological stress.",
      imageSrc: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      doshaEffect: {
        vata: "Balancing",
        pitta: "Balancing",
        kapha: "Slightly Increasing"
      },
      taste: ["Bitter", "Sweet", "Astringent"],
      potency: "Heating",
      postDigestiveEffect: "Sweet",
      traditionalUses: [
        "Promotes vitality and longevity",
        "Supports healthy sleep patterns",
        "Helps manage stress and anxiety",
        "Supports immune function",
        "Enhances muscle strength and recovery"
      ],
      modernResearch: "Modern studies suggest ashwagandha may help reduce cortisol levels, improve memory and cognitive function, and support thyroid health."
    },
    {
      name: "Tulsi",
      scientificName: "Ocimum sanctum",
      properties: ["Adaptogen", "Respiratory Support", "Antioxidant"],
      description: "Holy Basil is revered for its ability to support respiratory health and provide antioxidant protection.",
      imageSrc: "https://images.unsplash.com/photo-1611071178439-a71cc4e71821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      doshaEffect: {
        vata: "Balancing",
        pitta: "Balancing",
        kapha: "Reducing"
      },
      taste: ["Pungent", "Bitter", "Astringent"],
      potency: "Heating",
      postDigestiveEffect: "Pungent",
      traditionalUses: [
        "Supports respiratory health",
        "Enhances meditation and spiritual practice",
        "Promotes mental clarity",
        "Supports immune function",
        "Helps purify blood and remove toxins"
      ],
      modernResearch: "Research indicates tulsi has antimicrobial, anti-inflammatory, and adaptogenic properties. It may help manage blood sugar and stress levels."
    },
    {
      name: "Brahmi",
      scientificName: "Bacopa monnieri",
      properties: ["Cognitive Support", "Memory Enhancement", "Antioxidant"],
      description: "This herb has been used for centuries to enhance memory, concentration, and cognitive function.",
      imageSrc: "https://images.unsplash.com/photo-1511994645259-581ca7021334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      doshaEffect: {
        vata: "Balancing",
        pitta: "Balancing",
        kapha: "Balancing"
      },
      taste: ["Bitter", "Astringent", "Sweet"],
      potency: "Cooling",
      postDigestiveEffect: "Sweet",
      traditionalUses: [
        "Enhances memory and intellect",
        "Supports nervous system health",
        "Promotes longevity",
        "Calms the mind and reduces anxiety",
        "Supports healthy aging of brain tissue"
      ],
      modernResearch: "Studies suggest brahmi contains compounds that may protect brain cells and improve memory formation by enhancing nerve impulse transmission."
    },
    {
      name: "Amla",
      scientificName: "Phyllanthus emblica",
      properties: ["Antioxidant", "Digestive Support", "Immune Support"],
      description: "Indian Gooseberry is one of the richest natural sources of Vitamin C, supporting immunity and digestion.",
      imageSrc: "https://images.unsplash.com/photo-1618412659753-73dbba4de502?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      doshaEffect: {
        vata: "Balancing",
        pitta: "Reducing",
        kapha: "Balancing"
      },
      taste: ["Sour", "Astringent", "Sweet", "Bitter", "Pungent"],
      potency: "Cooling",
      postDigestiveEffect: "Sweet",
      traditionalUses: [
        "Promotes healthy digestion",
        "Supports immune function",
        "Enhances skin health and appearance",
        "Supports liver function",
        "Promotes healthy eyesight"
      ],
      modernResearch: "Research shows amla has one of the highest concentrations of vitamin C of any natural food. It has strong antioxidant and anti-inflammatory properties."
    },
    {
      name: "Shatavari",
      scientificName: "Asparagus racemosus",
      properties: ["Hormonal Balance", "Reproductive Health", "Adaptogen"],
      description: "Known as the 'Queen of Herbs', it supports hormonal balance and female reproductive health.",
      imageSrc: "https://images.unsplash.com/photo-1601183380902-47f7b2ce46a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      doshaEffect: {
        vata: "Balancing",
        pitta: "Balancing",
        kapha: "Slightly Increasing"
      },
      taste: ["Sweet", "Bitter"],
      potency: "Cooling",
      postDigestiveEffect: "Sweet",
      traditionalUses: [
        "Supports female reproductive health",
        "Promotes fertility and healthy lactation",
        "Nourishes and rejuvenates tissues",
        "Supports healthy digestion",
        "Moistens dry tissues throughout the body"
      ],
      modernResearch: "Studies suggest shatavari contains phytoestrogens that may help balance hormones and support the female reproductive system."
    },
    {
      name: "Neem",
      scientificName: "Azadirachta indica",
      properties: ["Skin Health", "Antimicrobial", "Detoxification"],
      description: "Known for its powerful purifying properties, supporting skin health and natural detoxification.",
      imageSrc: "https://images.unsplash.com/photo-1511994645259-581ca7021334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      doshaEffect: {
        vata: "Increasing",
        pitta: "Balancing",
        kapha: "Reducing"
      },
      taste: ["Bitter"],
      potency: "Cooling",
      postDigestiveEffect: "Pungent",
      traditionalUses: [
        "Purifies blood and detoxifies the body",
        "Supports healthy skin and treats skin conditions",
        "Maintains healthy blood sugar levels",
        "Promotes oral health",
        "Supports healthy immune response"
      ],
      modernResearch: "Research has confirmed neem's antimicrobial, anti-inflammatory, and antiparasitic properties. It contains compounds that may help regulate blood sugar."
    },
    {
      name: "Triphala",
      scientificName: "Combination of three fruits",
      properties: ["Digestive Health", "Detoxification", "Rejuvenation"],
      description: "A traditional Ayurvedic formulation consisting of three fruits: Amalaki, Bibhitaki, and Haritaki, known for its balancing and rejuvenating effects.",
      imageSrc: "https://images.unsplash.com/photo-1611071178439-a71cc4e71821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      doshaEffect: {
        vata: "Balancing",
        pitta: "Balancing",
        kapha: "Balancing"
      },
      taste: ["Sweet", "Sour", "Pungent", "Bitter", "Astringent"],
      potency: "Neutral",
      postDigestiveEffect: "Sweet",
      traditionalUses: [
        "Promotes gentle cleansing and detoxification",
        "Supports healthy digestion and elimination",
        "Nourishes and tones the digestive tract",
        "Supports healthy eyes and vision",
        "Promotes longevity and rejuvenation"
      ],
      modernResearch: "Studies suggest triphala has antioxidant, anti-inflammatory, and prebiotic properties. It may support gut health, immune function, and oral health."
    },
    {
      name: "Guduchi",
      scientificName: "Tinospora cordifolia",
      properties: ["Immune Modulator", "Adaptogen", "Anti-inflammatory"],
      description: "Known as 'Amrita' or nectar of immortality, this powerful herb enhances immunity and promotes vitality.",
      imageSrc: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      doshaEffect: {
        vata: "Balancing",
        pitta: "Balancing",
        kapha: "Balancing"
      },
      taste: ["Bitter", "Astringent", "Sweet"],
      potency: "Heating",
      postDigestiveEffect: "Sweet",
      traditionalUses: [
        "Supports healthy immune function",
        "Promotes vitality and strength",
        "Helps manage fever and infections",
        "Supports healthy liver function",
        "Helps balance blood sugar levels"
      ],
      modernResearch: "Research indicates guduchi has immunomodulatory, antioxidant, and anti-inflammatory properties. It may help protect against various stressors."
    },
  ];

  // Get all unique properties
  const allProperties = Array.from(new Set(plants.flatMap(plant => plant.properties)));

  // Filter plants based on search query and selected property
  const filteredPlants = plants.filter(plant => {
    const matchesSearch = 
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.properties.some(prop => prop.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesProperty = 
      activeProperty === "All" || 
      plant.properties.includes(activeProperty);
    
    return matchesSearch && matchesProperty;
  });

  return (
    <PageTransition>
      <div className="min-h-screen pt-24">
        {/* Header */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 to-background"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-lg text-foreground animate-fade-up">Ayurvedic Plant Properties</h1>
              <p className="mt-6 paragraph animate-fade-up" style={{ animationDelay: "200ms" }}>
                Explore the medicinal properties of plants used in traditional Ayurvedic healing and their effects on doshas.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search plants by name, property, or description..."
                  className="w-full rounded-full border border-input bg-background px-10 py-3 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Property Filter */}
              <div className="mt-6">
                <div className="flex items-center text-sm font-medium mb-2">
                  <Filter size={16} className="mr-2 text-muted-foreground" />
                  <span>Filter by Property</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      activeProperty === "All" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                    onClick={() => setActiveProperty("All")}
                  >
                    All
                  </button>
                  {allProperties.map((property) => (
                    <button
                      key={property}
                      className={`px-3 py-1 text-xs rounded-full transition-colors ${
                        activeProperty === property 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                      onClick={() => setActiveProperty(property)}
                    >
                      {property}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Plant Detail View */}
            {selectedPlant && (
              <div className="mb-12 animate-fade-up">
                <Button 
                  variant="outline" 
                  className="mb-6"
                  onClick={() => setSelectedPlant(null)}
                >
                  ← Back to Plants
                </Button>
                
                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-md">
                  <div className="md:flex">
                    <div className="md:w-2/5 h-64 md:h-auto relative">
                      <img 
                        src={selectedPlant.imageSrc} 
                        alt={selectedPlant.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6 md:p-8">
                      <h2 className="heading-sm">{selectedPlant.name}</h2>
                      <p className="text-sm text-muted-foreground italic mb-4">{selectedPlant.scientificName}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {selectedPlant.properties.map((property) => (
                          <span 
                            key={property}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-primary"
                          >
                            {property}
                          </span>
                        ))}
                      </div>
                      
                      <p className="mb-6">{selectedPlant.description}</p>
                      
                      <Tabs defaultValue="properties" className="w-full">
                        <TabsList className="mb-4">
                          <TabsTrigger value="properties" className="flex items-center gap-1">
                            <Leaf size={14} />
                            <span>Ayurvedic Properties</span>
                          </TabsTrigger>
                          <TabsTrigger value="uses" className="flex items-center gap-1">
                            <Pill size={14} />
                            <span>Traditional Uses</span>
                          </TabsTrigger>
                          <TabsTrigger value="research" className="flex items-center gap-1">
                            <BookOpen size={14} />
                            <span>Modern Research</span>
                          </TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="properties" className="space-y-4">
                          <div>
                            <h3 className="font-medium text-sm mb-2 flex items-center">
                              <Heart size={16} className="mr-2 text-primary" />
                              Dosha Effects
                            </h3>
                            <div className="grid grid-cols-3 gap-2">
                              <div className="p-2 rounded bg-muted/50">
                                <span className="block text-xs text-muted-foreground">Vata</span>
                                <span className="font-medium">{selectedPlant.doshaEffect.vata}</span>
                              </div>
                              <div className="p-2 rounded bg-muted/50">
                                <span className="block text-xs text-muted-foreground">Pitta</span>
                                <span className="font-medium">{selectedPlant.doshaEffect.pitta}</span>
                              </div>
                              <div className="p-2 rounded bg-muted/50">
                                <span className="block text-xs text-muted-foreground">Kapha</span>
                                <span className="font-medium">{selectedPlant.doshaEffect.kapha}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="font-medium text-sm mb-2 flex items-center">
                              <Droplet size={16} className="mr-2 text-primary" />
                              Taste & Potency
                            </h3>
                            <div className="flex flex-wrap gap-1 mb-2">
                              {selectedPlant.taste.map((taste) => (
                                <span 
                                  key={taste}
                                  className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary"
                                >
                                  {taste}
                                </span>
                              ))}
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="p-2 rounded bg-muted/50">
                                <span className="block text-xs text-muted-foreground">Potency</span>
                                <span className="font-medium">{selectedPlant.potency}</span>
                              </div>
                              <div className="p-2 rounded bg-muted/50">
                                <span className="block text-xs text-muted-foreground">Post-Digestive Effect</span>
                                <span className="font-medium">{selectedPlant.postDigestiveEffect}</span>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="uses">
                          <h3 className="font-medium text-sm mb-2">Traditional Ayurvedic Uses</h3>
                          <ul className="list-disc pl-5 space-y-1">
                            {selectedPlant.traditionalUses.map((use, index) => (
                              <li key={index}>{use}</li>
                            ))}
                          </ul>
                        </TabsContent>
                        
                        <TabsContent value="research">
                          <h3 className="font-medium text-sm mb-2">Modern Research Findings</h3>
                          <p>{selectedPlant.modernResearch}</p>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Plants Grid */}
            {!selectedPlant && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPlants.length > 0 ? (
                  filteredPlants.map((plant, index) => (
                    <AnimatedCard
                      key={plant.name}
                      title={plant.name}
                      description={plant.description}
                      icon={<Leaf size={20} className="text-primary" />}
                      imageSrc={plant.imageSrc}
                      onClick={() => setSelectedPlant(plant)}
                      delay={index * 100}
                      className="cursor-pointer"
                    />
                  ))
                ) : (
                  <div className="col-span-full py-16 text-center">
                    <h3 className="heading-sm text-muted-foreground">No plants found</h3>
                    <p className="mt-2 paragraph">Try adjusting your search or filter criteria</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default PlantProperties;
