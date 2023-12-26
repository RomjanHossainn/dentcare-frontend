import { AiOutlineLike } from "react-icons/ai";
import prove from '../../assets/probe.png'
import doctor from '../../assets/doctor.png'
import like from '../../assets/like.png'
const Setisfaction = () => {
    
  return (
    <section className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 justify-center text-center gap-16  mt-20">
      <div className=" space-y-3">
        <img src={like} className=" w-16 h-16 mx-auto" alt="" />
        <h3 className="text-2xl text-[#191919]">Satisfaction Guarantee</h3>
        <p className="text-gray-500">
          Exceptional smiles guaranteed! Our dental clinic ensures your
          satisfaction with top-notch care and personalized service
        </p>
      </div>
      <div className=" space-y-3">
        <img src={prove} className="w-16 h-16 mx-auto" alt="" />
        <h3 className="text-2xl text-[#191919]">Satisfaction Guarantee</h3>
        <p>
          Exceptional smiles guaranteed! Our dental clinic ensures your
          satisfaction with top-notch care and personalized service
        </p>
      </div>
      <div className=" space-y-3">
        <img src={doctor} className="w-16 h-16 mx-auto" alt="" />
        <h3 className="text-2xl text-[#191919]">Satisfaction Guarantee</h3>
        <p>
          Exceptional smiles guaranteed! Our dental clinic ensures your
          satisfaction with top-notch care and personalized service
        </p>
      </div>
    </section>
  );
};

export default Setisfaction;
