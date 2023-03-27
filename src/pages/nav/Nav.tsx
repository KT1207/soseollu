import React from "react";
import { Link } from "react-router-dom";
import { Img } from "../../core/common/Common.styled";
import {
  LogoContainer,
  NavContainer,
  NovelBigContainer,
  NovelContainer,
  NovelImg,
} from "./Nav.styled";

const Nav = () => {
  return (
    <NavContainer>
      <>
        <Link
          to="/main"
          style={{
            textDecoration: "inherit",
            color: "inherit",
          }}
        >
          <LogoContainer>소설루</LogoContainer>
        </Link>
      </>
      <NovelBigContainer>
        <NovelImg src="Images/Novelimg.png"></NovelImg>
        <Link
          to="/novels"
          style={{
            textDecoration: "inherit",
            color: "inherit",
          }}
        >
          <NovelContainer>소설</NovelContainer>
        </Link>
      </NovelBigContainer>
    </NavContainer>
  );
};

export default Nav;
