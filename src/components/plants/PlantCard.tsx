
import AnimatedCard from "@/components/ui-custom/AnimatedCard";

interface PlantCardProps {
  plant: {
    id: number;
    name: string;
    scientificName: string;
    ayurvedicName: string;
    image: string;
    properties: {
      doshaEffect: {
        vata: string;
        pitta: string;
        kapha: string;
      };
    };
  };
  onClick: () => void;
}

const PlantCard = ({ plant, onClick }: PlantCardProps) => {
  const isTridoshic = 
    plant.properties.doshaEffect.vata.includes("Balances") && 
    plant.properties.doshaEffect.pitta.includes("Balances") && 
    plant.properties.doshaEffect.kapha.includes("Balances");

  return (
    <AnimatedCard
      key={plant.id}
      title={plant.name}
      description={`${plant.scientificName} • ${plant.ayurvedicName}`}
      imageSrc={plant.image}
      onClick={onClick}
      badge={isTridoshic ? "Tridoshic" : null}
      className="cursor-pointer hover:shadow-md transition-shadow"
    />
  );
};

export default PlantCard;
