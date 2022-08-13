import React from "react";
import SignUp from "../Components/SignUp";
import NavBar from "../universal-component/Nav";

const Signup = ({ onclick }) => {
  return (
    <div>
      <NavBar onclick={onclick} />
      <SignUp />
    </div>
  );
};

export default Signup;
