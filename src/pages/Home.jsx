import Carousel from "../components/Carousel";
import UpcomingPosts from "../components/UpcomingPosts";

const Home = () => {
  return (
    <div>
      <div><Carousel /></div>
      <div className="pb-24 pt-16"><UpcomingPosts /></div>
    </div>
  );
};

export default Home;
