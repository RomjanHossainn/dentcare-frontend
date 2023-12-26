import { FaArrowRight } from "react-icons/fa6";
const SingleServies = ({ service }) => {
  return (
    <div
      className="flex gap-6 shadow-sm  p-8 rounded-lg hover:bg-[#4fa8e40c] transition-all"
      style={{ boxShadow: "0 3px 15px 0 rgba(0, 0, 0, 0.1)" }}
    >
      <div>
        <img className=" min-w-10 h-10 hover:-translate-y-2 transition-all duration-200" src={service.image} alt="" />
      </div>
      <div className=" space-y-2">
        <h4 className="text-[22px] text-[#434343] font-semibold">
          {service.title}
        </h4>
        <p className="text-base text-[#8C8C8C]">{service.description}</p>
        <button className="text-[#4FA9E4] flex items-center gap-2 text-sm font-semibold">
          Read More
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SingleServies;
