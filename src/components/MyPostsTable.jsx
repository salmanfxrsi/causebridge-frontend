import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { MdEditDocument } from "react-icons/md";
import toast from "react-hot-toast";

const MyPostsTable = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  // fetching user post by user login email
  const fetchPosts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/get-specific-user-post/${user?.email}`
    );
    setPosts(data);
  };

  //   delete specific single post by id
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/delete-specific-post/${id}`
      );
      toast.success("Post Deleted");
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      toast.error(error.message);
    }
  };

  //   before deleting, ask for a delete confirmation
  const deleteConfirmation = (id) => {
    toast((t) => (
      <div className="flex gap-4 items-center justify-center">
        <p className="font-semibold">Are You Sure?</p>
        <button
          className="bg-red-500 rounded-md w-full text-sm font-medium text-white capitalize transition-colors duration-300 transform lg:w-auto hover:bg-gray-500 text-center py-1 px-3"
          onClick={() => {
            toast.dismiss(t.id);
            handleDelete(id);
          }}
        >
          Delete
        </button>
        <button
          className="bg-[#52C303] rounded-md w-full text-sm font-medium text-white capitalize transition-colors duration-300 transform lg:w-auto hover:bg-gray-500 text-center py-1 px-3"
          onClick={() => toast.dismiss(t.id)}
        >
          Dismiss
        </button>
      </div>
    ));
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Deadline & Needed Volunteer</th>
            <th>Update Now</th>
            <th>Delete Now</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={post?.thumbnail} alt={post?.postTitle} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{post?.postTitle}</div>
                    <div className="text-sm opacity-50">{post?.location}</div>
                  </div>
                </div>
              </td>
              <td>
                Volunteer Needed: {post?.volunteersNeeded}
                <br />
                <span className="badge badge-ghost badge-sm">
                  Deadline: {post?.deadline}
                </span>
              </td>
              <td className="text-xl hover:text-[#52C303] pl-11">
                <MdEditDocument />
              </td>
              <td
                onClick={() => deleteConfirmation(post._id)}
                className="text-xl hover:text-red-600 pl-10"
              >
                <AiFillDelete />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPostsTable;
