import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/main";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/main" element={<Main></Main>}></Route>
        <Route path="/novel" element={<div>제작중</div>}></Route>
        <Route path="/login" element={<div>제작중</div>}></Route>
        <Route path="/register" element={<div>제작중</div>}></Route>
        <Route path="/logout" element={<div>제작중</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
