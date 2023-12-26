import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Question = ({bgimage}) => {
    
  return (
    <div className="">
      <div
        className="space-y-4 bg-cover py-12 mt-10 bg-center bg-no-repeat bg-[#d9e8f1]  bg-opacity-100  bg-blend-overlay
              px-8 rounded-lg  "
        style={{
          backgroundImage: `url(${bgimage})`,
        }}
      >
        <h5 className="text-2xl font-medium text-gray-700">
          Have Any Question?
        </h5>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
        <span className="flex items-center gap-2">
          <FaPhoneAlt className="text-[#49AFE9]" />
          <p>(+800)1745395942</p>
        </span>
        <span className="flex items-center gap-2">
          <MdOutlineEmail className="text-[#49AFE9] text-lg" />
          <p>romjanhossainn@gmail.com</p>
        </span>
      </div>
    </div>
  );
};

export default Question;
