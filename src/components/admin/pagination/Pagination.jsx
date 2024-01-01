// 
import React from 'react';

const Pagination = ({ currentPage, newsPerPage, totalNews, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  const maxButtonsToShow = 2;
  const halfButtonsToShow = Math.floor(maxButtonsToShow / 2);
  const maxPages = Math.ceil(totalNews / newsPerPage);

  let startPage, endPage;

  if (maxPages <= maxButtonsToShow) {
    // If total pages are less than or equal to max buttons, show all pages
    startPage = 1;
    endPage = maxPages;
  } else {
    // If total pages are more than max buttons
    if (currentPage <= halfButtonsToShow) {
      // If current page is near the start
      startPage = 1;
      endPage = maxButtonsToShow;
    } else if (currentPage + halfButtonsToShow >= maxPages) {
      // If current page is near the end
      startPage = maxPages - maxButtonsToShow + 1;
      endPage = maxPages;
    } else {
      // If current page is in the middle
      startPage = currentPage - halfButtonsToShow;
      endPage = currentPage + halfButtonsToShow;
    }
  }

  return (
    <nav style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', gap: '5px' }}>
      {currentPage > 1 && (
        <div>
          <button className='button' onClick={() => paginate(currentPage - 1)}>
            Previous
          </button>
        </div>
      )}

      {pageNumbers.slice(startPage - 1, endPage).map((number) => (
        <div key={number}>
          <button className={`button ${currentPage === number ? 'active' : ''}`} onClick={() => paginate(number)}>
            {number}
          </button>
        </div>
      ))}

      {currentPage < maxPages && (
        <div>
          <button className='button' onClick={() => paginate(currentPage + 1)}>
            Next
          </button>
        </div>
      )}
    </nav>
  );
};

export default Pagination;
