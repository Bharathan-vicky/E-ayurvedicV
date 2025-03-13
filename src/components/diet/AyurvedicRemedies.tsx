
import { useState } from "react";
import { Sun, Moon, Clock, Coffee, Droplets, Heart, Leaf, Activity } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import AnimatedCard from "@/components/ui-custom/AnimatedCard";

// Lifestyle recommendations based on Ayurvedic principles
const lifestyleData = {
  Vata: {
    morning: [
      {
        title: "Rise Early",
        description: "Wake up before 6 am to align with nature's rhythms.",
        icon: <Sun size={20} className="text-amber-500" />,
      },
      {
        title: "Oil Massage",
        description: "Self-massage with warm sesame oil to ground vata energy.",
        icon: <Droplets size={20} className="text-amber-500" />,
      },
      {
        title: "Warm Water",
        description: "Drink warm water with ginger to stimulate digestion.",
        icon: <Coffee size={20} className="text-amber-500" />,
      },
    ],
    routines: [
      {
        title: "Regular Meals",
        description: "Eat at the same times each day to establish rhythm.",
        icon: <Clock size={20} className="text-amber-500" />,
      },
      {
        title: "Gentle Exercise",
        description: "Practice yoga, tai chi, or walking in nature.",
        icon: <Activity size={20} className="text-amber-500" />,
      },
      {
        title: "Meditation",
        description: "Regular meditation to calm an active mind.",
        icon: <Heart size={20} className="text-amber-500" />,
      },
    ],
    evening: [
      {
        title: "Early Dinner",
        description: "Eat dinner by 6-7 pm, keeping it light and warm.",
        icon: <Moon size={20} className="text-amber-500" />,
      },
      {
        title: "Herbal Tea",
        description: "Drink calming tea with ashwagandha or chamomile.",
        icon: <Leaf size={20} className="text-amber-500" />,
      },
      {
        title: "Early Sleep",
        description: "Be in bed by 10 pm for restorative sleep.",
        icon: <Moon size={20} className="text-amber-500" />,
      },
    ],
    remedies: [
      {
        title: "Ginger Tea",
        description: "For digestive issues and bloating, drink warm ginger tea with honey.",
        imageSrc: "https://images.unsplash.com/photo-1608376795250-a2a1b8eb40ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        title: "Sesame Oil Massage",
        description: "For joint pain and dry skin, warm sesame oil massage before bathing.",
        imageSrc: "https://images.unsplash.com/photo-1620733723572-11c53f73a416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        title: "Triphala",
        description: "For constipation, take Triphala powder with warm water before bed.",
        imageSrc: "https://images.unsplash.com/photo-1652548339852-69f8c0808b5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
    ],
  },
  Pitta: {
    morning: [
      {
        title: "Rise Early",
        description: "Wake up by 6 am, before the pitta time of day begins.",
        icon: <Sun size={20} className="text-blue-500" />,
      },
      {
        title: "Cool Water",
        description: "Splash eyes with cool water to reduce pitta inflammation.",
        icon: <Droplets size={20} className="text-blue-500" />,
      },
      {
        title: "Coconut Water",
        description: "Drink room temperature coconut water for hydration.",
        icon: <Coffee size={20} className="text-blue-500" />,
      },
    ],
    routines: [
      {
        title: "Moderate Exercise",
        description: "Exercise during cooler times of day, avoid midday sun.",
        icon: <Activity size={20} className="text-blue-500" />,
      },
      {
        title: "Nature Time",
        description: "Spend time near water or in cooler natural environments.",
        icon: <Leaf size={20} className="text-blue-500" />,
      },
      {
        title: "Cooling Breath",
        description: "Practice sitali (cooling breath) pranayama.",
        icon: <Heart size={20} className="text-blue-500" />,
      },
    ],
    evening: [
      {
        title: "Moonlight Walk",
        description: "Take a leisurely walk in the moonlight to cool pitta.",
        icon: <Moon size={20} className="text-blue-500" />,
      },
      {
        title: "Cooling Herbs",
        description: "Drink tea with mint, coriander, or fennel to cool the system.",
        icon: <Leaf size={20} className="text-blue-500" />,
      },
      {
        title: "Moderate Sleep",
        description: "Sleep 7-8 hours, going to bed by 10-11 pm.",
        icon: <Moon size={20} className="text-blue-500" />,
      },
    ],
    remedies: [
      {
        title: "Aloe Vera Juice",
        description: "For acidity and inflammation, drink 2 tablespoons of aloe vera juice.",
        imageSrc: "https://images.unsplash.com/photo-1577172249844-716749254893?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        title: "Cooling Face Mask",
        description: "For skin inflammation, apply cucumber and sandalwood paste.",
        imageSrc: "https://images.unsplash.com/photo-1595133403068-2e1b1a9b6153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        title: "Cilantro Juice",
        description: "For cleansing pitta toxins, drink fresh cilantro juice in the morning.",
        imageSrc: "https://images.unsplash.com/photo-1589421335394-e114d273e4c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
    ],
  },
  Kapha: {
    morning: [
      {
        title: "Rise Early",
        description: "Wake up by 5-6 am to avoid kapha stagnation.",
        icon: <Sun size={20} className="text-green-500" />,
      },
      {
        title: "Dry Brushing",
        description: "Use a dry brush on skin to stimulate circulation.",
        icon: <Activity size={20} className="text-green-500" />,
      },
      {
        title: "Warm Lemon Water",
        description: "Drink warm water with lemon and honey on an empty stomach.",
        icon: <Coffee size={20} className="text-green-500" />,
      },
    ],
    routines: [
      {
        title: "Vigorous Exercise",
        description: "Engage in stimulating exercise daily to move kapha energy.",
        icon: <Activity size={20} className="text-green-500" />,
      },
      {
        title: "Varied Routine",
        description: "Introduce variety and new activities to prevent stagnation.",
        icon: <Clock size={20} className="text-green-500" />,
      },
      {
        title: "Energizing Breath",
        description: "Practice kapalabhati (skull-shining breath) pranayama.",
        icon: <Heart size={20} className="text-green-500" />,
      },
    ],
    evening: [
      {
        title: "Light Dinner",
        description: "Eat a light dinner by 6 pm, avoiding heavy foods.",
        icon: <Moon size={20} className="text-green-500" />,
      },
      {
        title: "Stimulating Tea",
        description: "Drink ginger or cinnamon tea to boost metabolism.",
        icon: <Leaf size={20} className="text-green-500" />,
      },
      {
        title: "Moderate Sleep",
        description: "Sleep 6-7 hours, avoiding oversleeping in the morning.",
        icon: <Moon size={20} className="text-green-500" />,
      },
    ],
    remedies: [
      {
        title: "Honey and Ginger",
        description: "For congestion, mix 1 tsp honey with ginger juice and take in the morning.",
        imageSrc: "https://images.unsplash.com/photo-1612114982851-07ae3fa6315d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        title: "Dry Sauna",
        description: "For water retention, use a dry sauna followed by cool shower.",
        imageSrc: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        title: "Trikatu",
        description: "For sluggish digestion, take Trikatu powder before meals.",
        imageSrc: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
    ],
  },
};

interface AyurvedicRemediesProps {
  selectedDosha: string | null;
}

const AyurvedicRemedies = ({ selectedDosha }: AyurvedicRemediesProps) => {
  const [activeTab, setActiveTab] = useState("dinacharya");
  
  const dosha = selectedDosha || "Vata";
  const remediesData = lifestyleData[dosha as keyof typeof lifestyleData];

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm animate-fade-up">
      <h3 className="font-medium text-lg mb-6">Ayurvedic Remedies & Lifestyle Tips</h3>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="dinacharya" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Daily Routine</span>
          </TabsTrigger>
          <TabsTrigger value="remedies" className="flex items-center gap-2">
            <Leaf className="h-4 w-4" />
            <span>Home Remedies</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="dinacharya">
          <div className="space-y-8">
            <div>
              <h4 className="font-medium flex items-center gap-2 mb-4">
                <Sun className="h-5 w-5 text-amber-500" />
                Morning Routine
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {remediesData.morning.map((item, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      {item.icon}
                      <h5 className="font-medium">{item.title}</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium flex items-center gap-2 mb-4">
                <Activity className="h-5 w-5 text-primary" />
                Daily Practices
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {remediesData.routines.map((item, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      {item.icon}
                      <h5 className="font-medium">{item.title}</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium flex items-center gap-2 mb-4">
                <Moon className="h-5 w-5 text-indigo-400" />
                Evening Routine
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {remediesData.evening.map((item, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      {item.icon}
                      <h5 className="font-medium">{item.title}</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <Button variant="outline" className="mt-4">
                Download Complete Dinacharya Guide
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="remedies">
          <div className="space-y-6">
            <h4 className="font-medium flex items-center gap-2 mb-4">
              <Leaf className="h-5 w-5 text-green-500" />
              Home Remedies for {dosha} Types
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {remediesData.remedies.map((remedy, index) => (
                <AnimatedCard
                  key={index}
                  title={remedy.title}
                  description={remedy.description}
                  icon={<Leaf size={20} className="text-green-500" />}
                  imageSrc={remedy.imageSrc}
                  delay={index * 100}
                  imageReveal={true}
                />
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" className="mt-4">
                View All Ayurvedic Remedies
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AyurvedicRemedies;
