import axios from "axios";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function BlogpostPage({ match }) {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      console.log(res);
    };
    getPost();
  }, [path]);

  return (
    <div>
      <h1>hey</h1>
      {/* <img className="mx-auto w-full" src={newBlog[0].img} alt="" />
      <h1 className="font-logoText text-2xl m-4">{newBlog[0].title}</h1>
      <p className="m-4 text-left">{newBlog[0].desc}</p> */}
    </div>
  );
}

export default BlogpostPage;
