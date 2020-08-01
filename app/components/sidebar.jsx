import React from "react";
import { reveal as Menu } from "react-burger-menu";

export default (props) => {
  return (
    <Menu {...props}>
      <a id="home" className="menu-item" href="/">
        <span>Home</span>
      </a>
      <a id="about" className="menu-item" href="/about">
        <span>About</span>
      </a>
      <a id="contact" className="menu-item" href="/contact">
        <span>Contact</span>
      </a>
    </Menu>
  );
};
