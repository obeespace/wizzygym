import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";


const BasicTable = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const usersPerPage = 10;

  // Filter users by search (case-insensitive, by name or email)
  const filteredUsers = users.filter(
    (user) =>
      user.fullname.toLowerCase().includes(search.toLowerCase()) ||
      (user.email && user.email.toLowerCase().includes(search.toLowerCase()))
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIdx = (currentPage - 1) * usersPerPage;
  const currentUsers = filteredUsers.slice(startIdx, startIdx + usersPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-2">
        <p className="text-2xl font-semibold mb-2 lg:mb-0">
          Fitfam{" "}
          <span className="text-red-600 italic">Details</span>
        </p>
        <form
          onSubmit={handleSearch}
          className="flex gap-2 w-full lg:w-auto justify-end"
        >
          <input
            type="text"
            placeholder="Search by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-1 rounded-md border border-gray-600 bg-black text-white focus:outline-none"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-white flex w-fit font-semibold items-center gap-1 text-black rounded-xl cursor-pointer"
          >
            Search <IoMdArrowDropright className="text-red-600" />
          </button>
        </form>
      </div>
      <div className="w-full max-w-4xl border border-gray-700 shadow-md rounded-2xl px-3 py-2">
        <table className="min-w-full rounded-2xl ">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-gray-700 text-left">
                Name
              </th>
              <th className="px-4 py-2 border-b border-gray-700 text-left hidden lg:table-cell">
                Email
              </th>
              <th className="px-4 py-2 border-b border-gray-700 text-left">
                Status
              </th>
              <th className="px-4 py-2 border-b border-gray-700 text-left hidden lg:table-cell">
                Coach
              </th>
              <th className="px-4 py-2 border-b border-gray-700 text-left hidden lg:table-cell">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={index} className="hover:bg-gray-900">
                <td className="px-4 py-2 ">{user.fullname}</td>
                <td className="px-4 py-2 hidden lg:table-cell">{user.email}</td>
                <td className="px-4 py-2 ">
                  <div
                    className={`border ${
                      user.subscription === "Disactivated"
                        ? "border-red-600"
                        : "border-green-600"
                    }  w-fit px-2 py-1 rounded-lg`}
                  >
                    {user.subscription}
                  </div>
                </td>
                <td className="px-4 py-2 hidden lg:table-cell">{user.trainer}</td>
                <td className="px-4 py-2 hidden lg:table-cell">
                  {user.phoneNumber}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-4 gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded bg-gray-700 text-white disabled:opacity-50"
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-red-600 text-white"
                    : "bg-gray-800 text-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded bg-gray-700 text-white disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicTable;