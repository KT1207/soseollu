import React from "react";
import { Link } from "react-router-dom";

import LOGIN from "../../type/login.type";
import Loginnav from "./Loginnav";
import {
  FontContainer,
  LoginBigContainer,
  LoginButton,
  LoginFountContainer,
  LogoBigContainer,
  LogoContainer,
  NavContainer,
  NovelBigContainer,
  NovelImg,
  RegisterBigContainer,
  RegisterFountContainer,
  WriteBigContainer,
  WriteNovelImg,
} from "./Nav.styled";
import { Label } from "../Common.styled";

const Nav = () => {
  const login = LOGIN;

  return (
    <NavContainer>
      <LogoBigContainer>
        <Link
          to="../main"
          style={{
            textDecoration: "inherit",
            color: "inherit",
          }}
        >
          <LogoContainer>소설루</LogoContainer>
        </Link>
      </LogoBigContainer>

      <NovelBigContainer>
        <Label htmlFor="linkNovel"></Label>
        <NovelImg src="Images/Novelimg.png"></NovelImg>
        <Link
          to="../novels"
          style={{
            textDecoration: "inherit",
            color: "inherit",
          }}
          id="linkNovel"
        >
          <FontContainer>소설</FontContainer>
        </Link>
      </NovelBigContainer>

      <WriteBigContainer>
        <WriteNovelImg src="Images/Writenovel.png"></WriteNovelImg>
        <Label>
          <Link
            to="../write"
            style={{
              textDecoration: "inherit",
              color: "inherit",
            }}
          >
            <FontContainer>작업실</FontContainer>
          </Link>
        </Label>
      </WriteBigContainer>
      <Loginnav />
    </NavContainer>
  );
};

export default Nav;
