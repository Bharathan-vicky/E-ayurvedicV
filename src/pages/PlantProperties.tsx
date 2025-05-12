
import { useEffect, useState } from "react";
import PageTransition from "@/components/ui-custom/PageTransition";
import PlantFilters from "@/components/plants/PlantFilters";
import PlantGrid from "@/components/plants/PlantGrid";
import DoshaRecommendations from "@/components/plants/DoshaRecommendations";
import SeasonalGuide from "@/components/plants/SeasonalGuide";
import CommonRemedies from "@/components/plants/CommonRemedies";
import PlantDetail from "@/components/plants/PlantDetail";
import { plants } from "@/components/plants/PlantData";

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
            <PlantFilters 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              filters={filters}
              setFilters={setFilters}
              resetFilters={resetFilters}
              showFilters={showFilters}
              setShowFilters={setShowFilters}
            />
            
            <PlantGrid 
              plants={filteredPlants} 
              resetFilters={resetFilters} 
              onSelectPlant={setSelectedPlant} 
            />
          </div>
        </section>
        
        {/* Personalized Recommendations */}
        <DoshaRecommendations 
          suitablePlants={suitablePlants} 
          onSelectPlant={setSelectedPlant} 
        />

        {/* Seasonal Guidance */}
        <SeasonalGuide />
        
        {/* Home Remedies */}
        <CommonRemedies />
        
        {/* Plant Detail Dialog */}
        <PlantDetail 
          plant={selectedPlant} 
          open={!!selectedPlant} 
          onOpenChange={(open) => !open && closePlantDialog()} 
        />
      </div>
    </PageTransition>
  );
};

export default PlantProperties;
