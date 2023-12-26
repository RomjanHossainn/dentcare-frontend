import { IoIosArrowForward } from "react-icons/io";

const Category = () => {
  return (
    <div
      style={{ boxShadow: "0 3px 15px 0 rgba(0, 0, 0, 0.1)" }}
      className=" mt-10 p-8 space-y-4 rounded-lg "
    >
      <h3 className="text-2xl text-gray-800">Categoryes</h3>
      <span className="flex items-center gap-4 cursor-pointer">
        <IoIosArrowForward className="text-[#4FA9E4] text-xl" />
        <p>Teeth</p>
      </span>
      <span className="flex items-center gap-4 cursor-pointer">
        <IoIosArrowForward className="text-[#4FA9E4] text-xl" />
        <p>Insight</p>
      </span>
      <span className="flex items-center gap-4 cursor-pointer">
        <IoIosArrowForward className="text-[#4FA9E4] text-xl" />
        <p>Health</p>
      </span>
      <span className="flex items-center gap-4 cursor-pointer">
        <IoIosArrowForward className="text-[#4FA9E4] text-xl" />
        <p>Dentistry</p>
      </span>
    </div>
  );
};

export default Category;
