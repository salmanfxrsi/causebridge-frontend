import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchAndToggle = () => {
  const [isTableLayout, setIsTableLayout] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleLayout = () => {
    setIsTableLayout(!isTableLayout);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const volunteers = [
    { id: 1, name: "John Doe", role: "Organizer", location: "Dhaka" },
    { id: 2, name: "Jane Smith", role: "Volunteer", location: "Chattogram" },
    { id: 3, name: "Emily Davis", role: "Coordinator", location: "Sylhet" },
  ];

  const filteredVolunteers = volunteers.filter((volunteer) =>
    volunteer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Flex Container with search and layout toggle button */}
      <div className="flex justify-between items-center mb-6">
        {/* Search Input */}
        <div className="flex items-center border border-gray-300 rounded-lg p-2 w-1/2 lg:w-1/3">
          <FaSearch className="text-gray-600 mr-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search volunteers..."
            className="w-full p-2 outline-none text-lg"
          />
        </div>

        {/* Table Layout Toggle Button */}
        <button
          onClick={toggleLayout}
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        >
          {isTableLayout ? "Card Layout" : "Table Layout"}
        </button>
      </div>

      {/* Conditional Rendering of Layout */}
      {isTableLayout ? (
        // Table Layout
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            {filteredVolunteers.map((volunteer) => (
              <tr key={volunteer.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{volunteer.name}</td>
                <td className="border border-gray-300 px-4 py-2">{volunteer.role}</td>
                <td className="border border-gray-300 px-4 py-2">{volunteer.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        // Card Layout (Three-Column)
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredVolunteers.map((volunteer) => (
            <div
              key={volunteer.id}
              className="p-4 border rounded shadow hover:shadow-lg"
            >
              <h3 className="font-bold text-lg">{volunteer.name}</h3>
              <p className="text-gray-600">Role: {volunteer.role}</p>
              <p className="text-gray-600">Location: {volunteer.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchAndToggle;
