import React from "react";

const Button = ({ category, applyFilter }) => {
  return (
    <button
      onClick={() => applyFilter(category)}
      className="bg-[#ffffff] h-8 w-14 ml-4 rounde-lg text-black  rounded-md"
    >
      {category}
    </button>
  );
};

export default Button;
