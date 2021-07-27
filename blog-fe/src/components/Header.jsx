import React from "react";

function Header() {
  return (
    <div className="h-20 m-4 bg-gray-300 rounded-md flex flex-col items-center justify-center lg:max-w-6xl lg:mx-auto sm:px-6 lg:px-8 shadow-lg">
      <h3 className="font-logoText text-xl">Your Blog</h3>
      <p>Where everything You post disappears.</p>
    </div>
  );
}

export default Header;
