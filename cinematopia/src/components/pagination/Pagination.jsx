import React from "react";

const Pagination = ({ page, setPage }) => {
  const Previous = () => {
    if (page !== 1) {
      setPage(page - 1);
    } else setPage(page);
  };
  const Next = () => {
    if (page < 10) {
      setPage(page + 1);
    }
  };

  return (
    <div className="flex justify-end items-center">
      <button
        onClick={Previous}
        className="bg-transparent rounded p-1 mr-5 border w-64 hover:bg-orange-400 hover:text-white"
      >
        Previous
      </button>
      <button
        onClick={Next}
        className="bg-transparent rounded p-1 mr-5 border w-64 hover:bg-orange-400 hover:text-white"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
