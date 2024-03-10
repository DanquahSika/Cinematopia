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
    <div className="flex justify-center items-center">
      <button
        onClick={Previous}
        className="bg-transparent rounded p-1 mr-5 border"
      >
        Previous
      </button>
      <button onClick={Next} className="bg-transparent rounded p-1 mr-5 border">
        Next
      </button>
    </div>
  );
};

export default Pagination;
