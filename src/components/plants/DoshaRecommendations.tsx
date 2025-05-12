
import { Leaf } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DoshaRecommendationsProps {
  suitablePlants: Array<{
    dosha: string;
    plants: Array<{
      id: number;
      name: string;
    }>;
  }>;
  onSelectPlant: (plant: any) => void;
}

const DoshaRecommendations = ({ suitablePlants, onSelectPlant }: DoshaRecommendationsProps) => {
  return (
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
                    onClick={() => onSelectPlant(plant)}
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
  );
};

export default DoshaRecommendations;
