import { cardData } from "../assets/assets";
import Card from "../components/Card";
import LastSection from "../components/LastSection";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="flex justify-center items-center ">
        <div className="w-[580px] h-[119px] flex flex-col justify-center items-center rounded-lg">
          {/* Box around "FEATURES" */}
          <div className="border border-white shadow-md rounded-2xl px-4 py-1 bg-white">
            <p className="text-lg font-semibold text-green-600">FEATURES</p>
          </div>

          {/* "Why Carbon Crunch?" text */}
          <p className="text-2xl font-bold text-black mt-2">
            Why Carbon Crunch?
          </p>
        </div>
      </div>
{/* Card  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 ">
        {cardData.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
      {/* Bottom section */}
      <div >
        <LastSection />
      </div>
    </div>
  );
};

export default Home;
