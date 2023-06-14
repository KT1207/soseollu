import React, { Children, useEffect, useState } from "react";
import {
  MyNovelsContainer,
  NewNovelBtnContainer,
  NewNovelContainer,
  NovelTabContainer,
  WorkroomALLContainer,
} from "../../pages/Workroom/Workroom.styled";
import Nav from "../../pages/nav/Nav";
import { myNovels } from "../nav/Workroom";
import { Link } from "react-router-dom";

const Workroomhook = () => {
  let data: any;
  const Data: void = useEffect(() => {
    data = myNovels();
    console.log("1" + data);
    return data;
  }, [3000]);

  if (data === "mynovelsfail") {
    return (
      <WorkroomALLContainer>
        <div>
          <Nav />
        </div>
        <NovelTabContainer>
          {data}
          <MyNovelsContainer>내 작품</MyNovelsContainer>

          <NewNovelContainer>
            <Link
              to={"./newNovel"}
              style={{
                textDecoration: "inherit",
                color: "inherit",
              }}
            >
              <NewNovelBtnContainer>신규작품 등록</NewNovelBtnContainer>
            </Link>
          </NewNovelContainer>
        </NovelTabContainer>
      </WorkroomALLContainer>
    );
  } else {
    console.log("data :" + data);
    const help = Data;
    console.log("help" + help);
    return (
      <WorkroomALLContainer>
        <div>
          <Nav />
        </div>
        <NovelTabContainer>
          <MyNovelsContainer>내 작품</MyNovelsContainer>
          <Link to="/write/newNovel">
            <NewNovelContainer>
              <NewNovelBtnContainer>신규작품 등록</NewNovelBtnContainer>
            </NewNovelContainer>
          </Link>
          <Link to="/write/newNovelImg">
            <NewNovelContainer>
              <NewNovelBtnContainer>배너 신청</NewNovelBtnContainer>
            </NewNovelContainer>
          </Link>
        </NovelTabContainer>
      </WorkroomALLContainer>
    );
  }
};

export default Workroomhook;
