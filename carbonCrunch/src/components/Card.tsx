import { CardType } from "../assets/assets"; // Importing Job type

interface CardProps {
  card: CardType;
}

const Card: React.FC<CardProps> = ({ card }) => {

  return (
    <div className="border border-white p-6 shadow-md rounded-2xl">
      <div className="flex justify-between items-center">
        <img className="h-8" src={card.logo} alt="Company Icon" />
      </div>
      <h4 className="font-medium text-xl mt-2">{card.title}</h4>
      <p className="text-gray-500 text-sm mt-4"
        dangerouslySetInnerHTML={{
          __html: card.description ? card.description.slice(0, 150) : "",
        }}
      ></p>
      
    </div>
  );
};

export default Card;
