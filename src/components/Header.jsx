import React from "react";
import SVG from "./SVG";
import CurrentWeather from "./CurrentWeather";

const Header = () => {
  return (
    <header>
      <h1>
        <SVG name="cat" style={{ width: 30, height: 30 }} />
        <span>절친노트</span>
        <SVG name="dog" style={{ width: 30, height: 30 }} />
      </h1>
      <CurrentWeather />
    </header>
  );
};

export default Header;
