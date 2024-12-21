import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start flex items-center gap-2">
        <img className="w-10" src={logo} alt="" />
        <h1 className="text-2xl font-bold">
          Cause<span>Bridge</span>
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1 font-bold flex gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/volunteer-posts">Volunteer Posts</NavLink>
          <NavLink to="/my-profile">My Profile</NavLink>
        </div>
      </div>
      <div className="navbar-end z-50">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ml-2 font-semibold mx-auto"
          >
            <div className="block lg:hidden">
            <NavLink to={"/all-posts"}>Volunteer Posts</NavLink> <br />
            <NavLink to={"/my-profile"}>My Profile</NavLink>
            </div>
            <NavLink to={"/add-volunteer-post"}>Add Volunteer Post</NavLink>
            <NavLink to={"/my-posts"}>Manage My Post</NavLink>
            <div className="bg-[#52C303] w-full text-sm font-medium text-white capitalize transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500 mt-2">
              <button className="mx-auto w-full block">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
