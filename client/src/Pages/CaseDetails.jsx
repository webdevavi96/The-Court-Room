import React from "react";
import Card from "../Components/UI/Card";
import Badge from "../Components/UI/Badge";
import Button from "../Components/UI/Button";

function Casedetail() {
    return (
        <div className="w-full text-white">

            {/* HEADER */}
            <h1 className="text-3xl text-amber-400 font-bold tracking-widest mt-4">
                CASE DETAIL
            </h1>
            <p className="text-neutral-400 text-sm mt-1">
                File: Cyber Intrusion — Phase 2
            </p>

            {/* CASE SUMMARY */}
            <div className="mt-8">
                <Card title="Case Summary" description="A high-level breach attempt was detected in the national grid. Packet logs highlight irregular traffic originating from an unknown encrypted source.">
                    <div className="mt-3">
                        <Badge color="gold">Active Case</Badge>
                    </div>
                </Card>
            </div>

            {/* EVIDENCE VIEWER */}
            <div className="mt-8">
                <Card title="Evidence">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

                        <div className="bg-neutral-800/60 p-3 rounded-lg border border-neutral-700">
                            <p className="text-sm text-neutral-400">Packet Log</p>
                            <img src="/evidence/packet.png" className="rounded-lg mt-2" />
                        </div>

                        <div className="bg-neutral-800/60 p-3 rounded-lg border border-neutral-700">
                            <p className="text-sm text-neutral-400">CCTV Still</p>
                            <img src="/evidence/cctv.png" className="rounded-lg mt-2" />
                        </div>

                        <div className="bg-neutral-800/60 p-3 rounded-lg border border-neutral-700">
                            <p className="text-sm text-neutral-400">Audio Sample</p>
                            <audio controls className="mt-2 w-full">
                                <source src="/evidence/audio.mp3" />
                            </audio>
                        </div>

                    </div>
                </Card>
            </div>

            {/* SUSPECTS */}
            <div className="mt-8">
                <Card title="Suspects">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                        <div className="flex items-center gap-3 bg-neutral-800/50 p-3 rounded-lg border border-neutral-700">
                            <img src="/suspects/user1.png" className="w-12 h-12 rounded-full border border-amber-400" />
                            <div>
                                <p className="text-white text-sm">Unknown Intruder</p>
                                <Badge color="red">High Risk</Badge>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-neutral-800/50 p-3 rounded-lg border border-neutral-700">
                            <img src="/suspects/user2.png" className="w-12 h-12 rounded-full border border-amber-400" />
                            <div>
                                <p className="text-white text-sm">ISP Node Engineer</p>
                                <Badge color="blue">Under Review</Badge>
                            </div>
                        </div>

                    </div>
                </Card>
            </div>

            {/* TIMELINE */}
            <div className="mt-8">
                <Card title="Timeline">
                    <ul className="space-y-4 mt-4 text-sm">
                        <li className="border-l-2 border-amber-400 pl-3">
                            01:43AM — Unusual traffic spike detected.
                        </li>
                        <li className="border-l-2 border-amber-400 pl-3">
                            01:47AM — CCTV captured silhouette near terminal room.
                        </li>
                        <li className="border-l-2 border-amber-400 pl-3">
                            01:54AM — System auto-locked due to intrusion attempt.
                        </li>
                    </ul>
                </Card>
            </div>

            {/* INTERROGATION BUTTON */}
            <div className="mt-10">
                <Button variant="primary">
                    Begin Interrogation
                </Button>
            </div>

        </div>
    );
}

export default Casedetail;
