import React, { useState } from "react";
import Button from "../Components/UI/Button";

function JudgeChat() {
    const [messages, setMessages] = useState([
        { sender: "judge", text: "State your reason for submitting partial evidence." },
        { sender: "agent", text: "The final packet logs are still being processed." }
    ]);

    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;
        setMessages([...messages, { sender: "agent", text: input }]);
        setInput("");

        setTimeout(() => {
            setMessages(prev => [...prev, {
                sender: "judge",
                text: "Very well. Upload the completed logs immediately."
            }]);
        }, 1200);
    };

    return (
        <div className="w-full text-white">

            <h1 className="text-3xl text-amber-400 font-bold tracking-widest mt-4">
                COURT AI — JUDGE
            </h1>

            {/* CHAT AREA */}
            <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 mt-6 h-[70vh] overflow-y-auto space-y-4">

                {messages.map((m, i) => (
                    <div key={i} className={`max-w-[75%] p-3 rounded-lg text-sm
            ${m.sender === "agent" ? "bg-amber-500 text-black ml-auto" : "bg-neutral-800 border border-neutral-700"}
          `}>
                        <span className="font-semibold block mb-1">
                            {m.sender === "judge" ? "Judge AI" : "You"}:
                        </span>
                        {m.text}
                    </div>
                ))}

            </div>

            {/* INPUT */}
            <div className="flex gap-3 mt-4">
                <input
                    className="flex-1 p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:ring-2 focus:ring-amber-400"
                    placeholder="Respond to Judge AI..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <Button onClick={sendMessage}>Send</Button>
            </div>

        </div>
    );
}

export default JudgeChat;
