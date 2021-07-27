import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between  lg:justify-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-3xl font-logoText">Blogpost</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 font-bodyText">
                  <Link to="/register">
                    <p className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Register
                    </p>
                  </Link>
                  <Link to="/login">
                    <p className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Login
                    </p>
                  </Link>
                  <Link to="/blog/newpost">
                    <p className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Create New Post
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {" "}
                {isOpen ? (
                  <i class="fas fa-times text-2xl cursor-pointer"></i>
                ) : (
                  <i class="fas fa-bars text-2xl cursor-pointer"></i>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-500 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-500 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className=" font-bodyText px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link to="/register">
                  <p className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Register
                  </p>
                </Link>
                <Link to="/login">
                  <p className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Login
                  </p>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
