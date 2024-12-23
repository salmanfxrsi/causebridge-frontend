import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  console.log(id)
  const [post, setPost] = useState({});

  useEffect(() => {
    fetchPost();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // fetching specific data by using id
  const fetchPost = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/volunteer-posts/${id}`
    );
    setPost(data);
  };

  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Thumbnail */}
          <img
            src={post?.thumbnail}
            alt={post?.postTitle}
            className="w-full h-96 object-cover"
          />
          {/* Post Content */}
          <div className="p-6">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              {post?.postTitle}
            </h1>
            <p className="text-gray-600 mb-6">{post?.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Location */}
              <div className="flex items-center text-gray-700">
                <FaMapMarkerAlt className="mr-3 text-[#52C303]" size={20} />
                <span className="font-medium">Location:</span>{" "}
                <span className="ml-2">{post?.location}</span>
              </div>
              {/* Deadline */}
              <div className="flex items-center text-gray-700">
                <FaCalendarAlt className="mr-3 text-[#52C303]" size={20} />
                <span className="font-medium">Deadline:</span>{" "}
                <span className="ml-2">{post?.deadline}</span>
              </div>
              {/* Volunteers Needed */}
              <div className="flex items-center text-gray-700">
                <FaUserAlt className="mr-3 text-[#52C303]" size={20} />
                <span className="font-medium">Volunteers Needed:</span>{" "}
                <span className="ml-2">{post?.volunteersNeeded}</span>
              </div>
              {/* Organizer Email */}
              <div className="flex items-center text-gray-700">
                <FaEnvelope className="mr-3 text-[#52C303]" size={20} />
                <span className="font-medium">Organizer Email:</span>{" "}
                <span className="ml-2">{post?.organizerEmail}</span>
              </div>
            </div>
            {/* Organizer Name */}
            <div className="text-gray-700 mb-6">
              <span className="font-medium text-lg">Organized by:</span>{" "}
              <span className="ml-2">{post?.organizerName}</span>
            </div>
            {/* Be a Volunteer Button */}
            <button
              className="py-3 px-6 rounded-lg w-full md:w-auto bg-[#52C303] text-sm font-medium text-white capitalize transition-colors duration-300 transform lg:w-auto hover:bg-gray-500 mt-4 text-center"
              onClick={() => alert(`You volunteered for ${post?.postTitle}!`)}
            >
              Be a Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
