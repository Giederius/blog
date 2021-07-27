import React from "react";

function Login() {
  return (
    <div className="flex flex-col text-center font-bodyText ">
      <h2 className="text-3xl mt-4">Login</h2>
      <form className="flex flex-col items-center my-5">
        <input
          type="text"
          placeholder="Enter Your Username"
          className="border rounded-md mt-5 shadow-md w-72 p-3 focus:ring-3 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          className="border rounded-md mt-5 shadow-md w-72 p-3 focus:ring-3 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-gray-400 rounded-md shadow-md mt-5 p-2 w-40 text-white hover:bg-gray-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
