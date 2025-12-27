import NavigationCard from "./NavigationCard";

interface NavigationCard {
  title: string;
  description: string;
  path: string;
  icon: string;
  color: string;
}

interface NavigationCardsGridProps {
  cards: NavigationCard[];
  onCardClick: (path: string) => void;
}

export default function NavigationCardsGrid({ cards, onCardClick }: NavigationCardsGridProps) {
  return (
    <div className="w-full">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-8">
        Explore More
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {cards.map((card) => (
          <NavigationCard
            key={card.path}
            title={card.title}
            description={card.description}
            icon={card.icon}
            color={card.color}
            onClick={() => onCardClick(card.path)}
          />
        ))}
      </div>
    </div>
  );
}
