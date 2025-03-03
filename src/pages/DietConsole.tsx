
import PageTransition from "@/components/ui-custom/PageTransition";
import { useState } from "react";
import { Utensils, ArrowRight, Check, Info, PieChart, BarChart, Activity, CalendarDays } from "lucide-react";
import AnimatedCard from "@/components/ui-custom/AnimatedCard";
import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DietConsole = () => {
  const [selectedDosha, setSelectedDosha] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("recommendations");

  const doshas = [
    {
      name: "Vata",
      description: "Relates to air and space elements, governing movement and change in the body.",
      characteristics: ["Light", "Cold", "Dry", "Rough", "Mobile"],
      imageSrc: "https://images.unsplash.com/photo-1527055154784-1732cfbc7e65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Pitta",
      description: "Relates to fire and water elements, governing digestion, metabolism, and transformation.",
      characteristics: ["Hot", "Sharp", "Light", "Oily", "Liquid"],
      imageSrc: "https://images.unsplash.com/photo-1554393410-9aed9de3f505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Kapha",
      description: "Relates to water and earth elements, governing structure, stability, and lubrication.",
      characteristics: ["Heavy", "Slow", "Cool", "Oily", "Smooth"],
      imageSrc: "https://images.unsplash.com/photo-1558521958-0a228e77e984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const dietRecommendations = {
    Vata: {
      favorable: ["Warm, cooked foods", "Sweet fruits (bananas, berries)", "Dairy", "Nuts", "Warm spices (ginger, cinnamon)"],
      unfavorable: ["Raw vegetables", "Dry fruits", "Beans", "Caffeine", "Cold drinks"],
      meals: [
        {
          title: "Warm Oatmeal Breakfast",
          description: "Cooked oatmeal with stewed apples, cinnamon, and a touch of ghee.",
          imageSrc: "https://images.unsplash.com/photo-1630324949563-6661f87a581d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
          title: "Mung Bean Soup",
          description: "Easy-to-digest mung beans cooked with cumin, ginger, and warming spices.",
          imageSrc: "https://images.unsplash.com/photo-1605301632377-dbaa7dd0a585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
          title: "Spiced Milk",
          description: "Warm milk with cardamom, nutmeg, and a touch of honey before bed.",
          imageSrc: "https://images.unsplash.com/photo-1564451932168-a0a52067679b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
      ],
      nutrients: [
        { name: "Proteins", value: 20 },
        { name: "Carbohydrates", value: 45 },
        { name: "Fats", value: 35 }
      ],
      mealDistribution: [
        { name: "Breakfast", calories: 400 },
        { name: "Lunch", calories: 600 },
        { name: "Snack", calories: 200 },
        { name: "Dinner", calories: 400 }
      ],
      tasteDistribution: [
        { name: "Sweet", value: 35 },
        { name: "Sour", value: 5 },
        { name: "Salty", value: 15 },
        { name: "Pungent", value: 15 },
        { name: "Bitter", value: 10 },
        { name: "Astringent", value: 20 }
      ],
      weeklyProgress: [
        { day: "Mon", balance: 90 },
        { day: "Tue", balance: 75 },
        { day: "Wed", balance: 85 },
        { day: "Thu", balance: 95 },
        { day: "Fri", balance: 70 },
        { day: "Sat", balance: 80 },
        { day: "Sun", balance: 85 }
      ]
    },
    Pitta: {
      favorable: ["Sweet fruits", "Cooling vegetables", "Grains (barley, oats)", "Dairy", "Cooling spices (fennel, coriander)"],
      unfavorable: ["Sour fruits", "Spicy foods", "Salt", "Fermented foods", "Coffee"],
      meals: [
        {
          title: "Cooling Coconut Porridge",
          description: "Barley porridge cooked with coconut milk and cooling spices.",
          imageSrc: "https://images.unsplash.com/photo-1582389476961-1a739ccd35bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
          title: "Cucumber Mint Salad",
          description: "Fresh cucumber with mint, lime, and a light olive oil dressing.",
          imageSrc: "https://images.unsplash.com/photo-1623428189726-427bc902c242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
          title: "Cooling Almond Milk",
          description: "Fresh almond milk with rose water and a touch of maple syrup.",
          imageSrc: "https://images.unsplash.com/photo-1628201871729-fd3f3070ca2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
      ],
      nutrients: [
        { name: "Proteins", value: 25 },
        { name: "Carbohydrates", value: 50 },
        { name: "Fats", value: 25 }
      ],
      mealDistribution: [
        { name: "Breakfast", calories: 450 },
        { name: "Lunch", calories: 550 },
        { name: "Snack", calories: 150 },
        { name: "Dinner", calories: 450 }
      ],
      tasteDistribution: [
        { name: "Sweet", value: 40 },
        { name: "Sour", value: 5 },
        { name: "Salty", value: 10 },
        { name: "Pungent", value: 10 },
        { name: "Bitter", value: 20 },
        { name: "Astringent", value: 15 }
      ],
      weeklyProgress: [
        { day: "Mon", balance: 85 },
        { day: "Tue", balance: 90 },
        { day: "Wed", balance: 75 },
        { day: "Thu", balance: 80 },
        { day: "Fri", balance: 85 },
        { day: "Sat", balance: 95 },
        { day: "Sun", balance: 75 }
      ]
    },
    Kapha: {
      favorable: ["Astringent fruits", "Light vegetables", "Beans", "Honey", "Pungent spices (pepper, ginger)"],
      unfavorable: ["Sweet fruits", "Dairy", "Nuts", "Oils", "Sweet desserts"],
      meals: [
        {
          title: "Spiced Vegetable Breakfast",
          description: "Lightly sautéed vegetables with warming spices and a sprinkle of nutritional yeast.",
          imageSrc: "https://images.unsplash.com/photo-1519996409144-56c88c9aa612?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
          title: "Lentil and Vegetable Soup",
          description: "Light lentil soup with plenty of vegetables and warming spices.",
          imageSrc: "https://images.unsplash.com/photo-1613844297004-3b62fc0b4981?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
          title: "Ginger Tea",
          description: "Strong ginger tea with a touch of honey and lemon.",
          imageSrc: "https://images.unsplash.com/photo-1608632740784-45943752bf97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
      ],
      nutrients: [
        { name: "Proteins", value: 30 },
        { name: "Carbohydrates", value: 40 },
        { name: "Fats", value: 30 }
      ],
      mealDistribution: [
        { name: "Breakfast", calories: 350 },
        { name: "Lunch", calories: 500 },
        { name: "Snack", calories: 150 },
        { name: "Dinner", calories: 300 }
      ],
      tasteDistribution: [
        { name: "Sweet", value: 15 },
        { name: "Sour", value: 10 },
        { name: "Salty", value: 10 },
        { name: "Pungent", value: 30 },
        { name: "Bitter", value: 20 },
        { name: "Astringent", value: 15 }
      ],
      weeklyProgress: [
        { day: "Mon", balance: 80 },
        { day: "Tue", balance: 85 },
        { day: "Wed", balance: 90 },
        { day: "Thu", balance: 75 },
        { day: "Fri", balance: 70 },
        { day: "Sat", balance: 85 },
        { day: "Sun", balance: 95 }
      ]
    }
  };

  // Colors for pie charts
  const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57'];
  const NUTRIENT_COLORS = ['#FF8042', '#0088FE', '#00C49F'];

  return (
    <PageTransition>
      <div className="min-h-screen pt-24">
        {/* Header */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 to-background"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-lg text-foreground animate-fade-up">Ayurvedic Diet Console</h1>
              <p className="mt-6 paragraph animate-fade-up" style={{ animationDelay: "200ms" }}>
                Discover personalized dietary recommendations based on your dosha type to maintain balance and promote optimal health.
              </p>
            </div>
          </div>
        </section>

        {/* Dosha Selection */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-md text-center mb-8 animate-fade-up">Select Your Dominant Dosha</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {doshas.map((dosha, index) => (
                  <button
                    key={dosha.name}
                    className={`group p-6 rounded-xl border transition-all duration-300 animate-fade-up h-full text-left ${
                      selectedDosha === dosha.name 
                        ? "border-primary bg-primary/5 shadow-md" 
                        : "border-border bg-card hover:border-primary/50 hover:shadow-sm"
                    }`}
                    onClick={() => setSelectedDosha(dosha.name)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative mb-4 h-40 w-full overflow-hidden rounded-lg">
                      <img 
                        src={dosha.imageSrc} 
                        alt={dosha.name} 
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {selectedDosha === dosha.name && (
                        <div className="absolute top-2 right-2 rounded-full bg-primary p-1">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-medium">{dosha.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{dosha.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {dosha.characteristics.map((characteristic) => (
                        <span 
                          key={characteristic}
                          className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                        >
                          {characteristic}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Diet Recommendations */}
        {selectedDosha && (
          <section className="py-12 bg-muted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <h2 className="heading-md text-center mb-2 animate-fade-up">
                  {selectedDosha} Diet Recommendations
                </h2>
                <p className="text-center text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
                  Following these guidelines will help balance your {selectedDosha} dosha
                </p>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                    <TabsTrigger value="recommendations" className="flex items-center gap-2">
                      <Utensils className="h-4 w-4" />
                      <span>Recommendations</span>
                    </TabsTrigger>
                    <TabsTrigger value="analytics" className="flex items-center gap-2">
                      <BarChart className="h-4 w-4" />
                      <span>Analytics</span>
                    </TabsTrigger>
                    <TabsTrigger value="progress" className="flex items-center gap-2">
                      <Activity className="h-4 w-4" />
                      <span>Progress</span>
                    </TabsTrigger>
                    <TabsTrigger value="meal-planner" className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      <span>Meal Planner</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="recommendations">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      {/* Favorable Foods */}
                      <div className="bg-card border border-border rounded-xl p-6 shadow-sm animate-fade-up" style={{ animationDelay: "200ms" }}>
                        <div className="flex items-center mb-4">
                          <div className="p-2 rounded-full bg-green-50 mr-3">
                            <Check className="h-5 w-5 text-green-500" />
                          </div>
                          <h3 className="font-medium text-lg">Favorable Foods</h3>
                        </div>
                        <ul className="space-y-2">
                          {dietRecommendations[selectedDosha as keyof typeof dietRecommendations].favorable.map((food) => (
                            <li key={food} className="flex items-start">
                              <ArrowRight className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <span>{food}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Unfavorable Foods */}
                      <div className="bg-card border border-border rounded-xl p-6 shadow-sm animate-fade-up" style={{ animationDelay: "300ms" }}>
                        <div className="flex items-center mb-4">
                          <div className="p-2 rounded-full bg-red-50 mr-3">
                            <Info className="h-5 w-5 text-red-400" />
                          </div>
                          <h3 className="font-medium text-lg">Foods to Minimize</h3>
                        </div>
                        <ul className="space-y-2">
                          {dietRecommendations[selectedDosha as keyof typeof dietRecommendations].unfavorable.map((food) => (
                            <li key={food} className="flex items-start">
                              <ArrowRight className="h-4 w-4 text-red-400 mr-2 mt-1 flex-shrink-0" />
                              <span>{food}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Recommended Meals */}
                    <h3 className="font-medium text-lg text-center mb-6 animate-fade-up" style={{ animationDelay: "400ms" }}>
                      Recommended Meals for {selectedDosha}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {dietRecommendations[selectedDosha as keyof typeof dietRecommendations].meals.map((meal, index) => (
                        <AnimatedCard
                          key={meal.title}
                          title={meal.title}
                          description={meal.description}
                          icon={<Utensils size={20} className="text-primary" />}
                          imageSrc={meal.imageSrc}
                          delay={500 + (index * 100)}
                        />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="analytics">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Nutrient Distribution */}
                      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                        <h3 className="font-medium text-lg mb-4 flex items-center">
                          <PieChart className="h-5 w-5 mr-2 text-primary" /> 
                          Recommended Nutrient Distribution
                        </h3>
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartsPieChart>
                              <Pie
                                data={dietRecommendations[selectedDosha as keyof typeof dietRecommendations].nutrients}
                                cx="50%"
                                cy="50%"
                                labelLine={true}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                              >
                                {dietRecommendations[selectedDosha as keyof typeof dietRecommendations].nutrients.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={NUTRIENT_COLORS[index % NUTRIENT_COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip />
                              <Legend />
                            </RechartsPieChart>
                          </ResponsiveContainer>
                        </div>
                      </div>

                      {/* Taste Distribution */}
                      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                        <h3 className="font-medium text-lg mb-4 flex items-center">
                          <PieChart className="h-5 w-5 mr-2 text-primary" />
                          Six Tastes Distribution
                        </h3>
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartsPieChart>
                              <Pie
                                data={dietRecommendations[selectedDosha as keyof typeof dietRecommendations].tasteDistribution}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                              >
                                {dietRecommendations[selectedDosha as keyof typeof dietRecommendations].tasteDistribution.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip />
                              <Legend />
                            </RechartsPieChart>
                          </ResponsiveContainer>
                        </div>
                      </div>

                      {/* Meal Calorie Distribution */}
                      <div className="bg-card border border-border rounded-xl p-6 shadow-sm lg:col-span-2">
                        <h3 className="font-medium text-lg mb-4 flex items-center">
                          <BarChart className="h-5 w-5 mr-2 text-primary" />
                          Recommended Meal Calorie Distribution
                        </h3>
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartsBarChart
                              data={dietRecommendations[selectedDosha as keyof typeof dietRecommendations].mealDistribution}
                              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="calories" name="Calories" fill="#8884d8" />
                            </RechartsBarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="progress">
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                      <h3 className="font-medium text-lg mb-4 flex items-center">
                        <Activity className="h-5 w-5 mr-2 text-primary" />
                        Weekly Dosha Balance Progress
                      </h3>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsBarChart
                            data={dietRecommendations[selectedDosha as keyof typeof dietRecommendations].weeklyProgress}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis label={{ value: 'Balance Score (%)', angle: -90, position: 'insideLeft' }} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="balance" name="Dosha Balance Score" fill="#82ca9d" />
                          </RechartsBarChart>
                        </ResponsiveContainer>
                      </div>
                      
                      <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <h4 className="font-medium mb-2">Your Progress Analysis</h4>
                        <p className="text-sm text-muted-foreground">
                          Your {selectedDosha} balance is improving steadily. Continue following the recommended diet guidelines for optimal results. 
                          The chart shows your daily balance scores based on recorded meals and activities.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="meal-planner">
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                      <h3 className="font-medium text-lg mb-4 flex items-center">
                        <CalendarDays className="h-5 w-5 mr-2 text-primary" />
                        Weekly Meal Planner
                      </h3>
                      
                      <div className="rounded-lg border overflow-hidden">
                        <div className="grid grid-cols-7 bg-muted text-muted-foreground text-sm">
                          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
                            <div key={day} className="p-3 border-r last:border-r-0 font-medium text-center">{day}</div>
                          ))}
                        </div>
                        
                        <div className="grid grid-cols-7 divide-x text-sm">
                          {[...Array(7)].map((_, dayIndex) => (
                            <div key={dayIndex} className="p-3 space-y-2 min-h-[150px]">
                              <div className="p-2 bg-green-50 rounded text-green-800 text-xs">Breakfast</div>
                              <div className="p-2 bg-blue-50 rounded text-blue-800 text-xs">Lunch</div>
                              <div className="p-2 bg-amber-50 rounded text-amber-800 text-xs">Dinner</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-center">
                        <Button className="bg-ayurvedic-forest hover:bg-ayurvedic-forest/90">
                          <CalendarDays className="mr-2 h-4 w-4" />
                          Generate Custom Meal Plan
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>
        )}

        {/* General Ayurvedic Diet Principles */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-md mb-6 animate-fade-up">Ayurvedic Diet Principles</h2>
              <p className="paragraph mb-10 animate-fade-up" style={{ animationDelay: "100ms" }}>
                Beyond dosha-specific recommendations, these universal principles guide a balanced Ayurvedic diet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Eat According to Seasons",
                  description: "Favor cooling foods in summer and warming foods in winter to stay in harmony with nature."
                },
                {
                  title: "Mind Your Digestive Fire",
                  description: "Eat your main meal at midday when digestion (agni) is strongest, and lighter meals in the morning and evening."
                },
                {
                  title: "Practice Mindful Eating",
                  description: "Eat in a calm environment without distractions, focusing on the tastes and textures of your food."
                },
                {
                  title: "Include Six Tastes",
                  description: "Each meal should ideally include the six tastes: sweet, sour, salty, pungent, bitter, and astringent."
                }
              ].map((principle, index) => (
                <div 
                  key={principle.title} 
                  className="bg-card border border-border rounded-xl p-6 shadow-sm animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
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

export default DietConsole;
