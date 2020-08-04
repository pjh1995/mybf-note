import React from "react";
import { FiPlus } from "react-icons/fi";
import test from "../images/test.jpeg";

const SlideImageTag = () => {
  return (
    <article id="SlideImageTag">
      <ul>
        <li>
          <span>ALL</span>
        </li>
        <li>
          <img src={test} alt="딸기" />
        </li>
        <li>
          <img src={test} alt="딸기" />
        </li>
        <li>
          <img src={test} alt="딸기" />
        </li>
        <li>
          <img src={test} alt="딸기" />
        </li>
        <li>
          <img src={test} alt="딸기" />
        </li>
        {/* <li>
          <img src={test} alt="딸기" />
        </li>
        <li>
          <img src={test} alt="딸기" />
        </li>
        <li>
          <img src={test} alt="딸기" />
        </li> */}
        <li>
          <span>
            <FiPlus />
          </span>
        </li>
      </ul>
    </article>
  );
};

export default SlideImageTag;
