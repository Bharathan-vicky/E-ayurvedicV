
import { MapPin, Video, Pill, Watch, Heart, Yoga } from "lucide-react";
import PageTransition from "@/components/ui-custom/PageTransition";
import AnimatedCard from "@/components/ui-custom/AnimatedCard";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
  comingSoon?: boolean;
}

const Services = () => {
  const { toast } = useToast();
  const [locationGranted, setLocationGranted] = useState<boolean | null>(null);

  const requestLocation = () => {
    if (navigator.geolocation) {
      toast({
        title: "Requesting Location",
        description: "Please allow access to your location to find herbs near you.",
      });
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationGranted(true);
          toast({
            title: "Location Access Granted",
            description: "We can now show herbs available in your area.",
            variant: "success",
          });
        },
        (error) => {
          setLocationGranted(false);
          toast({
            title: "Location Access Denied",
            description: "We need location access to show herbs near you.",
            variant: "destructive",
          });
        }
      );
    } else {
      toast({
        title: "Geolocation Not Supported",
        description: "Your browser doesn't support geolocation.",
        variant: "destructive",
      });
    }
  };

  const services: ServiceFeature[] = [
    {
      id: "virtual-clinic",
      title: "Virtual Ayurvedic Clinic",
      description: "Connect with certified Ayurvedic practitioners for personalized consultations from the comfort of your home.",
      icon: <Video className="text-ayurvedic-forest" size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: "e-pharmacy",
      title: "E-Pharmacy Integration",
      description: "Order authentic Ayurvedic medicines and herbal supplements with doorstep delivery service.",
      icon: <Pill className="text-ayurvedic-forest" size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    },
    {
      id: "yoga-meditation",
      title: "Yoga & Meditation",
      description: "Access guided sessions for yoga asanas and meditation techniques that complement your Ayurvedic lifestyle.",
      icon: <Yoga className="text-ayurvedic-forest" size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    },
    {
      id: "smartwatch",
      title: "Smartwatch Integration",
      description: "Track your doshas, daily routines, and wellness metrics with our smartwatch companion app.",
      icon: <Watch className="text-ayurvedic-forest" size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      comingSoon: true,
    },
    {
      id: "e-health",
      title: "E-Health Services",
      description: "Store and manage your Ayurvedic health records securely for better treatment continuity.",
      icon: <Heart className="text-ayurvedic-forest" size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1576671103104-7b8b0cb8d759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      comingSoon: true,
    },
    {
      id: "geo-herbs",
      title: "Geolocation Herb Finder",
      description: "Discover medicinal herbs and plants available in your locality with our interactive map.",
      icon: <MapPin className="text-ayurvedic-forest" size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1598517511230-8fce6d170f1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    },
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
                Modern Services for Ancient Wisdom
              </h1>
              <p className="mt-6 paragraph text-xl animate-fade-up" style={{ animationDelay: "200ms" }}>
                Discover our cutting-edge digital services that make Ayurvedic wellness more accessible, personalized, and integrated with your modern lifestyle.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg animate-fade-up">Our Digital Services</h2>
              <p className="mt-4 paragraph animate-fade-up" style={{ animationDelay: "100ms" }}>
                Explore how technology enhances your Ayurvedic wellness journey with these innovative services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={service.id} className="relative">
                  <AnimatedCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    imageSrc={service.imageSrc}
                    delay={index * 100}
                    className={service.comingSoon ? "opacity-80" : ""}
                  />
                  {service.comingSoon && (
                    <div className="absolute top-4 right-4 bg-primary text-white py-1 px-3 rounded-full text-xs font-medium">
                      Coming Soon
                    </div>
                  )}
                  {service.id === "geo-herbs" && (
                    <div className="absolute bottom-4 right-4">
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        onClick={requestLocation}
                        className="bg-white hover:bg-gray-100"
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        Find Herbs Near Me
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-ayurvedic-forest/90 to-ayurvedic-earth/90 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="relative z-10 text-white max-w-2xl">
                <h2 className="heading-lg animate-fade-up">Experience the Future of Ayurveda</h2>
                <p className="mt-4 text-white/90 leading-relaxed animate-fade-up" style={{ animationDelay: "100ms" }}>
                  Our digital services are designed to make authentic Ayurvedic wisdom accessible and relevant to your modern lifestyle. Start exploring these features today.
                </p>
                <div className="mt-8 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
                  <Button variant="default" className="rounded-full bg-white text-ayurvedic-forest hover:bg-white/90">
                    <Video className="mr-2 h-4 w-4" />
                    Book Virtual Consultation
                  </Button>
                  <Button variant="outline" className="rounded-full border-white text-white hover:bg-white/10">
                    <Yoga className="mr-2 h-4 w-4" />
                    Try Yoga Session
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Services;
