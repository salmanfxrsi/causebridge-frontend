import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="bg-base-200">
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
            <NavLink to="/volunteer-need-posts">Volunteer Needed Posts</NavLink>
            <NavLink to="/my-profile">My Profile</NavLink>
          </div>
        </div>
        <div className="navbar-end z-50">
          <ThemeToggleButton />
          {!user && (
            <Link
              to={"/login"}
              className="mr-4 bg-[#52C303] text-sm font-medium text-white capitalize transition-colors px-4 duration-300 transform lg:w-auto hover:bg-gray-500 mt-4 text-center py-1 rounded-md"
            >
              Login
            </Link>
          )}
          {!user && (
            <Link
              to={"/register"}
              className="bg-[#52C303] text-sm font-medium text-white capitalize transition-colors px-4 duration-300 transform lg:w-auto hover:bg-gray-500 mt-4 text-center py-1 rounded-md"
            >
              Register
            </Link>
          )}
          {user && (
            <div className="dropdown dropdown-end mt-6">
              <div
                tabIndex={0}
                role="button"
                className="avatar tooltip tooltip-bottom tooltip-success"
                data-tip={user?.displayName}
              >
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <div
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow ml-2 font-semibold mx-auto"
              >
                <div className="block lg:hidden">
                  <NavLink to={"/"}>Home</NavLink> <br />
                  <NavLink to={"/volunteer-need-posts"}>
                    Volunteer Needed Posts
                  </NavLink>{" "}
                  <br />
                  <NavLink to={"/my-profile"}>My Profile</NavLink>
                </div>
                <NavLink to={"/add-volunteer-needed-post"}>
                  Add Volunteer Post
                </NavLink>
                <NavLink to={"/manage-my-posts"}>Manage My Post</NavLink>
                <div className="bg-red-600 w-full text-sm font-medium text-white capitalize transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500 mt-2">
                  <button onClick={logout} className="mx-auto w-full block">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
