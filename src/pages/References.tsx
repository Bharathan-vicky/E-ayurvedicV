
import PageTransition from "@/components/ui-custom/PageTransition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookText, FileText, Reference } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const References = () => {
  const [activeTab, setActiveTab] = useState("books");

  const bookReferences = [
    {
      title: "Charaka Samhita",
      author: "Charaka",
      description: "One of the primary texts of Ayurveda, focusing on internal medicine",
      year: "circa 400-200 BCE",
      publisher: "Various translations available"
    },
    {
      title: "Sushruta Samhita",
      author: "Sushruta",
      description: "Ancient Sanskrit text on medicine and surgery, with detailed surgical procedures",
      year: "circa 600 BCE",
      publisher: "Various translations available"
    },
    {
      title: "Ashtanga Hridayam",
      author: "Vagbhata",
      description: "A classical Ayurvedic text covering eight branches of Ayurveda",
      year: "circa 7th century CE",
      publisher: "Various translations available"
    },
    {
      title: "Prakriti: Your Ayurvedic Constitution",
      author: "Dr. Robert Svoboda",
      description: "Comprehensive guide to understanding your Ayurvedic constitution",
      year: "1998",
      publisher: "Lotus Press"
    },
    {
      title: "Ayurvedic Medicine: The Principles of Traditional Practice",
      author: "Sebastian Pole",
      description: "Detailed exploration of Ayurvedic principles and practice",
      year: "2006",
      publisher: "Churchill Livingstone"
    },
    {
      title: "The Yoga of Herbs: An Ayurvedic Guide to Herbal Medicine",
      author: "Dr. Vasant Lad & Dr. David Frawley",
      description: "Comprehensive guide to Ayurvedic herbology",
      year: "1986",
      publisher: "Lotus Press"
    }
  ];

  const journalReferences = [
    {
      title: "Ayurvedic medicine for rheumatoid arthritis: A systematic review",
      authors: "Furst DE, Venkatraman MM, McGann M, et al.",
      journal: "Clinical Rheumatology",
      year: "2011",
      volume: "30(5)",
      pages: "613-618"
    },
    {
      title: "Whole System Approaches to Health and Wellness: Ayurveda and the Genomic Revolution",
      authors: "Wallace RK, Prasad S, Harley B.",
      journal: "Journal of Ayurveda & Integrative Medicine",
      year: "2020",
      volume: "11(4)",
      pages: "210-215"
    },
    {
      title: "Evidence-based evaluation of traditional Ayurvedic formulations: Present status and future perspectives",
      authors: "Singh N, Bhalla M, de Jager P, Gilca M.",
      journal: "International Journal of Green Pharmacy",
      year: "2015",
      volume: "9(1)",
      pages: "50-64"
    },
    {
      title: "Antioxidant activities of some common Ayurvedic herbs",
      authors: "Kumar S, Pandey AK, Rao MM, Ranjan R.",
      journal: "Ancient Science of Life",
      year: "2018",
      volume: "37(4)",
      pages: "195-202"
    },
    {
      title: "Meditation and yoga: Impact on cardiovascular disease and associated risk factors",
      authors: "Manchanda SC, Madan K.",
      journal: "Journal of Preventive Cardiology",
      year: "2014",
      volume: "3(3)",
      pages: "111-119"
    }
  ];

  const webReferences = [
    {
      title: "National Center for Complementary and Integrative Health (NCCIH)",
      url: "https://nccih.nih.gov/health/ayurvedic-medicine",
      description: "Government resource on Ayurvedic medicine research and practice",
      accessDate: "April 10, 2023"
    },
    {
      title: "World Health Organization: Traditional, Complementary and Integrative Medicine",
      url: "https://www.who.int/health-topics/traditional-complementary-and-integrative-medicine",
      description: "WHO resources on traditional medicine systems including Ayurveda",
      accessDate: "March 22, 2023"
    },
    {
      title: "The Ayurvedic Institute",
      url: "https://www.ayurveda.com",
      description: "Educational resources on Ayurvedic principles and practices",
      accessDate: "February 15, 2023"
    },
    {
      title: "PubMed Central - Ayurveda Research Papers",
      url: "https://www.ncbi.nlm.nih.gov/pmc/?term=ayurveda",
      description: "Database of published research papers on Ayurvedic medicine",
      accessDate: "April 30, 2023"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 to-background"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-xl animate-fade-up">
                Academic References
              </h1>
              <p className="mt-6 text-xl animate-fade-up" style={{ animationDelay: "200ms" }}>
                A comprehensive collection of scientific and academic references on Ayurvedic medicine, 
                providing the foundation for our content and recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <Tabs 
                defaultValue="books" 
                className="w-full"
                onValueChange={(value) => setActiveTab(value)}
              >
                <div className="flex justify-center mb-8">
                  <TabsList className="grid grid-cols-3 w-full max-w-md">
                    <TabsTrigger value="books">
                      <BookText className="mr-2 h-4 w-4" />
                      <span>Books</span>
                    </TabsTrigger>
                    <TabsTrigger value="journals">
                      <FileText className="mr-2 h-4 w-4" />
                      <span>Journals</span>
                    </TabsTrigger>
                    <TabsTrigger value="web">
                      <Reference className="mr-2 h-4 w-4" />
                      <span>Web</span>
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="books">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-up">
                    {bookReferences.map((reference, index) => (
                      <Card key={index} className="transition-all duration-300 hover:shadow-md">
                        <CardHeader>
                          <CardTitle>{reference.title}</CardTitle>
                          <CardDescription>By {reference.author}, {reference.year}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{reference.description}</p>
                          <p className="mt-2 text-sm">Publisher: {reference.publisher}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="journals">
                  <div className="space-y-6 animate-fade-up">
                    {journalReferences.map((reference, index) => (
                      <Card key={index} className="transition-all duration-300 hover:shadow-md">
                        <CardHeader>
                          <CardTitle>{reference.title}</CardTitle>
                          <CardDescription>{reference.authors}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">
                            {reference.journal}, {reference.year}, {reference.volume}: {reference.pages}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="web">
                  <div className="space-y-6 animate-fade-up">
                    {webReferences.map((reference, index) => (
                      <Card key={index} className="transition-all duration-300 hover:shadow-md">
                        <CardHeader>
                          <CardTitle>{reference.title}</CardTitle>
                          <CardDescription>Accessed: {reference.accessDate}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">{reference.description}</p>
                          <Button variant="outline" className="text-ayurvedic-forest hover:text-ayurvedic-forest hover:bg-muted" asChild>
                            <a href={reference.url} target="_blank" rel="noopener noreferrer">
                              Visit Resource
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
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
