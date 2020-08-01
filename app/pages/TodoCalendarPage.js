import React from "react";
import Button from "../components/common/Button";
import SlideImageTag from "../components/SlideImageTag";

const TodoCalendarPage = () => {
  return (
    <main id="page-wrap">
      <SlideImageTag />
      <p>메인/캘린더 todo 페이지</p>

      <Button>버튼</Button>
    </main>
  );
};

export default TodoCalendarPage;
