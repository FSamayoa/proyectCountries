import React from 'react';

function PageNumbers({ totalPages, current, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={page === current ? 'active' : ''}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default PageNumbers;
