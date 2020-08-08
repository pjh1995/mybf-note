import React, { useState, useEffect } from 'react';
import moment, { Moment as MomentTypes } from 'moment';
import 'moment/locale/ko';
import './Calendar.scss';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { weekdaysEn } from './constant';

moment.locale('ko');

const Calendar = () => {
    const today = moment();
    const [targetDate, setTargetDate] = useState(today);

    function setDay(current) {
        const isToday =
            today.format('YYYYMMDD') === current.format('YYYYMMDD')
                ? 'today'
                : '';
        const isAnotherMonth =
            current.format('MM') === targetDate.format('MM')
                ? ''
                : 'another-month';
        const day = current.format('D');
        return (
            <li className={isAnotherMonth} key={day}>
                <span className={isToday}>{day}</span>
            </li>
        );
    }

    function setWeekRow(week) {
        let newWeeks = Array(7).fill(0);
        return (
            <ul className="weeks" key={week}>
                {newWeeks.map((n, i) => {
                    const current = targetDate
                        .clone()()
                        .startOf('week')
                        .week(week)
                        .add(n + i, 'day');
                    return setDay(current);
                })}
            </ul>
        );
    }

    function setCalendar() {
        const startWeek = targetDate.clone().startOf('month').week();
        let endWeek = targetDate.clone().endOf('month').week();
        if (endWeek === 1) endWeek = 53;
        let calendar = [];

        for (let week = startWeek; week <= endWeek; week++) {
            calendar.push(setWeekRow(week));
        }
        return calendar;
    }

    function handleClick(addMonth) {
        setTargetDate(targetDate.clone().add(addMonth, 'M'));
    }

    return (
        <div className="calendar">
            <div className="calendar-head">
                <button onClick={() => handleClick(-1)}>
                    <MdChevronLeft />
                </button>
                <h1>
                    {targetDate.format('YYYY')}년 {targetDate.format('MMMM')}
                </h1>
                <button onClick={() => handleClick(1)}>
                    <MdChevronRight />
                </button>
            </div>
            <div className="calendar-body">
                <div className="body-title">
                    <ul className="weeks">
                        {weekdaysEn.map((week, index) => (
                            <li key={index}>{week}</li>
                        ))}
                    </ul>
                </div>

                <div className="weeks-days">{setCalendar()}</div>
            </div>
        </div>
    );
};

export default Calendar;
