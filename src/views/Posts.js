import React from "react";
import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    const response = await fetch(
      `http://hn.algolia.com/api/v1/search?query=react&page=${page}`
    );

    const data = await response.json();
    setPosts(data.hits);
  };

  return (
    <div>
      <ol>
        {posts.length
          ? posts.map((post) => {
              return <li key={post.number}>{post.title}</li>;
            })
          : null}
      </ol>
      <br />
      <button onClick={() => setPage(Math.max(page - 1, 1))}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default Posts;
