import React from "react";

function Badge({ children, color = "gold" }) {
    const colorClasses = {
        gold: "bg-amber-500/20 text-amber-400 border-amber-500/40",
        red: "bg-red-500/20 text-red-400 border-red-500/40",
        green: "bg-green-500/20 text-green-400 border-green-500/40",
        blue: "bg-blue-500/20 text-blue-400 border-blue-500/40"
    };

    return (
        <span
            className={`px-3 py-1 rounded-full border text-xs font-semibold tracking-wide ${colorClasses[color]}`}
        >
            {children}
        </span>
    );
}

export default Badge;
