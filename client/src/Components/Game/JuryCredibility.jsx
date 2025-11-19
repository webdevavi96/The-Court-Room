import React from "react";

function JuryCredibility({ value = 72 }) {
    return (
        <div className="w-full bg-neutral-900/70 border border-neutral-700 p-4 rounded-xl">
            <p className="text-amber-400 mb-2 font-semibold tracking-wide">JURY CREDIBILITY</p>

            <div className="w-full bg-neutral-800 h-3 rounded-full overflow-hidden border border-neutral-700">
                <div
                    className="bg-amber-500 h-full transition-all duration-500"
                    style={{ width: `${value}%` }}
                />
            </div>

            <p className="text-neutral-400 text-xs mt-2">{value}% Favorable</p>
        </div>
    );
}

export default JuryCredibility;
