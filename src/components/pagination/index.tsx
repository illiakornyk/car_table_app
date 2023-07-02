import * as React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className='my-4 flex justify-center'>
      {currentPage > 1 && (
        <button
          className='mx-2 rounded bg-gray-100 px-4 py-2'
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </button>
      )}
      {currentPage < totalPages && (
        <button
          className='mx-2 rounded bg-gray-100 px-4 py-2'
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
}
