import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Inbox from "./inbox/inbox";
import EmailDetail from "./emailDetail/emailDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 기본 화면: 메일 목록 */}
          <Route index element={<Inbox />} />
          {/* 메일 상세 페이지 */}
          <Route path="email/:id" element={<EmailDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
