
import PageTransition from "@/components/ui-custom/PageTransition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedCard from "@/components/ui-custom/AnimatedCard";
import { BookOpen, Bookmark, BookText } from "lucide-react";
import { useState } from "react";

const Articles = () => {
  const [activeTab, setActiveTab] = useState("featured");

  const featuredArticles = [
    {
      title: "Understanding Your Dosha: A Guide to Ayurvedic Body Types",
      description: "Learn about Vata, Pitta, and Kapha doshas and discover your unique Ayurvedic constitution",
      imageSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      badge: "Featured"
    },
    {
      title: "Seasonal Eating: Ayurvedic Diet for Each Season",
      description: "How to adjust your diet according to seasonal changes for optimal health",
      imageSrc: "https://images.unsplash.com/photo-1464226184884-fa280b87c399"
    },
    {
      title: "Ayurvedic Daily Routine (Dinacharya) for Modern Life",
      description: "Incorporate ancient wisdom into your daily habits for improved well-being",
      imageSrc: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe"
    }
  ];

  const healthArticles = [
    {
      title: "Ayurvedic Approach to Digestive Health",
      description: "Natural remedies and dietary guidelines for improving digestion",
      imageSrc: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71"
    },
    {
      title: "Stress Management Through Ayurveda",
      description: "Ancient techniques for calming the mind and reducing stress",
      imageSrc: "https://images.unsplash.com/photo-1506126279646-a697353d3166"
    },
    {
      title: "Ayurvedic Herbs for Immune Support",
      description: "Powerful herbs and formulations to strengthen your immune system",
      imageSrc: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf",
      badge: "Popular"
    }
  ];

  const lifestyleArticles = [
    {
      title: "Ayurvedic Skincare: Natural Beauty Rituals",
      description: "Traditional beauty practices and herbal formulations for healthy skin",
      imageSrc: "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c"
    },
    {
      title: "Yoga and Ayurveda: The Perfect Combination",
      description: "How these sister sciences work together for holistic health",
      imageSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
    },
    {
      title: "Creating an Ayurvedic Kitchen",
      description: "Essential spices, tools, and practices for Ayurvedic cooking",
      imageSrc: "https://images.unsplash.com/photo-1556911073-38141963c9e0",
      badge: "New"
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
                Ayurvedic Articles
              </h1>
              <p className="mt-6 text-xl animate-fade-up" style={{ animationDelay: "200ms" }}>
                Explore our collection of articles on Ayurvedic principles, practices, and applications for modern wellness.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-12">
              <Tabs 
                defaultValue="featured" 
                className="w-full"
                onValueChange={(value) => setActiveTab(value)}
              >
                <div className="flex justify-center mb-8">
                  <TabsList className="grid grid-cols-3 w-full max-w-md">
                    <TabsTrigger value="featured">
                      <BookText className="mr-2 h-4 w-4" />
                      <span>Featured</span>
                    </TabsTrigger>
                    <TabsTrigger value="health">
                      <BookOpen className="mr-2 h-4 w-4" />
                      <span>Health</span>
                    </TabsTrigger>
                    <TabsTrigger value="lifestyle">
                      <Bookmark className="mr-2 h-4 w-4" />
                      <span>Lifestyle</span>
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="featured">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featuredArticles.map((item, index) => (
                      <AnimatedCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        imageSrc={item.imageSrc}
                        delay={index * 100}
                        badge={item.badge}
                      />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="health">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {healthArticles.map((item, index) => (
                      <AnimatedCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        imageSrc={item.imageSrc}
                        delay={index * 100}
                        badge={item.badge}
                      />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="lifestyle">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {lifestyleArticles.map((item, index) => (
                      <AnimatedCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        imageSrc={item.imageSrc}
                        delay={index * 100}
                        badge={item.badge}
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Articles;
