import { useState } from "react";
import Pagination from "./components/pagination/pagination";
import PaginationData from "./components/pagination/paginationData";
import Dark from "./components/dark theme/dark";

function App() {
  const posts = PaginationData();
  const postPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = posts.slice(firstPostIndex, lastPostIndex);

  const pageHandler = (currentNumber) => {
    setCurrentPage(currentNumber);
  };

  return (
    <Dark>
      <div>
        {currentPost.map((post, index) => (
          <h2
            className="border border-b-2 shadow shadow-black dark:shadow-white hover:scale-110  border-black dark:border-white flex justify-center w-[70vh] p-2"
            key={index}
          >
            {post.title}
          </h2>
        ))}
        <Pagination
          postPerPage={postPerPage}
          length={posts.length}
          currentPage={currentPage}
          pageHandler={pageHandler}
        />
      </div>
    </Dark>
  );
}

export default App;
