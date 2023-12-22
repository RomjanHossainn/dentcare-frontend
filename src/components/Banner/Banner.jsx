import Carousel from "./Carousel";

import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.jpg'
import slide3 from '../../assets/slide3.png'

const Banner = () => {

  return (
    <Carousel>
      
        <div
          className=" bg-no-repeat flex bg-black/50 bg-blend-overlay items-center bg-center   bg-cover"
          style={{ backgroundImage: `url(${slide1})` }}
        >
          <div className="w-[1280px] mx-auto px-3">
            <div>
              <h5 className="text-[#4FA9E4] font-normal text-4xl">
                Care For Your Smile
              </h5>
              <h1 className=" text-5xl lg:text-7xl font-bold text-white">
                Committed To <br /> Excellence
              </h1>
            </div>
            <div>
              sd
            </div>
          </div>
        </div>
      
      <div
        className="bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${slide2})` }}
      >
        <div>
          <div>
            <h5 className="text-[#4FA9E4] font-semibold text-4xl">
              Care For Your Smile
            </h5>
            <h1 className="text-7xl font-bold text-white">
              Committed To <br /> Excellence
            </h1>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${slide3})` }}
      >
        <div>
          <div>
            <h5 className="text-[#4FA9E4] font-semibold text-4xl">
              Care For Your Smile
            </h5>
            <h1 className="text-7xl font-bold text-white">
              Committed To <br /> Excellence
            </h1>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
