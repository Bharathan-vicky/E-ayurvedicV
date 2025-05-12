
// Ayurvedic plant database
export const plants = [
  {
    id: 1,
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    ayurvedicName: "Ashwagandha",
    image: "https://images.unsplash.com/photo-1590114062695-f4ca7b50a3c5",
    description: "Known as 'Indian Winter cherry' or 'Indian Ginseng', Ashwagandha is one of the most important herbs in Ayurveda.",
    benefits: ["Reduces anxiety and stress", "Improves cognitive function", "Boosts immunity", "Increases energy levels"],
    properties: {
      rasa: ["Bitter", "Astringent"],
      virya: "Heating",
      vipaka: "Pungent",
      doshaEffect: {
        vata: "Balances",
        pitta: "Increases (in excess)",
        kapha: "Balances"
      }
    },
    uses: [
      "Stress and anxiety management",
      "Improving memory and cognitive function",
      "Boosting immune system",
      "Supporting healthy sleep patterns"
    ],
    contraindications: [
      "Pregnancy (consult before use)",
      "Auto-immune conditions (monitor with healthcare provider)",
      "May interact with thyroid medication"
    ],
    researchStudies: [
      {
        title: "Effects of Ashwagandha on stress and anxiety",
        link: "#",
        findings: "Study showed significant reduction in stress and anxiety scores compared to placebo."
      },
      {
        title: "Ashwagandha and cognitive improvement",
        link: "#",
        findings: "Participants demonstrated improved reaction time and task performance after 8 weeks of supplementation."
      }
    ],
    season: "All seasons (especially beneficial in winter)",
    remedies: [
      {
        name: "Ashwagandha Milk",
        ingredients: ["1 tsp Ashwagandha powder", "1 cup milk", "Honey to taste", "Pinch of cardamom"],
        preparation: "Mix Ashwagandha powder in warm milk. Add honey and cardamom. Drink before bedtime for better sleep."
      }
    ]
  },
  {
    id: 2,
    name: "Turmeric",
    scientificName: "Curcuma longa",
    ayurvedicName: "Haridra",
    image: "https://images.unsplash.com/photo-1615485500834-bc10199bc727",
    description: "A powerful anti-inflammatory herb that has been used in Ayurvedic medicine for thousands of years.",
    benefits: ["Reduces inflammation", "Antioxidant properties", "Supports digestive health", "Purifies blood"],
    properties: {
      rasa: ["Bitter", "Astringent"],
      virya: "Heating",
      vipaka: "Pungent",
      doshaEffect: {
        vata: "Balances",
        pitta: "Balances (in moderation)",
        kapha: "Balances"
      }
    },
    uses: [
      "Anti-inflammatory for joint health",
      "Supporting digestive function",
      "Purifying blood",
      "Skin conditions and wound healing"
    ],
    contraindications: [
      "Gallbladder problems",
      "Blood-thinning medications",
      "Excessive consumption during pregnancy"
    ],
    researchStudies: [
      {
        title: "Turmeric and inflammatory markers",
        link: "#",
        findings: "Curcumin from turmeric significantly reduced inflammatory markers in patients with arthritis."
      }
    ],
    season: "All seasons",
    remedies: [
      {
        name: "Golden Milk",
        ingredients: ["1/2 tsp Turmeric powder", "1 cup milk", "Pinch of black pepper", "Honey to taste"],
        preparation: "Heat milk with turmeric and black pepper. Simmer for 5 minutes. Add honey after removing from heat."
      }
    ]
  },
  {
    id: 3,
    name: "Tulsi",
    scientificName: "Ocimum sanctum",
    ayurvedicName: "Tulsi",
    image: "https://images.unsplash.com/photo-1593256629313-151f72791cd3",
    description: "Holy Basil or Tulsi is revered as an adaptogenic herb that promotes mental balance and resilience to stress.",
    benefits: ["Adaptogenic", "Improves respiratory health", "Anti-microbial", "Reduces stress"],
    properties: {
      rasa: ["Pungent", "Bitter"],
      virya: "Heating",
      vipaka: "Pungent",
      doshaEffect: {
        vata: "Balances",
        pitta: "Balances (fresh) / Increases (dry)",
        kapha: "Balances"
      }
    },
    uses: [
      "Respiratory conditions like cough and cold",
      "Adapting to stress",
      "Fever and infection support",
      "Purifying air"
    ],
    contraindications: [
      "May affect fertility",
      "Blood-thinning medications",
      "Consult before using with diabetes medications"
    ],
    researchStudies: [
      {
        title: "Tulsi as an adaptogen",
        link: "#",
        findings: "Research indicates Tulsi's ability to normalize physiological processes during stress response."
      }
    ],
    season: "Best in rainy season and winter",
    remedies: [
      {
        name: "Tulsi Tea",
        ingredients: ["15-20 fresh Tulsi leaves", "1 cup water", "Honey", "Ginger (optional)"],
        preparation: "Boil water with Tulsi leaves and ginger. Steep for 5 minutes, strain and add honey."
      }
    ]
  },
  {
    id: 4,
    name: "Brahmi",
    scientificName: "Bacopa monnieri",
    ayurvedicName: "Brahmi",
    image: "https://images.unsplash.com/photo-1591134103816-e3b2cb7f7155",
    description: "A renowned herb in Ayurvedic medicine, particularly valued for its cognitive-enhancing properties.",
    benefits: ["Enhances memory", "Reduces anxiety", "Improves concentration", "Anti-inflammatory"],
    properties: {
      rasa: ["Bitter", "Sweet", "Astringent"],
      virya: "Cooling",
      vipaka: "Sweet",
      doshaEffect: {
        vata: "Balances",
        pitta: "Balances",
        kapha: "Balances (in moderation)"
      }
    },
    uses: [
      "Memory enhancement",
      "ADHD and attention issues",
      "Alzheimer's support",
      "Anxiety and stress management"
    ],
    contraindications: [
      "May increase secretions in intestines, lungs",
      "Can interact with some medications",
      "Excessive drowsiness with sedatives"
    ],
    researchStudies: [
      {
        title: "Brahmi and cognitive enhancement",
        link: "#",
        findings: "Regular consumption showed significant improvement in memory retention and recall ability."
      }
    ],
    season: "All seasons",
    remedies: [
      {
        name: "Brahmi Ghee",
        ingredients: ["2 tbsp Brahmi powder or paste", "1 cup ghee"],
        preparation: "Heat ghee, add Brahmi, simmer on low heat for 15 minutes. Strain and store. Take 1 tsp daily."
      }
    ]
  },
  {
    id: 5,
    name: "Triphala",
    scientificName: "Combination of three fruits",
    ayurvedicName: "Triphala",
    image: "https://images.unsplash.com/photo-1546714875-1701448d2642",
    description: "A traditional Ayurvedic herbal formulation consisting of three fruits: Amalaki, Bibhitaki, and Haritaki.",
    benefits: ["Digestive health", "Detoxification", "Eye health", "Natural laxative"],
    properties: {
      rasa: ["Astringent", "Sour", "Sweet", "Bitter", "Pungent"],
      virya: "Neutral",
      vipaka: "Sweet",
      doshaEffect: {
        vata: "Balances",
        pitta: "Balances",
        kapha: "Balances"
      }
    },
    uses: [
      "Digestive disorders",
      "Cleansing and detoxification",
      "Eye wash for conjunctivitis",
      "Oral health"
    ],
    contraindications: [
      "Pregnancy and breastfeeding (consult practitioner)",
      "Diarrhea",
      "May interact with certain medications"
    ],
    researchStudies: [
      {
        title: "Triphala as a colon cleanser",
        link: "#",
        findings: "Regular use of Triphala improved bowel movements and reduced symptoms of constipation."
      }
    ],
    season: "All seasons",
    remedies: [
      {
        name: "Triphala Tea",
        ingredients: ["1 tsp Triphala powder", "1 cup hot water"],
        preparation: "Add Triphala to hot water, steep for 10 minutes, and strain. Drink before bed."
      }
    ]
  },
  {
    id: 6,
    name: "Ginger",
    scientificName: "Zingiber officinale",
    ayurvedicName: "Adrak",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    description: "A warming herb used in Ayurvedic medicine to improve digestion and reduce inflammation.",
    benefits: ["Digestive aid", "Anti-inflammatory", "Immune booster", "Reduces nausea"],
    properties: {
      rasa: ["Pungent", "Sweet"],
      virya: "Heating",
      vipaka: "Sweet",
      doshaEffect: {
        vata: "Balances",
        pitta: "Increases (in excess)",
        kapha: "Balances"
      }
    },
    uses: [
      "Digestive disorders",
      "Cold and flu",
      "Nausea and motion sickness",
      "Joint pain"
    ],
    contraindications: [
      "High doses during pregnancy (small amounts are safe)",
      "Gallstones",
      "Blood-thinning medications"
    ],
    researchStudies: [
      {
        title: "Ginger effects on nausea and vomiting",
        link: "#",
        findings: "Significant reduction in severity and duration of nausea in study participants."
      }
    ],
    season: "Winter and rainy season",
    remedies: [
      {
        name: "Ginger Tea",
        ingredients: ["1-inch fresh ginger", "1 cup water", "Lemon and honey to taste"],
        preparation: "Boil water with sliced ginger for 10 minutes. Add lemon and honey after straining."
      }
    ]
  }
];
