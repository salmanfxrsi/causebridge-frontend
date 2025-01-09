import { useEffect } from "react";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import HomeStat from "../components/HomeStat";
import UpcomingPosts from "../components/UpcomingPosts";
import ExploreNow from "../components/ExploreNow";

const Home = () => {
  useEffect(() => {
    document.title = "Home | CauseBridge";
  }, []);

  return (
    <div>
      <div>
        <Carousel />
      </div>
      <div className="pb-24 pt-12">
        <h1 className="font-serif text-center uppercase font-semibold mb-16 text-4xl">Upcoming Events</h1>
        <UpcomingPosts />
      </div>
      <div className="pb-24 pt-12 lg:container w-11/12 mx-auto">
        <ExploreNow />
      </div>
      <div className="pb-24 w-11/12 lg:container mx-auto flex justify-center">
        <HomeStat />
      </div>
      <div className="w-11/12 lg:container mx-auto mb-24">
      <h1 className="font-serif text-center uppercase font-semibold mb-12 text-4xl">Frequently Asked Questions</h1>
        <Collapse />
      </div>
    </div>
  );
};

export default Home;
