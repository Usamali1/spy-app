import React from "react";

const Button = ({ title,backgroundColor, color, border, padding, size, weight }) => {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        color: color,
        border: `1px solid ${border}`,
        padding: padding,
        fontSize: size,
        fontWeight: weight,
        
      }}
      className=" text-sm rounded-[50px] text-center "
    >
      {title}
    </button>
  );
};

export default Button;
