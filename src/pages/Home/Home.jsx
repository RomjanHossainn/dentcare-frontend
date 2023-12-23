import Banner from "../../components/Banner/Banner";
import BestOfBest from "../../components/BestOfBest/BestOfBest";
import CountingSection from "../../components/CountingSection/CountingSection";
import Servies from "../../components/Servies/Servies";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Servies></Servies>
           <BestOfBest></BestOfBest>
           <CountingSection></CountingSection>
        </div>
    );
};

export default Home;