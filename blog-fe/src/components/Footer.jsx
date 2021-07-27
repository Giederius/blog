import React from "react";
import { Link } from "react-router-dom";

const date = new Date();
var year = date.getFullYear();

function Footer() {
  return (
    <div className="m-4 text-center lg:max-w-7xl mx-auto">
      <div className="hidden md:block border border-black/70 w-3/12 mx-auto my-3"></div>
      <h1 className="font-logoText text-xl">Blogpost</h1>
      <ul className="my-2 md:flex md:flex-row">
        <li className="text-gray-900 hover:bg-gray-700 hover:text-white block py-2 px-3 mx-auto rounded-md text-base font-medium w-min">
          <Link to={"/"} className="w-min">
            HOME
          </Link>
        </li>

        <li className="text-gray-900 hover:bg-gray-700 hover:text-white block py-2 px-3 mx-auto rounded-md text-base font-medium w-min">
          <Link to={"/faq"}>FAQ</Link>
        </li>

        <li className="text-gray-900 hover:bg-gray-700 hover:text-white block py-2 px-3 mx-auto rounded-md text-base font-medium w-min">
          <Link to={"/about"} className="w-min">
            ABOUT
          </Link>
        </li>

        <li className="text-gray-900 hover:bg-gray-700 hover:text-white block py-2 px-3 mx-auto rounded-md text-base font-medium w-min">
          <Link to={"/contact"} className="w-min">
            CONTACT
          </Link>
        </li>
      </ul>
      <p className="font-bold text-xl font-logoText">{year}</p>
    </div>
  );
}

export default Footer;
