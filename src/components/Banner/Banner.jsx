import Carousel from "./Carousel";

import { FaPlay } from "react-icons/fa6";
const Banner = () => {


  return (
    <Carousel>
      {/* <div
        className="bg-no-repeat 
        py-28 md:py-48 flex items-center bg-center   bg-cover"
        style={{
          backgroundImage: `linear-gradient(90deg, #FFFFFF 30%, #F2295B00 63%),url('https://i.ibb.co/fGJVJ0X/slide1.png')`,
        }}
      >
        <div className="w-[1280px] mx-auto px-3">
          <div>
            <h5 className="text-[#4FA9E4] font-normal text-4xl">
              Care For Your Smile
            </h5>
            <h1 className=" text-5xl lg:text-4xl font-bold  text-[#0D0D0D]">
              Excellent Techniques <br /> For Healthy Dental <br /> Condition
            </h1>
          </div>
          <div>sd</div>
        </div>
      </div> */}
      <div
        className="bg-cover py-28  flex md:py-48 items-center bg-no-repeat  "
        style={{
          backgroundImage: `linear-gradient(90deg, #FFFFFF 30%, #F2295B00 63%),url('https://i.ibb.co/Xs81KS2/slide3.png')`,
        }}
      >
        <div className="w-[1280px] mx-auto px-3 space-y-10">
          <div className=" space-y-4">
            <h5 className="text-[#4FA9E4] font-semibold md:text-3xl">
              Care For Your Smile
            </h5>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold  text-[#0D0D0D]">
              Excellent Techniques <br /> For Healthy Dental <br /> Condition
            </h1>
            <p className="text-[#424242] md:text-[#949494]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
              <br /> do eiusmod tempor incididunt ut labore et dolore magna{" "}
              <br /> aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="flex items-center gap-10">
            <button className="bg-[#4FA9E4] text-white px-8 py-3 rounded-full">
              Get Started
            </button>
            <div className="flex items-center cursor-pointer gap-5">
              <div className="border-2 w-[55px] h-[55px] flex items-center justify-center text-[#4FA9E4] hover:bg-[#4FA9E4] hover:text-white transition-all ease-in   rounded-full border-[#4FA9E4]">
                <FaPlay />
              </div>
              <h3 className="text-[#4b4b4b] md:text-[#838383]">Watch Video</h3>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-cover py-28  md:py-48 flex items-center bg-no-repeat "
        style={{
          backgroundImage: `linear-gradient(90deg, #FFFFFF 30%, #F2295B00 75%),url('https://i.ibb.co/6vyk2KS/slide2.webp')`,
        }}
      >
        <div className="w-[1280px] mx-auto  px-3 space-y-10">
          <div className="space-y-4">
            <h5 className="text-[#4FA9E4] font-semibold md:text-3xl">
              Care For Your Smile
            </h5>
            <h1 className=" text-2xl md:text-4xl lg:text-5xl font-semibold  text-[#0D0D0D] ">
              Excellent Techniques <br /> For Healthy Dental <br /> Condition
            </h1>
            <p className="text-[#424242] md:text-[#949494]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
              <br /> do eiusmod tempor incididunt ut labore et dolore magna{" "}
              <br /> aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="flex items-center gap-10">
            <button className="bg-[#4FA9E4] text-white px-8 py-3 rounded-full">
              Get Started
            </button>
            <div className="flex items-center cursor-pointer gap-5">
              <div className="border-2 w-[55px] h-[55px] flex items-center justify-center text-[#4FA9E4] hover:bg-[#4FA9E4] hover:text-white transition-all ease-in   rounded-full border-[#4FA9E4]">
                <FaPlay />
              </div>
              <h3>Watch Video</h3>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
