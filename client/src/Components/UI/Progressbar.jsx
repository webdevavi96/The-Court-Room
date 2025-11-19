import React from "react";

function Progressbar({ value }) {
  return (
    <div className="w-full bg-neutral-800 border border-neutral-700 rounded-full h-3 overflow-hidden">
      <div
        className="h-full bg-amber-500 transition-all duration-500"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}

export default Progressbar;
