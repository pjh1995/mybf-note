import React from "react";
import { FiPlus } from "react-icons/fi";

const SlideImageTag = () => {
  return (
    <article id="SlideImageTag">
      <ul>
        <li>
          <span>ALL</span>
        </li>
        <li>
          <img src="images/test.jpeg" alt="딸기" />
        </li>
        <li>
          <img src="images/test.jpeg" alt="딸기" />
        </li>
        <li>
          <img src="images/test.jpeg" alt="딸기" />
        </li>
        <li>
          <img src="images/test.jpeg" alt="딸기" />
        </li>
        <li>
          <img src="images/test.jpeg" alt="딸기" />
        </li>
        <li>
          <img src="images/test.jpeg" alt="딸기" />
        </li>
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
