import Faq from "../Faq/Faq";
import AppoinmentForm from "./AppoinmentForm";
import MakeAppoinment from "./MakeAppoinment";
import OurAproch from "./OurAproch";

const Apoinment = () => {
    return (
      <section className="px-4 max-w-screen-xl mx-auto">
        <div className="lg:flex items-center  gap-16">
          <AppoinmentForm></AppoinmentForm>
          <MakeAppoinment></MakeAppoinment>
        </div>
        <OurAproch></OurAproch>
        <Faq></Faq>
      </section>
    );
};

export default Apoinment;