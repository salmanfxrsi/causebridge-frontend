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
          We are providing add volunteer post and request to be a volunteer. It is a great opportunity to help people through CauseBridge. Explore now and make this world amazing with CauseBridge.  
          </p>
          <Link to='/volunteer-need-posts' className="bg-[#52C303] w-full text-sm font-medium text-white capitalize transition-colors duration-300 transform lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500 mt-8 text-center rounded-sm px-6 py-3">Explore Posts</Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreNow;
