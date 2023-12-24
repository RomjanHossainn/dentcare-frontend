
import { IoLocationOutline } from "react-icons/io5";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { BsBookmarkCheck } from "react-icons/bs";

const TimeLocation = () => {
    return (
      <div className="bg-[#F8F8F8]">
        <div className=" max-w-screen-xl gap-5 mx-auto px-4 grid md:grid-cols-3 lg:grid-cols-4 py-6 ">
          <div className="flex items-center gap-4">
            <div className="border w-12 h-12 hover:bg-[#4bace8] hover:text-white  text-[#4BADE8] transition-all duration-300 ease-linear cursor-pointer flex justify-center items-center rounded-md">
              <IoLocationOutline className="w-8 text-2xl " />
            </div>
            <div className="text-[#8C8C8C]">
              <h5 className="text-lg">120 Dental Street</h5>
              <p>Dhamrai Dhaka,1350</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="border w-12 h-12 hover:bg-[#4bace8] hover:text-white  text-[#4BADE8] transition-all duration-300 ease-linear cursor-pointer flex justify-center items-center rounded-md">
              <IoMdPhonePortrait className="text-2xl" />
            </div>
            <div className="text-[#8C8C8C]">
              <h5 className="text-lg">(800)1745395942</h5>
              <p>Call us today!</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="border w-12 h-12 hover:bg-[#4bace8] hover:text-white  text-[#4BADE8] transition-all duration-300 ease-linear cursor-pointer flex justify-center items-center rounded-md">
              <IoMdTime className="text-2xl" />
            </div>
            <div className="text-[#8C8C8C]">
              <h5 className="text-lg">Opening Hours</h5>
              <p>Mon - Fri: 8:00 - 5.00</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="border w-12 h-12 hover:bg-[#4bace8] hover:text-white  text-[#4BADE8] transition-all duration-300 ease-linear cursor-pointer flex justify-center items-center rounded-md">
              <BsBookmarkCheck className="text-2xl" />
            </div>
            <div className="text-[#8C8C8C]">
              <h5 className="text-lg">Book Appoinment</h5>
              <p>romjanhossainn@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TimeLocation;