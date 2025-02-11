import { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";
import axios from "axios";
import { motion } from "motion/react";

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
      <motion.section
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="w-11/12 lg:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
      >
        {posts.map((post) => (
          <VolunteerCard key={post._id} post={post}></VolunteerCard>
        ))}
      </motion.section>
    </div>
  );
};

export default UpcomingPosts;
