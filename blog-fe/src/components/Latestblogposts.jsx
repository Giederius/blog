import React, { useEffect, useState } from "react";
import Blogpost from "./Blogpost";
import axios from "axios";

function LatestBlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/");
      console.log(res.data);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-5">
      <h2 className="font-logoText mx-4">Latest posts:</h2>
      <div className="md:grid md:grid-cols-2 md:grid-flow-row lg:grid-cols-3">
        {posts.map((post) => (
          <Blogpost
            key={post._id}
            id={post._id}
            title={post.title}
            date={post.createdAt}
            img={post.photo}
            desc={post.desc}
            author={post.username}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestBlogPosts;
