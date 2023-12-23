import Counter from "./Counter";
import doctoricon from '../../assets/doctoricon.png'
import clinicrooms from '../../assets/clinicrooms.png'
import happy from "../../assets/happy.png";
import award from "../../assets/award.png";
const CountingSection = () => {
    return (
      <div className="max-w-screen-xl mx-auto px-4 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-[#F6F9F9] hover:outline outline-none transition-all outline-1 duration-500    hover:outline-[#4FA9E4] rounded-md flex-1 text-center py-20">
          <img src={doctoricon} className="w-[70px] h-[70px] mx-auto" alt="" />
          <Counter topConunt={70}></Counter>
          <h5 className="text-[#B0B0B0] text-lg">Dedicated Doctor</h5>
        </div>
        <div className="bg-[#F6F9F9] hover:outline outline-none transition-all outline-1 duration-500    hover:outline-[#4FA9E4] rounded-md flex-1 text-center py-20">
          <img src={clinicrooms} className="w-[70px] h-[70px] mx-auto" alt="" />
          <Counter topConunt={100}></Counter>
          <h5 className="text-[#B0B0B0] text-lg">Clinic Rooms</h5>
        </div>
        <div className="bg-[#F6F9F9]  hover:outline outline-none transition-all outline-1 duration-500    hover:outline-[#4FA9E4] rounded-md flex-1 text-center py-20">
          <img src={award} className="w-[70px] h-[70px] mx-auto" alt="" />
          <Counter topConunt={500}></Counter>
          <h5 className="text-[#B0B0B0] text-lg">Awards</h5>
        </div>
        <div className="bg-[#F6F9F9]  hover:outline outline-none transition-all outline-1 duration-500    hover:outline-[#4FA9E4] rounded-md flex-1 text-center py-20">
          <img src={happy} className="w-[70px] h-[70px] mx-auto" alt="" />
          <Counter topConunt={1000}></Counter>
          <h5 className="text-[#B0B0B0] text-lg">Happy Clients</h5>
        </div>
      </div>
    );
};

export default CountingSection;