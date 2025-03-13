
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

interface QuizQuestion {
  id: number;
  question: string;
  tooltip?: string;
  options: {
    id: string;
    text: string;
    dosha: "vata" | "pitta" | "kapha";
  }[];
}

// Quiz questions based on Ayurvedic principles
const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How would you describe your body frame?",
    tooltip: "Consider your natural build, not current weight",
    options: [
      { id: "1a", text: "Thin, lean, I find it hard to gain weight", dosha: "vata" },
      { id: "1b", text: "Medium, athletic, defined muscles", dosha: "pitta" },
      { id: "1c", text: "Broader, solid, I gain weight easily", dosha: "kapha" },
    ],
  },
  {
    id: 2,
    question: "Which best describes your skin?",
    options: [
      { id: "2a", text: "Dry, rough, or thin", dosha: "vata" },
      { id: "2b", text: "Warm, reddish, sensitive or with freckles", dosha: "pitta" },
      { id: "2c", text: "Thick, oily, smooth, or pale", dosha: "kapha" },
    ],
  },
  {
    id: 3,
    question: "How is your appetite typically?",
    options: [
      { id: "3a", text: "Irregular, I sometimes forget to eat", dosha: "vata" },
      { id: "3b", text: "Sharp, I get irritable if I miss meals", dosha: "pitta" },
      { id: "3c", text: "Steady, I can easily skip meals", dosha: "kapha" },
    ],
  },
  {
    id: 4,
    question: "How would you describe your typical energy levels?",
    options: [
      { id: "4a", text: "Bursts of energy followed by fatigue", dosha: "vata" },
      { id: "4b", text: "Strong and intense, but can burn out", dosha: "pitta" },
      { id: "4c", text: "Steady and enduring, slow to start", dosha: "kapha" },
    ],
  },
  {
    id: 5,
    question: "How do you typically respond to stress?",
    options: [
      { id: "5a", text: "Anxious, worried, or overwhelmed", dosha: "vata" },
      { id: "5b", text: "Irritable, intense, or frustrated", dosha: "pitta" },
      { id: "5c", text: "Calm, steady, but can become withdrawn", dosha: "kapha" },
    ],
  },
  {
    id: 6,
    question: "Which weather makes you most uncomfortable?",
    options: [
      { id: "6a", text: "Cold, windy, or dry weather", dosha: "vata" },
      { id: "6b", text: "Hot, humid weather", dosha: "pitta" },
      { id: "6c", text: "Cold, damp, or cloudy weather", dosha: "kapha" },
    ],
  },
  {
    id: 7,
    question: "How is your sleep pattern?",
    options: [
      { id: "7a", text: "Light sleep, easily disturbed, or insomnia", dosha: "vata" },
      { id: "7b", text: "Moderate sleep, sharp dreams", dosha: "pitta" },
      { id: "7c", text: "Deep, lengthy sleep, hard to wake up", dosha: "kapha" },
    ],
  },
];

interface DoshaQuizProps {
  onComplete: (dosha: string) => void;
  onCancel: () => void;
}

const DoshaQuiz = ({ onComplete, onCancel }: DoshaQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
  const { toast } = useToast();

  const handleNext = () => {
    if (!selectedOption) {
      toast({
        title: "Please select an answer",
        description: "You need to select an option before continuing.",
        variant: "destructive",
      });
      return;
    }

    const newAnswers = { ...answers, [currentQuestion]: selectedOption };
    setAnswers(newAnswers);
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(undefined);
    } else {
      // Calculate results
      const results = calculateResults(newAnswers);
      onComplete(results);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1]);
    }
  };

  const calculateResults = (quizAnswers: Record<number, string>) => {
    const doshaScores = {
      vata: 0,
      pitta: 0,
      kapha: 0,
    };

    // Count the frequency of each dosha in the answers
    Object.values(quizAnswers).forEach((answerId) => {
      const question = quizQuestions[currentQuestion];
      const selectedOption = question.options.find(opt => opt.id === answerId);
      if (selectedOption) {
        doshaScores[selectedOption.dosha]++;
      }
    });

    // Find the dominant dosha
    let dominantDosha = "vata";
    let highestScore = doshaScores.vata;

    if (doshaScores.pitta > highestScore) {
      dominantDosha = "pitta";
      highestScore = doshaScores.pitta;
    }

    if (doshaScores.kapha > highestScore) {
      dominantDosha = "kapha";
    }

    // Convert to proper case for display
    return dominantDosha.charAt(0).toUpperCase() + dominantDosha.slice(1);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const question = quizQuestions[currentQuestion];

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm animate-fade-up">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium">Dosha Analysis Quiz</h3>
          <span className="text-sm text-muted-foreground">Question {currentQuestion + 1} of {quizQuestions.length}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h4 className="text-lg font-medium">{question.question}</h4>
          {question.tooltip && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{question.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>

        <RadioGroup value={selectedOption} onValueChange={setSelectedOption} className="space-y-3">
          {question.options.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <RadioGroupItem value={option.id} id={option.id} />
              <Label htmlFor={option.id} className="cursor-pointer">{option.text}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={currentQuestion === 0 ? onCancel : handlePrevious}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          {currentQuestion === 0 ? "Cancel" : "Previous"}
        </Button>
        <Button onClick={handleNext} className="flex items-center gap-2">
          {currentQuestion < quizQuestions.length - 1 ? (
            <>
              Next
              <ArrowRight className="h-4 w-4" />
            </>
          ) : (
            <>
              Complete
              <Check className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default DoshaQuiz;
