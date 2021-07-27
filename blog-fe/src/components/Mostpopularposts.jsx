import React from "react";
import Popularpost from "./Popularpost";
import blogs from "./blogs";
import { Link } from "react-router-dom";

const popularBlogs = blogs.filter((blog) => blog.popularity === "high");

function MostPopularPosts() {
  return (
    <div className="m-4 max-w-7xl mx-auto sm:px-6 lg:px-5">
      <h2 className="font-logoText mx-4">Popular posts:</h2>
      <div className="grid grid-rows-1 grid-cols-3 m-2 place-items-center">
        {popularBlogs.map((blog) => (
          <Link to={"/blog/" + blog.id}>
            <Popularpost
              key={blog.id}
              title={blog.title}
              desc={blog.desc}
              img={blog.img}
              date={blog.date}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MostPopularPosts;
