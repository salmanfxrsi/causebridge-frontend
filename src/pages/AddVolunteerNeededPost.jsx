import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../provider/AuthProvider";
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
import { useNavigate } from "react-router-dom";

const AddVolunteerNeedPost = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [deadline, setDeadline] = useState(new Date());
  useEffect(() => {
    document.title = "Create Post | CauseBridge";
  }, []);

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
      deadline,
      organizerName,
      organizerEmail,
      registeredVolunteer: 0,
    };

    // post volunteer needed post in db
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/add-volunteer-needed-post`,
        postData
      );
      toast.success(`${postTitle} Added Successfully`);
      e.target.reset();
      navigate("/manage-my-posts");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg mt-16 mb-24">
      <h2
        className="text-2xl font-black
       mb-20 uppercase text-center flex justify-center"
      >
        <span className="hidden sm:block">-----</span> Add Volunteer Needed Post
        Now <span className="hidden sm:block">-----</span>
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-10">
        {/* Thumbnail */}
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-md font-bold mb-3">
            <FaImage className="inline text-black mb-1" /> Thumbnail
          </label>
          <input
            type="text"
            name="thumbnail"
            placeholder="Enter thumbnail URL"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Post Title */}
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-md font-bold mb-3">
            <FaEdit className="inline text-black mb-1" /> Post Title
          </label>
          <input
            type="text"
            name="postTitle"
            placeholder="Enter post title"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4 col-span-4">
          <label className="block text-gray-700 text-md font-bold mb-3">
            <FaEdit className="inline text-black mb-1" /> Description
          </label>
          <textarea
            name="description"
            placeholder="Enter description"
            className="w-full px-3 py-2 border rounded-lg"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Category */}
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-md font-bold mb-3">
            <FaEdit className="inline text-black mb-1" /> Category
          </label>
          <select
            name="category"
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

        {/* Location */}
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-md font-bold mb-3">
            <FaLocationArrow className="inline text-black mb-1" /> Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        {/* No. of Volunteers Needed */}
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-md font-bold mb-3">
            <FaUsers className="inline text-black mb-1" /> No. of Volunteers
            Needed
          </label>
          <input
            type="number"
            name="volunteersNeeded"
            placeholder="Enter number of volunteers"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Deadline */}
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-md font-bold mb-3">
            <FaCalendarAlt className="inline text-black mb-1" /> Deadline
          </label>
          <DatePicker
            name="deadline"
            selected={deadline}
            onChange={setDeadline}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Organizer Name and Email */}
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-md font-bold mb-3">
            <FaUser className="inline text-black mb-1" /> Organizer Name
          </label>
          <input
            name="organizerName"
            value={user.displayName}
            readOnly
            className="w-full px-3 py-2 border rounded-lg cursor-not-allowed"
          />
        </div>
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-md font-bold mb-3">
            <FaUser className="inline text-black mb-1" /> Organizer Email
          </label>
          <input
            name="organizerEmail"
            type="email"
            value={user.email}
            readOnly
            className="w-full px-3 py-2 border rounded-lg cursor-not-allowed"
          />
        </div>

        {/* Add Post Button */}
        <div className="w-full col-span-4">
          <button
            type="submit"
            className="py-3 px-6 rounded-lg w-full bg-black text-sm font-medium text-white capitalize transition-colors duration-300 transform hover:bg-gray-500 mt-4 text-center"
          >
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVolunteerNeedPost;
