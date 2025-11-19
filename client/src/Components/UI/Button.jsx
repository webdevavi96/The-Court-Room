import React from "react";

function Button({ children, variant = "primary", className = "", ...props }) {
  const base =
    "px-5 py-2 rounded-lg font-semibold tracking-wide transition cursor-pointer";

  const variants = {
    primary:
      "bg-amber-500 text-black hover:bg-amber-600",
    secondary:
      "bg-neutral-800 border border-neutral-700 text-white hover:border-amber-400",
    ghost:
      "text-amber-400 hover:text-amber-300"
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
