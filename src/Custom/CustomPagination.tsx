import React from 'react';

const CustomPagination = ({ currentPage, totalPages, totalCount, onPageChange }:any) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="custom-pagination">
      <div className="pagination-info mr-2">
        Showing {currentPage} of {totalPages} pages
      </div>
      
      <div className="pagination-right">
      <div className="page-buttons">
  <button
    className="page-button"
    onClick={() => onPageChange(currentPage - 1)}
    disabled={currentPage === 1}
  >
    &lt; Prev
  </button>
  {pageNumbers.map((pageNumber) => (
    <button
      key={pageNumber}
      className={`page-button ${pageNumber === currentPage ? 'active' : ''}`}
      onClick={() => onPageChange(pageNumber)}
    >
      {pageNumber}
    </button>
  ))}
  <button
    className="page-button"
    onClick={() => onPageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    Next &gt;
  </button>
</div>

      </div>

      {/* <div className="total-count">
        Total Items: {totalCount}
      </div> */}
    </div>
  );
};

export default CustomPagination;