import React from "react";
import { NavLink } from "react-router-dom";

function Tabs({ items }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-4">
      {items.map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-700 
                     hover:border-amber-400 transition flex flex-col items-center cursor-pointer"
        >
          <span className="text-amber-400">{item.icon}</span>
          <p className="mt-2 text-center text-sm">{item.label}</p>
        </NavLink>
      ))}
    </div>
  );
}

export default Tabs;
