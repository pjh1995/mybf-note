import React from "react";
import Button from "../components/common/Button";
import SlideImageTag from "../components/SlideImageTag";
import Calendar from "../components/Calendar/Calendar";

const TodoCalendarPage = () => {
  return (
    <>
      <SlideImageTag />
      <p>메인/캘린더 todo 페이지</p>
      <Calendar />

      <Button>버튼</Button>
    </>
  );
};

export default TodoCalendarPage;
