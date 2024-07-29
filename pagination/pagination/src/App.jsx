import { useState } from "react";
import Pagination from "./components/pagination";
import PaginationData from "./components/paginationData";

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
    <div>
      {currentPost.map((post, index) => (
        <h2 className="border flex justify-center w-[70vh] p-2" key={index}>
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
  );
}

export default App;
