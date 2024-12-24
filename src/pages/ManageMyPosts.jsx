import MyPostsTable from "../components/MyPostsTable";

const ManageMyPosts = () => {
  return (
    <div>
      <section className="mt-12">
        <h1 className="text-3xl font-semibold mb-6 pl-4">
          My Volunteer Needed Post
        </h1>
        <div>
          <MyPostsTable></MyPostsTable>
        </div>
      </section>
      <section className="my-24">
        {/* <h1 className="text-3xl font-semibold mb-6 pl-4">
          My Volunteer Request Post
        </h1>
        <div>
          <MyPostsTable></MyPostsTable>
        </div> */}
      </section>
    </div>
  );
};

export default ManageMyPosts;
