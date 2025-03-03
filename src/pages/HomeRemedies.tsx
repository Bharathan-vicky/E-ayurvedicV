
import PageTransition from "@/components/ui-custom/PageTransition";
import AnimatedCard from "@/components/ui-custom/AnimatedCard";
import { Leaf, Search } from "lucide-react";
import { useState } from "react";

const HomeRemedies = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const remedies = [
    {
      title: "Turmeric Milk",
      description: "A soothing blend of warm milk and turmeric to boost immunity and reduce inflammation.",
      category: "Immunity",
      ingredients: ["Milk", "Turmeric", "Honey", "Black pepper"],
      imageSrc: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Ginger Tea",
      description: "A warming tea that aids digestion and helps alleviate nausea and cold symptoms.",
      category: "Digestive Health",
      ingredients: ["Fresh ginger", "Water", "Lemon", "Honey"],
      imageSrc: "https://images.unsplash.com/photo-1608632508658-2059d6bc2f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Triphala Infusion",
      description: "A traditional blend of three fruits that supports digestive health and detoxification.",
      category: "Digestive Health",
      ingredients: ["Triphala powder", "Water", "Honey (optional)"],
      imageSrc: "https://images.unsplash.com/photo-1605139923904-6cad593eda18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Aloe Vera Juice",
      description: "Fresh aloe vera juice that soothes the digestive tract and promotes skin health.",
      category: "Skin Health",
      ingredients: ["Aloe vera leaf", "Water", "Lemon juice", "Honey"],
      imageSrc: "https://images.unsplash.com/photo-1623019616482-013342bb005c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Fenugreek Water",
      description: "Soaked fenugreek seeds that help manage blood sugar and improve digestion.",
      category: "Metabolic Health",
      ingredients: ["Fenugreek seeds", "Water"],
      imageSrc: "https://images.unsplash.com/photo-1515594619990-9d921af1a6d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Ashwagandha Tea",
      description: "A calming tea that helps reduce stress and promote restful sleep.",
      category: "Stress Relief",
      ingredients: ["Ashwagandha powder", "Water", "Milk", "Honey"],
      imageSrc: "https://images.unsplash.com/photo-1551412222-8c7a69b0e6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Neem Face Pack",
      description: "Natural face pack that treats acne and improves skin complexion.",
      category: "Skin Health",
      ingredients: ["Neem powder", "Turmeric", "Yogurt", "Honey"],
      imageSrc: "https://images.unsplash.com/photo-1596467746588-d0a99025245a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Cumin, Coriander & Fennel Tea",
      description: "Three-seed tea that balances digestion and reduces bloating.",
      category: "Digestive Health",
      ingredients: ["Cumin seeds", "Coriander seeds", "Fennel seeds", "Water"],
      imageSrc: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Brahmi Tonic",
      description: "Memory-enhancing herb preparation that supports cognitive function.",
      category: "Brain Health",
      ingredients: ["Brahmi powder", "Water", "Honey", "Ghee"],
      imageSrc: "https://images.unsplash.com/photo-1554631221-f9603e6808be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
    },
    {
      title: "Amla Juice",
      description: "Vitamin C-rich juice that boosts immunity and improves skin health.",
      category: "Immunity",
      ingredients: ["Amla (Indian gooseberry)", "Water", "Honey"],
      imageSrc: "https://images.unsplash.com/photo-1596046416768-257e6d1326a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    {
      title: "Tulsi (Holy Basil) Tea",
      description: "Aromatic tea that strengthens immunity and relieves respiratory issues.",
      category: "Respiratory Health",
      ingredients: ["Tulsi leaves", "Water", "Honey", "Ginger (optional)"],
      imageSrc: "https://images.unsplash.com/photo-1564890807764-1feef868b6f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Ajwain Water",
      description: "Digestive aid that relieves gas and improves absorption of nutrients.",
      category: "Digestive Health",
      ingredients: ["Ajwain (carom seeds)", "Water"],
      imageSrc: "https://images.unsplash.com/photo-1556679343-c1c1c9308e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
    },
    {
      title: "Cinnamon and Honey Mix",
      description: "Antioxidant-rich blend that supports heart health and balances blood sugar.",
      category: "Metabolic Health",
      ingredients: ["Cinnamon powder", "Raw honey"],
      imageSrc: "https://images.unsplash.com/photo-1612165399085-c7dd9a7d7f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Ghee and Black Pepper",
      description: "Warming remedy for coughs and congestion that soothes the throat.",
      category: "Respiratory Health",
      ingredients: ["Ghee (clarified butter)", "Black pepper", "Honey"],
      imageSrc: "https://images.unsplash.com/photo-1620405116976-f735da1c78cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Mustard Oil Massage",
      description: "Warming oil treatment for joint pain and muscle stiffness.",
      category: "Pain Relief",
      ingredients: ["Mustard oil", "Camphor (optional)", "Eucalyptus oil (optional)"],
      imageSrc: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Coconut Oil Hair Treatment",
      description: "Nourishing oil that strengthens hair and soothes the scalp.",
      category: "Hair Care",
      ingredients: ["Virgin coconut oil", "Curry leaves (optional)", "Hibiscus flowers (optional)"],
      imageSrc: "https://images.unsplash.com/photo-1609108158312-bed14e5122e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Cardamom Infused Water",
      description: "Aromatic drink that freshens breath and aids digestion.",
      category: "Digestive Health",
      ingredients: ["Green cardamom pods", "Water", "Mint leaves (optional)"],
      imageSrc: "https://images.unsplash.com/photo-1631210882920-a6e6a5d27da9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Jaggery and Ginger",
      description: "Sweet and spicy combination that relieves cough and cold symptoms.",
      category: "Respiratory Health",
      ingredients: ["Jaggery", "Fresh ginger", "Water"],
      imageSrc: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Rose Water Toner",
      description: "Gentle toner that refreshes and balances skin pH.",
      category: "Skin Health",
      ingredients: ["Rose water", "Aloe vera gel (optional)", "Witch hazel (optional)"],
      imageSrc: "https://images.unsplash.com/photo-1586182987320-4f17e36640df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    {
      title: "Shatavari Milk",
      description: "Hormone-balancing tonic that supports female reproductive health.",
      category: "Women's Health",
      ingredients: ["Shatavari powder", "Milk", "Honey", "Cardamom"],
      imageSrc: "https://images.unsplash.com/photo-1626682440957-12466531adbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const categories = Array.from(new Set(remedies.map(remedy => remedy.category)));

  const filteredRemedies = remedies.filter(remedy =>
    remedy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    remedy.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    remedy.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    remedy.ingredients.some(ingredient => 
      ingredient.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <PageTransition>
      <div className="min-h-screen pt-24">
        {/* Header */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 to-background"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-lg text-foreground animate-fade-up">Home Remedies</h1>
              <p className="mt-6 paragraph animate-fade-up" style={{ animationDelay: "200ms" }}>
                Discover traditional Ayurvedic remedies using common household ingredients for everyday health concerns.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search remedies, ingredients, or categories..."
                  className="w-full rounded-full border border-input bg-background px-10 py-3 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  className={`px-3 py-1 text-xs rounded-full transition-colors ${
                    searchQuery === "" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                  onClick={() => setSearchQuery("")}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      searchQuery === category 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                    onClick={() => setSearchQuery(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Remedies List */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRemedies.length > 0 ? (
                filteredRemedies.map((remedy, index) => (
                  <AnimatedCard
                    key={remedy.title}
                    title={remedy.title}
                    description={remedy.description}
                    icon={<Leaf size={24} className="text-ayurvedic-forest" />}
                    imageSrc={remedy.imageSrc}
                    delay={index * 100}
                    className="h-full"
                  />
                ))
              ) : (
                <div className="col-span-full py-16 text-center">
                  <h3 className="heading-sm text-muted-foreground">No remedies found</h3>
                  <p className="mt-2 paragraph">Try adjusting your search criteria</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default HomeRemedies;
