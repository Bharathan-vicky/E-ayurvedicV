
import { Link } from "react-router-dom";
import { Leaf, Utensils, Heart, Tablet } from "lucide-react";
import AnimatedCard from "@/components/ui-custom/AnimatedCard";
import PageTransition from "@/components/ui-custom/PageTransition";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Home Remedies",
      description: "Discover traditional remedies using common household ingredients.",
      icon: <Leaf size={24} className="text-ayurvedic-forest" />,
      imageSrc: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      path: "/remedies"
    },
    {
      title: "Plant Properties",
      description: "Learn about medicinal plants and their healing properties.",
      icon: <Leaf size={24} className="text-ayurvedic-forest" />,
      imageSrc: "https://images.unsplash.com/photo-1618058368343-246f9c6a5bf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      path: "/plants"
    },
    {
      title: "Diet Console",
      description: "Explore Ayurvedic diet principles for optimal health.",
      icon: <Utensils size={24} className="text-ayurvedic-forest" />,
      imageSrc: "https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      path: "/diet"
    },
    {
      title: "Disease Solutions",
      description: "Find holistic approaches to common health conditions.",
      icon: <Heart size={24} className="text-ayurvedic-forest" />,
      imageSrc: "https://images.unsplash.com/photo-1554130666-d400f75197ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      path: "/solutions"
    }
  ];

  const principles = [
    {
      title: "Balance of Doshas",
      description: "Understand your unique constitution of Vata, Pitta, and Kapha energies."
    },
    {
      title: "Natural Healing",
      description: "Harness the power of nature to restore health and prevent illness."
    },
    {
      title: "Mind-Body Connection",
      description: "Cultivate mental clarity and emotional balance for holistic wellness."
    },
    {
      title: "Personalized Approach",
      description: "Follow individualized practices suited to your specific needs."
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
              <h1 className="heading-xl bg-clip-text text-transparent bg-gradient-to-r from-ayurvedic-earth to-ayurvedic-forest animate-fade-up">
                Ancient Wisdom for Modern Wellness
              </h1>
              <p className="mt-6 paragraph text-xl animate-fade-up" style={{ animationDelay: "200ms" }}>
                Discover the transformative power of Ayurveda, the ancient science of life, adapted for today's health needs. Explore natural remedies, plant properties, diet principles, and holistic approaches to common ailments.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "400ms" }}>
                <Link
                  to="/remedies"
                  className="rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                >
                  Explore Remedies
                </Link>
                <Link
                  to="/diet"
                  className="rounded-full bg-white border border-input px-8 py-3 text-base font-medium text-foreground shadow-sm transition-all hover:bg-muted"
                >
                  Diet Principles
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg animate-fade-up">Explore Our Modules</h2>
              <p className="mt-4 paragraph animate-fade-up" style={{ animationDelay: "100ms" }}>
                Our comprehensive resources provide everything you need to incorporate Ayurvedic principles into your daily life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <AnimatedCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  imageSrc={feature.imageSrc}
                  delay={index * 100}
                  onClick={() => navigate(feature.path)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg animate-fade-up">Ayurvedic Principles</h2>
              <p className="mt-4 paragraph animate-fade-up" style={{ animationDelay: "100ms" }}>
                Discover the core philosophies that have guided Ayurvedic practice for thousands of years.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map((principle, index) => (
                <div 
                  key={principle.title}
                  className="bg-card border border-border rounded-xl p-8 shadow-sm animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="heading-sm text-primary">{principle.title}</h3>
                  <p className="mt-2 paragraph">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-ayurvedic-forest/90 to-ayurvedic-earth/90 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="relative z-10 text-white max-w-2xl">
                <h2 className="heading-lg animate-fade-up">Begin Your Ayurvedic Journey</h2>
                <p className="mt-4 text-white/90 leading-relaxed animate-fade-up" style={{ animationDelay: "100ms" }}>
                  Take the first step toward a balanced, harmonious life guided by the ancient wisdom of Ayurveda. Explore our comprehensive resources and discover natural approaches to wellness.
                </p>
                <div className="mt-8 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
                  <Link
                    to="/remedies"
                    className="rounded-full bg-white px-8 py-3 text-base font-medium text-ayurvedic-forest shadow-sm transition-all hover:bg-white/90"
                  >
                    Explore Remedies
                  </Link>
                  <Link
                    to="/plants"
                    className="rounded-full bg-transparent border border-white px-8 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-white/10"
                  >
                    Discover Plants
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;
