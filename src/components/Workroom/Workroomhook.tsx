import React, { Children } from "react";
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
  const data: any = myNovels();

  if (data === (null || undefined)) {
    console.log("data :" + data);

    return (
      <WorkroomALLContainer>
        <div>
          <Nav />
        </div>
        <NovelTabContainer>
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
    return (
      <WorkroomALLContainer>
        <div>
          <Nav />
        </div>
        <NovelTabContainer>
          <MyNovelsContainer>내 작품</MyNovelsContainer>
          <>
            {data.map((v) => {
              return <div>{v}</div>;
            })}
          </>
          <Link to="/newNovel">
            <NewNovelContainer>
              <NewNovelBtnContainer>신규작품 등록</NewNovelBtnContainer>
            </NewNovelContainer>
          </Link>
        </NovelTabContainer>
      </WorkroomALLContainer>
    );
  }
};

export default Workroomhook;
