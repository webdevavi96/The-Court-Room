import React from "react";
import Card from "../Components/UI/Card";
import Badge from "../Components/UI/Badge";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Messages() {
    const msgs = [
        {
            title: "AI Judge — Evidence Required",
            time: "5 min ago",
            content: "Submit firewall logs for anomaly review.",
            status: "Important"
        },
        {
            title: "HQ — New Mission Assigned",
            time: "2 hours ago",
            content: "Operation Silent Echo uploaded to your cases.",
            status: "New"
        },
        {
            title: "Court AI — Hearing Scheduled",
            time: "1 day ago",
            content: "A virtual hearing session is ready.",
            status: "Scheduled"
        }
    ];

    return (
        <div className="w-full text-white">

            {/* HEADER */}
            <h1 className="text-3xl text-amber-400 font-bold tracking-widest mt-4">
                MESSAGES
            </h1>
            <p className="text-neutral-400 text-sm mt-1">
                Encrypted communication channel.
            </p>

            {/* MESSAGES LIST */}
            <div className="space-y-6 mt-8">
                {msgs.map((m, i) => (
                    <Card key={i} title={m.title} description={m.content}>
                        <div className="flex justify-between items-center mt-3">
                            <Badge color={m.status === "Important" ? "red" : m.status === "New" ? "blue" : "gold"}>
                                {m.status}
                            </Badge>
                            <span className="text-xs text-neutral-500">{m.time}</span>
                            <NavLink to="/casedetails" className="text-sm text-amber-400 hover:underline">
                                View Case
                            </NavLink>
                            <NavLink to="/courtroom" className="text-sm text-amber-400 hover:underline">
                                Court Room
                            </NavLink>
                        </div>
                    </Card>
                ))}
            </div>

        </div>
    );
}

export default Messages;
