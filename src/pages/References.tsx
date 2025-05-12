
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
      description: "Ancient Ayurvedic text focused on internal medicine, diagnosis and treatments. Compiled by Charaka, it's one of the fundamental texts of Ayurvedic medicine dating back to 300-200 BCE.",
      imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      badge: "Classical Text"
    },
    {
      title: "Sushruta Samhita",
      description: "Ancient Sanskrit text on medicine and surgery, with detailed surgical procedures. Written by Sushruta in approximately 600 BCE, it contains descriptions of over 300 surgical procedures and 120 surgical instruments.",
      imageSrc: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      badge: "Surgical Text"
    },
    {
      title: "Ashtanga Hridaya",
      description: "Sanskrit text on Ayurvedic medicine compiled by Vagbhata in around 7th century CE. It synthesizes the earlier works of Charaka and Sushruta while adding its own unique perspectives.",
      imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      badge: "Foundational Text"
    }
  ];

  const academicReferences = [
    {
      title: "Journal of Ethnopharmacology",
      description: "Peer-reviewed scientific journal dedicated to the study of indigenous drugs and their biological activities. Publishes research on medicinal plants used in Ayurveda and other traditional medicine systems.",
      imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      badge: "Scientific Journal"
    },
    {
      title: "Evidence-Based Complementary and Alternative Medicine",
      description: "International peer-reviewed journal that publishes original research articles and review articles on traditional medicine systems including Ayurveda. Features clinical trials, systematic reviews, and meta-analyses.",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      badge: "Research Journal"
    },
    {
      title: "International Journal of Ayurveda and Pharma Research",
      description: "Open-access journal focusing on contemporary research in Ayurvedic medicine, pharmacology, and clinical applications. Includes studies on formulation development and standardization of Ayurvedic drugs.",
      imageSrc: "https://images.unsplash.com/photo-1544717302-de2939b7ef71",
      badge: "Open Access"
    }
  ];

  const modernReferences = [
    {
      title: "WHO Traditional Medicine Strategy 2014-2023",
      description: "Comprehensive framework by the World Health Organization for integration of traditional medicine systems like Ayurveda into modern healthcare. Provides guidelines for safety, efficacy, and quality standards.",
      imageSrc: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144",
      badge: "WHO Official"
    },
    {
      title: "NIH - National Center for Complementary and Integrative Health",
      description: "Research division of the US National Institutes of Health devoted to investigating complementary health approaches including Ayurveda. Offers evidence-based information and funds clinical research.",
      imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      badge: "Government Research"
    },
    {
      title: "PubMed Central - Ayurveda Studies Collection",
      description: "Digital repository of peer-reviewed biomedical and life sciences literature with extensive collection of published research on Ayurvedic medicine, herbs, and clinical interventions.",
      imageSrc: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      badge: "Digital Repository"
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
                Explore authoritative sources on Ayurvedic medicine, from ancient classical texts to modern scientific research.
              </p>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-12">
              <Tabs 
                defaultValue="books" 
                className="w-full"
                onValueChange={(value) => setActiveTab(value)}
              >
                <div className="flex justify-center mb-8">
                  <TabsList className="grid grid-cols-3 w-full max-w-md">
                    <TabsTrigger value="books">
                      <Book className="mr-2 h-4 w-4" />
                      <span>Classical Texts</span>
                    </TabsTrigger>
                    <TabsTrigger value="academic">
                      <BookOpen className="mr-2 h-4 w-4" />
                      <span>Academic Research</span>
                    </TabsTrigger>
                    <TabsTrigger value="modern">
                      <Bookmark className="mr-2 h-4 w-4" />
                      <span>Modern Resources</span>
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="books">
                  <p className="text-muted-foreground text-lg mb-8 text-center">
                    Classical Ayurvedic texts form the foundation of Ayurvedic knowledge and have been preserved for thousands of years.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <p className="text-muted-foreground text-lg mb-8 text-center">
                    Contemporary academic journals publishing evidence-based research on Ayurvedic medicine and therapies.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {academicReferences.map((item, index) => (
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

                <TabsContent value="modern">
                  <p className="text-muted-foreground text-lg mb-8 text-center">
                    Modern institutions and digital resources providing standards, research funding, and evidence-based information.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
