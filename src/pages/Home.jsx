import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import HomeStat from "../components/HomeStat";
import UpcomingPosts from "../components/UpcomingPosts";

const Home = () => {
  return (
    <div>
      <div><Carousel /></div>
      <div className="pb-24 pt-16"><UpcomingPosts /></div>
      <div className="pb-24 w-11/12 lg:container mx-auto flex justify-center"><HomeStat /></div>
      <div className="w-11/12 lg:container mx-auto mb-24"><Collapse /></div>
    </div>
  );
};

export default Home;
