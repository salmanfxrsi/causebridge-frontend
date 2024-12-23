import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Profile = () => {
  const { user } = useContext(AuthContext); 
  
  return (
    <div className="w-full py-24">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Profile Content */}
          <div className="p-6 text-center">
            <img
              src={user?.photoURL}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
              {user?.displayName || "No Name"}
            </h1>
            <p className="text-gray-600 mb-2">Email: {user?.email || "No Email"}</p>
            <button
              className="bg-[#52C303] text-white py-2 px-6 rounded-lg font-medium hover:bg-green-700 transition"
              onClick={() => toast.error("Profile edit functionality coming soon!")}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
