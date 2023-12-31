import logo from '../../assets/toothlogo.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  
    return (
      <footer className=" lg:max-w-screen-xl mx-auto py-12 px-3">
        <div className="">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6   ">
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center gap-3 text-2xl lg:text-3xl xl:text-4xl font-semibold"
                >
                  <img className=" w-11" src={logo} alt="" />
                  Dentcare
                </a>
                <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                  Proper oral care fosters healthy smiles. Explore our tips for
                  a brighter, confident, and radiant smile confident, and
                  radiant smile
                </p>
                <span className="flex items-center gap-5">
                  <FaLocationDot className="text-[#4FA9E4]" />
                  <p className="text-gray-400">
                    {" "}
                    Popular Dentcare , Dhamrai Dhaka{" "}
                  </p>
                </span>
                <span className="flex items-center gap-5">
                  <MdEmail className="text-[#4FA9E4]" />
                  <p className='text-gray-400'>romjanhoosain@suport.com</p>
                </span>
              </div>
              <div className='translate-x-3'>
                <h3 className="text-gray-700 font-semibold  dark:text-white text-[20px]">
                  Quick Links
                </h3>
                <a
                  href=""
                  className=" mt-4 flex hover:text-[#4FA9E4]  items-center gap-2 text-[17px] text-[#A0A0A0]  "
                >
                  <FaAngleRight className="text-[#4FA9E4]" />
                  About Us
                </a>
                <a
                  href=""
                  className=" mt-3 flex hover:text-[#4FA9E4]  items-center gap-2 text-[17px] text-[#A0A0A0]  "
                >
                  <FaAngleRight className="text-[#4FA9E4]" />
                  Services
                </a>
                <a
                  href=""
                  className=" mt-3 flex hover:text-[#4FA9E4] items-center gap-2 text-[17px] text-[#A0A0A0]  "
                >
                  <FaAngleRight className="text-[#4FA9E4]" />
                  Appoinment
                </a>
                <a
                  href=""
                  className=" mt-3 flex hover:text-[#4FA9E4] items-center gap-2 text-[17px] text-[#A0A0A0]  "
                >
                  <FaAngleRight className="text-[#4FA9E4]" />
                  Our Doctor
                </a>
                <a
                  href=""
                  className=" mt-3 flex hover:text-[#4FA9E4] items-center gap-2 text-[17px] text-[#A0A0A0]  "
                >
                  <FaAngleRight className="text-[#4FA9E4]" />
                  Contact
                </a>
              </div>
              <div>
                <h3 className="text-gray-700 font-semibold  dark:text-white text-[20px]">
                  Useful Links
                </h3>
                <a
                  href=""
                  className=" mt-4 flex hover:text-[#4FA9E4]  items-center gap-2 text-[17px] text-[#A0A0A0]  "
                >
                  <FaAngleRight className="text-[#4FA9E4]" />
                  Privacy Policy
                </a>
                <a
                  href=""
                  className=" mt-3 flex hover:text-[#4FA9E4]  items-center gap-2 text-[17px] text-[#A0A0A0]  "
                >
                  <FaAngleRight className="text-[#4FA9E4]" />
                  Terms and Conditions
                </a>
                <a
                  href=""
                  className=" mt-3 flex hover:text-[#4FA9E4] items-center gap-2 text-[17px] text-[#A0A0A0]  "
                >
                  <FaAngleRight className="text-[#4FA9E4]" />
                  Disclaimer
                </a>
                <a
                  href=""
                  className=" mt-3 flex hover:text-[#4FA9E4] items-center gap-2 text-[17px] text-[#A0A0A0]  "
                >
                  <FaAngleRight className="text-[#4FA9E4]" />
                  Elemets
                </a>
                <a
                  href=""
                  className=" mt-3 flex hover:text-[#4FA9E4] items-center gap-2 text-[17px] text-[#A0A0A0]  "
                >
                  <FaAngleRight className="text-[#4FA9E4]" />
                  Support
                </a>
              </div>
              <div className=" space-y-4">
                <h3 className="text-gray-700 font-semibold  dark:text-white text-[20px]">
                  Make Appointment
                </h3>
                <p className=" text-gray-400">
                  Proper oral care fosters healthy smiles. Explore our tips for
                  a brighter, confident, and radiant smile confident
                </p>
                <button className="flex text-white px-5 py-3 rounded-full items-center gap-2 bg-[#4FA9E4]">
                  <FaPhoneAlt className="text-white" />
                  (+880)1745395942
                </button>
              </div>
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-none dark:bg-gray-700" />
          <div>
            <p className="text-center text-gray-500 dark:text-gray-400">
              © Developer - Romjan Hossain Ornob
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;