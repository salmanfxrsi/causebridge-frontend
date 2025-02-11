/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Slide = ({ image, text }) => {
  return (
    <div
      className="bg-cover bg-top h-[38rem]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-800/70">
        <div className="text-center -mt-12">
          <h1 className="text-3xl font-semibold text-white lg:text-4xl uppercase mb-8">
            {text}
          </h1>
          <br />
          <Link
            to="/add-volunteer-needed-post"
            className="bg-black w-full px-5 py-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
          >
            Add Volunteer Post With Cause Bridge
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
