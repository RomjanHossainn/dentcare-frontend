import FormSelect from "./FormSelect";

const AppoinmentForm = () => {
    return (
      <div className="flex-1">
        <form
          action=""
          style={{ boxShadow: "0 3px 15px 0 rgba(0, 0, 0, 0.1)" }}
          className="py-6 rounded-xl mt-6 p-3 md:p-8 "
        >
          <div className="">
            <div className="w-full relative px-3 mb-2 md:mb-8">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="block  w-full px-4 py-4 mb-3 leading-tight text-gray-700 focus:outline outline-[#51B1E9]  border rounded lg:mb-0 dark:text-gray-400 text-lg "
              />
              {/* <FaUser className=" absolute right-8 top-5 text-[#49AEE9]" /> */}
            </div>
            <div className="w-full px-3 relative mb-2 md:mb-8">
              <input
                type="email"
                placeholder="Your Email"
                required
                className="block w-full px-4 py-4 mb-3 leading-tight text-gray-700 focus:outline outline-[#51B1E9]  border rounded lg:mb-0 dark:text-gray-400 text-lg "
              />
              {/* <FaUser className=" absolute right-8 top-5 text-[#49AEE9]" /> */}
            </div>
            <div className="w-full px-3 relative mb-2 md:mb-8">
              <FormSelect></FormSelect>
            </div>

            <div className="w-full relative px-3 mb-2 md:mb-8">
              <input
                type="text"
                placeholder="Phone Number"
                required
                className="block w-full px-4 py-4 mb-3 leading-tight text-gray-700 focus:outline outline-[#51B1E9]  border rounded lg:mb-0 dark:text-gray-400 text-lg"
              />
              {/* <FaPhoneAlt className=" absolute right-8 top-5 text-[#49AEE9]" /> */}
            </div>
            <div className="w-full relative mb-2 px-3  md:mb-8">
              <input
                type="date"
                placeholder="Select Date"
                required
                className="block w-full px-4 py-4 mb-3 leading-tight text-gray-700 focus:outline outline-[#51B1E9]  border rounded lg:mb-0  text-lg"
              />
              {/* <MdEmail className=" absolute text-lg right-8 top-5 text-[#49AEE9]" /> */}
            </div>

            <div className="w-full relative mb-2 mt-3 px-3 md:mb-0">
              <div>
                <textarea
                  type="message"
                  placeholder="Your Message"
                  rows={6}
                  required
                  className="block w-full px-4 py-4 mb-3 leading-tight text-gray-700 focus:outline outline-[#51B1E9]  border rounded lg:mb-0  text-lg"
                ></textarea>
              </div>
              {/* <MdEmail className=" absolute text-lg right-8 top-5 text-[#49AEE9]" /> */}
            </div>
            <div className="mt-8">
              <button className=" bg-[#4FA9E4] px-6 rounded-full text-white cursor-pointer py-3">
                <input type="submit" className=" cursor-pointer" value="Make Appoinment" />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
};

export default AppoinmentForm;