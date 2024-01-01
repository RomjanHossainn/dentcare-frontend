import BestOfBest from "../../components/BestOfBest/BestOfBest";
import Faq from "../../components/Faq/Faq";
import Servies from "../../components/Servies/Servies";

const ServicePage = () => {
    return (
      <section className=" max-w-screen-xl mx-auto px-4">
        <Servies></Servies>
        <BestOfBest></BestOfBest>
        <Faq></Faq>
      </section>
    );
};

export default ServicePage;