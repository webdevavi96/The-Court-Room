import React, { useState } from "react";
import CourtHUD from "../Components/Game/CourtHUD";
import WitnessDialogue from "../Components/Game/WitnessDialogue";
import JuryCredibility from "../Components/Game/JuryCredibility";
import QuickActions from "../Components/Game/QuickActions";
import ResponseCard from "../Components/Game/ResponseCard";

function Courtroom() {

    // Witness dialogue feed
    const [dialogue, setDialogue] = useState([
        { sender: "judge", text: "Present the evidence for the cyber intrusion." },
        { sender: "agent", text: "Packet logs extracted from the terminal." },
        { sender: "judge", text: "Analyzing anomalies..." },
    ]);

    // Response options
    const [choices, setChoices] = useState([
        {
            title: "Present Evidence",
            description: "Show the packet logs found during the breach.",
        },
        {
            title: "Request Clarification",
            description: "Ask judge what specific anomaly is being referenced.",
        },
        {
            title: "Challenge Statement",
            description: "Object to the current conclusion.",
        },
    ]);

    // Handle response selection
    const handleSelect = (opt) => {
        setDialogue((prev) => [
            ...prev,
            { sender: "agent", text: opt.title },
            { sender: "judge", text: "Processing your argument..." }
        ]);
    };

    return (
        <div className="w-full text-white">

            {/* HEADER */}
            <h1 className="text-3xl text-amber-400 font-bold tracking-widest mt-4">
                COURTROOM
            </h1>
            <p className="text-neutral-400 text-sm mt-1">
                AI Judge & Case Proceedings
            </p>

            {/* TOP HUD */}
            <div className="mt-6">
                <CourtHUD judge="AI Judge Delta" timer="11:28" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                {/* LEFT — Witness / Judge Dialogue */}
                <div className="md:col-span-2">
                    <WitnessDialogue
                        witnessName="AI Judge"
                        dialogue={dialogue}
                    />
                </div>

                {/* RIGHT — Jury Credibility */}
                <div className="md:col-span-1">
                    <JuryCredibility value={72} />
                </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8">
                <QuickActions
                    onObject={() => setDialogue(prev => [...prev, { sender: "agent", text: "Objection!" }])}
                    onEvidence={() => setDialogue(prev => [...prev, { sender: "agent", text: "Presenting evidence..." }])}
                    onNote={() => alert("Note added")}
                />
            </div>

            {/* Response Options */}
            <div className="mt-10">
                <ResponseCard options={choices} onSelect={handleSelect} />
            </div>

        </div>
    );
}

export default Courtroom;
