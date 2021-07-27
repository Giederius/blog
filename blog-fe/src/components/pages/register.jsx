import React, { useEffect, useState } from "react";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({ username: "", email: "", pw: "" });
  const [click, isClicked] = useState(false);

  useEffect(
    (user) => {
      if (!click) {
        return null;
      } else {
        async function registerUser(user) {
          console.log(user);
          await axios.post("/auth/register", {
            username: user.username,
            email: user.email,
            password: user.pw,
          });
        }
        registerUser();
      }
    },
    [isClicked]
  );

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUser((prevValue) => {
      if (name === "username") {
        return {
          username: value,
          email: prevValue.email,
          pw: prevValue.pw,
        };
      } else if (name === "email") {
        return {
          username: prevValue.username,
          email: value,
          pw: prevValue.pw,
        };
      } else if (name === "pw") {
        return {
          username: prevValue.username,
          email: prevValue.email,
          pw: value,
        };
      }
    });
  };

  const handleClick = () => {
    isClicked(true);
  };

  return (
    <div className="flex flex-col text-center font-bodyText">
      <h2 className="text-3xl mt-4">Register New Account</h2>
      <form className="flex flex-col items-center my-5">
        <input
          name="username"
          type="text"
          placeholder="Enter Your Username"
          onChange={handleChange}
          className="border rounded-md mt-5 shadow-md w-72 p-3 focus:ring-3 focus:outline-none"
        />
        <input
          name="email"
          type="email"
          placeholder="Enter Your Email"
          onChange={handleChange}
          className="border rounded-md mt-5 shadow-md w-72 p-3 focus:ring-3 focus:outline-none"
        />
        <input
          name="pw"
          type="password"
          placeholder="Enter Your Password"
          onChange={handleChange}
          className="border rounded-md mt-5 shadow-md w-72 p-3 focus:ring-3 focus:outline-none"
        />
        <button
          // type="submit"
          onClick={handleClick}
          className="bg-gray-400 rounded-md shadow-md mt-5 p-2 w-40 text-white hover:bg-gray-600"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
