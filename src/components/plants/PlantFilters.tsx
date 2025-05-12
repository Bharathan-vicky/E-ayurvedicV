
import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export interface PlantFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filters: {
    rasa: string;
    virya: string;
    vipaka: string;
    dosha: string;
  };
  setFilters: (filters: {
    rasa: string;
    virya: string;
    vipaka: string;
    dosha: string;
  }) => void;
  resetFilters: () => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

const PlantFilters = ({
  searchQuery,
  setSearchQuery,
  filters,
  setFilters,
  resetFilters,
  showFilters,
  setShowFilters
}: PlantFiltersProps) => {
  const rasaOptions = ["Sweet", "Sour", "Salty", "Bitter", "Pungent", "Astringent"];
  const viryaOptions = ["Heating", "Cooling"];
  const vipakaOptions = ["Sweet", "Sour", "Pungent"];
  const doshaOptions = ["Vata", "Pitta", "Kapha"];

  return (
    <>
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
    </>
  );
};

export default PlantFilters;
