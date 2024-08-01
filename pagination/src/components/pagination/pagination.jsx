const Pagination = ({ length, postPerPage, currentPage, pageHandler }) => {
  const paginationNumber = [];
  for (let i = 1; i <= Math.ceil(length / postPerPage); i++) {
    paginationNumber.push(i);
  }
  return (
    <div className="mt-1.5">
      {paginationNumber.map((currentNumber) => (
        <button
          key={currentNumber}
          onClick={() => pageHandler(currentNumber)}
          className={`ml-1 text-white ${
            currentNumber === currentPage && "text-black bg-gray-700 dark:text-black dark:bg-white"
          }`}
        >
          {currentNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
