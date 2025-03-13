
import PageTransition from "@/components/ui-custom/PageTransition";
import AnimatedCard from "@/components/ui-custom/AnimatedCard";
import { Leaf, Search, Filter, Info, Droplet, Pill, BookOpen, Heart, ChevronDown, Bookmark, BookmarkCheck, Calendar, Clock, Flame, Snowflake } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const PlantProperties = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProperty, setActiveProperty] = useState("All");
  const [selectedPlant, setSelectedPlant] = useState<any>(null);
  const [activeTaste, setActiveTaste] = useState("All");
  const [activePotency, setActivePotency] = useState("All");
  const [activePostDigestive, setActivePostDigestive] = useState("All");
  const [activeSeason, setActiveSeason] = useState("All");
  const [favoritePlants, setFavoritePlants] = useState<string[]>([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [showHerbalFormulations, setShowHerbalFormulations] = useState(false);
  const [selectedDosha, setSelectedDosha] = useState<string | null>(null);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoritePlants');
    if (savedFavorites) {
      setFavoritePlants(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage when they change
  useEffect(() => {
    localStorage.setItem('favoritePlants', JSON.stringify(favoritePlants));
  }, [favoritePlants]);

  const toggleFavorite = (plantName: string) => {
    setFavoritePlants(prev => {
      if (prev.includes(plantName)) {
        toast.success(`Removed ${plantName} from favorites`);
        return prev.filter(name => name !== plantName);
      } else {
        toast.success(`Added ${plantName} to favorites`);
        return [...prev, plantName];
      }
    });
  };

  const plants = [
    {
      name: "Ashwagandha",
      scientificName: "Withania somnifera",
      ayurvedicName: "Ashwagandha",
      properties: ["Adaptogen", "Stress Relief", "Immune Support"],
      description: "Known as Indian Ginseng, this powerful herb helps the body resist physiological and psychological stress.",
      imageSrc: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      doshaEffect: {
        vata: "Balancing",
        pitta: "Balancing",
        kapha: "Slightly Increasing"
      },
      taste: ["Bitter", "Sweet", "Astringent"],
      potency: "Heating",
      postDigestiveEffect: "Sweet",
      season: ["Winter", "Spring"],
      traditionalUses: [
        "Promotes vitality and longevity",
        "Supports healthy sleep patterns",
        "Helps manage stress and anxiety",
        "Supports immune function",
        "Enhances muscle strength and recovery"
      ],
      modernResearch: "Modern studies suggest ashwagandha may help reduce cortisol levels, improve memory and cognitive function, and support thyroid health.",
      herbalFormulations: [
        {
          name: "Ashwagandha Milk",
          ingredients: ["1 tsp Ashwagandha powder", "1 cup milk", "Honey to taste", "Pinch of cardamom"],
          preparation: "Heat milk, add ashwagandha powder and cardamom. Simmer for 3-5 minutes. Sweeten with honey.",
          uses: "Take before bedtime to promote deep sleep and reduce stress."
        },
        {
          name: "Ashwagandha Tea",
          ingredients: ["1 tsp Ashwagandha powder", "1 cup water", "1/2 tsp cinnamon", "Honey to taste"],
          preparation: "Boil water, add ashwagandha powder and cinnamon. Simmer for 5 minutes. Strain and add honey.",
          uses: "Drink in the morning to boost energy and reduce anxiety."
        }
      ]
    },
    {
      name: "Tulsi",
      scientificName: "Ocimum sanctum",
      ayurvedicName: "Tulsi",
      properties: ["Adaptogen", "Respiratory Support", "Antioxidant"],
      description: "Holy Basil is revered for its ability to support respiratory health and provide antioxidant protection.",
      imageSrc: "https://images.unsplash.com/photo-1611071178439-a71cc4e71821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      doshaEffect: {
        vata: "Balancing",
        pitta: "Balancing",
        kapha: "Reducing"
      },
      taste: ["Pungent", "Bitter", "Astringent"],
      potency: "Heating",
      postDigestiveEffect: "Pungent",
      season: ["All Seasons"],
      traditionalUses: [
        "Supports respiratory health",
        "Enhances meditation and spiritual practice",
        "Promotes mental clarity",
        "Supports immune function",
        "Helps purify blood and remove toxins"
      ],
      modernResearch: "Research indicates tulsi has antimicrobial, anti-inflammatory, and adaptogenic properties. It may help manage blood sugar and stress levels.",
      herbalFormulations: [
        {
          name: "Tulsi Tea",
          ingredients: ["2 tsp fresh Tulsi leaves or 1 tsp dried", "1 cup water", "1/2 inch ginger (optional)", "Honey to taste"],
          preparation: "Boil water, add tulsi leaves and ginger. Steep for 5-7 minutes. Strain and add honey if desired.",
          uses: "Drink 2-3 times daily during cold and flu season for immune support."
        },
        {
          name: "Tulsi Kadha",
          ingredients: ["1 tbsp Tulsi leaves", "5-6 black peppercorns", "1 inch ginger", "1/2 tsp turmeric", "2 cups water", "Honey to taste"],
          preparation: "Boil all ingredients except honey in water until reduced to half. Strain and add honey.",
          uses: "Take warm during respiratory infections or allergies."
        }
      ]
    },
    {
      name: "Brahmi",
      scientificName: "Bacopa monnieri",
      ayurvedicName: "Brahmi",
      properties: ["Cognitive Support", "Memory Enhancement", "Antioxidant"],
      description: "This herb has been used for centuries to enhance memory, concentration, and cognitive function.",
      imageSrc: "https://images.unsplash.com/photo-1511994645259-581ca7021334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      doshaEffect: {
        vata: "Balancing",
        pitta: "Balancing",
        kapha: "Balancing"
      },
      taste: ["Bitter", "Astringent", "Sweet"],
      potency: "Cooling",
      postDigestiveEffect: "Sweet",
      season: ["Summer", "Spring"],
      traditionalUses: [
        "Enhances memory and intellect",
        "Supports nervous system health",
        "Promotes longevity",
        "Calms the mind and reduces anxiety",
        "Supports healthy aging of brain tissue"
      ],
      modernResearch: "Studies suggest brahmi contains compounds that may protect brain cells and improve memory formation by enhancing nerve impulse transmission.",
      herbalFormulations: [
        {
          name: "Brahmi Ghee",
          ingredients: ["2 tbsp Brahmi powder or 1/4 cup fresh leaves", "1/2 cup ghee", "1/4 cup water"],
          preparation: "Melt ghee, add brahmi and water. Simmer until water evaporates. Strain and store.",
          uses: "Take 1 tsp daily with warm milk to enhance memory and cognitive function."
        },
        {
          name: "Brahmi Hair Oil",
          ingredients: ["1/4 cup Brahmi powder", "1 cup coconut oil"],
          preparation: "Heat coconut oil, add brahmi powder. Simmer on low heat for 30 minutes. Cool and strain.",
          uses: "Massage into scalp to promote hair growth and reduce stress."
        }
      ]
    },
    {
      name: "Amla",
      scientificName: "Phyllanthus emblica",
      ayurvedicName: "Amalaki",
      properties: ["Antioxidant", "Digestive Support", "Immune Support"],
      description: "Indian Gooseberry is one of the richest natural sources of Vitamin C, supporting immunity and digestion.",
      imageSrc: "https://images.unsplash.com/photo-1618412659753-73dbba4de502?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      doshaEffect: {
        vata: "Balancing",
        pitta: "Reducing",
        kapha: "Balancing"
      },
      taste: ["Sour", "Astringent", "Sweet", "Bitter", "Pungent"],
      potency: "Cooling",
      postDigestiveEffect: "Sweet",
      season: ["All Seasons"],
      traditionalUses: [
        "Promotes healthy digestion",
        "Supports immune function",
        "Enhances skin health and appearance",
        "Supports liver function",
        "Promotes healthy eyesight"
      ],
      modernResearch: "Research shows amla has one of the highest concentrations of vitamin C of any natural food. It has strong antioxidant and anti-inflammatory properties.",
      herbalFormulations: [
        {
          name: "Amla Juice",
          ingredients: ["1 fresh Amla or 1 tsp Amla powder", "1 cup water", "Honey to taste", "Pinch of salt"],
          preparation: "Blend fresh amla with water or mix amla powder with water. Add honey and salt.",
          uses: "Drink daily on an empty stomach to boost immunity and improve digestion."
        },
        {
          name: "Triphala with Amla",
          ingredients: ["2 parts Amla powder", "1 part Haritaki powder", "1 part Bibhitaki powder", "Honey to taste"],
          preparation: "Mix all powders together. Take 1 tsp with warm water or honey.",
          uses: "Take before bed for gentle detoxification and digestive support."
        }
      ]
    },
    {
      name: "Shatavari",
      scientificName: "Asparagus racemosus",
      ayurvedicName: "Shatavari",
      properties: ["Hormonal Balance", "Reproductive Health", "Adaptogen"],
      description: "Known as the 'Queen of Herbs', it supports hormonal balance and female reproductive health.",
      imageSrc: "https://images.unsplash.com/photo-1601183380902-47f7b2ce46a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      doshaEffect: {
        vata: "Balancing",
        pitta: "Balancing",
        kapha: "Slightly Increasing"
      },
      taste: ["Sweet", "Bitter"],
      potency: "Cooling",
      postDigestiveEffect: "Sweet",
      season: ["Summer", "Autumn"],
      traditionalUses: [
        "Supports female reproductive health",
        "Promotes fertility and healthy lactation",
        "Nourishes and rejuvenates tissues",
        "Supports healthy digestion",
        "Moistens dry tissues throughout the body"
      ],
      modernResearch: "Studies suggest shatavari contains phytoestrogens that may help balance hormones and support the female reproductive system.",
      herbalFormulations: [
        {
          name: "Shatavari Milk",
          ingredients: ["1 tsp Shatavari powder", "1 cup milk", "Cardamom powder", "Saffron (optional)", "Honey to taste"],
          preparation: "Heat milk, add shatavari powder, cardamom, and saffron. Simmer for 3-5 minutes. Add honey after cooling slightly.",
          uses: "Drink daily to support female reproductive health and hormonal balance."
        },
        {
          name: "Shatavari Ghee",
          ingredients: ["2 tbsp Shatavari powder", "1/2 cup ghee", "1/4 cup water"],
          preparation: "Heat ghee, add shatavari powder and water. Simmer until water evaporates. Strain and store.",
          uses: "Take 1 tsp daily to nourish reproductive tissues and support fertility."
        }
      ]
    },
    {
      name: "Neem",
      scientificName: "Azadirachta indica",
      ayurvedicName: "Nimba",
      properties: ["Skin Health", "Antimicrobial", "Detoxification"],
      description: "Known for its powerful purifying properties, supporting skin health and natural detoxification.",
      imageSrc: "https://images.unsplash.com/photo-1511994645259-581ca7021334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      doshaEffect: {
        vata: "Increasing",
        pitta: "Balancing",
        kapha: "Reducing"
      },
      taste: ["Bitter"],
      potency: "Cooling",
      postDigestiveEffect: "Pungent",
      season: ["Spring", "Summer"],
      traditionalUses: [
        "Purifies blood and detoxifies the body",
        "Supports healthy skin and treats skin conditions",
        "Maintains healthy blood sugar levels",
        "Promotes oral health",
        "Supports healthy immune response"
      ],
      modernResearch: "Research has confirmed neem's antimicrobial, anti-inflammatory, and antiparasitic properties. It contains compounds that may help regulate blood sugar.",
      herbalFormulations: [
        {
          name: "Neem Face Pack",
          ingredients: ["2 tbsp Neem powder", "1 tbsp Sandalwood powder", "1 tbsp Plain yogurt", "1 tsp Honey"],
          preparation: "Mix all ingredients to form a paste. Apply to face and leave for 15-20 minutes. Rinse with warm water.",
          uses: "Use weekly for clear, healthy skin and to treat acne or other skin issues."
        },
        {
          name: "Neem Tea",
          ingredients: ["1 tsp Neem powder or 10-15 fresh Neem leaves", "2 cups water", "Honey to taste (optional)"],
          preparation: "Boil water with neem powder or leaves. Reduce to simmer for 10 minutes. Strain and add honey if desired.",
          uses: "Drink during Panchakarma or seasonal transitions for detoxification."
        }
      ]
    },
    {
      name: "Triphala",
      scientificName: "Combination of three fruits",
      ayurvedicName: "Triphala",
      properties: ["Digestive Health", "Detoxification", "Rejuvenation"],
      description: "A traditional Ayurvedic formulation consisting of three fruits: Amalaki, Bibhitaki, and Haritaki, known for its balancing and rejuvenating effects.",
      imageSrc: "https://images.unsplash.com/photo-1611071178439-a71cc4e71821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      doshaEffect: {
        vata: "Balancing",
        pitta: "Balancing",
        kapha: "Balancing"
      },
      taste: ["Sweet", "Sour", "Pungent", "Bitter", "Astringent"],
      potency: "Neutral",
      postDigestiveEffect: "Sweet",
      season: ["All Seasons"],
      traditionalUses: [
        "Promotes gentle cleansing and detoxification",
        "Supports healthy digestion and elimination",
        "Nourishes and tones the digestive tract",
        "Supports healthy eyes and vision",
        "Promotes longevity and rejuvenation"
      ],
      modernResearch: "Studies suggest triphala has antioxidant, anti-inflammatory, and prebiotic properties. It may support gut health, immune function, and oral health.",
      herbalFormulations: [
        {
          name: "Triphala Tea",
          ingredients: ["1 tsp Triphala powder", "1 cup hot water", "Honey to taste"],
          preparation: "Add triphala powder to hot water. Steep for 10 minutes. Add honey if desired.",
          uses: "Drink before bed for gentle overnight detoxification and digestive support."
        },
        {
          name: "Triphala Churna",
          ingredients: ["1 part Amalaki powder", "1 part Bibhitaki powder", "1 part Haritaki powder"],
          preparation: "Mix all three powders together thoroughly. Store in an airtight container.",
          uses: "Take 1/2-1 tsp with warm water before bed for digestive health and detoxification."
        }
      ]
    },
    {
      name: "Guduchi",
      scientificName: "Tinospora cordifolia",
      ayurvedicName: "Guduchi",
      properties: ["Immune Modulator", "Adaptogen", "Anti-inflammatory"],
      description: "Known as 'Amrita' or nectar of immortality, this powerful herb enhances immunity and promotes vitality.",
      imageSrc: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      doshaEffect: {
        vata: "Balancing",
        pitta: "Balancing",
        kapha: "Balancing"
      },
      taste: ["Bitter", "Astringent", "Sweet"],
      potency: "Heating",
      postDigestiveEffect: "Sweet",
      season: ["Winter", "Spring"],
      traditionalUses: [
        "Supports healthy immune function",
        "Promotes vitality and strength",
        "Helps manage fever and infections",
        "Supports healthy liver function",
        "Helps balance blood sugar levels"
      ],
      modernResearch: "Research indicates guduchi has immunomodulatory, antioxidant, and anti-inflammatory properties. It may help protect against various stressors.",
      herbalFormulations: [
        {
          name: "Guduchi Kwath",
          ingredients: ["2 tbsp Guduchi powder or stems", "2 cups water", "1/2 tsp ginger powder", "Honey to taste"],
          preparation: "Boil guduchi and ginger in water until reduced to half. Strain and add honey if desired.",
          uses: "Take during seasonal transitions to boost immunity and prevent infections."
        },
        {
          name: "Guduchi Satva",
          ingredients: ["Guduchi stems", "Water"],
          preparation: "Crush guduchi stems, soak in water overnight. Filter through cloth. Allow the filtrate to settle. Decant water and dry the sediment.",
          uses: "Take 1/2 tsp with warm water to enhance immunity during illness or recovery."
        }
      ]
    },
    {
      name: "Licorice",
      scientificName: "Glycyrrhiza glabra",
      ayurvedicName: "Yashtimadhu",
      properties: ["Demulcent", "Anti-inflammatory", "Expectorant"],
      description: "A sweet herb used to harmonize and enhance other herbs while soothing mucous membranes throughout the body.",
      imageSrc: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      doshaEffect: {
        vata: "Reducing",
        pitta: "Reducing",
        kapha: "Increasing"
      },
      taste: ["Sweet"],
      potency: "Cooling",
      postDigestiveEffect: "Sweet",
      season: ["Spring", "Summer"],
      traditionalUses: [
        "Soothes irritated mucous membranes",
        "Supports respiratory health",
        "Enhances voice quality",
        "Promotes adrenal health",
        "Harmonizes herbal formulations"
      ],
      modernResearch: "Studies show licorice contains compounds with anti-inflammatory and antimicrobial properties. It may support adrenal function and help with respiratory conditions.",
      herbalFormulations: [
        {
          name: "Licorice Tea",
          ingredients: ["1 tsp Licorice root or powder", "1 cup water", "Honey (optional)"],
          preparation: "Simmer licorice in water for 10 minutes. Strain and add honey if desired.",
          uses: "Drink to soothe sore throat and support respiratory health."
        },
        {
          name: "Licorice and Honey Mixture",
          ingredients: ["1 tbsp Licorice powder", "2 tbsp Raw honey"],
          preparation: "Mix licorice powder thoroughly with honey. Store in an airtight container.",
          uses: "Take 1 tsp as needed for throat irritation or dry cough."
        }
      ]
    },
    {
      name: "Ginger",
      scientificName: "Zingiber officinale",
      ayurvedicName: "Ardrakam",
      properties: ["Digestive Aid", "Anti-inflammatory", "Warming"],
      description: "A warming spice that kindles digestive fire (agni) and improves absorption and assimilation.",
      imageSrc: "https://images.unsplash.com/photo-1615485500834-bc9d6475723a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      doshaEffect: {
        vata: "Reducing",
        pitta: "Increasing (in excess)",
        kapha: "Reducing"
      },
      taste: ["Pungent", "Sweet"],
      potency: "Heating",
      postDigestiveEffect: "Sweet",
      season: ["Winter", "Autumn"],
      traditionalUses: [
        "Enhances digestion and appetite",
        "Relieves nausea and indigestion",
        "Reduces inflammation and pain",
        "Supports respiratory health",
        "Improves circulation"
      ],
      modernResearch: "Research confirms ginger's anti-inflammatory, antiemetic, and digestive properties. It may help reduce pain, nausea, and inflammation.",
      herbalFormulations: [
        {
          name: "Ginger Tea",
          ingredients: ["1 inch fresh ginger root or 1 tsp dried ginger", "1 cup water", "Honey and lemon to taste"],
          preparation: "Boil ginger in water for 5-10 minutes. Add honey and lemon to taste.",
          uses: "Drink to improve digestion, relieve nausea, or warm the body in cold weather."
        },
        {
          name: "Ginger Compress",
          ingredients: ["2 tbsp grated fresh ginger", "2 cups hot water", "Clean cloth"],
          preparation: "Steep ginger in hot water for 10 minutes. Soak cloth in the infusion and apply to affected area.",
          uses: "Apply to joints or muscles to relieve pain and inflammation."
        }
      ]
    },
    {
      name: "Cumin",
      scientificName: "Cuminum cyminum",
      ayurvedicName: "Jiraka",
      properties: ["Carminative", "Digestive Aid", "Antispasmodic"],
      description: "A warming spice that enhances digestion and helps remove ama (toxins) from the digestive tract.",
      imageSrc: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      doshaEffect: {
        vata: "Balancing",
        pitta: "Balancing",
        kapha: "Balancing"
      },
      taste: ["Pungent", "Bitter"],
      potency: "Heating",
      postDigestiveEffect: "Pungent",
      season: ["All Seasons"],
      traditionalUses: [
        "Enhances digestion and relieves gas",
        "Stimulates appetite",
        "Supports healthy metabolism",
        "Helps remove ama (toxins)",
        "Supports lactation in new mothers"
      ],
      modernResearch: "Studies show cumin has antioxidant, antimicrobial, and digestive properties. It may help with gas, bloating, and digestive discomfort.",
      herbalFormulations: [
        {
          name: "Jeera Water",
          ingredients: ["1 tsp cumin seeds", "2 cups water"],
          preparation: "Boil cumin seeds in water for 5 minutes. Strain or leave seeds in the water.",
          uses: "Drink throughout the day to improve digestion and metabolism."
        },
        {
          name: "Digestive Cumin Mixture",
          ingredients: ["2 tbsp roasted cumin powder", "1 tsp ginger powder", "1/2 tsp black salt", "Pinch of asafoetida"],
          preparation: "Mix all ingredients thoroughly. Store in an airtight container.",
          uses: "Take 1/2 tsp after meals with warm water to enhance digestion and prevent gas."
        }
      ]
    },
    {
      name: "Turmeric",
      scientificName: "Curcuma longa",
      ayurvedicName: "Haridra",
      properties: ["Anti-inflammatory", "Antioxidant", "Blood Purifier"],
      description: "A golden spice with powerful anti-inflammatory properties, used extensively in Ayurvedic medicine.",
      imageSrc: "https://images.unsplash.com/photo-1615485500122-curtainshadowcontrast?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      doshaEffect: {
        vata: "Balancing",
        pitta: "Balancing",
        kapha: "Balancing"
      },
      taste: ["Bitter", "Pungent", "Astringent"],
      potency: "Heating",
      postDigestiveEffect: "Pungent",
      season: ["All Seasons"],
      traditionalUses: [
        "Reduces inflammation",
        "Purifies blood",
        "Supports healthy skin",
        "Promotes proper digestion",
        "Enhances immune function"
      ],
      modernResearch: "Extensive research confirms turmeric's anti-inflammatory and antioxidant properties. Curcumin, its active compound, has been studied for various health benefits.",
      herbalFormulations: [
        {
          name: "Golden Milk",
          ingredients: ["1 tsp turmeric powder", "1 cup milk", "Pinch of black pepper", "1/2 tsp ghee", "Honey to taste"],
          preparation: "Heat milk, add turmeric, black pepper, and ghee. Simmer for 3-5 minutes. Add honey after cooling slightly.",
          uses: "Drink before bed to reduce inflammation and support immune function."
        },
        {
          name: "Turmeric Paste",
          ingredients: ["1/4 cup turmeric powder", "1/2 cup water", "1 tbsp ghee"],
          preparation: "Mix turmeric with water in a small pan. Heat gently while stirring until it forms a paste. Add ghee and mix well.",
          uses: "Apply externally to skin for various skin conditions or mix 1/4 tsp with warm milk for internal use."
        }
      ]
    },
    {
      name: "Fenugreek",
      scientificName: "Trigonella foenum-graecum",
      ayurvedicName: "Methi",
      properties: ["Digestive Aid", "Anti-Diabetic", "Galactagogue"],
      description: "A bitter herb that supports digestion and helps balance blood sugar levels.",
      imageSrc: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      doshaEffect: {
        vata: "Reducing",
        pitta: "Balancing",
        kapha: "Reducing"
      },
      taste: ["Bitter"],
      potency: "Heating",
      postDigestiveEffect: "Pungent",
      season: ["Winter", "Spring"],
      traditionalUses: [
        "Supports healthy digestion",
        "Helps balance blood sugar levels",
        "Promotes breast milk production",
        "Reduces inflammation",
        "Supports kidney function"
      ],
      modernResearch: "Studies suggest fenugreek may help lower blood sugar levels, increase milk production in nursing mothers, and improve digestion.",
      herbalFormulations: [
        {
          name: "Fenugreek Tea",
          ingredients: ["1 tsp fenugreek seeds", "1 cup water", "Honey to taste (optional)"],
          preparation: "Soak fenugreek seeds overnight or boil them in water for 5 minutes. Strain and add honey if desired.",
          uses: "Drink to support digestion, balance blood sugar, or increase breast milk production."
        },
        {
          name: "Fenugreek Seed Powder",
          ingredients: ["Roasted fenugreek seeds"],
          preparation: "Dry roast fenugreek seeds until aromatic. Grind into a fine powder.",
          uses: "Take 1/2 tsp with warm water before meals to enhance digestion and balance blood sugar."
        }
      ]
    }
  ];

  // Get all unique properties, tastes, and potencies
  const allProperties = Array.from(new Set(plants.flatMap(plant => plant.properties)));
  const allTastes = Array.from(new Set(plants.flatMap(plant => plant.taste)));
  const allPotencies = Array.from(new Set(plants.map(plant => plant.potency)));
  const allPostDigestive = Array.from(new Set(plants.map(plant => plant.postDigestiveEffect)));
  const allSeasons = Array.from(new Set(plants.flatMap(plant => plant.season)));

  // Health issues for personalized suggestions
  const healthIssues = [
    { value: "stress", label: "Stress & Anxiety" },
    { value: "digestion", label: "Digestive Issues" },
    { value: "immunity", label: "Low Immunity" },
    { value: "inflammation", label: "Inflammation" },
    { value: "sleep", label: "Sleep Issues" },
    { value: "energy", label: "Low Energy" },
    { value: "hormonal", label: "Hormonal Imbalance" }
  ];

  // Get herb suggestions based on health issue
  const getHerbSuggestions = (issue: string) => {
    switch (issue) {
      case "stress":
        return ["Ashwagandha", "Brahmi", "Tulsi"];
      case "digestion":
        return ["Triphala", "Ginger", "Cumin"];
      case "immunity":
        return ["Guduchi", "Tulsi", "Amla"];
      case "inflammation":
        return ["Turmeric", "Ginger", "Neem"];
      case "sleep":
        return ["Ashwagandha", "Brahmi", "Licorice"];
      case "energy":
        return ["Ashwagandha", "Guduchi", "Shatavari"];
      case "hormonal":
        return ["Shatavari", "Fenugreek", "Licorice"];
      default:
        return [];
    }
  };

  // Get herb suggestions based on dosha
  const getDoshaSuggestions = (dosha: string) => {
    switch (dosha) {
      case "vata":
        return plants.filter(plant => plant.doshaEffect.vata === "Balancing" || plant.doshaEffect.vata === "Reducing");
      case "pitta":
        return plants.filter(plant => plant.doshaEffect.pitta === "Balancing" || plant.doshaEffect.pitta === "Reducing");
      case "kapha":
        return plants.filter(plant => plant.doshaEffect.kapha === "Balancing" || plant.doshaEffect.kapha === "Reducing");
      default:
        return [];
    }
  };

  // Handle herb suggestion
  const handleHealthIssueChange = (issue: string) => {
    const suggestions = getHerbSuggestions(issue);
    toast.success(`Recommended herbs for ${healthIssues.find(i => i.value === issue)?.label}: ${suggestions.join(", ")}`);
  };

  // Handle dosha selection for herb suggestions
  const handleDoshaChange = (dosha: string) => {
    setSelectedDosha(dosha);
    const suggestions = getDoshaSuggestions(dosha);
    if (suggestions.length > 0) {
      toast.success(`Found ${suggestions.length} herbs that balance ${dosha.charAt(0).toUpperCase() + dosha.slice(1)} dosha.`);
    }
  };

  // Filter plants based on all filters
  const filteredPlants = plants.filter(plant => {
    const matchesSearch = 
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.ayurvedicName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.properties.some(prop => prop.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesProperty = 
      activeProperty === "All" || 
      plant.properties.includes(activeProperty);
    
    const matchesTaste =
      activeTaste === "All" ||
      plant.taste.includes(activeTaste);
    
    const matchesPotency =
      activePotency === "All" ||
      plant.potency === activePotency;
    
    const matchesPostDigestive =
      activePostDigestive === "All" ||
      plant.postDigestiveEffect === activePostDigestive;
    
    const matchesSeason =
      activeSeason === "All" ||
      plant.season.includes(activeSeason);
    
    const matchesFavorites =
      !showFavoritesOnly ||
      favoritePlants.includes(plant.name);
    
    const matchesDosha =
      !selectedDosha ||
      plant.doshaEffect[selectedDosha as keyof typeof plant.doshaEffect] === "Balancing" ||
      plant.doshaEffect[selectedDosha as keyof typeof plant.doshaEffect] === "Reducing";
    
    return matchesSearch && matchesProperty && matchesTaste && matchesPotency && 
           matchesPostDigestive && matchesSeason && matchesFavorites && matchesDosha;
  });

  return (
    <PageTransition>
      <div className="min-h-screen pt-24">
        {/* Header */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 to-background"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-lg text-foreground animate-fade-up">Ayurvedic Plant Database</h1>
              <p className="mt-6 paragraph animate-fade-up" style={{ animationDelay: "200ms" }}>
                Explore the medicinal properties of plants used in traditional Ayurvedic healing, their effects on doshas, and how to use them for better health.
              </p>
            </div>
          </div>
        </section>

        {/* Personalized Herbal Suggestions */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="heading-sm text-center mb-6 animate-fade-up">Personalized Herbal Suggestions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Health Issues */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm animate-fade-up" style={{ animationDelay: "100ms" }}>
                  <h3 className="font-medium text-lg mb-4 flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-primary" />
                    Based on Health Concerns
                  </h3>
                  <p className="text-muted-foreground mb-4">Select a health concern to get personalized herb recommendations:</p>
                  
                  <Select onValueChange={handleHealthIssueChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a health concern" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {healthIssues.map((issue) => (
                          <SelectItem key={issue.value} value={issue.value}>
                            {issue.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Dosha Balance */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm animate-fade-up" style={{ animationDelay: "200ms" }}>
                  <h3 className="font-medium text-lg mb-4 flex items-center">
                    <Droplet className="h-5 w-5 mr-2 text-primary" />
                    Based on Dosha Balance
                  </h3>
                  <p className="text-muted-foreground mb-4">Select your dominant dosha to find herbs that help maintain balance:</p>
                  
                  <Select onValueChange={handleDoshaChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your dosha" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="vata">Vata</SelectItem>
                        <SelectItem value="pitta">Pitta</SelectItem>
                        <SelectItem value="kapha">Kapha</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search plants by name, property, or description..."
                  className="w-full rounded-full border border-input bg-background px-10 py-3 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filters */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-lg flex items-center">
                    <Filter size={18} className="mr-2 text-primary" />
                    <span>Advanced Filters</span>
                  </h3>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setActiveProperty("All");
                      setActiveTaste("All");
                      setActivePotency("All");
                      setActivePostDigestive("All");
                      setActiveSeason("All");
                      setSelectedDosha(null);
                      setShowFavoritesOnly(false);
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {/* Property Filter */}
                  <div>
                    <div className="text-sm font-medium mb-2">Medicinal Property</div>
                    <Select value={activeProperty} onValueChange={setActiveProperty}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select property" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All Properties</SelectItem>
                        {allProperties.map((property) => (
                          <SelectItem key={property} value={property}>
                            {property}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Taste Filter */}
                  <div>
                    <div className="text-sm font-medium mb-2">Taste (Rasa)</div>
                    <Select value={activeTaste} onValueChange={setActiveTaste}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select taste" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All Tastes</SelectItem>
                        {allTastes.map((taste) => (
                          <SelectItem key={taste} value={taste}>
                            {taste}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Potency Filter */}
                  <div>
                    <div className="text-sm font-medium mb-2">Potency (Virya)</div>
                    <Select value={activePotency} onValueChange={setActivePotency}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select potency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All Potencies</SelectItem>
                        {allPotencies.map((potency) => (
                          <SelectItem key={potency} value={potency}>
                            {potency}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Post-Digestive Effect Filter */}
                  <div>
                    <div className="text-sm font-medium mb-2">Post-Digestive Effect (Vipaka)</div>
                    <Select value={activePostDigestive} onValueChange={setActivePostDigestive}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select effect" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All Effects</SelectItem>
                        {allPostDigestive.map((effect) => (
                          <SelectItem key={effect} value={effect}>
                            {effect}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Season Filter */}
                  <div>
                    <div className="text-sm font-medium mb-2">Best Season (Ritucharya)</div>
                    <Select value={activeSeason} onValueChange={setActiveSeason}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select season" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All Seasons</SelectItem>
                        {allSeasons.map((season) => (
                          <SelectItem key={season} value={season}>
                            {season}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Favorites Filter */}
                  <div className="flex items-center space-x-2">
                    <div className="text-sm font-medium">Favorites Only</div>
                    <Button 
                      variant={showFavoritesOnly ? "default" : "outline"} 
                      size="sm"
                      onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                      className="flex items-center gap-2"
                    >
                      {showFavoritesOnly ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                      {showFavoritesOnly ? "Showing Favorites" : "Show All Plants"}
                    </Button>
                  </div>
                </div>
                
                {/* Home Remedies Toggle */}
                <div className="mt-4 pt-4 border-t">
                  <Button 
                    variant={showHerbalFormulations ? "default" : "outline"} 
                    onClick={() => setShowHerbalFormulations(!showHerbalFormulations)}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Pill size={18} />
                    {showHerbalFormulations ? "Hide Herbal Formulations" : "Show Herbal Formulations & Home Remedies"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Plant Detail View */}
            {selectedPlant && (
              <div className="mb-12 animate-fade-up">
                <Button 
                  variant="outline" 
                  className="mb-6"
                  onClick={() => setSelectedPlant(null)}
                >
                  ← Back to Plants
                </Button>
                
                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-md">
                  <div className="md:flex">
                    <div className="md:w-2/5 h-64 md:h-auto relative">
                      <img 
                        src={selectedPlant.imageSrc} 
                        alt={selectedPlant.name} 
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      <div className="absolute top-3 right-3">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full bg-black/30 text-white hover:bg-black/50"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(selectedPlant.name);
                          }}
                        >
                          {favoritePlants.includes(selectedPlant.name) ? (
                            <BookmarkCheck className="h-4 w-4" />
                          ) : (
                            <Bookmark className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <div className="md:w-3/5 p-6 md:p-8">
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="heading-sm">{selectedPlant.name}</h2>
                          <p className="text-sm text-muted-foreground mb-1">
                            <span className="font-medium">Scientific Name:</span> {selectedPlant.scientificName}
                          </p>
                          <p className="text-sm text-muted-foreground italic mb-4">
                            <span className="font-medium">Ayurvedic Name:</span> {selectedPlant.ayurvedicName}
                          </p>
                        </div>
                        
                        <div className="hidden md:flex items-center space-x-1">
                          {selectedPlant.season.map((season: string) => (
                            <span 
                              key={season}
                              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                            >
                              <Calendar size={12} className="mr-1" />
                              {season}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {selectedPlant.properties.map((property: string) => (
                          <span 
                            key={property}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-primary"
                          >
                            {property}
                          </span>
                        ))}
                      </div>
                      
                      <p className="mb-6">{selectedPlant.description}</p>
                      
                      <Tabs defaultValue="properties" className="w-full">
                        <TabsList className="mb-4">
                          <TabsTrigger value="properties" className="flex items-center gap-1">
                            <Leaf size={14} />
                            <span>Ayurvedic Properties</span>
                          </TabsTrigger>
                          <TabsTrigger value="uses" className="flex items-center gap-1">
                            <Pill size={14} />
                            <span>Traditional Uses</span>
                          </TabsTrigger>
                          <TabsTrigger value="research" className="flex items-center gap-1">
                            <BookOpen size={14} />
                            <span>Modern Research</span>
                          </TabsTrigger>
                          {showHerbalFormulations && (
                            <TabsTrigger value="formulations" className="flex items-center gap-1">
                              <Clock size={14} />
                              <span>Formulations</span>
                            </TabsTrigger>
                          )}
                        </TabsList>
                        
                        <TabsContent value="properties" className="space-y-4">
                          <div>
                            <h3 className="font-medium text-sm mb-2 flex items-center">
                              <Heart size={16} className="mr-2 text-primary" />
                              Dosha Effects
                            </h3>
                            <div className="grid grid-cols-3 gap-2">
                              <div className="p-2 rounded bg-muted/50">
                                <span className="block text-xs text-muted-foreground">Vata</span>
                                <span className="font-medium">{selectedPlant.doshaEffect.vata}</span>
                              </div>
                              <div className="p-2 rounded bg-muted/50">
                                <span className="block text-xs text-muted-foreground">Pitta</span>
                                <span className="font-medium">{selectedPlant.doshaEffect.pitta}</span>
                              </div>
                              <div className="p-2 rounded bg-muted/50">
                                <span className="block text-xs text-muted-foreground">Kapha</span>
                                <span className="font-medium">{selectedPlant.doshaEffect.kapha}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="font-medium text-sm mb-2 flex items-center">
                              <Droplet size={16} className="mr-2 text-primary" />
                              Taste & Potency
                            </h3>
                            <div className="flex flex-wrap gap-1 mb-2">
                              {selectedPlant.taste.map((taste: string) => (
                                <span 
                                  key={taste}
                                  className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary"
                                >
                                  {taste}
                                </span>
                              ))}
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="p-2 rounded bg-muted/50 flex items-center">
                                <Flame className="h-4 w-4 mr-2 text-amber-500" />
                                <div>
                                  <span className="block text-xs text-muted-foreground">Potency (Virya)</span>
                                  <span className="font-medium">{selectedPlant.potency}</span>
                                </div>
                              </div>
                              <div className="p-2 rounded bg-muted/50 flex items-center">
                                <Snowflake className="h-4 w-4 mr-2 text-blue-500" />
                                <div>
                                  <span className="block text-xs text-muted-foreground">Post-Digestive (Vipaka)</span>
                                  <span className="font-medium">{selectedPlant.postDigestiveEffect}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="uses">
                          <h3 className="font-medium text-sm mb-2">Traditional Ayurvedic Uses</h3>
                          <ul className="list-disc pl-5 space-y-1">
                            {selectedPlant.traditionalUses.map((use: string, index: number) => (
                              <li key={index}>{use}</li>
                            ))}
                          </ul>
                        </TabsContent>
                        
                        <TabsContent value="research">
                          <h3 className="font-medium text-sm mb-2">Modern Research Findings</h3>
                          <p>{selectedPlant.modernResearch}</p>
                        </TabsContent>
                        
                        {showHerbalFormulations && (
                          <TabsContent value="formulations">
                            <h3 className="font-medium text-sm mb-4">Herbal Formulations & Home Remedies</h3>
                            <div className="space-y-6">
                              {selectedPlant.herbalFormulations.map((formulation: any, index: number) => (
                                <div key={index} className="border border-border rounded-lg p-4 bg-muted/20">
                                  <h4 className="font-medium mb-2">{formulation.name}</h4>
                                  <div className="mb-2">
                                    <h5 className="text-xs text-muted-foreground mb-1">Ingredients:</h5>
                                    <ul className="list-disc pl-5 space-y-0.5 text-sm">
                                      {formulation.ingredients.map((ingredient: string, i: number) => (
                                        <li key={i}>{ingredient}</li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="mb-2">
                                    <h5 className="text-xs text-muted-foreground mb-1">Preparation:</h5>
                                    <p className="text-sm">{formulation.preparation}</p>
                                  </div>
                                  <div>
                                    <h5 className="text-xs text-muted-foreground mb-1">Uses:</h5>
                                    <p className="text-sm">{formulation.uses}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </TabsContent>
                        )}
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Plants Grid */}
            {!selectedPlant && (
              <>
                <div className="text-center mb-8">
                  <h2 className="heading-md mb-2">Ayurvedic Plant Directory</h2>
                  <p className="text-muted-foreground">
                    {filteredPlants.length} plants found matching your criteria
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPlants.length > 0 ? (
                    filteredPlants.map((plant, index) => (
                      <AnimatedCard
                        key={plant.name}
                        title={plant.name}
                        description={plant.description}
                        icon={<Leaf size={20} className="text-primary" />}
                        imageSrc={plant.imageSrc}
                        onClick={() => setSelectedPlant(plant)}
                        delay={index * 100}
                        className="cursor-pointer"
                        badge={plant.potency === "Heating" ? "Warming" : "Cooling"}
                      />
                    ))
                  ) : (
                    <div className="col-span-full py-16 text-center">
                      <h3 className="heading-sm text-muted-foreground">No plants found</h3>
                      <p className="mt-2 paragraph">Try adjusting your search or filter criteria</p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Home Remedies Section */}
        {showHerbalFormulations && !selectedPlant && filteredPlants.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <h2 className="heading-md text-center mb-6">Ayurvedic Home Remedies</h2>
                <p className="text-center text-muted-foreground mb-8">
                  Traditional herbal formulations for common health concerns
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {plants
                    .slice(0, 6)
                    .flatMap(plant => 
                      plant.herbalFormulations.map((formulation, formIndex) => ({
                        plantName: plant.name,
                        plantImage: plant.imageSrc,
                        ...formulation
                      }))
                    )
                    .slice(0, 6)
                    .map((formulation, index) => (
                      <div 
                        key={index} 
                        className="bg-card border border-border rounded-xl p-6 shadow-sm"
                        onClick={() => {
                          const plant = plants.find(p => p.name === formulation.plantName);
                          if (plant) {
                            setSelectedPlant(plant);
                            // Give time for the component to mount before changing tab
                            setTimeout(() => {
                              const tabButtons = document.querySelectorAll('[role="tab"]');
                              const formulationTab = Array.from(tabButtons).find(
                                button => button.textContent?.includes('Formulations')
                              );
                              if (formulationTab) {
                                (formulationTab as HTMLElement).click();
                              }
                            }, 100);
                          }
                        }}
                        className="cursor-pointer hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="h-12 w-12 rounded-full overflow-hidden">
                            <img 
                              src={formulation.plantImage} 
                              alt={formulation.plantName}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{formulation.name}</h3>
                            <p className="text-sm text-muted-foreground">From {formulation.plantName}</p>
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <h4 className="text-xs font-medium text-muted-foreground mb-1">Key Ingredients:</h4>
                          <p className="text-sm">
                            {formulation.ingredients.slice(0, 2).join(", ")}
                            {formulation.ingredients.length > 2 && ", ..."}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-xs font-medium text-muted-foreground mb-1">Benefits:</h4>
                          <p className="text-sm line-clamp-2">{formulation.uses}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
                
                <div className="mt-8 text-center">
                  <Button 
                    variant="outline"
                    onClick={() => {
                      if (filteredPlants.length > 0) {
                        setSelectedPlant(filteredPlants[0]);
                        setTimeout(() => {
                          const tabButtons = document.querySelectorAll('[role="tab"]');
                          const formulationTab = Array.from(tabButtons).find(
                            button => button.textContent?.includes('Formulations')
                          );
                          if (formulationTab) {
                            (formulationTab as HTMLElement).click();
                          }
                        }, 100);
                      }
                    }}
                  >
                    View More Herbal Remedies
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Seasonal Herbs Section */}
        {!selectedPlant && filteredPlants.length > 0 && (
          <section className="py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <h2 className="heading-md text-center mb-2">Seasonal Herb Guide (Ritucharya)</h2>
                <p className="text-center text-muted-foreground mb-8">
                  Herbs and plants especially beneficial during different seasons
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {["Spring", "Summer", "Autumn", "Winter"].map((season) => {
                    const seasonalPlants = plants.filter(plant => plant.season.includes(season));
                    return (
                      <div 
                        key={season} 
                        className="bg-card border border-border rounded-xl p-6 shadow-sm"
                      >
                        <div className="flex items-center mb-4">
                          <Calendar className="h-5 w-5 mr-2 text-primary" />
                          <h3 className="font-medium">{season}</h3>
                        </div>
                        
                        <ul className="space-y-2">
                          {seasonalPlants.slice(0, 5).map((plant) => (
                            <li 
                              key={plant.name} 
                              className="flex items-center"
                              onClick={() => setSelectedPlant(plant)}
                              className="cursor-pointer hover:text-primary"
                            >
                              <Leaf className="h-3 w-3 mr-2 text-primary" />
                              {plant.name}
                            </li>
                          ))}
                        </ul>
                        
                        {seasonalPlants.length > 5 && (
                          <Button 
                            variant="link" 
                            className="mt-2 p-0 h-auto text-sm"
                            onClick={() => {
                              setActiveSeason(season);
                              setActiveProperty("All");
                              setActiveTaste("All");
                              setActivePotency("All");
                              setActivePostDigestive("All");
                              setShowFavoritesOnly(false);
                              setSearchQuery("");
                            }}
                          >
                            View all {seasonalPlants.length} herbs
                          </Button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </PageTransition>
  );
};

export default PlantProperties;
