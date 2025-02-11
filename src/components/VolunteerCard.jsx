import { Link } from "react-router-dom";
import { motion } from "motion/react";

/* eslint-disable react/prop-types */
const VolunteerCard = ({ post }) => {
  const { _id, thumbnail, postTitle, deadline, category, description } = post;
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Link
        to={`/volunteer-need-posts/${_id}`}
        className="card bg-base-100 shadow-xl h-[420px]"
      >
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
        </div>
      </Link>
    </motion.div>
  );
};

export default VolunteerCard;
