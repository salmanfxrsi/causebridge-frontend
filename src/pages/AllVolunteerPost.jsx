import VolunteerCard from "../components/VolunteerCard";

const AllVolunteerPost = () => {
  return (
    <section className="my-16 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <VolunteerCard></VolunteerCard>
      <VolunteerCard></VolunteerCard>
      <VolunteerCard></VolunteerCard>
      <VolunteerCard></VolunteerCard>
      <VolunteerCard></VolunteerCard>
      <VolunteerCard></VolunteerCard>
    </section>
  );
};

export default AllVolunteerPost;
