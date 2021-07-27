import React from "react";
import { Link } from "react-router-dom";

function Blogpost(props) {
  return (
    <div>
      <Link to={`/blog/${props.id}`}>
        <div className="h-72 m-4 bg-gray-100 rounded-md grid grid-cols-1 grid-rows-1 shadow-lg">
          <img
            className="justify-self-center self-center h-full w-full object-cover rounded-t-md"
            src={props.img}
            alt=""
          />

          <div className="flex flex-col p-2">
            <h3 className="font-logoText text-xl text">{props.title}</h3>
            <h4 className="text-sm">{props.date.slice(0, 10)}</h4>
            <h4 className="text-sm">Written by: {props.author}</h4>
            <p>{props.desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Blogpost;
