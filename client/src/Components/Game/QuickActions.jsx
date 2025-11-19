import React from "react";
import { FaGavel, FaFileAlt, FaStickyNote, FaPause } from "react-icons/fa";

function QuickActions({ onObject, onEvidence, onNote }) {
    const actions = [
        { label: "Object", icon: <FaGavel />, action: onObject },
        { label: "Present Evidence", icon: <FaFileAlt />, action: onEvidence },
        { label: "Add Note", icon: <FaStickyNote />, action: onNote },
        { label: "Pause", icon: <FaPause />, action: () => {} },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {actions.map((a, idx) => (
                <button
                    key={idx}
                    onClick={a.action}
                    className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-700 hover:border-amber-400 transition flex flex-col items-center"
                >
                    <span className="text-amber-400 text-2xl">{a.icon}</span>
                    <p className="mt-1 text-sm">{a.label}</p>
                </button>
            ))}
        </div>
    );
}

export default QuickActions;
