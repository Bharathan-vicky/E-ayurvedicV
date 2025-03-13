
import { useState } from "react";
import { Calendar, CalendarDays, ShoppingCart, Plus, Minus, Utensils, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface Meal {
  id: string;
  name: string;
  ingredients: string[];
  time: string;
  selected: boolean;
}

interface Day {
  date: Date;
  breakfast: Meal | null;
  lunch: Meal | null;
  dinner: Meal | null;
}

// Sample meals for different doshas
const mealSuggestions = {
  Vata: [
    {
      id: "v1",
      name: "Warm Oatmeal with Stewed Fruits",
      ingredients: ["Oats", "Cinnamon", "Almonds", "Raisins", "Ghee", "Apple"],
      time: "breakfast",
      selected: false,
    },
    {
      id: "v2",
      name: "Kitchari (Mung Dal and Rice)",
      ingredients: ["Basmati Rice", "Mung Dal", "Ghee", "Cumin", "Ginger", "Salt", "Coriander", "Vegetables"],
      time: "lunch",
      selected: false,
    },
    {
      id: "v3",
      name: "Spiced Milk with Dates",
      ingredients: ["Milk", "Cardamom", "Dates", "Saffron", "Cinnamon"],
      time: "dinner",
      selected: false,
    },
    {
      id: "v4",
      name: "Sweet Potato and Ginger Soup",
      ingredients: ["Sweet Potato", "Ginger", "Onion", "Coconut Milk", "Cumin", "Ghee"],
      time: "lunch",
      selected: false,
    },
  ],
  Pitta: [
    {
      id: "p1",
      name: "Coconut Barley Porridge",
      ingredients: ["Barley", "Coconut Milk", "Raisins", "Cardamom", "Maple Syrup"],
      time: "breakfast",
      selected: false,
    },
    {
      id: "p2",
      name: "Cucumber Mint Raita with Rice",
      ingredients: ["Basmati Rice", "Cucumber", "Mint", "Yogurt", "Cumin", "Cilantro"],
      time: "lunch",
      selected: false,
    },
    {
      id: "p3",
      name: "Cooling Almond Milk with Rose",
      ingredients: ["Almond Milk", "Rose Water", "Maple Syrup", "Cardamom"],
      time: "dinner",
      selected: false,
    },
    {
      id: "p4",
      name: "Mung Bean and Vegetable Soup",
      ingredients: ["Mung Beans", "Mixed Vegetables", "Cilantro", "Lime", "Cumin", "Coriander"],
      time: "lunch",
      selected: false,
    },
  ],
  Kapha: [
    {
      id: "k1",
      name: "Spiced Vegetable Quinoa",
      ingredients: ["Quinoa", "Mixed Vegetables", "Turmeric", "Black Pepper", "Ginger", "Garlic"],
      time: "breakfast",
      selected: false,
    },
    {
      id: "k2",
      name: "Lentil and Vegetable Soup",
      ingredients: ["Lentils", "Mixed Vegetables", "Ginger", "Turmeric", "Black Pepper", "Cumin"],
      time: "lunch",
      selected: false,
    },
    {
      id: "k3",
      name: "Ginger Honey Tea",
      ingredients: ["Ginger", "Honey", "Lemon", "Black Pepper", "Hot Water"],
      time: "dinner",
      selected: false,
    },
    {
      id: "k4",
      name: "Roasted Vegetables with Quinoa",
      ingredients: ["Quinoa", "Bell Peppers", "Zucchini", "Onion", "Garlic", "Turmeric", "Black Pepper"],
      time: "lunch",
      selected: false,
    },
  ],
};

interface MealPlannerProps {
  selectedDosha: string | null;
}

const MealPlanner = ({ selectedDosha }: MealPlannerProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [activeTab, setActiveTab] = useState("planner");
  const [mealPlan, setMealPlan] = useState<Day[]>([]);
  const [groceryList, setGroceryList] = useState<{ item: string; checked: boolean }[]>([]);
  const [newGroceryItem, setNewGroceryItem] = useState("");
  const { toast } = useToast();

  const dosha = selectedDosha || "Vata";
  const availableMeals = mealSuggestions[dosha as keyof typeof mealSuggestions] || [];

  const generatePlanForWeek = () => {
    const today = new Date();
    const weekPlan: Day[] = [];
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(today);
      day.setDate(today.getDate() + i);
      
      // Randomly select meals for each day
      const breakfastOptions = availableMeals.filter(meal => meal.time === "breakfast");
      const lunchOptions = availableMeals.filter(meal => meal.time === "lunch");
      const dinnerOptions = availableMeals.filter(meal => meal.time === "dinner");
      
      const randomBreakfast = breakfastOptions[Math.floor(Math.random() * breakfastOptions.length)] || null;
      const randomLunch = lunchOptions[Math.floor(Math.random() * lunchOptions.length)] || null;
      const randomDinner = dinnerOptions[Math.floor(Math.random() * dinnerOptions.length)] || null;
      
      weekPlan.push({
        date: day,
        breakfast: randomBreakfast ? { ...randomBreakfast, selected: true } : null,
        lunch: randomLunch ? { ...randomLunch, selected: true } : null,
        dinner: randomDinner ? { ...randomDinner, selected: true } : null,
      });
    }
    
    setMealPlan(weekPlan);
    generateGroceryList(weekPlan);
    toast({
      title: "Meal Plan Generated",
      description: "Your 7-day meal plan has been created based on your dosha type.",
    });
  };

  const generateGroceryList = (plan: Day[]) => {
    const ingredients = new Set<string>();
    
    plan.forEach(day => {
      if (day.breakfast?.selected) day.breakfast.ingredients.forEach(ingredient => ingredients.add(ingredient));
      if (day.lunch?.selected) day.lunch.ingredients.forEach(ingredient => ingredients.add(ingredient));
      if (day.dinner?.selected) day.dinner.ingredients.forEach(ingredient => ingredients.add(ingredient));
    });
    
    const groceryItems = Array.from(ingredients).map(item => ({ item, checked: false }));
    setGroceryList(groceryItems);
  };

  const toggleMealSelection = (dayIndex: number, mealTime: "breakfast" | "lunch" | "dinner") => {
    const newPlan = [...mealPlan];
    const meal = newPlan[dayIndex][mealTime];
    
    if (meal) {
      newPlan[dayIndex][mealTime] = { ...meal, selected: !meal.selected };
      setMealPlan(newPlan);
      generateGroceryList(newPlan);
    }
  };

  const addGroceryItem = () => {
    if (newGroceryItem.trim()) {
      setGroceryList([...groceryList, { item: newGroceryItem.trim(), checked: false }]);
      setNewGroceryItem("");
    }
  };

  const toggleGroceryItem = (index: number) => {
    const newList = [...groceryList];
    newList[index].checked = !newList[index].checked;
    setGroceryList(newList);
  };

  const removeGroceryItem = (index: number) => {
    const newList = [...groceryList];
    newList.splice(index, 1);
    setGroceryList(newList);
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm animate-fade-up">
      <h3 className="font-medium text-lg mb-6">Meal Planner & Grocery List</h3>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="planner" className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            <span>Meal Planner</span>
          </TabsTrigger>
          <TabsTrigger value="grocery" className="flex items-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            <span>Grocery List</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="planner">
          <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <Button onClick={generatePlanForWeek} className="flex items-center gap-2">
              <Utensils className="h-4 w-4" />
              Generate 7-Day Meal Plan
            </Button>
          </div>
          
          {mealPlan.length > 0 ? (
            <div className="space-y-6">
              {mealPlan.map((day, dayIndex) => (
                <div key={dayIndex} className="border rounded-lg p-4">
                  <div className="font-medium mb-2">
                    {format(day.date, "EEEE, MMMM d")}
                  </div>
                  <div className="space-y-3">
                    {day.breakfast && (
                      <div className="flex items-start gap-2">
                        <Checkbox 
                          id={`breakfast-${dayIndex}`} 
                          checked={day.breakfast.selected}
                          onCheckedChange={() => toggleMealSelection(dayIndex, "breakfast")}
                        />
                        <div className="space-y-1">
                          <Label 
                            htmlFor={`breakfast-${dayIndex}`}
                            className="font-medium cursor-pointer"
                          >
                            Breakfast: {day.breakfast.name}
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            {day.breakfast.ingredients.join(", ")}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {day.lunch && (
                      <div className="flex items-start gap-2">
                        <Checkbox 
                          id={`lunch-${dayIndex}`} 
                          checked={day.lunch.selected}
                          onCheckedChange={() => toggleMealSelection(dayIndex, "lunch")}
                        />
                        <div className="space-y-1">
                          <Label 
                            htmlFor={`lunch-${dayIndex}`}
                            className="font-medium cursor-pointer"
                          >
                            Lunch: {day.lunch.name}
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            {day.lunch.ingredients.join(", ")}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {day.dinner && (
                      <div className="flex items-start gap-2">
                        <Checkbox 
                          id={`dinner-${dayIndex}`} 
                          checked={day.dinner.selected}
                          onCheckedChange={() => toggleMealSelection(dayIndex, "dinner")}
                        />
                        <div className="space-y-1">
                          <Label 
                            htmlFor={`dinner-${dayIndex}`}
                            className="font-medium cursor-pointer"
                          >
                            Dinner: {day.dinner.name}
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            {day.dinner.ingredients.join(", ")}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg">
              <CalendarDays className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h4 className="font-medium text-lg mb-2">No Meal Plan Generated</h4>
              <p className="text-muted-foreground mb-6">
                Generate a weekly meal plan based on your Dosha type to get started.
              </p>
              <Button onClick={generatePlanForWeek} className="flex items-center gap-2 mx-auto">
                <Utensils className="h-4 w-4" />
                Generate 7-Day Meal Plan
              </Button>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="grocery">
          <div className="mb-6 flex gap-2">
            <Input
              placeholder="Add item to grocery list"
              value={newGroceryItem}
              onChange={(e) => setNewGroceryItem(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addGroceryItem()}
            />
            <Button onClick={addGroceryItem}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          {groceryList.length > 0 ? (
            <div className="space-y-2 border rounded-lg p-4">
              {groceryList.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox 
                      id={`grocery-${index}`} 
                      checked={item.checked}
                      onCheckedChange={() => toggleGroceryItem(index)}
                    />
                    <Label 
                      htmlFor={`grocery-${index}`}
                      className={cn(
                        "cursor-pointer",
                        item.checked && "line-through text-muted-foreground"
                      )}
                    >
                      {item.item}
                    </Label>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => removeGroceryItem(index)}
                    className="h-8 w-8 p-0"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg">
              <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h4 className="font-medium text-lg mb-2">Your Grocery List is Empty</h4>
              <p className="text-muted-foreground mb-6">
                Add items manually or generate from your meal plan.
              </p>
              {mealPlan.length === 0 && (
                <Button onClick={() => {
                  setActiveTab("planner");
                  generatePlanForWeek();
                }} className="flex items-center gap-2 mx-auto">
                  <Utensils className="h-4 w-4" />
                  Generate Meal Plan First
                </Button>
              )}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MealPlanner;
