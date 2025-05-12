
import { Coffee, FlaskConical, Fingerprint, BookOpen } from "lucide-react";

const CommonRemedies = () => {
  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg text-center">Common Ayurvedic Remedies</h2>
          <p className="mt-4 text-muted-foreground text-center mb-8">
            Simple herbal preparations you can make at home for everyday wellness.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center mb-4">
                <Coffee className="h-6 w-6 text-amber-700 mr-3" />
                <h3 className="text-xl font-serif font-medium">Golden Milk</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                A soothing bedtime drink that promotes relaxation and joint health.
              </p>
              <div>
                <h4 className="font-medium mb-2">Ingredients:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>1 cup milk (dairy or plant-based)</li>
                  <li>1/2 teaspoon turmeric powder</li>
                  <li>Pinch of black pepper</li>
                  <li>1/4 teaspoon cinnamon</li>
                  <li>Honey to taste</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center mb-4">
                <FlaskConical className="h-6 w-6 text-emerald-600 mr-3" />
                <h3 className="text-xl font-serif font-medium">Digestive CCF Tea</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                A classic Ayurvedic blend that supports healthy digestion and metabolism.
              </p>
              <div>
                <h4 className="font-medium mb-2">Ingredients:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>1/3 teaspoon cumin seeds</li>
                  <li>1/3 teaspoon coriander seeds</li>
                  <li>1/3 teaspoon fennel seeds</li>
                  <li>1 cup boiling water</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center mb-4">
                <Fingerprint className="h-6 w-6 text-indigo-500 mr-3" />
                <h3 className="text-xl font-serif font-medium">Brahmi Hair Oil</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nourishes hair and scalp while calming the mind.
              </p>
              <div>
                <h4 className="font-medium mb-2">Ingredients:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>2 tablespoons dried Brahmi leaves</li>
                  <li>1 cup coconut oil</li>
                  <li>Few curry leaves (optional)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-rose-500 mr-3" />
                <h3 className="text-xl font-serif font-medium">Triphala Water</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                A gentle overnight detox and digestive support.
              </p>
              <div>
                <h4 className="font-medium mb-2">Ingredients:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>1/2 teaspoon Triphala powder</li>
                  <li>1 cup room temperature water</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonRemedies;
