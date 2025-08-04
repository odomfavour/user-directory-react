import React from 'react';

interface PaginationProps {
  usersPerPage: number;
  setUsersPerPage: (value: number) => void;
  currentPage: number;
  setCurrentPage: (value: number) => void;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  usersPerPage,
  setUsersPerPage,
  currentPage,
  setCurrentPage,
  totalPages,
  handlePageChange,
}) => {
  return (
    <div className="flex justify-between mt-6 items-center flex-wrap gap-4">
      {/* Per Page Selector */}
      <div className="flex items-center gap-2">
        <label htmlFor="perPage" className="text-sm text-gray-700">
          Users per page:
        </label>
        <select
          id="perPage"
          value={usersPerPage}
          onChange={(e) => {
            setUsersPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
          className="border border-gray-300 rounded px-2 py-1 text-sm"
        >
          {[6, 9, 12, 15, 20].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-2 flex-wrap">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 rounded text-sm ${
              currentPage === page
                ? 'bg-indigo-600 text-white'
                : 'bg-white border text-gray-700 hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
