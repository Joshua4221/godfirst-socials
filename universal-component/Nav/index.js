import React from "react";
import { withTheme } from "styled-components";
import LightDarkMode from "../../Components/Dark&LightMode";
import { NavDiv } from "./nav.style";

const NavBar = ({ onclick, theme }) => {
  return (
    <NavDiv color={theme}>
      <LightDarkMode onclick={onclick} />
      <div>
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </NavDiv>
  );
};

export default withTheme(NavBar);
