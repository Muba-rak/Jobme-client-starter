import React from "react";

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  paginate,
  prevIcon,
  nextIcon,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination flex justify-center gap-2 items-center">
      <li className="page-item flex items-center">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="page-link"
        >
          <img src={prevIcon} alt="Previous" />
        </button>
      </li>
      {pageNumbers.map((number) => (
        <li key={number} className="page-item flex items-center">
          <button
            onClick={() => paginate(number)}
            className={`page-link ${currentPage === number ? "active" : ""}`}
          >
            {number}
          </button>
        </li>
      ))}
      <li className="page-item flex items-center">
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
          className="page-link"
        >
          <img src={nextIcon} alt="Next" />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
