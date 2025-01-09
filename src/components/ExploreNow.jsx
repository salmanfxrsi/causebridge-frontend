import { Link } from "react-router-dom";

const ExploreNow = () => {
  return (
    <div className="hero bg-base-200 py-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co.com/6XSs21z/brunette-woman-petting-two-dogs-while-volunteering-at-an-animal-shelter-min.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-4xl font-bold uppercase">Explore Volunteer Needed Posts</h1>
          <p className="py-6">
          The purpose of CauseBridge is to streamline volunteer management and encourage community engagement by providing an intuitive platform for organizing and participating in volunteer initiatives. Go and Explore Post and do good works.
          </p>
          <Link to='/volunteer-need-posts' className="bg-[#52C303] w-full text-sm font-medium text-white capitalize transition-colors duration-300 transform lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500 mt-4 text-center rounded-sm px-3 py-3">Explore Posts</Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreNow;
