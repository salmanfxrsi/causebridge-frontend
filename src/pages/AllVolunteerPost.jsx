import { useEffect } from "react";
import VolunteerCard from "../components/VolunteerCard";
import { useState } from "react";
import axios from "axios";

const AllVolunteerPost = () => {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    fetchPosts()
  },[])

  // fetching all posts from db
  const fetchPosts = async () => {
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/volunteer-posts`)
    setPosts(data)
  }

  return (
    <section className="my-16">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {posts.map(post => <VolunteerCard key={post._id} post={post}></VolunteerCard>)}
      </section>
    </section>
  );
};

export default AllVolunteerPost;
