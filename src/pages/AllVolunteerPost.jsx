import { useEffect } from "react";
import VolunteerCard from "../components/VolunteerCard";
import { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import NoDataMsg from "../components/NoDataMsg";

const AllVolunteerPost = () => {
  const [posts, setPosts] = useState([]);
  const [isTableLayout, setIsTableLayout] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const toggleLayout = () => {
    setIsTableLayout(!isTableLayout);
  };

  useEffect(() => {
    document.title = "Posts | CauseBridge";
    // fetching all posts from db
    const fetchPosts = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/volunteer-need-posts?search=${search}`
      );
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, [search]);

  if (loading) return <Loading></Loading>;

  return (
    <section className="my-16">
      {/* Search And Layout Toggle Button Section */}
      <section className="w-11/12 lg:container mx-auto mb-16">
        <div className="flex justify-between items-center mb-6 gap-6">
          {/* Search Input */}
          <div className="flex items-center border-2 border-black rounded-lg p-1 w-[400px]">
            <FaSearch className="text-black mx-3" />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 outline-none text-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Table Layout Toggle Button */}
          <button
            onClick={toggleLayout}
            className="bg-black w-[200px] px-5 py-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform rounded-md hover:bg-gray-500"
          >
            {isTableLayout ? "Card Layout" : "Table Layout"}
          </button>
        </div>
      </section>

      {posts.length === 0 && <NoDataMsg category={"Post"}></NoDataMsg>}

      {/* Table Layout Section */}
      {isTableLayout && posts.length > 0 && (
        <section className="container mx-auto py-4">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Location</th>
                  <th>Category</th>
                  <th>Show Details</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={post?.thumbnail} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{post?.postTitle}</div>
                        </div>
                      </div>
                    </td>
                    <td>{post?.location}</td>
                    <td>{post?.category}</td>
                    <th>
                      <Link
                        to={`/volunteer-need-posts/${post._id}`}
                        className="bg-[#52C303] w-full text-sm font-medium text-white capitalize transition-colors duration-300 transform lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500 mt-4 text-center py-1 rounded-lg px-2"
                      >
                        View Details
                      </Link>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
      {/* Grid Layout Section */}
      {!isTableLayout && posts.length > 0 && (
        <section className="lg:container w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 py-4">
          {posts.map((post) => (
            <VolunteerCard key={post._id} post={post}></VolunteerCard>
          ))}
        </section>
      )}
    </section>
  );
};

export default AllVolunteerPost;
