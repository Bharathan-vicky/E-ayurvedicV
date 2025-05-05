
import PageTransition from "@/components/ui-custom/PageTransition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedCard from "@/components/ui-custom/AnimatedCard";
import { Book, Library, BookOpen } from "lucide-react";
import { useState } from "react";

const Resources = () => {
  const [activeTab, setActiveTab] = useState("books");

  const books = [
    {
      title: "Ayurveda: The Science of Self-Healing",
      description: "A practical guide to Ayurvedic medicine by Dr. Vasant Lad",
      imageSrc: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
      badge: "Popular"
    },
    {
      title: "Prakriti: Your Ayurvedic Constitution",
      description: "Discover your unique constitution and how to maintain balance",
      imageSrc: "https://images.unsplash.com/photo-1544947950-fa07a98d237f"
    },
    {
      title: "Ayurvedic Cooking for Self-Healing",
      description: "Recipes and dietary guidance based on Ayurvedic principles",
      imageSrc: "https://images.unsplash.com/photo-1476275466078-4007374efbbe"
    },
    {
      title: "The Complete Book of Ayurvedic Home Remedies",
      description: "Comprehensive guide to natural, effective treatments",
      imageSrc: "https://images.unsplash.com/photo-1544717302-de2939b7ef71"
    }
  ];

  const journals = [
    {
      title: "Journal of Ayurveda and Integrative Medicine",
      description: "Peer-reviewed research on Ayurvedic principles and practices",
      imageSrc: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1"
    },
    {
      title: "Ancient Science of Life",
      description: "Official journal of the Ancient Science of Life Society",
      imageSrc: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14"
    },
    {
      title: "International Journal of Ayurveda Research",
      description: "Research on Ayurvedic medicine and its applications",
      imageSrc: "https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd"
    }
  ];

  const digitalResources = [
    {
      title: "Ayurvedic Institute Digital Library",
      description: "Collection of digital resources on Ayurvedic medicine",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      badge: "Free Access"
    },
    {
      title: "National Library of Ayurveda Medicine",
      description: "Comprehensive database of Ayurvedic texts and research papers",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Digital Herb Compendium",
      description: "Interactive guide to Ayurvedic herbs and their applications",
      imageSrc: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c"
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
                Ayurvedic Resources
              </h1>
              <p className="mt-6 text-xl animate-fade-up" style={{ animationDelay: "200ms" }}>
                Discover a wealth of knowledge about Ayurvedic medicine, practices, 
                and principles through our curated collection of resources.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Section */}
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
                      <span>Books</span>
                    </TabsTrigger>
                    <TabsTrigger value="journals">
                      <BookOpen className="mr-2 h-4 w-4" />
                      <span>Journals</span>
                    </TabsTrigger>
                    <TabsTrigger value="digital">
                      <Library className="mr-2 h-4 w-4" />
                      <span>Digital</span>
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="books">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

                <TabsContent value="journals">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {journals.map((item, index) => (
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

                <TabsContent value="digital">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {digitalResources.map((item, index) => (
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

export default Resources;
