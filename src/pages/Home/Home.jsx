import HomeBlogs from "../../Shared/Blogs/HomeBlogs";
import Banner from "../../components/Banner/Banner";
import BestOfBest from "../../components/BestOfBest/BestOfBest";
import CountingSection from "../../components/CountingSection/CountingSection";
import Servies from "../../components/Servies/Servies";
import TimeLocation from "../../components/TimeLocation/TimeLocation";

const Home = () => {
    return (
      <div>
        <TimeLocation></TimeLocation>
        <Banner></Banner>
        <Servies></Servies>
        <BestOfBest></BestOfBest>
        <CountingSection></CountingSection>
        <HomeBlogs></HomeBlogs>
      </div>
    );
};

export default Home;