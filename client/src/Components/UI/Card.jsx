import React from "react";

function Card({ title, description, children }) {
    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-lg hover:shadow-amber-500/20 transition cursor-pointer">

            {/* Title */}
            {title && (
                <h3 className="text-lg font-semibold text-amber-400 mb-2 tracking-wide">
                    {title}
                </h3>
            )}

            {/* Description */}
            {description && (
                <p className="text-neutral-400 text-sm mb-3 leading-relaxed">
                    {description}
                </p>
            )}

            {/* Extra children content */}
            {children}
        </div>
    );
}

export default Card;
