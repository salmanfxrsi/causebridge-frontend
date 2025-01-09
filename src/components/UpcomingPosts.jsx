import { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";
import axios from "axios";

const UpcomingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  // fetching 6 volunteer posts with upcoming deadlines
  const fetchPosts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/upcoming-deadline-posts`
    );
    setPosts(data);
  };

  return (
    <div>
      <section className="w-11/12 lg:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <VolunteerCard key={post._id} post={post}></VolunteerCard>
        ))}
      </section>
    </div>
  );
};

export default UpcomingPosts;
