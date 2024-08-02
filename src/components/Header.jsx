import React from "react";

const Header = ({ index, title, description }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <span className="text-slate-300 text-3xl sm:text-4xl md:text-5xl font-semibold">
          {index}
        </span>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
};

export default Header;
