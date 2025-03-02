
import PageTransition from "@/components/ui-custom/PageTransition";
import AnimatedCard from "@/components/ui-custom/AnimatedCard";
import { Leaf, Search, Filter } from "lucide-react";
import { useState } from "react";

const PlantProperties = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProperty, setActiveProperty] = useState("All");

  const plants = [
    {
      name: "Ashwagandha",
      scientificName: "Withania somnifera",
      properties: ["Adaptogen", "Stress Relief", "Immune Support"],
      description: "Known as Indian Ginseng, this powerful herb helps the body resist physiological and psychological stress.",
      imageSrc: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Tulsi",
      scientificName: "Ocimum sanctum",
      properties: ["Adaptogen", "Respiratory Support", "Antioxidant"],
      description: "Holy Basil is revered for its ability to support respiratory health and provide antioxidant protection.",
      imageSrc: "https://images.unsplash.com/photo-1611071178439-a71cc4e71821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Brahmi",
      scientificName: "Bacopa monnieri",
      properties: ["Cognitive Support", "Memory Enhancement", "Antioxidant"],
      description: "This herb has been used for centuries to enhance memory, concentration, and cognitive function.",
      imageSrc: "https://images.unsplash.com/photo-1511994645259-581ca7021334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Amla",
      scientificName: "Phyllanthus emblica",
      properties: ["Antioxidant", "Digestive Support", "Immune Support"],
      description: "Indian Gooseberry is one of the richest natural sources of Vitamin C, supporting immunity and digestion.",
      imageSrc: "https://images.unsplash.com/photo-1618412659753-73dbba4de502?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Shatavari",
      scientificName: "Asparagus racemosus",
      properties: ["Hormonal Balance", "Reproductive Health", "Adaptogen"],
      description: "Known as the 'Queen of Herbs', it supports hormonal balance and female reproductive health.",
      imageSrc: "https://images.unsplash.com/photo-1601183380902-47f7b2ce46a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Neem",
      scientificName: "Azadirachta indica",
      properties: ["Skin Health", "Antimicrobial", "Detoxification"],
      description: "Known for its powerful purifying properties, supporting skin health and natural detoxification.",
      imageSrc: "https://images.unsplash.com/photo-1511994645259-581ca7021334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
  ];

  // Get all unique properties
  const allProperties = Array.from(new Set(plants.flatMap(plant => plant.properties)));

  // Filter plants based on search query and selected property
  const filteredPlants = plants.filter(plant => {
    const matchesSearch = 
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.description.toLowerCase().includes(searchQuery.toLowerCase());
    
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
              <h1 className="heading-lg text-foreground animate-fade-up">Plant Properties</h1>
              <p className="mt-6 paragraph animate-fade-up" style={{ animationDelay: "200ms" }}>
                Explore the medicinal properties of plants used in traditional Ayurvedic healing.
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
                  placeholder="Search plants by name or property..."
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

        {/* Plants Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPlants.length > 0 ? (
                filteredPlants.map((plant, index) => (
                  <div 
                    key={plant.name} 
                    className="bg-card border border-border rounded-xl overflow-hidden shadow-sm animate-fade-up transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-52">
                      <img
                        src={plant.imageSrc}
                        alt={plant.name}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-medium text-foreground">{plant.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground italic">{plant.scientificName}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {plant.properties.map((property) => (
                          <span 
                            key={property}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-primary"
                          >
                            {property}
                          </span>
                        ))}
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground">{plant.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-16 text-center">
                  <h3 className="heading-sm text-muted-foreground">No plants found</h3>
                  <p className="mt-2 paragraph">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default PlantProperties;
