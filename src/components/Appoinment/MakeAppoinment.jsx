import { IoMdTime } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

const MakeAppoinment = () => {
  return (
    <div className=" flex-1 space-y-5 mt-8 lg:mt-0">
      <h5 className="text-lg font-semibold text-[#4FA9E4]">Book Now</h5>
      <h1 className="text-3xl font-semibold">Make An Appointment</h1>
      <p className="text-gray-500 text-[17px] leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris
      </p>
      <h5 className="text-lg font-medium">Opening Hours</h5>
      <div className=" space-y-3">
        <span className="flex items-center text-gray-600 justify-between">
          <p>Monday - Thursday</p>
          <p className="flex items-center gap-3">
            <IoMdTime className="text-[#4CABE6]" />
            08.00 AM - 20.00 PM
          </p>
        </span>
        <hr />
        <span className="flex items-center text-gray-600 justify-between">
          <p>Friday</p>
          <p className="flex items-center gap-3">
            <IoMdTime className="text-[#4CABE6]" />
            08.00 AM - 20.00 PM
          </p>
        </span>
        <hr />
        <span className="flex items-center text-gray-600 justify-between">
          <p>Saturday</p>
          <p className="flex items-center gap-3">
            <IoMdTime className="text-[#4CABE6]" />
            08.00 AM - 20.00 PM
          </p>
        </span>
        <hr />
        <span className="flex items-center text-gray-600 justify-between">
          <p>Sunday</p>
          <p className="flex items-center gap-3">
            <IoMdTime className="text-[#4CABE6]" />
            08.00 AM - 20.00 PM
          </p>
        </span>
        <hr />
      </div>
      <h5 className="text-lg font-medium ">Support</h5>
      <p className="text-gray-500 text-[17px] leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex gap-20 py-6">
        <div className="flex gap-3">
          <MdOutlineMailOutline className=" text-4xl text-[#4CABE6] " />
          <div>
            <h5 className="text-lg font-semibold">Email Address</h5>
            <p className="text-gray-600">contact@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-3">
          <FaPhoneVolume className=" text-4xl text-[#4CABE6] " />
          <div>
            <h5 className="text-lg font-semibold">Email Address</h5>
            <p className="text-gray-600">contact@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAppoinment;
