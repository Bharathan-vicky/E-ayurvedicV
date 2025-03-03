
import { MapPin, Video, Pill, Heart, ActivitySquare, FileText, FolderOpen, Lock, Upload, Play, ShoppingCart, Package, Search } from "lucide-react";
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
  sessions?: {
    title: string;
    duration: string;
    level: string;
    videoUrl: string;
  }[];
  products?: {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageSrc: string;
  }[];
}

const Services = () => {
  const { toast } = useToast();
  const [locationGranted, setLocationGranted] = useState<boolean | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cart, setCart] = useState<Array<{id: string, name: string, price: number, quantity: number}>>([]);
  
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
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setUploadStatus('idle');
    }
  };
  
  const handleFileUpload = () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please select a file to upload",
        variant: "destructive",
      });
      return;
    }
    
    setUploadStatus('uploading');
    
    // Simulate backend upload with timeout
    setTimeout(() => {
      setUploadStatus('success');
      toast({
        title: "Document Uploaded",
        description: `${selectedFile.name} has been successfully uploaded`,
        variant: "default",
      });
      setSelectedFile(null);
      
      // Reset file input
      const fileInput = document.getElementById('document-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }, 2000);
  };

  const addToCart = (product: {id: string, name: string, price: number}) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? {...item, quantity: item.quantity + 1} 
          : item
      ));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
      variant: "default",
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCart(cart.map(item => 
      item.id === productId 
        ? {...item, quantity: newQuantity} 
        : item
    ));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
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
      products: [
        {
          id: "p1",
          name: "Ashwagandha Tablets",
          description: "Traditional herb that helps reduce stress and anxiety while boosting energy levels.",
          price: 14.99,
          category: "Supplements",
          imageSrc: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
          id: "p2",
          name: "Triphala Powder",
          description: "Digestive tonic that supports regular elimination and detoxification.",
          price: 12.99,
          category: "Digestive Health",
          imageSrc: "https://images.unsplash.com/photo-1605139923904-6cad593eda18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
          id: "p3",
          name: "Turmeric Capsules",
          description: "Potent anti-inflammatory and antioxidant supplement.",
          price: 9.99,
          category: "Supplements",
          imageSrc: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
          id: "p4",
          name: "Brahmi Oil",
          description: "Traditional hair oil that nourishes the scalp and promotes hair growth.",
          price: 16.99,
          category: "Hair Care",
          imageSrc: "https://images.unsplash.com/photo-1608571423902-abb638917549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
          id: "p5",
          name: "Neem Tablets",
          description: "Supports healthy skin and the immune system.",
          price: 11.99,
          category: "Skin Health",
          imageSrc: "https://images.unsplash.com/photo-1577009683331-a6f9e5d06233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
          id: "p6",
          name: "Chyawanprash",
          description: "Traditional herbal jam that boosts immunity and vitality.",
          price: 19.99,
          category: "Immunity",
          imageSrc: "https://images.unsplash.com/photo-1593097693516-9b5448961d4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        }
      ]
    },
    {
      id: "yoga-meditation",
      title: "Yoga & Meditation",
      description: "Access guided sessions for yoga asanas and meditation techniques that complement your Ayurvedic lifestyle.",
      icon: <ActivitySquare className="text-ayurvedic-forest" size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      sessions: [
        {
          title: "Morning Energy Flow",
          duration: "20 minutes",
          level: "Beginner",
          videoUrl: "https://youtu.be/watch?v=kFhGajlzCCo"
        },
        {
          title: "Stress Relief Meditation",
          duration: "15 minutes",
          level: "All Levels",
          videoUrl: "https://youtu.be/watch?v=ez3GgRqhNvA"
        },
        {
          title: "Vata Balancing Sequence",
          duration: "30 minutes", 
          level: "Intermediate",
          videoUrl: "https://youtu.be/watch?v=LI0fAuaOgJU"
        }
      ]
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
                    onClick={() => service.details || service.sessions || service.products ? handleServiceClick(service.id) : undefined}
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
                  {service.id === "yoga-meditation" && (
                    <div className="absolute bottom-4 right-4">
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        onClick={() => handleServiceClick(service.id)}
                        className="bg-white hover:bg-gray-100"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        View Sessions
                      </Button>
                    </div>
                  )}
                  {service.id === "e-pharmacy" && (
                    <div className="absolute bottom-4 right-4">
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        onClick={() => handleServiceClick(service.id)}
                        className="bg-white hover:bg-gray-100"
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        View Products
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* E-Pharmacy Section */}
            {selectedService === "e-pharmacy" && (
              <div className="mt-12 p-6 bg-white rounded-lg shadow-lg animate-fade-up">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-ayurvedic-forest">Patanjali Ayurved E-Pharmacy</h3>
                  <Pill className="text-ayurvedic-forest" size={24} />
                </div>
                
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-grow">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                      <input
                        type="text"
                        placeholder="Search for products..."
                        className="w-full rounded-lg border border-input pl-10 pr-4 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-2">
                      {["All", "Supplements", "Digestive Health", "Hair Care", "Skin Health", "Immunity"].map((category) => (
                        <button
                          key={category}
                          className={`px-3 py-1 text-sm rounded-full whitespace-nowrap ${
                            (selectedCategory === category || (category === "All" && !selectedCategory))
                              ? "bg-ayurvedic-forest text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                          onClick={() => setSelectedCategory(category === "All" ? null : category)}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services
                      .find(s => s.id === "e-pharmacy")?.products
                      ?.filter(product => 
                        (!selectedCategory || product.category === selectedCategory) && 
                        (searchQuery === "" || 
                          product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()))
                      )
                      .map((product) => (
                        <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                          <div className="h-48 overflow-hidden bg-gray-100">
                            <img 
                              src={product.imageSrc} 
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-medium text-lg">{product.name}</h4>
                                <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full mt-1">{product.category}</span>
                              </div>
                              <span className="font-semibold text-lg">${product.price.toFixed(2)}</span>
                            </div>
                            <p className="mt-2 text-sm text-gray-600 line-clamp-3">{product.description}</p>
                            <Button 
                              className="mt-4 w-full bg-ayurvedic-forest hover:bg-ayurvedic-forest/90"
                              onClick={() => addToCart({id: product.id, name: product.name, price: product.price})}
                            >
                              <ShoppingCart className="mr-2 h-4 w-4" />
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                
                {/* Shopping Cart */}
                {cart.length > 0 && (
                  <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-semibold text-ayurvedic-forest">Your Cart</h4>
                      <span className="bg-ayurvedic-forest text-white text-sm py-1 px-3 rounded-full">{cart.length} item(s)</span>
                    </div>
                    
                    <div className="divide-y divide-gray-200">
                      {cart.map((item) => (
                        <div key={item.id} className="py-3 flex items-center justify-between">
                          <div className="flex-grow">
                            <h5 className="font-medium">{item.name}</h5>
                            <div className="flex items-center mt-1">
                              <button 
                                className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-l-md"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </button>
                              <span className="w-8 h-6 flex items-center justify-center border-t border-b border-gray-300">
                                {item.quantity}
                              </span>
                              <button 
                                className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-r-md"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
                            <button 
                              className="text-red-500 text-sm mt-1 hover:text-red-700"
                              onClick={() => removeFromCart(item.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                      <div className="text-lg font-semibold">Total: ${calculateTotal().toFixed(2)}</div>
                      <Button 
                        className="bg-ayurvedic-forest hover:bg-ayurvedic-forest/90"
                        onClick={() => {
                          toast({
                            title: "Order Placed!",
                            description: "Your order has been successfully placed. You will receive a confirmation email shortly.",
                            variant: "default",
                          });
                          setCart([]);
                        }}
                      >
                        <Package className="mr-2 h-4 w-4" />
                        Checkout
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
            
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
                
                <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-ayurvedic-forest mb-4">Upload Health Document</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        id="document-upload"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      />
                      <label 
                        htmlFor="document-upload" 
                        className="flex items-center justify-center w-full p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                      >
                        <Upload className="mr-2 text-ayurvedic-forest" />
                        <span>{selectedFile ? selectedFile.name : "Choose a file or drag & drop here"}</span>
                      </label>
                    </div>
                    
                    {selectedFile && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                        <Button
                          onClick={handleFileUpload}
                          disabled={uploadStatus === 'uploading'}
                          className="bg-ayurvedic-forest hover:bg-ayurvedic-forest/90"
                        >
                          {uploadStatus === 'uploading' ? 'Uploading...' : 'Upload Document'}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
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
            
            {/* Yoga & Meditation Sessions Section */}
            {selectedService === "yoga-meditation" && (
              <div className="mt-12 p-6 bg-white rounded-lg shadow-lg animate-fade-up">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-ayurvedic-forest">Yoga & Meditation Sessions</h3>
                  <ActivitySquare className="text-ayurvedic-forest" size={24} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.find(s => s.id === "yoga-meditation")?.sessions?.map((session, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="aspect-video bg-gray-100 relative group">
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button 
                            variant="default" 
                            className="bg-ayurvedic-forest hover:bg-ayurvedic-forest/90"
                            onClick={() => {
                              toast({
                                title: "Starting session",
                                description: `Loading ${session.title}`,
                                variant: "default",
                              });
                            }}
                          >
                            <Play className="mr-2 h-4 w-4" />
                            Play Session
                          </Button>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {session.duration}
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium text-lg">{session.title}</h4>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-gray-600">Level: {session.level}</span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-ayurvedic-forest hover:text-ayurvedic-forest/90 hover:bg-ayurvedic-forest/10"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
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
                    Join Yoga Session
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
