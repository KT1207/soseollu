import React, { memo } from "react";
import { Link } from "react-router-dom";

import LOGIN from "../../type/login.type";
import Loginnav from "../../components/login/Login";
import {
  FontContainer,
  LogoBigContainer,
  LogoContainer,
  NavContainer,
  NovelBigContainer,
  NovelFontContainer,
  NovelImg,
  WriteBigContainer,
  WriteNovelImg,
} from "./Nav.styled";
import { Label } from "../Common.styled";

const Nav = () => {
  const login = LOGIN;

  return (
    <NavContainer>
      <LogoBigContainer>
        <LogoContainer>
          <Link
            to="../main"
            style={{
              textDecoration: "inherit",
              color: "inherit",
            }}
          >
            소설루
          </Link>
        </LogoContainer>
      </LogoBigContainer>

      <NovelBigContainer>
        <NovelImg src="Images/Novelimg.png"></NovelImg>
        <Label>
          <Link
            to="../novels"
            style={{
              textDecoration: "inherit",
              color: "inherit",
            }}
            id="linkNovel"
          >
            <NovelFontContainer>소설</NovelFontContainer>
          </Link> 
        </Label>
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

export default memo(Nav);
