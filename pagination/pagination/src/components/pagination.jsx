const Pagination = ({ length, postPerPage, currentPage, pageHandler }) => {
  const paginationNumber = [];
  for (let i = 1; i <= Math.ceil(length / postPerPage); i++) {
    paginationNumber.push(i);
  }
  return (
    <div>
      {paginationNumber.map((currentNumber) => (
        <button
          key={currentNumber}
          onClick={() => pageHandler(currentNumber)}
          className={`ml-1 ${
            currentNumber === currentPage && "text-black bg-slate-200"
          }`}
        >
          {currentNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
