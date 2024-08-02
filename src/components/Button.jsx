import React from "react";

const Button = ({ text, func }) => {
  return (
    <button
      onClick={func}
      className="px-8 mx-auto py-4 rounded-md border-[2px] border-blue-400 bg-slate-950 border-solid borderShadow duration-200"
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;
