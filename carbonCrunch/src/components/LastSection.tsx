import { assets } from "../assets/assets";

const LastSection = () => {
  return (
    <div className=" flex w-full h-screen overflow-auto  pl-55 ">
      {/* Left Half (Image) */}
      <div className="w-1/2 relative ">
        <img
          src={assets.environment}
          alt="Environment"
          className="absolute top-0 left-0 w-10px h-10px object-cover opacity-90 pl-10"
        />
      </div>

      {/* Right Half (Overlapping Content) */}
      <div className="absolute right-0 w-1/2 h-full translate-x-[-10%] flex flex-col justify-center items-start pt-15">
        {/* Text Blocks with Overlapping Effect */}
        <div className="bg-green-600 text-black w-72 p-4 rounded-lg relative z-40 ml-40">
          <h1 className="font-bold text-3xl text-left">3X</h1>
          <p className="text-xs">ESG high performers deliver a higher total shareholder return</p>
        </div>

        <div className="bg-gray-800 text-white w-72 p-4 rounded-lg relative z-30 -mt-8 -ml-10">
          <h1 className="font-bold text-3xl text-left">98%</h1>
          <p className="text-xs">of CEOs agree sustainability is their responsibility</p>
        </div>

        <div className="bg-gray-800 text-white w-72 p-4 rounded-lg relative z-20 -mt-8 ml-40">
          <h1 className="font-bold text-3xl text-right">18%</h1>
          <p className="text-xs">of companies are cutting emissions fast enough to reach net zero by 2050</p>
        </div>

        <div className="bg-white text-green-500 w-72 p-4 rounded-lg relative z-10 -mt-8 -ml-15">
          <h1 className="font-bold text-3xl text-left">37%</h1>
          <p className="text-xs">of the world's largest companies have a public net zero target. Nearly all are off track</p>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
