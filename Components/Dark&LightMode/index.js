import React, { useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { withTheme } from "styled-components";
import { DLDiv } from "./DL.style";
import { ImSun } from "react-icons/im";

const LightDarkMode = ({ onclick, theme }) => {
  const [changeShow, setChangeShow] = useState(false);

  const HandleChange = () => {
    setChangeShow(!changeShow);
  };

  return (
    <DLDiv color={theme} onClick={onclick} stateShow={changeShow}>
      {!changeShow ? (
        <div onClick={HandleChange} className={"dark"}>
          <BsFillMoonFill className={"darkMode"} />
          <p>Dark</p>
        </div>
      ) : (
        <div onClick={HandleChange} className={"light"}>
          <p>Light</p>
          <ImSun className={"lightMode"} />
        </div>
      )}
    </DLDiv>
  );
};

export default withTheme(LightDarkMode);
