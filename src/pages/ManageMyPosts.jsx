import { useEffect } from "react";
import MyPostsTable from "../components/MyPostsTable";

const ManageMyPosts = () => {
  useEffect(() => {
    document.title = " My Posts | CauseBridge";
  }, []);

  return (
    <div>
      <section className="py-24 container mx-auto">
        <div>
          <MyPostsTable></MyPostsTable>
        </div>
      </section>
    </div>
  );
};

export default ManageMyPosts;
