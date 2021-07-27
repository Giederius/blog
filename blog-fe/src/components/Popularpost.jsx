import React from "react";

function Popularpost(props) {
  return (
    <div className="m-2">
      <div className="h-60 w-38 md:w-44 md:h-80 rounded-md bg-red-200 shadow-lg">
        <img
          className="h-full w-full object-cover self-center justify-self-center rounded-md"
          src={props.img}
          alt=""
        />
        <h3 className="font-logoText relative bottom-8 left-3">
          {props.title}
        </h3>
      </div>
    </div>
  );
}

export default Popularpost;
