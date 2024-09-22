import React from "react";
import sprite from "../assets/sprite.svg";

const Icon = ({ name, className, width = 24, height = 24 }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      stroke="currentColor"
    >
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  );
};

export default Icon;
