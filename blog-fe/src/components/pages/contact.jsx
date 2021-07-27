import React from "react";

function Contact() {
  return (
    <div className="flex flex-col text-center font-bodyText">
      <h2 className="text-3xl mt-4">Contact Us</h2>
      <form className="flex flex-col items-center my-5">
        <input
          type="email"
          placeholder="Enter Your email"
          className="border rounded-md mt-5 shadow-md w-72 p-3 focus:ring-3 focus:outline-none"
        />
        <textarea
          type="text"
          placeholder="Your message"
          className="border rounded-md my-3 shadow-md w-80 h-40 p-3 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-gray-400 rounded-md shadow-md mt-5 p-2 w-40 text-white hover:bg-gray-600"
        >
          Contact
        </button>
      </form>
    </div>
  );
}

export default Contact;
