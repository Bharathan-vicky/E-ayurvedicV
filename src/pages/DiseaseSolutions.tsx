
import PageTransition from "@/components/ui-custom/PageTransition";
import { useState } from "react";
import { Search, Heart, Leaf, Utensils, Pill } from "lucide-react";
import AnimatedCard from "@/components/ui-custom/AnimatedCard";

const DiseaseSolutions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Digestive",
    "Respiratory",
    "Immune Support",
    "Metabolic",
    "Skin",
    "Mental Health"
  ];

  const conditions = [
    {
      name: "Digestive Discomfort",
      category: "Digestive",
      description: "Common digestive issues like bloating, gas, and indigestion.",
      remedies: [
        {
          title: "Triphala",
          type: "Herb",
          description: "A blend of three fruits that supports digestive health and gentle detoxification.",
          icon: <Leaf size={20} className="text-primary" />
        },
        {
          title: "Ginger Tea",
          type: "Diet",
          description: "Fresh ginger steeped in hot water to soothe digestion and reduce gas.",
          icon: <Utensils size={20} className="text-primary" />
        },
        {
          title: "Abdominal Massage",
          type: "Practice",
          description: "Gentle clockwise massage with sesame oil to stimulate digestion.",
          icon: <Heart size={20} className="text-primary" />
        }
      ],
      imageSrc: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Respiratory Congestion",
      category: "Respiratory",
      description: "Coughs, colds, and congestion of the respiratory system.",
      remedies: [
        {
          title: "Tulsi (Holy Basil)",
          type: "Herb",
          description: "Supports respiratory health and boosts immune function.",
          icon: <Leaf size={20} className="text-primary" />
        },
        {
          title: "Ginger and Honey Tea",
          type: "Diet",
          description: "Warming drink that soothes throat irritation and reduces congestion.",
          icon: <Utensils size={20} className="text-primary" />
        },
        {
          title: "Steam Inhalation",
          type: "Practice",
          description: "Steam with eucalyptus oil to clear airways and reduce congestion.",
          icon: <Heart size={20} className="text-primary" />
        }
      ],
      imageSrc: "https://images.unsplash.com/photo-1584555613483-3b0b6fe9c467?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Low Immunity",
      category: "Immune Support",
      description: "Weakness in the body's defense system, leading to frequent illness.",
      remedies: [
        {
          title: "Ashwagandha",
          type: "Herb",
          description: "Adaptogenic herb that strengthens overall immunity and vitality.",
          icon: <Leaf size={20} className="text-primary" />
        },
        {
          title: "Turmeric Milk",
          type: "Diet",
          description: "Warm milk with turmeric and a pinch of black pepper to boost immunity.",
          icon: <Utensils size={20} className="text-primary" />
        },
        {
          title: "Oil Pulling",
          type: "Practice",
          description: "Swishing oil in the mouth to pull out toxins and support oral health.",
          icon: <Heart size={20} className="text-primary" />
        }
      ],
      imageSrc: "https://images.unsplash.com/photo-1584696423171-ce8232dcca4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Blood Sugar Imbalance",
      category: "Metabolic",
      description: "Fluctuations in blood glucose levels affecting energy and metabolism.",
      remedies: [
        {
          title: "Guduchi",
          type: "Herb",
          description: "Supports healthy blood sugar levels and metabolic function.",
          icon: <Leaf size={20} className="text-primary" />
        },
        {
          title: "Fenugreek Water",
          type: "Diet",
          description: "Soaked fenugreek seeds consumed daily to support glucose metabolism.",
          icon: <Utensils size={20} className="text-primary" />
        },
        {
          title: "Regular Exercise",
          type: "Practice",
          description: "Consistent physical activity tailored to your constitution to balance metabolism.",
          icon: <Heart size={20} className="text-primary" />
        }
      ],
      imageSrc: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Skin Inflammation",
      category: "Skin",
      description: "Redness, irritation, and various forms of dermatitis.",
      remedies: [
        {
          title: "Neem",
          type: "Herb",
          description: "Powerful herb with cooling properties that calms inflammation and purifies the skin.",
          icon: <Leaf size={20} className="text-primary" />
        },
        {
          title: "Cooling Foods",
          type: "Diet",
          description: "Emphasis on cucumbers, cilantro, and coconut to reduce internal heat.",
          icon: <Utensils size={20} className="text-primary" />
        },
        {
          title: "Aloe Vera Application",
          type: "Practice",
          description: "Fresh aloe gel applied directly to soothe and heal inflamed skin.",
          icon: <Heart size={20} className="text-primary" />
        }
      ],
      imageSrc: "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Stress and Anxiety",
      category: "Mental Health",
      description: "Mental tension, worry, and physiological stress responses.",
      remedies: [
        {
          title: "Brahmi",
          type: "Herb",
          description: "Supports mental clarity, cognitive function, and nervous system health.",
          icon: <Leaf size={20} className="text-primary" />
        },
        {
          title: "Warm Milk with Nutmeg",
          type: "Diet",
          description: "Calming nighttime drink to promote relaxation and quality sleep.",
          icon: <Utensils size={20} className="text-primary" />
        },
        {
          title: "Meditation Practice",
          type: "Practice",
          description: "Regular meditation to calm the mind and balance the nervous system.",
          icon: <Heart size={20} className="text-primary" />
        }
      ],
      imageSrc: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  // Filter conditions based on search query and selected category
  const filteredConditions = conditions.filter(condition => {
    const matchesSearch = 
      condition.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      condition.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      condition.remedies.some(remedy => 
        remedy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        remedy.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    const matchesCategory = 
      selectedCategory === "All" || 
      condition.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <PageTransition>
      <div className="min-h-screen pt-24">
        {/* Header */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 to-background"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-lg text-foreground animate-fade-up">Disease Solutions</h1>
              <p className="mt-6 paragraph animate-fade-up" style={{ animationDelay: "200ms" }}>
                Explore holistic Ayurvedic approaches to common health conditions, addressing root causes through natural remedies.
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
                  placeholder="Search conditions, symptoms, or remedies..."
                  className="w-full rounded-full border border-input bg-background px-10 py-3 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="mt-6 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      selectedCategory === category 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Conditions List */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredConditions.length > 0 ? (
              <div className="space-y-16">
                {filteredConditions.map((condition, index) => (
                  <div 
                    key={condition.name}
                    className="max-w-4xl mx-auto animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Image */}
                      <div className="md:w-1/3">
                        <div className="rounded-xl overflow-hidden shadow-md h-64">
                          <img
                            src={condition.imageSrc}
                            alt={condition.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="md:w-2/3">
                        <div className="flex items-center mb-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-primary mr-2">
                            {condition.category}
                          </span>
                        </div>
                        <h2 className="heading-md mb-3">{condition.name}</h2>
                        <p className="paragraph mb-6">{condition.description}</p>
                        
                        <h3 className="font-medium text-lg mb-4">Ayurvedic Approaches</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {condition.remedies.map((remedy) => (
                            <div 
                              key={remedy.title}
                              className="bg-card border border-border rounded-lg p-4 shadow-sm"
                            >
                              <div className="flex items-center mb-2">
                                <div className="mr-2">{remedy.icon}</div>
                                <h4 className="font-medium">{remedy.title}</h4>
                              </div>
                              <span className="inline-block mb-2 px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                                {remedy.type}
                              </span>
                              <p className="text-sm text-muted-foreground">{remedy.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="heading-sm text-muted-foreground">No conditions found</h3>
                <p className="mt-2 paragraph">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* General Guidance */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="heading-md mb-4 animate-fade-up">Ayurvedic Healing Principles</h2>
              <p className="paragraph animate-fade-up" style={{ animationDelay: "100ms" }}>
                Ayurveda addresses the root cause of disease, not just symptoms, through these foundational approaches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Balance the Doshas",
                  description: "Identify imbalances in Vata, Pitta, or Kapha, and apply appropriate therapies to restore harmony.",
                  icon: <Heart size={24} className="text-primary" />
                },
                {
                  title: "Strengthen Agni (Digestive Fire)",
                  description: "Support proper digestion and metabolism, which is considered the foundation of good health.",
                  icon: <Utensils size={24} className="text-primary" />
                },
                {
                  title: "Cleanse Ama (Toxins)",
                  description: "Eliminate accumulated toxins that can lead to disease through appropriate cleansing practices.",
                  icon: <Pill size={24} className="text-primary" />
                },
              ].map((principle, index) => (
                <div 
                  key={principle.title} 
                  className="bg-card border border-border rounded-xl p-6 shadow-sm text-center animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    {principle.icon}
                  </div>
                  <h3 className="font-medium text-lg mb-2">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default DiseaseSolutions;
