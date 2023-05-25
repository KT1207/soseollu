import styled from "styled-components";

const WorkroomALLContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const MyNovelsContainer = styled.div`
  :hover {
    border-left: 1px solid black;
    border-top: 1px solid black;
    border-right: 1x solid black;
  }
  :hover::after {
  }
  display: flex;
`;
const NewNovelBtnContainer = styled.div`
  width: 100%;
  height: 100%;

  :hover {
    cursor: pointer;
  }
  background-color: none;
  background: #00dc16;
  border: none;
  font-size: 12px;
`;
const NewNovelContainer = styled.div``;

const NovelTabContainer = styled.div`
  padding-top: 10vh;
  border: 1px solid black;
  display: flex;
  gap: 40px;
`;

export {
  WorkroomALLContainer,
  MyNovelsContainer,
  NewNovelContainer,
  NovelTabContainer,
  NewNovelBtnContainer,
};
