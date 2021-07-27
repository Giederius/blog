import React from "react";

function About() {
  return (
    <div className="p-4 mx-auto text-left md:w-3/4 lg:w-1/2 w-full font-bodyText">
      <p>
        This whole project for me is about learning. Started with just React,
        added Tailwind Css. Now that everything is looking nice I can start
        working on some functionality.
      </p>
      <h3 className="my-5">I'm planning to add:</h3>
      <ul className="text-md pl-2">
        <li>Add new Post</li>
        <li>Edit post</li>
        <li>Add new user</li>
        <li>Register/Login pages</li>
      </ul>

      <h3 className="my-5">This that are done:</h3>
      <ul className="text-md pl-2">
        <li>Design. somewhat finished</li>
      </ul>
    </div>
  );
}

export default About;
