import React from "react";

function WitnessDialogue({ witnessName = "Witness", dialogue = [] }) {
    return (
        <div className="bg-neutral-900/70 border border-neutral-700 p-6 rounded-xl w-full">
            <h2 className="text-amber-400 text-lg font-semibold tracking-wide mb-4">
                WITNESS TESTIMONY
            </h2>

            <div className="space-y-4 max-h-72 overflow-y-auto">
                {dialogue.map((line, i) => (
                    <div
                        key={i}
                        className={`p-3 rounded-lg text-sm max-w-[80%] ${line.sender === "agent"
                                ? "bg-amber-500 text-black ml-auto"
                                : "bg-neutral-800 border border-neutral-700"
                            }`}
                    >
                        {line.text}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WitnessDialogue;
