
import PageTransition from "@/components/ui-custom/PageTransition";
import { useState } from "react";
import { Search, Heart, Leaf, Utensils, Pill } from "lucide-react";
import AnimatedCard from "@/components/ui-custom/AnimatedCard";

const DiseaseSolutions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Digestive",
    "Respiratory",
    "Immune Support",
    "Metabolic",
    "Skin",
    "Mental Health",
    "Joint & Bone",
    "Cardiovascular",
    "Women's Health",
    "Men's Health",
    "Sleep Disorders",
    "Eye & Vision",
    "Hair & Scalp",
    "Kidney & Urinary",
    "Liver Health",
    "Nervous System"
  ];

  const conditions = [
    // Digestive Conditions
    {
      name: "Digestive Discomfort",
      category: "Digestive",
      description: "Common digestive issues like bloating, gas, and indigestion caused by poor Agni (digestive fire).",
      remedies: [
        { title: "Triphala", type: "Herb", description: "A blend of three fruits that supports digestive health and gentle detoxification.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Ginger Tea", type: "Diet", description: "Fresh ginger steeped in hot water to soothe digestion and reduce gas.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Abdominal Massage", type: "Practice", description: "Gentle clockwise massage with sesame oil to stimulate digestion.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Acid Reflux (Amlapitta)",
      category: "Digestive",
      description: "Excessive acidity and heartburn due to aggravated Pitta dosha.",
      remedies: [
        { title: "Yashtimadhu (Licorice)", type: "Herb", description: "Soothes the digestive tract and reduces acidity naturally.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Cooling Diet", type: "Diet", description: "Avoid spicy, fried foods. Include coconut water, cucumber, and sweet fruits.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Sheetali Pranayama", type: "Practice", description: "Cooling breathing technique to reduce internal heat and acidity.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Constipation (Vibandha)",
      category: "Digestive",
      description: "Irregular bowel movements and difficulty in elimination due to aggravated Vata.",
      remedies: [
        { title: "Castor Oil", type: "Herb", description: "Natural laxative that helps regulate bowel movements when taken with warm milk.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Fiber-Rich Foods", type: "Diet", description: "Include plenty of fruits, vegetables, and whole grains with adequate water intake.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Regular Routine", type: "Practice", description: "Establish regular meal times and sleep schedule to balance Vata dosha.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Diarrhea (Atisara)",
      category: "Digestive",
      description: "Loose stools and frequent bowel movements often caused by digestive fire imbalance.",
      remedies: [
        { title: "Bilva (Bael)", type: "Herb", description: "Astringent herb that helps bind stools and restore digestive balance.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "BRAT Diet", type: "Diet", description: "Bananas, rice, applesauce, and toast to provide gentle nutrition and binding.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Hydration Therapy", type: "Practice", description: "Maintain electrolyte balance with coconut water and herbal teas.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=800&q=80"
    },

    // Respiratory Conditions
    {
      name: "Respiratory Congestion",
      category: "Respiratory",
      description: "Coughs, colds, and congestion of the respiratory system due to Kapha accumulation.",
      remedies: [
        { title: "Tulsi (Holy Basil)", type: "Herb", description: "Supports respiratory health and boosts immune function naturally.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Ginger Honey Tea", type: "Diet", description: "Warming drink that soothes throat irritation and reduces congestion.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Steam Inhalation", type: "Practice", description: "Steam with eucalyptus oil to clear airways and reduce congestion.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1584555613483-3b0b6fe9c467?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Asthma (Shwasa Roga)",
      category: "Respiratory",
      description: "Difficulty breathing and wheezing due to airway inflammation and Prana Vata imbalance.",
      remedies: [
        { title: "Vasaka (Malabar Nut)", type: "Herb", description: "Bronchodilator herb that helps open airways and ease breathing.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Anti-Inflammatory Diet", type: "Diet", description: "Avoid dairy, cold foods. Include turmeric, ginger, and warm spices.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Pranayama Practice", type: "Practice", description: "Regular breathing exercises to strengthen respiratory system.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Bronchitis (Kasa Roga)",
      category: "Respiratory",
      description: "Inflammation of bronchial tubes causing persistent cough and mucus production.",
      remedies: [
        { title: "Kantakari", type: "Herb", description: "Expectorant herb that helps clear mucus from respiratory passages.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Warm Fluids", type: "Diet", description: "Herbal teas, warm water with honey, and avoiding cold drinks.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Chest Massage", type: "Practice", description: "Warm sesame oil massage on chest and back to improve circulation.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1559656914-a30970c1affd?auto=format&fit=crop&w=800&q=80"
    },

    // Immune Support
    {
      name: "Low Immunity",
      category: "Immune Support",
      description: "Weakness in the body's defense system, leading to frequent illness and low Ojas.",
      remedies: [
        { title: "Ashwagandha", type: "Herb", description: "Adaptogenic herb that strengthens overall immunity and vitality.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Turmeric Milk", type: "Diet", description: "Warm milk with turmeric and black pepper to boost immune function.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Oil Pulling", type: "Practice", description: "Swishing oil in mouth to pull out toxins and support oral health.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1584696423171-ce8232dcca4e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Chronic Fatigue",
      category: "Immune Support",
      description: "Persistent tiredness and lack of energy due to depleted Ojas and Prana.",
      remedies: [
        { title: "Shilajit", type: "Herb", description: "Mineral-rich compound that boosts energy and cellular regeneration.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Nutritious Diet", type: "Diet", description: "Include ghee, dates, almonds, and other Ojas-building foods.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Restorative Yoga", type: "Practice", description: "Gentle yoga practices that restore energy without depleting it.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
    },

    // Metabolic Conditions
    {
      name: "Blood Sugar Imbalance",
      category: "Metabolic",
      description: "Fluctuations in blood glucose levels affecting energy and metabolism.",
      remedies: [
        { title: "Guduchi", type: "Herb", description: "Supports healthy blood sugar levels and metabolic function.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Fenugreek Water", type: "Diet", description: "Soaked fenugreek seeds consumed daily to support glucose metabolism.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Regular Exercise", type: "Practice", description: "Consistent physical activity to balance metabolism and insulin sensitivity.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Obesity (Sthaulya)",
      category: "Metabolic",
      description: "Excess weight accumulation due to slow metabolism and Kapha imbalance.",
      remedies: [
        { title: "Guggulu", type: "Herb", description: "Helps boost metabolism and supports healthy weight management.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Light Diet", type: "Diet", description: "Emphasize warm, light, spiced foods and avoid heavy, oily meals.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Active Lifestyle", type: "Practice", description: "Regular exercise and movement to stimulate metabolism.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Thyroid Disorders",
      category: "Metabolic",
      description: "Thyroid gland dysfunction affecting metabolism and energy levels.",
      remedies: [
        { title: "Kanchanar", type: "Herb", description: "Supports thyroid function and helps regulate hormonal balance.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Iodine-Rich Foods", type: "Diet", description: "Include seaweed, coconut oil, and avoid goitrogenic foods.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Neck Exercises", type: "Practice", description: "Gentle neck stretches and shoulder stands to stimulate thyroid.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80"
    },

    // Skin Conditions
    {
      name: "Skin Inflammation",
      category: "Skin",
      description: "Redness, irritation, and various forms of dermatitis due to Pitta aggravation.",
      remedies: [
        { title: "Neem", type: "Herb", description: "Powerful antimicrobial herb with cooling properties for inflamed skin.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Cooling Foods", type: "Diet", description: "Emphasize cucumbers, cilantro, and coconut to reduce internal heat.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Aloe Vera Application", type: "Practice", description: "Fresh aloe gel applied directly to soothe and heal inflamed skin.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Eczema (Vicharchika)",
      category: "Skin",
      description: "Chronic skin condition with dry, itchy, and inflamed patches.",
      remedies: [
        { title: "Manjistha", type: "Herb", description: "Blood purifying herb that helps clear skin conditions from within.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Anti-Inflammatory Diet", type: "Diet", description: "Avoid dairy, processed foods, include omega-3 rich foods.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Coconut Oil Massage", type: "Practice", description: "Regular application of virgin coconut oil to moisturize skin.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1559757145-5934ffd74479?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Acne (Yauvan Pidika)",
      category: "Skin",
      description: "Inflammatory skin condition with pimples and blackheads, often in youth.",
      remedies: [
        { title: "Turmeric Paste", type: "Herb", description: "Anti-inflammatory and antimicrobial properties help clear acne.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Low Glycemic Diet", type: "Diet", description: "Avoid sugar, dairy, and processed foods that trigger acne.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Face Steaming", type: "Practice", description: "Regular steaming with neem leaves to open pores and cleanse.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80"
    },

    // Mental Health
    {
      name: "Stress and Anxiety",
      category: "Mental Health",
      description: "Mental tension, worry, and physiological stress responses affecting Vata dosha.",
      remedies: [
        { title: "Brahmi", type: "Herb", description: "Supports mental clarity, cognitive function, and nervous system health.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Warm Milk with Nutmeg", type: "Diet", description: "Calming nighttime drink to promote relaxation and quality sleep.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Meditation Practice", type: "Practice", description: "Regular meditation to calm the mind and balance nervous system.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Depression (Vishada)",
      category: "Mental Health",
      description: "Persistent low mood and lack of interest due to imbalanced Ojas and Prana.",
      remedies: [
        { title: "St. John's Wort", type: "Herb", description: "Natural mood elevator that supports emotional balance.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Sattvic Diet", type: "Diet", description: "Pure, fresh foods that promote mental clarity and emotional stability.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Sunlight Exposure", type: "Practice", description: "Regular exposure to natural sunlight to boost mood and energy.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Memory Loss (Smriti Bhransha)",
      category: "Mental Health",
      description: "Difficulty in remembering and cognitive decline affecting mental functions.",
      remedies: [
        { title: "Shankhpushpi", type: "Herb", description: "Brain tonic that enhances memory, focus, and cognitive abilities.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Brain Foods", type: "Diet", description: "Include almonds, walnuts, ghee, and brahmi to nourish brain tissue.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Mental Exercises", type: "Practice", description: "Regular reading, puzzles, and learning to keep mind active.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
    },

    // Joint & Bone
    {
      name: "Arthritis (Amavata)",
      category: "Joint & Bone",
      description: "Joint pain and inflammation due to Ama (toxins) accumulation in joints.",
      remedies: [
        { title: "Boswellia", type: "Herb", description: "Natural anti-inflammatory that reduces joint pain and swelling.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Anti-Inflammatory Diet", type: "Diet", description: "Avoid nightshades, include turmeric, ginger, and omega-3 foods.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Gentle Exercise", type: "Practice", description: "Low-impact exercises like swimming and yoga to maintain joint mobility.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Osteoporosis",
      category: "Joint & Bone",
      description: "Weakening of bones due to calcium deficiency and Vata aggravation in bone tissue.",
      remedies: [
        { title: "Arjuna Bark", type: "Herb", description: "Strengthens bones and supports calcium absorption naturally.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Calcium-Rich Foods", type: "Diet", description: "Include sesame seeds, green leafy vegetables, and dairy products.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Weight-Bearing Exercise", type: "Practice", description: "Regular resistance training to stimulate bone formation.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Back Pain (Kati Shoola)",
      category: "Joint & Bone",
      description: "Lower back pain and stiffness often due to Vata dosha imbalance.",
      remedies: [
        { title: "Rasna", type: "Herb", description: "Analgesic herb specifically effective for back and joint pain.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Warm Foods", type: "Diet", description: "Avoid cold foods and drinks, include warming spices in diet.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Oil Massage", type: "Practice", description: "Regular warm oil massage to relieve muscle tension and pain.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1559757145-5934ffd74479?auto=format&fit=crop&w=800&q=80"
    },

    // Cardiovascular
    {
      name: "High Blood Pressure",
      category: "Cardiovascular",
      description: "Elevated blood pressure often due to stress and Pitta-Vata imbalance.",
      remedies: [
        { title: "Arjuna", type: "Herb", description: "Cardiotonic herb that supports healthy blood pressure and heart function.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "DASH Diet", type: "Diet", description: "Low sodium, high potassium diet with plenty of fruits and vegetables.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Stress Management", type: "Practice", description: "Regular meditation and yoga to reduce stress-induced hypertension.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1559656914-a30970c1affd?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "High Cholesterol",
      category: "Cardiovascular",
      description: "Elevated blood lipids affecting cardiovascular health and circulation.",
      remedies: [
        { title: "Garlic", type: "Herb", description: "Natural cholesterol reducer that supports cardiovascular health.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Heart-Healthy Diet", type: "Diet", description: "Include oats, nuts, fish, and avoid trans fats and processed foods.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Cardio Exercise", type: "Practice", description: "Regular aerobic exercise to improve lipid profile and heart health.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
    },

    // Women's Health
    {
      name: "Menstrual Irregularities",
      category: "Women's Health",
      description: "Irregular periods and menstrual disorders due to hormonal imbalances.",
      remedies: [
        { title: "Shatavari", type: "Herb", description: "Female reproductive tonic that regulates menstrual cycles naturally.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Iron-Rich Foods", type: "Diet", description: "Include leafy greens, dates, and avoid excessive cold foods.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Yoga Practice", type: "Practice", description: "Specific asanas like child's pose and legs up wall for reproductive health.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "PCOS (Polycystic Ovary Syndrome)",
      category: "Women's Health",
      description: "Hormonal disorder affecting reproductive system and metabolism.",
      remedies: [
        { title: "Spearmint Tea", type: "Herb", description: "Helps reduce androgen levels and balance hormones naturally.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Low GI Diet", type: "Diet", description: "Focus on whole grains, lean proteins, and avoid refined sugars.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Weight Management", type: "Practice", description: "Regular exercise and stress reduction to improve insulin sensitivity.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Menopause Symptoms",
      category: "Women's Health",
      description: "Hot flashes, mood changes, and other symptoms during menopause transition.",
      remedies: [
        { title: "Black Cohosh", type: "Herb", description: "Natural hormone balancer that reduces hot flashes and mood swings.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Phytoestrogen Foods", type: "Diet", description: "Include soy, flax seeds, and legumes for natural hormone support.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Cooling Practices", type: "Practice", description: "Cooling pranayama and meditation to manage hot flashes.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?auto=format&fit=crop&w=800&q=80"
    },

    // Men's Health
    {
      name: "Low Testosterone",
      category: "Men's Health",
      description: "Decreased male hormone levels affecting energy, mood, and vitality.",
      remedies: [
        { title: "Ashwagandha", type: "Herb", description: "Adaptogen that naturally supports healthy testosterone production.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Zinc-Rich Foods", type: "Diet", description: "Include pumpkin seeds, oysters, and lean meats for hormone support.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Strength Training", type: "Practice", description: "Regular resistance exercise to naturally boost testosterone levels.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Prostate Issues",
      category: "Men's Health",
      description: "Enlarged prostate and related urinary symptoms affecting older men.",
      remedies: [
        { title: "Saw Palmetto", type: "Herb", description: "Supports prostate health and reduces urinary symptoms naturally.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Anti-Inflammatory Diet", type: "Diet", description: "Include tomatoes, green tea, and omega-3 rich foods.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Pelvic Exercises", type: "Practice", description: "Kegel exercises and yoga poses to strengthen pelvic floor.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1559756148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
    },

    // Sleep Disorders
    {
      name: "Insomnia (Anidra)",
      category: "Sleep Disorders",
      description: "Difficulty falling or staying asleep due to aggravated Vata dosha.",
      remedies: [
        { title: "Jatamansi", type: "Herb", description: "Natural sedative that promotes deep, restful sleep without dependency.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Sleep-Promoting Foods", type: "Diet", description: "Warm milk with nutmeg, chamomile tea, and avoid caffeine after 2 PM.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Sleep Hygiene", type: "Practice", description: "Regular bedtime routine, dark room, and avoiding screens before bed.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Sleep Apnea",
      category: "Sleep Disorders",
      description: "Breathing interruptions during sleep causing poor rest quality.",
      remedies: [
        { title: "Eucalyptus Oil", type: "Herb", description: "Natural decongestant that helps clear airways for better breathing.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Weight Management", type: "Diet", description: "Maintain healthy weight to reduce pressure on airways.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Sleep Position", type: "Practice", description: "Sleep on side with elevated head to improve airway clearance.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1520206183501-b80df61043c2?auto=format&fit=crop&w=800&q=80"
    },

    // Eye & Vision
    {
      name: "Eye Strain (Netra Roga)",
      category: "Eye & Vision",
      description: "Digital eye strain and fatigue from excessive screen time and poor eye care.",
      remedies: [
        { title: "Triphala Eyewash", type: "Herb", description: "Gentle herbal eyewash that cleanses and strengthens the eyes.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Eye-Healthy Foods", type: "Diet", description: "Include carrots, leafy greens, and foods rich in vitamin A and lutein.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Eye Exercises", type: "Practice", description: "Regular palming, blinking, and 20-20-20 rule for screen breaks.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Dry Eyes",
      category: "Eye & Vision",
      description: "Insufficient tear production causing eye irritation and discomfort.",
      remedies: [
        { title: "Rose Water", type: "Herb", description: "Natural eye drops that moisturize and soothe dry, irritated eyes.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Omega-3 Foods", type: "Diet", description: "Include fish, flax seeds, and walnuts to support tear production.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Humidifier Use", type: "Practice", description: "Maintain proper humidity levels and take frequent screen breaks.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80"
    },

    // Hair & Scalp
    {
      name: "Hair Loss (Khalitya)",
      category: "Hair & Scalp",
      description: "Excessive hair fall and thinning due to stress, poor nutrition, or hormonal changes.",
      remedies: [
        { title: "Bhringraj Oil", type: "Herb", description: "Traditional hair oil that nourishes roots and promotes hair growth.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Protein-Rich Diet", type: "Diet", description: "Include eggs, nuts, seeds, and iron-rich foods for hair health.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Scalp Massage", type: "Practice", description: "Regular oil massage to improve circulation and nourish hair follicles.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Dandruff (Darunaka)",
      category: "Hair & Scalp",
      description: "Flaky scalp condition often caused by fungal overgrowth and dry skin.",
      remedies: [
        { title: "Neem Oil", type: "Herb", description: "Antifungal properties help eliminate dandruff-causing organisms.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Anti-Fungal Foods", type: "Diet", description: "Include probiotics, reduce sugar, and avoid processed foods.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Tea Tree Oil Treatment", type: "Practice", description: "Diluted tea tree oil massage to control fungal growth.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1559757145-5934ffd74479?auto=format&fit=crop&w=800&q=80"
    },

    // Kidney & Urinary
    {
      name: "Kidney Stones (Ashmari)",
      category: "Kidney & Urinary",
      description: "Mineral deposits in kidneys causing pain and urinary difficulties.",
      remedies: [
        { title: "Punarnava", type: "Herb", description: "Diuretic herb that helps dissolve stones and cleanse kidneys.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Hydration Therapy", type: "Diet", description: "Increase water intake, reduce sodium, and limit oxalate-rich foods.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Physical Activity", type: "Practice", description: "Regular movement to help stones pass naturally through system.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1559756148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Urinary Tract Infections",
      category: "Kidney & Urinary",
      description: "Bacterial infections in urinary system causing burning and frequent urination.",
      remedies: [
        { title: "Cranberry Extract", type: "Herb", description: "Prevents bacteria from adhering to urinary tract walls.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Alkalizing Foods", type: "Diet", description: "Include plenty of water, avoid sugar, and eat alkalizing vegetables.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Proper Hygiene", type: "Practice", description: "Maintain cleanliness and urinate frequently to flush bacteria.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=800&q=80"
    },

    // Liver Health
    {
      name: "Fatty Liver",
      category: "Liver Health",
      description: "Accumulation of fat in liver cells affecting liver function and metabolism.",
      remedies: [
        { title: "Milk Thistle", type: "Herb", description: "Hepatoprotective herb that supports liver detoxification and regeneration.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Liver Cleansing Diet", type: "Diet", description: "Avoid alcohol, reduce fats, include green vegetables and bitter foods.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Regular Exercise", type: "Practice", description: "Physical activity to reduce liver fat and improve insulin sensitivity.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Liver Detoxification",
      category: "Liver Health",
      description: "Supporting liver's natural detoxification processes for optimal health.",
      remedies: [
        { title: "Kutki", type: "Herb", description: "Powerful liver tonic that enhances detoxification and bile production.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Detox Foods", type: "Diet", description: "Include lemons, garlic, beets, and cruciferous vegetables.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Intermittent Fasting", type: "Practice", description: "Give liver time to rest and regenerate through controlled fasting.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
    },

    // Nervous System
    {
      name: "Peripheral Neuropathy",
      category: "Nervous System",
      description: "Nerve damage causing numbness, tingling, and pain in extremities.",
      remedies: [
        { title: "Alpha Lipoic Acid", type: "Herb", description: "Antioxidant that supports nerve health and reduces neuropathic pain.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "B-Vitamin Foods", type: "Diet", description: "Include whole grains, leafy greens, and foods rich in B-complex vitamins.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Gentle Exercise", type: "Practice", description: "Low-impact activities to improve circulation and nerve function.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Migraine Headaches",
      category: "Nervous System",
      description: "Severe recurring headaches often with sensitivity to light and sound.",
      remedies: [
        { title: "Feverfew", type: "Herb", description: "Natural migraine preventive that reduces frequency and severity.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Trigger Avoidance", type: "Diet", description: "Identify and avoid food triggers like chocolate, cheese, and processed foods.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Stress Management", type: "Practice", description: "Regular relaxation techniques and adequate sleep to prevent triggers.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Chronic Pain",
      category: "Nervous System",
      description: "Persistent pain lasting more than 3 months affecting quality of life.",
      remedies: [
        { title: "Curcumin", type: "Herb", description: "Potent anti-inflammatory compound that reduces chronic pain naturally.", icon: <Leaf size={20} className="text-primary" /> },
        { title: "Anti-Inflammatory Diet", type: "Diet", description: "Focus on whole foods, omega-3s, and avoid processed inflammatory foods.", icon: <Utensils size={20} className="text-primary" /> },
        { title: "Mind-Body Practices", type: "Practice", description: "Yoga, meditation, and tai chi to manage pain and improve function.", icon: <Heart size={20} className="text-primary" /> }
      ],
      imageSrc: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Filter conditions based on search query and selected category
  const filteredConditions = conditions.filter(condition => {
    const matchesSearch = 
      condition.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      condition.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      condition.remedies.some(remedy => 
        remedy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        remedy.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    const matchesCategory = 
      selectedCategory === "All" || 
      condition.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <PageTransition>
      <div className="min-h-screen pt-24">
        {/* Header */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 to-background"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-lg text-foreground animate-fade-up">Disease Solutions</h1>
              <p className="mt-6 paragraph animate-fade-up" style={{ animationDelay: "200ms" }}>
                Explore holistic Ayurvedic approaches to common health conditions, addressing root causes through natural remedies.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search conditions, symptoms, or remedies..."
                  className="w-full rounded-full border border-input bg-background px-10 py-3 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="mt-6 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      selectedCategory === category 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Conditions List */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredConditions.length > 0 ? (
              <div className="space-y-16">
                {filteredConditions.map((condition, index) => (
                  <div 
                    key={condition.name}
                    className="max-w-4xl mx-auto animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Image */}
                      <div className="md:w-1/3">
                        <div className="rounded-xl overflow-hidden shadow-md h-64">
                          <img
                            src={condition.imageSrc}
                            alt={condition.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="md:w-2/3">
                        <div className="flex items-center mb-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-primary mr-2">
                            {condition.category}
                          </span>
                        </div>
                        <h2 className="heading-md mb-3">{condition.name}</h2>
                        <p className="paragraph mb-6">{condition.description}</p>
                        
                        <h3 className="font-medium text-lg mb-4">Ayurvedic Approaches</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {condition.remedies.map((remedy) => (
                            <div 
                              key={remedy.title}
                              className="bg-card border border-border rounded-lg p-4 shadow-sm"
                            >
                              <div className="flex items-center mb-2">
                                <div className="mr-2">{remedy.icon}</div>
                                <h4 className="font-medium">{remedy.title}</h4>
                              </div>
                              <span className="inline-block mb-2 px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                                {remedy.type}
                              </span>
                              <p className="text-sm text-muted-foreground">{remedy.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="heading-sm text-muted-foreground">No conditions found</h3>
                <p className="mt-2 paragraph">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* General Guidance */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="heading-md mb-4 animate-fade-up">Ayurvedic Healing Principles</h2>
              <p className="paragraph animate-fade-up" style={{ animationDelay: "100ms" }}>
                Ayurveda addresses the root cause of disease, not just symptoms, through these foundational approaches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Balance the Doshas",
                  description: "Identify imbalances in Vata, Pitta, or Kapha, and apply appropriate therapies to restore harmony.",
                  icon: <Heart size={24} className="text-primary" />
                },
                {
                  title: "Strengthen Agni (Digestive Fire)",
                  description: "Support proper digestion and metabolism, which is considered the foundation of good health.",
                  icon: <Utensils size={24} className="text-primary" />
                },
                {
                  title: "Cleanse Ama (Toxins)",
                  description: "Eliminate accumulated toxins that can lead to disease through appropriate cleansing practices.",
                  icon: <Pill size={24} className="text-primary" />
                },
              ].map((principle, index) => (
                <div 
                  key={principle.title} 
                  className="bg-card border border-border rounded-xl p-6 shadow-sm text-center animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    {principle.icon}
                  </div>
                  <h3 className="font-medium text-lg mb-2">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default DiseaseSolutions;
