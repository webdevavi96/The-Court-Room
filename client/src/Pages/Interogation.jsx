import React, { useState } from "react";
import Button from "../Components/UI/Button";

function Interrogation() {

    // ALL SUSPECTS
    const suspects = [
        {
            id: 1,
            name: "Unknown Intruder",
            risk: "High-risk suspect",
            img: "/suspects/user1.png"
        },
        {
            id: 2,
            name: "ISP Node Engineer",
            risk: "Under review",
            img: "/suspects/user2.png"
        },
        {
            id: 3,
            name: "Shadow Operative",
            risk: "Highly trained operative",
            img: "/suspects/user3.png"
        }
    ];

    // CURRENT SELECTED SUSPECT
    const [activeSuspect, setActiveSuspect] = useState(suspects[0]);

    // CHAT MESSAGES
    const [messages, setMessages] = useState([
        { sender: "suspect", text: "Why am I here? I didn't do anything." },
        { sender: "agent", text: "We have questions about last night." },
    ]);

    const [input, setInput] = useState("");

    // HANDLE SUSPECT CHANGE
    const handleSuspectChange = (e) => {
        const selected = suspects.find(s => s.id === Number(e.target.value));
        setActiveSuspect(selected);

        // OPTIONAL: Reset chat when switching suspect
        setMessages([
            { sender: "suspect", text: `I am ${selected.name}. What do you want?` }
        ]);
    };

    const sendMessage = () => {
        if (!input.trim()) return;

        setMessages([...messages, { sender: "agent", text: input }]);
        setInput("");

        setTimeout(() => {
            setMessages(prev => [
                ...prev,
                {
                    sender: "suspect",
                    text: "I don't know what you're talking about."
                }
            ]);
        }, 1000);
    };

    return (
        <div className="w-full text-white">

            {/* HEADER */}
            <h1 className="text-3xl text-amber-400 font-bold tracking-widest mt-4">
                INTERROGATION ROOM
            </h1>

            {/* SUSPECT SELECTOR */}
            <div className="mt-4">
                <label className="text-sm text-neutral-300">Select Suspect</label>
                <select
                    onChange={handleSuspectChange}
                    className="ml-2 mt-2 bg-neutral-800 border border-neutral-700 text-white p-1 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none"
                >
                    {suspects.map(s => (
                        <option key={s.id} value={s.id}>
                            {s.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* SUSPECT PROFILE */}
            <div className="flex items-center gap-4 mt-6">
                <img
                    src={activeSuspect.img}
                    className="w-16 h-16 rounded-full border border-amber-400"
                />
                <div>
                    <p className="text-xl text-amber-400">{activeSuspect.name}</p>
                    <p className="text-neutral-400 text-sm">{activeSuspect.risk}</p>
                </div>
            </div>

            {/* CHAT WINDOW */}
            <div className="bg-neutral-900/60 border border-neutral-700 p-6 rounded-xl mt-8 h-[60vh] overflow-y-auto space-y-4">

                {messages.map((m, i) => (
                    <div
                        key={i}
                        className={`w-fit max-w-[70%] p-3 rounded-lg text-sm
                            ${m.sender === "agent"
                                ? "bg-amber-500 text-black ml-auto"
                                : "bg-neutral-800 border border-neutral-700"
                            }
                        `}
                    >
                        {m.text}
                    </div>
                ))}

            </div>

            {/* INPUT FIELD */}
            <div className="flex gap-3 mt-4">
                <input
                    className="flex-1 p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:ring-2 focus:ring-amber-400"
                    placeholder={`Ask ${activeSuspect.name}...`}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <Button onClick={sendMessage}>Send</Button>
            </div>

        </div>
    );
}

export default Interrogation;
