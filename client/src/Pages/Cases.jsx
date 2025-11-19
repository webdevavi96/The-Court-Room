import React from "react";
import Card from "../Components/UI/Card";
import Badge from "../Components/UI/Badge";
import { NavLink } from "react-router-dom";
import { FaSearch, FaFilter, FaLockOpen, FaLock } from "react-icons/fa";

function Cases() {
    const cases = [
        {
            id: 1,
            title: "Cyber Intrusion — Phase 2",
            status: "Active",
            description: "Unusual encrypted signal detected from unknown source.",
        },
        {
            id: 2,
            title: "The Diamond Heist",
            status: "Solved",
            description: "Master thief identified. Awaiting final court review.",
        },
        {
            id: 3,
            title: "Operation Silent Echo",
            status: "New",
            description: "A new intelligence leak requires immediate analysis.",
        },
    ];

    return (
        <div className="text-white w-full">

            {/* HEADER */}
            <h1 className="text-3xl text-amber-400 font-bold tracking-widest mt-4">
                CASE FILES
            </h1>
            <p className="text-neutral-400 text-sm mt-1">
                Classified intelligence missions assigned to you.
            </p>

            {/* SEARCH + FILTER */}
            <div className="flex items-center gap-3 mt-6">
                <div className="flex items-center bg-neutral-800 border border-neutral-700 px-3 py-2 rounded-lg w-full">
                    <FaSearch className="text-neutral-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Search cases..."
                        className="bg-transparent outline-none w-full text-white"
                    />
                </div>

                <button className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg hover:border-amber-400 transition">
                    <FaFilter className="text-amber-400" />
                </button>
            </div>

            {/* CASE CARDS */}
            <div className="mt-8 space-y-6">
                {cases.map(c => (
                    <Card key={c.id} title={c.title} description={c.description}>
                        <div className="flex justify-between items-center mt-3">
                            <Badge color={c.status === "Active" ? "gold" : c.status === "Solved" ? "green" : "blue"}>
                                {c.status}
                            </Badge>

                            <NavLink
                                to={`/cases/${c.id}`}
                                className="text-amber-400 hover:text-amber-300 transition flex items-center gap-1 text-sm"
                            >
                                {c.status === "Solved" ? <FaLock /> : <FaLockOpen />} Open File
                            </NavLink>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Cases;
