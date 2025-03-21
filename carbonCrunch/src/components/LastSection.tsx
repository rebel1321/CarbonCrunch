import { assets } from "../assets/assets";

const LastSection = () => {
  return (
    <div className=" flex w-full h-screen overflow-auto ml-30 pl-35 ">
      {/* Left Half (Image) */}
      <div className="w-1/2 relative h-full">
        <img
          src={assets.environment}
          alt="Environment"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Right Half (Overlapping Content) */}
      <div className="absolute right-0 w-1/2 h-full translate-x-[-10%] flex flex-col justify-center items-start mt-40 pl-20">
        {/* Text Blocks with Overlapping Effect */}
        <div className="bg-green-600 text-black w-72 p-4 rounded-lg relative z-40 ml-55">
          <h1 className="font-bold text-3xl text-left">3X</h1>
          <p className="text-xs">ESG high performers deliver a higher total shareholder return</p>
        </div>

        <div className="bg-gray-800 text-white w-72 p-4 rounded-lg relative z-30 -mt-8 -ml-10">
          <h1 className="font-bold text-3xl text-left">3X</h1>
          <p className="text-xs">ESG high performers deliver a higher total shareholder return</p>
        </div>

        <div className="bg-gray-800 text-white w-72 p-4 rounded-lg relative z-20 -mt-8 ml-55">
          <h1 className="font-bold text-3xl text-right">3X</h1>
          <p className="text-xs">ESG high performers deliver a higher total shareholder return</p>
        </div>

        <div className="bg-white text-green-500 w-72 p-4 rounded-lg relative z-10 -mt-8 -ml-15">
          <h1 className="font-bold text-3xl text-left">3X</h1>
          <p className="text-xs">ESG high performers deliver a higher total shareholder return</p>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
