import React from "react";
import Card from "../Components/UI/Card";
import Progressbar from "../Components/UI/Progressbar";
import Button from "../Components/UI/Button";
import Badge from "../Components/UI/Badge";

function Profile() {
    return (
        <div className="w-full text-white">

            {/* HEADER */}
            <h1 className="text-3xl text-amber-400 font-bold tracking-widest mt-4">
                AGENT PROFILE
            </h1>
            <p className="text-neutral-400 text-sm mt-1">Identity & Mission Summary</p>

            {/* TOP SECTION */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* AGENT BIO */}
                <Card title="Agent Identity">
                    <img
                        src="/agent.png"
                        className="w-24 h-24 rounded-full border border-amber-400 mx-auto mt-2"
                    />
                    <h3 className="text-center text-xl text-amber-400 mt-4">
                        Agent Shadow
                    </h3>
                    <p className="text-center text-neutral-400 text-sm">
                        Clearance Level: 4
                    </p>
                    <div className="flex justify-center gap-2 mt-3">
                        <Badge>Active</Badge>
                        <Badge color="blue">Online</Badge>
                    </div>
                </Card>

                {/* AGENT STATS */}
                <Card title="Performance Stats">
                    <p className="text-sm text-neutral-400">Trust Score</p>
                    <Progressbar value={86} />

                    <p className="text-sm text-neutral-400 mt-4">XP Level</p>
                    <Progressbar value={62} />

                    <p className="text-sm text-neutral-400 mt-4">Cases Solved</p>
                    <Progressbar value={48} />
                </Card>

                {/* ACTIONS */}
                <Card title="Actions">
                    <Button className="w-full mb-3">Edit Profile</Button>
                    <Button variant="secondary" className="w-full">Change Password</Button>
                </Card>
            </div>

        </div>
    );
}

export default Profile;
