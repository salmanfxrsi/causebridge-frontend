const Collapse = () => {
  return (
    <div>
      {/* Collapse One */}
      <div
        tabIndex={0}
        className="collapse collapse-plus border-base-300 border"
      >
        <div className="collapse-title text-xl font-medium">
          How can I create a volunteer need post on CauseBridge?
        </div>
        <div className="collapse-content">
          <p>
            To create a volunteer need post, you must be logged in. Once logged
            in, navigate to the &quot;Add Volunteer Need Post&quot; page through
            the &quot;My Profile&quot; dropdown. Here, you&apos;ll find a form
            to fill in details such as the post title, description, category,
            location, the number of volunteers needed, and a deadline. After
            completing the form, click the &quot;Add Post&quot; button, and the
            data will be saved to the database. A success message will be shown
            once the post is successfully created.
          </p>
        </div>
      </div>
      {/* Collapse Two */}
      <div
        tabIndex={0}
        className="collapse collapse-plus border-base-300 border"
      >
        <div className="collapse-title text-xl font-medium">
          How can I volunteer for a post on CauseBridge?
        </div>
        <div className="collapse-content">
          <p>
            To volunteer for a post, navigate to the &quot;All Volunteer Need
            Posts&quot; page and select a post you’re interested in. On the post
            details page, click the &quot;Be a Volunteer&quot; button. A modal
            will appear with pre-filled details of the post. Enter your name,
            email, and any suggestions, then click the &quot;Request&quot;
            button. The number of volunteers needed will decrease, and your
            request will be stored in the database. You&apos;ll receive a
            confirmation message once your request is successful.
          </p>
        </div>
      </div>
      {/* Collapse Three */}
      <div
        tabIndex={0}
        className="collapse collapse-plus border-base-300 border"
      >
        <div className="collapse-title text-xl font-medium">
          How can I manage or update my volunteer need posts on CauseBridge?
        </div>
        <div className="collapse-content">
          <p>
            To manage your volunteer need posts, go to the &quot;Manage My
            Posts&quot; section under &quot;My Profile.&quot; Here, you&apos;ll
            see all the posts you&apos;ve added. You can update or delete a post
            by clicking the respective buttons next to each post. To update, a
            form will appear with your post’s details, allowing you to make
            changes. To delete a post, you&apos;ll be prompted for confirmation
            before the post is permanently removed from the system.
          </p>
        </div>
      </div>
      {/* Collapse Four */}
      <div
        tabIndex={0}
        className="collapse collapse-plus border-base-300 border"
      >
        <div className="collapse-title text-xl font-medium">
          What happens if no volunteers are needed for a post?
        </div>
        <div className="collapse-content">
          <p>
            If the &quot;No. of volunteers needed&quot; for a post is set to 0,
            the &quot;Be a Volunteer&quot; option will be disabled, and a
            message will be displayed indicating that no volunteers are needed.
            This ensures that users cannot request to volunteer for a post that
            no longer requires volunteers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
