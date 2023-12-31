
const OurAproch = () => {
    return (
      <div className=" py-16">
        <div className="md:flex items-center justify-between">
          <div className=" space-y-2">
            <h5 className="text-lg font-semibold text-[#4CABE6]">
              Our Approach
            </h5>
            <h1 className="text-3xl font-semibold">
              The Procedure for a Check-up at <br /> Dentcare
            </h1>
          </div>
          <div>
            <button className="bg-[#4CABE6] px-6 py-3 mt-5 md:mt-0 rounded-full text-white text-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="flex items-center">
              <div
                style={{ boxShadow: "0 3px 15px 0 rgba(0, 0, 0, 0.1)" }}
                className=" text-2xl  relative hover:bg-[#4CABE6] hover:text-white transition-all  w-[95px] h-[70px] flex items-center justify-center rounded-full "
              >
                <h1>01</h1>
              </div>
              <span className="h-[1px] bg-[#E2E7E6] w-full "></span>
            </span>

            <div className="space-y-3 mt-12">
              <h3 className="text-2xl font-medium text-[#0D0D0D]">
                Make an Appointment
              </h3>
              <p className="text-gray-500 text-[17px]">
                Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
          </div>
          <div>
            <span className="flex items-center">
              <div
                style={{ boxShadow: "0 3px 15px 0 rgba(0, 0, 0, 0.1)" }}
                className=" text-2xl  hover:bg-[#4CABE6] hover:text-white transition-all w-[90px] h-[70px] flex items-center justify-center rounded-full "
              >
                <h1>02</h1>
              </div>
              <span className="h-[1px] bg-[#E2E7E6] w-full "></span>
            </span>
            <div className="space-y-3 mt-12">
              <h3 className="text-2xl font-medium text-[#0D0D0D]">
                Meet The Dentist
              </h3>
              <p className="text-gray-500 text-[17px]">
                Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
          </div>
          <div>
            <span className="flex items-center">
              <div
                style={{ boxShadow: "0 3px 15px 0 rgba(0, 0, 0, 0.1)" }}
                className=" text-2xl  hover:bg-[#4CABE6] hover:text-white transition-all w-[95px] h-[70px] flex items-center justify-center rounded-full "
              >
                <h1>02</h1>
              </div>
              <span className="h-[1px] bg-[#E2E7E6] w-full "></span>
            </span>
            <div className="space-y-3 mt-12">
              <h3 className="text-2xl font-medium text-[#0D0D0D]">
                General Dental Check Up
              </h3>
              <p className="text-gray-500 text-[17px]">
                Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
          </div>
          <div>
            <span className="flex items-center">
              <div
                style={{ boxShadow: "0 3px 15px 0 rgba(0, 0, 0, 0.1)" }}
                className=" text-2xl hover:bg-[#4CABE6] hover:text-white transition-all  w-[95px] h-[70px] flex items-center justify-center rounded-full"
              >
                <h1>02</h1>
              </div>
              <span className="h-[1px] bg-[#E2E7E6] w-full "></span>
            </span>
            <div className="space-y-3 mt-12">
              <h3 className="text-2xl font-medium text-[#0D0D0D]">
                Prescribe & Payment
              </h3>
              <p className=" text-gray-500 text-[17px]">
                Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OurAproch;