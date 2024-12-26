import { useEffect } from "react";
import MyPostsTable from "../components/MyPostsTable";
import MyReqTable from "../components/MyReqTable";

const ManageMyPosts = () => {
  useEffect(() => {
      document.title = "Manage My Posts";
    }, []);

  return (
    <div>
      <section className="mt-12">
        <h1 className="text-3xl font-semibold mb-6 pl-4 font-serif">
          My Volunteer Needed Post
        </h1>
        <div>
          <MyPostsTable></MyPostsTable>
        </div>
      </section>
      <section className="my-24">
        <h1 className="text-3xl font-semibold mb-6 pl-4 font-serif">
          My Volunteer Request Post
        </h1>
        <div>
          <MyReqTable></MyReqTable>
        </div>
      </section>
    </div>
  );
};

export default ManageMyPosts;
