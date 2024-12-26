/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { MdCancelPresentation } from "react-icons/md";
import NoDataMsg from "./NoDataMsg";
import Loading from "./Loading";

const MyReqTable = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  // fetching user post by user login email
  const fetchPosts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/volunteer-request-posts/${user?.email}`
    );
    setRequests(data);
  };

  //   delete specific single post by id
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/delete-specific-request/${id}`
      );
      toast.success("Post Deleted");
      setRequests(requests.filter((request) => request._id !== id));
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


  if(requests.length === 0) return <NoDataMsg category={'Request'}></NoDataMsg>


  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Deadline</th>
            <th>Organizer Email</th>
            <th>Cancel Request</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={request?.thumbnail} alt={request?.postTitle} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{request?.postTitle}</div>
                    <div className="text-sm opacity-50">{request?.location}</div>
                  </div>
                </div>
              </td>
              <td>
                Deadline:{" "}
                {new Date(request?.deadline).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                })}
              </td>
              <td className="text-sm">{request?.organizerEmail}</td>
              <td
                onClick={() => deleteConfirmation(request._id)}
                className="text-xl hover:text-red-600 pl-12"
              >
                <MdCancelPresentation />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReqTable;
