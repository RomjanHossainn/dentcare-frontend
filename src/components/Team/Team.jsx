

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import SectionTtile from "../../Shared/SectionTtile/SectionTtile";


const dentisList = [
  {
    image:
      "https://dentalia.orionthemes.com/demo-1/wp-content/uploads/2016/10/dentalia-demo-deoctor-5-1.jpg",
    name: "Dr. Barbara Orion",
    podobi: "DMD,	",
  },
  {
    image:
      "https://dentalia.orionthemes.com/demo-1/wp-content/uploads/2016/10/dentalia-client-3-1.jpg",
    name: "Dr. Robert Anderson",
    podobi: "DMD, FACE,  FIADFE, FACDS	",
  },
  {
    image:
      "https://dentalia.orionthemes.com/demo-1/wp-content/uploads/2016/10/dentalia-demo-deoctor-3-1-750x750.jpg",
    name: "Dr. Michael Williams",
    podobi: "DMD,  FIADFE, FACDS	",
  },
  {
    image:
      "https://dentalia.orionthemes.com/demo-1/wp-content/uploads/2016/10/dentalia-demo-deoctor-2-750x750.jpg",
    name: " Dr. Linda Davis",
    podobi: "DMD, FACE,	",
  },
  {
    image:
      "https://dentalia.orionthemes.com/demo-1/wp-content/uploads/2016/10/dentalia-demo-deoctor-6-750x750.jpg",
    name: "Olivia Murphy",
    podobi: "DMD, FACE, FAGD, FIADFE, FACDS	",
  },
  {
    image:
      "https://dentalia.orionthemes.com/demo-1/wp-content/uploads/2016/10/dentalia-demo-deoctor-3-1-750x750.jpg",
    name: "Dr. Michael Williams",
    podobi: "DMD, FACE, FAGD,  FACDS	",
  },
  {
    image:
      "https://dentalia.orionthemes.com/demo-1/wp-content/uploads/2016/10/dentalia-demo-deoctor-2-750x750.jpg",
    name: " Dr. Linda Davis",
    podobi: "DMD,  FIADFE, FACDS	",
  },
  {
    image:
      "https://dentalia.orionthemes.com/demo-1/wp-content/uploads/2016/10/dentalia-demo-deoctor-6-750x750.jpg",
    name: "Olivia Murphy",
    podobi: "DMD, FACE, FAGD, 	",
  },
];


const Team = () => {
  return (
    <section className="py-16 max-w-screen-xl mx-auto px-4">
      <SectionTtile
        sortTtile={"Our Dentist"}
        longTtile={"Award Winning Dentists"}
        description={
          "Exceptional dental care by award-winning professionals, creating healthy, beautiful smiles with personalized expertise and advanced technology"
        }
      ></SectionTtile>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {dentisList.map((dentist, index) => (
          <SwiperSlide key={index} className=" rounded-full mt-16">
            <div className="overflow-hidden rounded-full transition-all">
              <img
                src={dentist.image}
                alt=""
                className=" rounded-full hover:scale-105 transition-all duration-300 ease-in  grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div className="text-center mt-6 space-y-2">
              <h5 className="text-[#49AEE9]">DENTIST</h5>
              <h3 className="text-2xl text-[#898989]">{dentist.name}</h3>
              <h5 className="text-[#898989] text-sm">{dentist.podobi}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Team;
