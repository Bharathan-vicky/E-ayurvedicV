
import { 
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle 
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Fingerprint, BookText, FlaskConical } from "lucide-react";

interface PlantDetailProps {
  plant: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PlantDetail = ({ plant, open, onOpenChange }: PlantDetailProps) => {
  if (!plant) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-screen overflow-y-auto sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">{plant.name}</DialogTitle>
          <DialogDescription className="text-base opacity-90">
            {plant.scientificName} • {plant.ayurvedicName}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-6">
          <div className="aspect-video w-full rounded-lg overflow-hidden mb-6">
            <img 
              src={plant.image} 
              alt={plant.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <p className="text-muted-foreground mb-6">{plant.description}</p>
          
          <Tabs defaultValue="properties">
            <TabsList className="w-full">
              <TabsTrigger value="properties" className="flex-1">
                <Fingerprint className="mr-2 h-4 w-4" />
                Properties
              </TabsTrigger>
              <TabsTrigger value="uses" className="flex-1">
                <BookText className="mr-2 h-4 w-4" />
                Uses
              </TabsTrigger>
              <TabsTrigger value="research" className="flex-1">
                <FlaskConical className="mr-2 h-4 w-4" />
                Research
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="properties" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Ayurvedic Properties</h4>
                  <ul className="space-y-2">
                    <li>
                      <span className="font-medium">Rasa (Taste):</span>{" "}
                      {plant.properties.rasa.join(", ")}
                    </li>
                    <li>
                      <span className="font-medium">Virya (Potency):</span>{" "}
                      {plant.properties.virya}
                    </li>
                    <li>
                      <span className="font-medium">Vipaka (Post-digestive):</span>{" "}
                      {plant.properties.vipaka}
                    </li>
                  </ul>
                  
                  <h4 className="font-medium mt-4 mb-2">Dosha Effects</h4>
                  <ul className="space-y-2">
                    <li>
                      <span className="font-medium">Vata:</span>{" "}
                      {plant.properties.doshaEffect.vata}
                    </li>
                    <li>
                      <span className="font-medium">Pitta:</span>{" "}
                      {plant.properties.doshaEffect.pitta}
                    </li>
                    <li>
                      <span className="font-medium">Kapha:</span>{" "}
                      {plant.properties.doshaEffect.kapha}
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Benefits</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {plant.benefits.map((benefit: string) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                  
                  {plant.contraindications && (
                    <>
                      <h4 className="font-medium mt-4 mb-2">Cautions & Contraindications</h4>
                      <ul className="list-disc pl-5 space-y-1 text-amber-700 dark:text-amber-500">
                        {plant.contraindications.map((item: string) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="uses" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Common Uses</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {plant.uses.map((use: string) => (
                      <li key={use}>{use}</li>
                    ))}
                  </ul>
                  
                  <h4 className="font-medium mt-4 mb-2">Seasonal Usage</h4>
                  <p>{plant.season}</p>
                </div>
                
                <div>
                  {plant.remedies && plant.remedies.length > 0 && (
                    <>
                      <h4 className="font-medium mb-2">Remedies</h4>
                      {plant.remedies.map((remedy: any) => (
                        <div key={remedy.name} className="mb-4">
                          <p className="font-medium text-sm">{remedy.name}</p>
                          <p className="text-sm text-muted-foreground mb-1">Ingredients:</p>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            {remedy.ingredients.map((item: string, i: number) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                          <p className="text-sm text-muted-foreground mt-2 mb-1">Preparation:</p>
                          <p className="text-sm">{remedy.preparation}</p>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="research" className="pt-6">
              {plant.researchStudies && plant.researchStudies.length > 0 ? (
                <div>
                  <h4 className="font-medium mb-4">Research Studies</h4>
                  {plant.researchStudies.map((study: any) => (
                    <div key={study.title} className="mb-6 p-4 bg-muted rounded-lg">
                      <h5 className="font-medium">{study.title}</h5>
                      <p className="mt-2 text-muted-foreground">{study.findings}</p>
                      <a href={study.link} className="text-primary text-sm mt-2 inline-block">
                        Read more →
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground italic">
                  Research information is currently being compiled for this plant.
                </p>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlantDetail;
