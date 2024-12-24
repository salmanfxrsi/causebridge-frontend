import Carousel from "../components/Carousel";
import HomeStat from "../components/HomeStat";
import UpcomingPosts from "../components/UpcomingPosts";

const Home = () => {
  return (
    <div>
      <div><Carousel /></div>
      <div className="pb-24 pt-16"><UpcomingPosts /></div>
      <div className="pb-24 container mx-auto flex justify-center"><HomeStat /></div>
    </div>
  );
};

export default Home;
