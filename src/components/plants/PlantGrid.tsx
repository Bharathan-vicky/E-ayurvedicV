
import { Button } from "@/components/ui/button";
import PlantCard from "./PlantCard";

interface PlantGridProps {
  plants: Array<{
    id: number;
    name: string;
    scientificName: string;
    ayurvedicName: string;
    image: string;
    properties: {
      doshaEffect: {
        vata: string;
        pitta: string;
        kapha: string;
      };
    };
    [key: string]: any;
  }>;
  resetFilters: () => void;
  onSelectPlant: (plant: any) => void;
}

const PlantGrid = ({ plants, resetFilters, onSelectPlant }: PlantGridProps) => {
  if (plants.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">No plants found matching your criteria. Try adjusting your filters.</p>
        <Button className="mt-4" onClick={resetFilters}>Reset Filters</Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {plants.map((plant) => (
        <PlantCard 
          key={plant.id} 
          plant={plant} 
          onClick={() => onSelectPlant(plant)} 
        />
      ))}
    </div>
  );
};

export default PlantGrid;
