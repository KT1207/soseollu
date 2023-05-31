import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/main";
import LOGIN from "../src/type/login.type";
import Modal from "react-modal";
import Workroom from "./pages/Workroom/Workroom";
import Novel from "./pages/novels/Novel";
import AddNovel from "./pages/Workroom/AddNovel";

Modal.setAppElement("#root");

const App = () => {
  const login = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main></Main>}></Route>
        <Route path={"main"} element={<Main></Main>}></Route>
        <Route path={"novels"} element={<Novel></Novel>}></Route>
        <Route path={"write"} element={<Workroom></Workroom>}></Route>
        <Route path={"write/newNovel"} element={<AddNovel></AddNovel>}></Route>
        <Route path={"*"} element={<div>404 Error</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
