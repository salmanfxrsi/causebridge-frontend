import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const VolunteerCard = ({ post }) => {
  const { _id, thumbnail, postTitle, deadline, category, description } = post;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={thumbnail} alt={postTitle} className="h-[200px] w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{postTitle}</h2>
        <p>{description}</p>
        <div className="card-actions justify-start">
          <div className="badge badge-outline">
            Deadline:{" "}
            {new Date(deadline).toLocaleDateString("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </div>
          <div className="badge badge-outline">{category}</div>
        </div>
        <Link
          to={`/volunteer-need-posts/${_id}`}
          className="bg-[#52C303] w-full text-sm font-medium text-white capitalize transition-colors duration-300 transform lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500 mt-4 text-center py-1 rounded-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default VolunteerCard;
