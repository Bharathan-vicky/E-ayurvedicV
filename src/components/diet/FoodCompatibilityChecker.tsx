
import { useState, useMemo } from "react";
import { Search, Check, X, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Food compatibility data based on Ayurvedic principles
const foodDatabase = [
  {
    name: "Almonds",
    category: "Nuts",
    vata: "favorable",
    pitta: "unfavorable",
    kapha: "neutral",
    properties: "Heavy, Sweet, Oily, Warming",
    benefits: "Strengthens the nervous system, improves brain function",
  },
  {
    name: "Avocado",
    category: "Fruits",
    vata: "favorable",
    pitta: "neutral",
    kapha: "unfavorable",
    properties: "Heavy, Sweet, Oily, Cooling",
    benefits: "Nourishes tissues, supports heart health",
  },
  {
    name: "Basmati Rice",
    category: "Grains",
    vata: "favorable",
    pitta: "favorable",
    kapha: "neutral",
    properties: "Light, Sweet, Cooling",
    benefits: "Easy to digest, balancing for all doshas",
  },
  {
    name: "Beetroot",
    category: "Vegetables",
    vata: "neutral",
    pitta: "favorable",
    kapha: "favorable",
    properties: "Sweet, Heating",
    benefits: "Supports blood health, cleanses the liver",
  },
  {
    name: "Bitter Gourd",
    category: "Vegetables",
    vata: "unfavorable",
    pitta: "favorable",
    kapha: "favorable",
    properties: "Light, Bitter, Cooling",
    benefits: "Reduces blood sugar, purifies blood",
  },
  {
    name: "Black Pepper",
    category: "Spices",
    vata: "unfavorable",
    pitta: "unfavorable",
    kapha: "favorable",
    properties: "Light, Pungent, Heating",
    benefits: "Improves digestion, clears congestion",
  },
  {
    name: "Broccoli",
    category: "Vegetables",
    vata: "neutral",
    pitta: "favorable",
    kapha: "favorable",
    properties: "Light, Bitter, Astringent, Cooling",
    benefits: "Supports detoxification, rich in nutrients",
  },
  {
    name: "Cardamom",
    category: "Spices",
    vata: "favorable",
    pitta: "favorable",
    kapha: "favorable",
    properties: "Light, Sweet, Warming",
    benefits: "Digestive aid, refreshes breath, balances all doshas",
  },
  {
    name: "Chicken",
    category: "Meat",
    vata: "favorable",
    pitta: "neutral",
    kapha: "unfavorable",
    properties: "Light, Sweet, Heating",
    benefits: "Builds strength, good protein source",
  },
  {
    name: "Cinnamon",
    category: "Spices",
    vata: "favorable",
    pitta: "neutral",
    kapha: "favorable",
    properties: "Light, Sweet, Pungent, Heating",
    benefits: "Improves circulation, regulates blood sugar",
  },
  {
    name: "Coconut",
    category: "Nuts",
    vata: "favorable",
    pitta: "favorable",
    kapha: "unfavorable",
    properties: "Heavy, Sweet, Cooling",
    benefits: "Nourishing, cooling for pitta, moistening for vata",
  },
  {
    name: "Cucumber",
    category: "Vegetables",
    vata: "unfavorable",
    pitta: "favorable",
    kapha: "neutral",
    properties: "Heavy, Sweet, Cooling",
    benefits: "Hydrating, cooling, reduces inflammation",
  },
  {
    name: "Cumin",
    category: "Spices",
    vata: "favorable",
    pitta: "favorable",
    kapha: "favorable",
    properties: "Light, Pungent, Cooling",
    benefits: "Digestive aid, reduces gas, balances all doshas",
  },
  {
    name: "Ghee",
    category: "Oils",
    vata: "favorable",
    pitta: "favorable",
    kapha: "neutral",
    properties: "Heavy, Sweet, Cooling",
    benefits: "Improves digestion, nourishes tissues, carrier for herbs",
  },
  {
    name: "Ginger",
    category: "Spices",
    vata: "favorable",
    pitta: "neutral",
    kapha: "favorable",
    properties: "Light, Pungent, Heating",
    benefits: "Improves digestion, reduces inflammation",
  },
  {
    name: "Honey",
    category: "Sweeteners",
    vata: "favorable",
    pitta: "neutral",
    kapha: "favorable",
    properties: "Light, Sweet, Astringent, Heating",
    benefits: "Detoxifying, antibacterial, scrapes fat from tissues",
  },
  {
    name: "Lentils",
    category: "Legumes",
    vata: "neutral",
    pitta: "favorable",
    kapha: "favorable",
    properties: "Light, Sweet, Astringent, Cooling",
    benefits: "Good protein source, supports steady energy",
  },
  {
    name: "Mango",
    category: "Fruits",
    vata: "favorable",
    pitta: "unfavorable",
    kapha: "unfavorable",
    properties: "Heavy, Sweet, Sour, Heating",
    benefits: "Nourishing, improves complexion",
  },
  {
    name: "Milk",
    category: "Dairy",
    vata: "favorable",
    pitta: "favorable",
    kapha: "unfavorable",
    properties: "Heavy, Sweet, Cooling",
    benefits: "Nourishing, promotes tissue growth, calming",
  },
  {
    name: "Turmeric",
    category: "Spices",
    vata: "favorable",
    pitta: "favorable",
    kapha: "favorable",
    properties: "Light, Bitter, Astringent, Heating",
    benefits: "Anti-inflammatory, purifies blood, balances all doshas",
  },
];

const categories = [...new Set(foodDatabase.map(item => item.category))];

interface FoodCompatibilityCheckerProps {
  selectedDosha: string | null;
}

const FoodCompatibilityChecker = ({ selectedDosha }: FoodCompatibilityCheckerProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("search");
  
  const filteredFoods = useMemo(() => {
    let filtered = foodDatabase;
    
    if (searchTerm) {
      filtered = filtered.filter(food => 
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory) {
      filtered = filtered.filter(food => food.category === selectedCategory);
    }
    
    return filtered;
  }, [searchTerm, selectedCategory]);

  const getFoodCompatibility = (compatibility: string) => {
    switch (compatibility) {
      case "favorable":
        return <span className="flex items-center gap-1 text-green-500"><Check className="h-4 w-4" /> Favorable</span>;
      case "unfavorable":
        return <span className="flex items-center gap-1 text-red-500"><X className="h-4 w-4" /> Unfavorable</span>;
      default:
        return <span className="flex items-center gap-1 text-amber-500"><Info className="h-4 w-4" /> Neutral</span>;
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm animate-fade-up">
      <h3 className="font-medium text-lg mb-6">Food Compatibility Checker</h3>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="search">Search Foods</TabsTrigger>
          <TabsTrigger value="browse">Browse Categories</TabsTrigger>
        </TabsList>
        
        <TabsContent value="search">
          <div className="flex gap-2 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search foods..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            {selectedCategory && (
              <Button 
                variant="outline" 
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-1"
              >
                {selectedCategory}
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="browse">
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Food</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Properties</TableHead>
              {selectedDosha && <TableHead>Compatibility</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredFoods.length > 0 ? (
              filteredFoods.map((food) => (
                <TableRow key={food.name} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{food.name}</TableCell>
                  <TableCell>{food.category}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{food.properties}</div>
                      <div className="text-muted-foreground text-xs mt-1">{food.benefits}</div>
                    </div>
                  </TableCell>
                  {selectedDosha && (
                    <TableCell>
                      {getFoodCompatibility(food[selectedDosha.toLowerCase() as keyof typeof food] as string)}
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={selectedDosha ? 4 : 3} className="text-center py-4 text-muted-foreground">
                  No foods found. Try another search term.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default FoodCompatibilityChecker;
