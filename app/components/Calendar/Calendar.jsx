import React from "react";
import moment, { Moment as MomentTypes } from "moment";
import "./Calendar.scss";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Calendar = () => {
  function generate() {
    moment.lang("ko", {
      months: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
      ],
      weekdays: [
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일",
      ],
      weekdaysShort: ["일", "월", "화", "수", "목", "금", "토"],
    });

    const today = moment();
    const startWeek = today.clone().startOf("month").week();
    const endWeek =
      today.clone().endOf("month").week() === 1
        ? 53
        : today.clone().endOf("month").week();
    let calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <ul className="weeks" key={week}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              let current = today
                .clone()
                .week(week)
                .startOf("week")
                .add(n + i, "day");
              let isToday =
                today.format("YYYYMMDD") === current.format("YYYYMMDD")
                  ? "today"
                  : "";
              let isAnotherMonth =
                current.format("MM") === today.format("MM")
                  ? ""
                  : "another-month";
              return (
                <li className={isAnotherMonth} key={i}>
                  <span className={isToday}>{current.format("D")}</span>
                </li>
              );
            })}
        </ul>
      );
    }
    return calendar;
  }

  return (
    <div className="calendar">
      <div className="calendar-head">
        <button>
          <MdChevronLeft />
        </button>
        <h1>
          {moment().format("YYYY")}년 {moment().format("MMMM")}
        </h1>
        <button>
          <MdChevronRight />
        </button>
      </div>
      <div className="calendar-body">
        <div className="body-title">
          <ul className="weeks">
            <li>SUN</li>
            <li>MON</li>
            <li>TUE</li>
            <li>WED</li>
            <li>THU</li>
            <li>FRI</li>
            <li>SAT</li>
          </ul>
        </div>

        <div className="weeks-days">{generate()}</div>
      </div>
    </div>
  );
};

export default Calendar;
