const Timeline = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">1989</time>
          <div className="text-lg font-black">Food for All Program</div>
          In 1989, a food distribution program aimed to address hunger during a drought but struggled with logistical inefficiencies. Volunteers improved the process by collaborating with local farmers and markets to source fresh produce and staples. A distribution system using community centers as hubs was established, ensuring fair access. Educational sessions on nutrition and sustainable farming practices were later added, creating a lasting impact beyond immediate food relief.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end md:mb-10">
          <time className="font-mono italic">1992</time>
          <div className="text-lg font-black">Rural Health Camps</div>
          Health camps in 1992 provided basic medical checkups in rural areas but were constrained by a lack of medical supplies and follow-ups. Improvements included securing partnerships with pharmaceutical companies to donate essential medicines. Organizers trained local health workers to offer ongoing care post-camp, ensuring continuity. This strategy improved both immediate healthcare access and long-term health outcomes in remote areas.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">1995</time>
          <div className="text-lg font-black">Wildlife Conservation Awareness</div>
          Wildlife conservation campaigns in 1995 relied on brochures and posters, which had limited reach. To make the program more impactful, organizers began hosting interactive sessions where experts shared knowledge with local communities. Schools introduced conservation-themed plays and short films, captivating younger audiences. These interactive and visual elements made the campaigns more effective, inspiring widespread participation in protecting endangered species.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end md:mb-10">
          <time className="font-mono italic">1998</time>
          <div className="text-lg font-black">Literacy for All Campaign</div>
          In 1998, a literacy program aimed to teach basic reading and writing skills to underprivileged children. Initially, the classes lacked structure, which resulted in limited success. Over time, volunteers developed age-specific curriculums and introduced engaging teaching techniques. Essential materials like books and stationery were distributed for free, and small incentives like meals were offered to encourage attendance. These improvements significantly boosted literacy rates and the children’s enthusiasm for learning.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">2001</time>
          <div className="text-lg font-black">Community Clean-Up Drives</div>
          In 2001, community clean-up efforts were simple and focused on collecting litter without emphasizing proper waste management. Over time, the initiative was improved by introducing waste segregation methods, ensuring recyclables, compostables, and general waste were handled separately. Collaborating with waste management authorities made disposal more sustainable. Public awareness sessions were added to educate locals on reducing litter and adopting recycling habits, leading to a significant decrease in landfill contributions.
        </div>
      </li>
    </ul>
  );
};

export default Timeline;
