
import PageTransition from "@/components/ui-custom/PageTransition";
import AnimatedCard from "@/components/ui-custom/AnimatedCard";
import { Input } from "@/components/ui/input";
import { BookOpenText, Search } from "lucide-react";
import { useState } from "react";

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const articles = [
    {
      title: "Understanding the Three Doshas",
      description: "An in-depth look at Vata, Pitta, and Kapha and how they influence your health and wellbeing.",
      date: "May 1, 2023",
      category: "Fundamentals",
      imageSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773"
    },
    {
      title: "Seasonal Eating According to Ayurveda",
      description: "How to adjust your diet based on seasonal changes to maintain optimal health.",
      date: "June 15, 2023",
      category: "Diet",
      imageSrc: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
      badge: "Popular"
    },
    {
      title: "Ayurvedic Daily Routine (Dinacharya)",
      description: "Establishing a daily routine aligned with natural rhythms for better health.",
      date: "July 22, 2023",
      category: "Lifestyle",
      imageSrc: "https://images.unsplash.com/photo-1506126279646-a697c78a3553"
    },
    {
      title: "Herbs for Mental Clarity and Focus",
      description: "Ayurvedic herbs and practices to enhance cognitive function and mental performance.",
      date: "August 5, 2023",
      category: "Herbs",
      imageSrc: "https://images.unsplash.com/photo-1498837167922-ddd27525d352"
    },
    {
      title: "Ayurvedic Approaches to Common Digestive Issues",
      description: "Natural remedies and lifestyle adjustments to support digestive health.",
      date: "September 12, 2023",
      category: "Health",
      imageSrc: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71"
    },
    {
      title: "The Science Behind Ayurvedic Pulse Diagnosis",
      description: "Understanding the ancient practice of nadi pariksha (pulse diagnosis) in Ayurvedic medicine.",
      date: "October 3, 2023",
      category: "Diagnosis",
      imageSrc: "https://images.unsplash.com/photo-1585435557343-3b348031e799",
      badge: "New"
    },
    {
      title: "Ayurveda for Women's Health",
      description: "Specific Ayurvedic practices and herbs to support women through different life stages.",
      date: "November 18, 2023",
      category: "Women's Health",
      imageSrc: "https://images.unsplash.com/photo-1515377905703-c4788e51af15"
    },
    {
      title: "Panchakarma: The Five Actions of Detoxification",
      description: "An overview of the traditional Ayurvedic cleansing and rejuvenation therapy.",
      date: "December 7, 2023",
      category: "Cleansing",
      imageSrc: "https://images.unsplash.com/photo-1552693673-1bf958298935"
    }
  ];

  const filteredArticles = searchQuery 
    ? articles.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : articles;

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
                Explore our collection of in-depth articles on Ayurvedic principles, 
                practices, and applications for modern health and wellness.
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="pb-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredArticles.map((article, index) => (
                  <AnimatedCard
                    key={article.title}
                    title={article.title}
                    description={article.description}
                    imageSrc={article.imageSrc}
                    badge={article.badge}
                    delay={index * 100}
                    imageReveal
                    icon={<BookOpenText size={20} className="text-ayurvedic-forest" />}
                  >
                    <div className="mt-2 text-sm text-muted-foreground">
                      <span className="font-medium text-ayurvedic-forest">{article.category}</span> • {article.date}
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground">Try adjusting your search query</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Articles;
