import { useNavigate } from "react-router-dom";
import NavigationHeader from "../components/nav-header";
import NavigationCardsGrid from "../components/NavigationCardsGrid";
import IntroductionSection from "../components/IntroductionSection";
import navCards from "../assets/data/cards-data.json";

export default function Home() {
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <NavigationHeader showName={true} />

      <div className="flex-1 w-full flex items-center justify-center p-6 sm:p-8 lg:p-12 w-auto">
        <div className="max-w-6xl w-full space-y-12 lg:space-y-16">
          <IntroductionSection />

          <NavigationCardsGrid cards={navCards} onCardClick={handleCardClick} />
        </div>
      </div>
    </>
  );
}
