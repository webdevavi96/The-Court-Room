import React from "react";

function ResponseCard({ options = [], onSelect }) {
    return (
        <div className="space-y-3 mt-6">

            {options.map((opt, i) => (
                <button
                    key={i}
                    onClick={() => onSelect?.(opt)}
                    className="w-full bg-neutral-900/70 border border-neutral-700 hover:border-amber-400 
                    text-left p-4 rounded-xl transition text-neutral-300 hover:text-white"
                >
                    <p className="font-semibold text-amber-400">{opt.title}</p>
                    <p className="text-sm mt-1">{opt.description}</p>
                </button>
            ))}

        </div>
    );
}

export default ResponseCard;
