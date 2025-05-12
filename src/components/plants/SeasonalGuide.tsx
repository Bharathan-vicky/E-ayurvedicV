
import { Flame, Droplets, Snowflake, Leaf } from "lucide-react";

const SeasonalGuide = () => {
  return (
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
  );
};

export default SeasonalGuide;
