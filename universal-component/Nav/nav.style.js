import styled from "styled-components";

export const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  border: 1px solid
    ${({ color }) =>
      color.PrimaryColor === "#fff"
        ? color.SecondaryColor
        : color.SecondaryColor};

  button {
    background-color: ${({ color }) =>
      color.PrimaryColor === "#fff"
        ? color.PrimaryColorColor
        : color.PrimaryColor};
    border: 1px solid
      ${({ color }) =>
        color.PrimaryColor === "#fff"
          ? color.SecondaryColor
          : color.SecondaryColor};
    color: ${({ color }) =>
      color.PrimaryColor === "#fff"
        ? color.SecondaryColor
        : color.SecondaryColor};
    outline: none;
    padding: 5px;
    border-radius: 50px;
    margin: 0px 10px;
  }
`;
