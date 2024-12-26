import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaImage,
  FaEdit,
  FaLocationArrow,
  FaUsers,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const BeVolunteerForm = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const {
    _id,
    thumbnail,
    postTitle,
    description,
    category,
    location,
    volunteersNeeded,
    deadline,
    organizerName,
    organizerEmail,
  } = post;

  const { id } = useParams();

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   get specific post data by using id
  const fetchPost = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/volunteer-need-posts/${id}`
    );
    setPost(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const postTitle = form.postTitle.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const organizerName = form.organizerName.value;
    const organizerEmail = form.organizerEmail.value;
    const volunteerName = form.volunteerName.value;
    const volunteerEmail = form.volunteerEmail.value;
    const volunteerSuggestion = form.volunteerSuggestion.value;
    const requestData = {
      postId: _id,
      thumbnail,
      postTitle,
      description,
      category,
      location,
      volunteersNeeded,
      deadline,
      organizerName,
      organizerEmail,
      volunteerName,
      volunteerEmail,
      volunteerSuggestion,
      status: "requested",
    };

    if (volunteersNeeded === 0) return toast.error("No Volunteer Needed");

    // post volunteer needed post in db
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/volunteer-request`,
        requestData
      );
      toast.success(`Request Successfully`);
      e.target.reset();
      navigate("/manage-my-posts");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-12 mb-24">
      <h2 className="text-xl font-bold mb-12">{postTitle} Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Thumbnail */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <FaImage className="inline mr-2 text-[#52C303]" /> Thumbnail
          </label>
          <input
            type="text"
            name="thumbnail"
            value={thumbnail}
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>

        {/* Post Title */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <FaEdit className="inline mr-2 text-[#52C303]" /> Post Title
          </label>
          <input
            type="text"
            name="postTitle"
            value={postTitle}
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <FaEdit className="inline mr-2 text-[#52C303]" /> Description
          </label>
          <textarea
            name="description"
            value={description}
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            rows="4"
            readOnly
          ></textarea>
        </div>

        {/* Category */}
        {category && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <FaEdit className="inline mr-2 text-[#52C303]" /> Category
            </label>
            <select
              name="category"
              value={category}
              className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
              readOnly
            >
              <option value="">Select a category</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="social_service">Social Service</option>
              <option value="animal_welfare">Animal Welfare</option>
            </select>
          </div>
        )}

        {/* Location */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <FaLocationArrow className="inline mr-2 text-[#52C303]" /> Location
          </label>
          <input
            type="text"
            name="location"
            value={location}
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>

        {/* No. of Volunteers Needed */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <FaUsers className="inline mr-2 text-[#52C303]" /> No. of Volunteers
            Needed
          </label>
          <input
            type="number"
            name="volunteersNeeded"
            value={volunteersNeeded}
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>

        {/* Deadline */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <FaCalendarAlt className="inline mr-2 text-[#52C303]" /> Deadline
          </label>
          <DatePicker
            name="deadline"
            selected={deadline}
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>

        {/* Organizer Name and Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <FaUser className="inline mr-2 text-[#52C303]" /> Organizer Name
          </label>
          <input
            name="organizerName"
            value={organizerName}
            readOnly
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <FaUser className="inline mr-2 text-[#52C303]" /> Organizer Email
          </label>
          <input
            name="organizerEmail"
            type="email"
            value={organizerEmail}
            readOnly
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
          />
        </div>

        <h2 className="text-xl font-bold my-12">Volunteer Information</h2>

        {/* Volunteer Name and Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <FaUser className="inline mr-2 text-[#52C303]" /> Volunteer Name
          </label>
          <input
            value={user?.displayName}
            type="text"
            name="volunteerName"
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <FaUser className="inline mr-2 text-[#52C303]" /> Volunteer Email
          </label>
          <input
            name="volunteerEmail"
            value={user?.email}
            type="email"
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>

        {/* Suggestion */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <FaEdit className="inline mr-2 text-[#52C303]" /> Suggestion
          </label>
          <textarea
            name="volunteerSuggestion"
            className="w-full px-3 py-2 border rounded-lg"
            rows="4"
          ></textarea>
        </div>

        {/* Add Post Button */}
        <div>
          <button
            type="submit"
            className={`py-3 px-6 rounded-lg w-full md:w-auto bg-[#52C303] text-sm font-medium text-white capitalize transition-colors duration-300 transform lg:w-auto hover:bg-gray-500 mt-4 text-center ${
              volunteersNeeded === 0 && "disabled bg-gray-500"
            }`}
          >
            Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default BeVolunteerForm;
