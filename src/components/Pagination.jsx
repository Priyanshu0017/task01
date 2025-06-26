import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => (
  <div className="flex justify-center items-center gap-2 mt-6">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
    >
      Prev
    </button>
    {[...Array(totalPages)].map((_, idx) => (
      <button
        key={idx + 1}
        onClick={() => onPageChange(idx + 1)}
        className={`px-3 py-1 rounded-full ${
          currentPage === idx + 1
            ? "bg-blue-500 text-white"
            : "bg-gray-100 text-gray-700"
        }`}
      >
        {idx + 1}
      </button>
    ))}
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
    >
      Next
    </button>
  </div>
);

export default Pagination;