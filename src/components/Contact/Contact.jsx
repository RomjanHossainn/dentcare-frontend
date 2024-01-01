import SectionTtile from "../../Shared/SectionTtile/SectionTtile";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {

  
  
  return (
    <section className=" max-w-screen-xl mx-auto px-4 md:px- py-12">
      <SectionTtile
        sortTtile={"CONTACT US"}
        longTtile={"Request an Appointment"}
        description={
          "Fill out the form below and we will contact you during our working hours."
        }
      ></SectionTtile>
      <div>
        <form action="" className="py-6 rounded mt-6">
          <div className="flex flex-wrap">
            <div className="w-full relative px-3 mb-2 md:w-1/2 md:mb-8">
              <input
                type="text"
                placeholder="First Name"
                required
                className="block  w-full px-4 py-4 mb-3 leading-tight text-gray-700 focus:outline outline-[#51B1E9]  border rounded lg:mb-0 dark:text-gray-400 text-lg "
              />
              <FaUser className=" absolute right-8 top-5 text-[#49AEE9]" />
            </div>
            <div className="w-full px-3 relative mb-2 md:w-1/2 md:mb-4">
              <input
                type="text"
                placeholder="Last Name"
                required
                className="block w-full px-4 py-4 mb-3 leading-tight text-gray-700 focus:outline outline-[#51B1E9]  border rounded lg:mb-0 dark:text-gray-400 text-lg "
              />
              <FaUser className=" absolute right-8 top-5 text-[#49AEE9]" />
            </div>
            <div className="w-full relative px-3 mb-2 md:w-1/2 md:mb-8">
              <input
                type="text"
                placeholder="Phone Number"
                required
                className="block w-full px-4 py-4 mb-3 leading-tight text-gray-700 focus:outline outline-[#51B1E9]  border rounded lg:mb-0 dark:text-gray-400 text-lg"
              />
              <FaPhoneAlt className=" absolute right-8 top-5 text-[#49AEE9]" />
            </div>
            <div className="w-full relative mb-2 px-3 md:w-1/2 md:mb-0">
              <input
                type="email"
                placeholder="E-mail"
                required
                className="block w-full px-4 py-4 mb-3 leading-tight text-gray-700 focus:outline outline-[#51B1E9]  border rounded lg:mb-0  text-lg"
              />
              <MdEmail className=" absolute text-lg right-8 top-5 text-[#49AEE9]" />
            </div>
          </div>
          <div className="px-3 mb-6">
            <textarea
              type="message"
              placeholder="Question & Comment"
              rows={6}
              required
              className="block w-full px-4 py-4 mb-3 leading-tight text-gray-700 focus:outline outline-[#51B1E9]  border rounded lg:mb-0  text-lg"
            ></textarea>
          </div>
          <div className=" px-3 md:flex gap-5 justify-between items-center">
            <div className=" flex-1">
              <select
                name="select"
                className="w-full border py-3 px-3 block mb-5 md:mb-0   leading-tight text-gray-500 focus:outline outline-[#51B1E9]   rounded lg:mb-0  text-lg"
              >
                <option value="" className="text-gray-500">
                  Request Ans
                </option>
              </select>
            </div>
            <button className="px-12 py-3 font-medium text-gray-100 rounded shadow bg-[#46a3da] hover:bg-[#4eb1eb]">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
