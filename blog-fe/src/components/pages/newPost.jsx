import React, { useState } from "react";

const NewPost = () => {
  const [post, setPost] = useState({});

  return (
    <div className="flex flex-col text-center font-bodyText ">
      <h2 className="text-3xl mt-4">Create New Post</h2>
      <form className="flex flex-col items-center my-5">
        <input className="border rounded-md mt-5 shadow-md w-72 p-3 focus:ring-3 focus:outline-none" />
        <textarea className="border rounded-md mt-5 shadow-md w-72 p-3 focus:ring-3 focus:outline-none" />
        <button
          type="submit"
          className="bg-gray-400 rounded-md shadow-md mt-5 p-2 w-40 text-white hover:bg-gray-600"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default NewPost;
