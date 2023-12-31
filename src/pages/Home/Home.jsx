import HomeBlogs from "../../Shared/Blogs/HomeBlogs";
import Banner from "../../components/Banner/Banner";
import BestOfBest from "../../components/BestOfBest/BestOfBest";
import CountingSection from "../../components/CountingSection/CountingSection";
import Faq from "../../components/Faq/Faq";
import Servies from "../../components/Servies/Servies";
import Setisfaction from "../../components/Setisfaction/Setisfaction";
import Team from "../../components/Team/Team";
import Contact from "../../components/Contact/Contact";
import TimeLocation from "../../components/TimeLocation/TimeLocation";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
      <div>
        <TimeLocation></TimeLocation>
        <Banner></Banner>
        <Servies></Servies>
        <BestOfBest></BestOfBest>
        <CountingSection></CountingSection>
        <HomeBlogs></HomeBlogs>
        <Setisfaction></Setisfaction>
        <Faq></Faq>
        <Team></Team>
        <Contact></Contact>
      </div>
    );
};

export default Home;