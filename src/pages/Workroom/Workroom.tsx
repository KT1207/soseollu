import React, { useEffect } from "react";
import Nav from "../nav/Nav";
import {
  MyNovelsContainer,
  NewNovelBtnContainer,
  NewNovelContainer,
  NovelTabContainer,
  WorkroomALLContainer,
} from "./Workroom.styled";
import axios from "axios";
import { myNovels } from "../../components/nav/Workroom";
import Workroomhook from "../../components/Workroom/Workroomhook";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Workroom = () => {
  console.log("작업실 입성");

  return (
    <>
      <Workroomhook></Workroomhook>
    </>
  );
};

export default Workroom;
