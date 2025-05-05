
import PageTransition from "@/components/ui-custom/PageTransition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedCard from "@/components/ui-custom/AnimatedCard";
import { Book, BookOpen, Bookmark } from "lucide-react";
import { useState } from "react";

const References = () => {
  const [activeTab, setActiveTab] = useState("books");

  const books = [
    {
      title: "Charaka Samhita",
      description: "Ancient Ayurvedic text focused on internal medicine, diagnosis and treatment",
      imageSrc: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d",
      badge: "Classical Text"
    },
    {
      title: "Sushruta Samhita",
      description: "Ancient Sanskrit text on medicine and surgery, with detailed surgical procedures",
      imageSrc: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14"
    },
    {
      title: "Ashtanga Hridaya",
      description: "Sanskrit text on Ayurvedic medicine compiled by Vagbhata",
      imageSrc: "https://images.unsplash.com/photo-1544717302-de2939b7ef71"
    }
  ];

  const academicReferences = [
    {
      title: "Journal of Ethnopharmacology",
      description: "Scientific research on medicinal plants used in Ayurveda",
      imageSrc: "https://images.unsplash.com/photo-1554475901-6ffa99d7101d"
    },
    {
      title: "Evidence-Based Complementary and Alternative Medicine",
      description: "Peer-reviewed studies on Ayurvedic treatments and outcomes",
      imageSrc: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69"
    },
    {
      title: "International Journal of Ayurveda and Pharma Research",
      description: "Current research and clinical studies in Ayurvedic medicine",
      imageSrc: "https://images.unsplash.com/photo-1516321497487-e288fb19713f"
    }
  ];

  const modernReferences = [
    {
      title: "WHO Traditional Medicine Strategy",
      description: "World Health Organization's guidelines and research on Ayurveda",
      imageSrc: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144",
      badge: "Official"
    },
    {
      title: "NIH - National Center for Complementary and Integrative Health",
      description: "Research on complementary health approaches including Ayurveda",
      imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    },
    {
      title: "PubMed Central - Ayurveda Studies",
      description: "Collection of published research on Ayurvedic medicine and practices",
      imageSrc: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
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
                Ayurvedic References
              </h1>
              <p className="mt-6 text-xl animate-fade-up" style={{ animationDelay: "200ms" }}>
                Explore authoritative references on Ayurvedic medicine, from ancient texts to modern research.
              </p>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-12">
              <Tabs 
                defaultValue="books" 
                className="w-full"
                onValueChange={(value) => setActiveTab(value)}
              >
                <div className="flex justify-center mb-8">
                  <TabsList className="grid grid-cols-3 w-full max-w-md">
                    <TabsTrigger value="books">
                      <Book className="mr-2 h-4 w-4" />
                      <span>Classical</span>
                    </TabsTrigger>
                    <TabsTrigger value="academic">
                      <BookOpen className="mr-2 h-4 w-4" />
                      <span>Academic</span>
                    </TabsTrigger>
                    <TabsTrigger value="modern">
                      <Bookmark className="mr-2 h-4 w-4" />
                      <span>Modern</span>
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="books">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {books.map((item, index) => (
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

                <TabsContent value="academic">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {academicReferences.map((item, index) => (
                      <AnimatedCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        imageSrc={item.imageSrc}
                        delay={index * 100}
                      />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="modern">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {modernReferences.map((item, index) => (
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

export default References;
