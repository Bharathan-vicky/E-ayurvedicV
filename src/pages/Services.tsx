
import { MapPin, Video, Pill, Watch, Heart, ActivitySquare, FileText, FolderOpen, Lock } from "lucide-react";
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
  details?: {
    title: string;
    description: string;
    features: string[];
  }[];
}

const Services = () => {
  const { toast } = useToast();
  const [locationGranted, setLocationGranted] = useState<boolean | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

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
            variant: "default",
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

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId === selectedService ? null : serviceId);
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
      icon: <ActivitySquare className="text-ayurvedic-forest" size={24} />,
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
      title: "E-Health Document Storage",
      description: "Store, manage, and securely access your Ayurvedic health records and documents for better treatment continuity.",
      icon: <FileText className="text-ayurvedic-forest" size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      details: [
        {
          title: "Secure Document Storage",
          description: "Our E-Health Document Storage system provides a secure and organized way to manage all your health-related documents in one place.",
          features: [
            "End-to-end encryption for all your sensitive health documents",
            "Store consultation notes, prescriptions, and test results",
            "Organize documents by categories and dates",
            "Easily share documents with your healthcare providers",
            "Access your documents anytime, anywhere"
          ]
        },
        {
          title: "Document Types",
          description: "Our system supports various health document formats essential for your Ayurvedic wellness journey.",
          features: [
            "Consultation records and practitioner notes",
            "Ayurvedic prescriptions and treatment plans",
            "Lab test results and reports",
            "Dietary guidelines and personalized regimens",
            "Progress tracking documents",
            "Medical history files and records"
          ]
        }
      ]
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
                    className={`${service.comingSoon ? "opacity-80" : ""} ${selectedService === service.id ? "ring-2 ring-ayurvedic-forest" : ""}`}
                    onClick={() => service.details && handleServiceClick(service.id)}
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
                  {service.id === "e-health" && (
                    <div className="absolute bottom-4 right-4">
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        onClick={() => handleServiceClick(service.id)}
                        className="bg-white hover:bg-gray-100"
                      >
                        <FolderOpen className="mr-2 h-4 w-4" />
                        View Documents
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Document Storage Details Section */}
            {selectedService === "e-health" && (
              <div className="mt-12 p-6 bg-white rounded-lg shadow-lg animate-fade-up">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-ayurvedic-forest">E-Health Document Storage System</h3>
                  <Lock className="text-ayurvedic-forest" size={24} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {services.find(s => s.id === "e-health")?.details?.map((detail, index) => (
                    <div key={index} className="space-y-4">
                      <h4 className="text-xl font-semibold text-ayurvedic-earth">{detail.title}</h4>
                      <p className="text-gray-700">{detail.description}</p>
                      <ul className="space-y-2">
                        {detail.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 bg-ayurvedic-forest/20 rounded-full text-ayurvedic-forest">
                              ✓
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button 
                    variant="default" 
                    className="bg-ayurvedic-forest hover:bg-ayurvedic-forest/90 text-white"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Upload Document
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-ayurvedic-earth text-ayurvedic-earth hover:bg-ayurvedic-earth/10"
                  >
                    <FolderOpen className="mr-2 h-4 w-4" />
                    Browse Documents
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>

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
                    <ActivitySquare className="mr-2 h-4 w-4" />
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
