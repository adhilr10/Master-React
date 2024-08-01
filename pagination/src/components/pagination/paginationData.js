import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const PaginationData = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const PostFetching = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log("Failed to fetch post data", error);
      }
    };
    PostFetching();
  }, []);

  return posts;
};

export default PaginationData;
