import { useEffect, useState } from "react";
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
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateMyPost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const {
    thumbnail,
    postTitle,
    description,
    category,
    location,
    volunteersNeeded,
    deadline,
    organizerName,
    organizerEmail,
    registeredVolunteer,
  } = post;

  const [startDate, setStartDate] = useState(deadline);
  const { id } = useParams();

  useEffect(() => {
    fetchPost();
    document.title = 'CauseBridge Update'
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
    const volunteersNeeded = Number(form.volunteersNeeded.value);
    const organizerName = form.organizerName.value;
    const organizerEmail = form.organizerEmail.value;
    const postData = {
      thumbnail,
      postTitle,
      description,
      category,
      location,
      volunteersNeeded,
      deadline: startDate,
      organizerName,
      organizerEmail,
      registeredVolunteer,
    };

    // post volunteer needed post in db
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/update-my-posts/${id}`,
        postData
      );
      toast.success(`${postTitle} Updated Successfully`);
      e.target.reset();
      navigate("/manage-my-posts");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-12 mb-24">
      <h2 className="text-2xl font-bold mb-4">Update {postTitle} Post</h2>
      <form onSubmit={handleSubmit}>
        {/* Thumbnail */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <FaImage className="inline mr-2 text-[#52C303]" /> Thumbnail
          </label>
          <input
            type="text"
            name="thumbnail"
            defaultValue={thumbnail}
            placeholder="Enter thumbnail URL"
            className="w-full px-3 py-2 border rounded-lg"
            required
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
            defaultValue={postTitle}
            placeholder="Enter post title"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <FaEdit className="inline mr-2 text-[#52C303]" /> Description
          </label>
          <textarea
            name="description"
            placeholder="Enter description"
            defaultValue={description}
            className="w-full px-3 py-2 border rounded-lg"
            rows="4"
            required
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
              defaultValue={category}
              className="w-full px-3 py-2 border rounded-lg"
              required
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
            defaultValue={location}
            placeholder="Enter location"
            className="w-full px-3 py-2 border rounded-lg"
            required
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
            defaultValue={volunteersNeeded}
            placeholder="Enter number of volunteers"
            className="w-full px-3 py-2 border rounded-lg"
            required
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
            onChange={setStartDate}
            className="w-full px-3 py-2 border rounded-lg"
            required
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

        {/* Add Post Button */}
        <div>
          <button
            type="submit"
            className="py-3 px-6 rounded-lg w-full md:w-auto bg-[#52C303] text-sm font-medium text-white capitalize transition-colors duration-300 transform lg:w-auto hover:bg-gray-500 mt-4 text-center"
          >
            Update {postTitle}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMyPost;
