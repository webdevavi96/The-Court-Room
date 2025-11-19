import React from "react";
import Card from "../Components/UI/Card";
import Tabs from "../Components/UI/Tabs";
import Progressbar from "../Components/UI/Progressbar";
import Button from "../Components/UI/Button";
import Badge from "../Components/UI/Badge";

import {
  FaFolderOpen,
  FaGavel,
  FaUserSecret,
  FaEnvelopeOpenText
} from "react-icons/fa";

function Home() {
  return (
    <div className="w-full text-white">

      {/* HEADER */}
      <div className="mt-4">
        <h1 className="text-3xl font-bold text-amber-400 tracking-widest">
          WELCOME, AGENT
        </h1>
        <p className="text-neutral-400 text-sm mt-1">
          Your intelligence dashboard is ready.
        </p>
      </div>

      {/* STATUS CARD */}
      <div className="mt-8">
        <Card title="Current Status" description="Your performance metrics and clearance details.">
          <div className="grid grid-cols-3 text-center">
            <div>
              <p className="text-amber-400 font-bold text-xl">Level 4</p>
              <p className="text-neutral-400 text-xs">Clearance</p>
            </div>

            <div>
              <p className="text-amber-400 font-bold text-xl">86%</p>
              <p className="text-neutral-400 text-xs">Trust Score</p>
              <Progressbar value={86} />
            </div>

            <div>
              <p className="text-amber-400 font-bold text-xl">12</p>
              <p className="text-neutral-400 text-xs">Cases Solved</p>
            </div>
          </div>
        </Card>
      </div>

      {/* QUICK ACTIONS (Tabs Component) */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-amber-400 tracking-wide mb-3">
          Quick Actions
        </h2>

        <Tabs
          items={[
            { label: "Cases", to: "/cases", icon: <FaFolderOpen size={28} /> },
            { label: "Courtroom", to: "/courtroom", icon: <FaGavel size={28} /> },
            { label: "Agent Profile", to: "/profile", icon: <FaUserSecret size={28} /> },
            { label: "Messages", to: "/messages", icon: <FaEnvelopeOpenText size={28} /> }
          ]}
        />
      </div>

      {/* CONTINUE CASE */}
      <div className="mt-10">
        <Card
          title="Continue Your Last Case"
          description="Your ongoing case requires your immediate attention."
        >
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-neutral-300 text-sm mb-2">
                Cyber Intrusion • Phase 2
              </p>
              <Badge color="gold">Active</Badge>
            </div>

            <Button
              variant="primary"
              onClick={() => console.log("Resume Clicked")}
            >
              Resume
            </Button>
          </div>
        </Card>
      </div>

      {/* INTEL FEED */}
      <div className="mt-10">
        <Card title="Intel Feed" description="Latest intelligence and surveillance updates.">
          <div className="space-y-4">

            <div className="border-b border-neutral-800 pb-3">
              <p className="text-neutral-300 text-sm">
                🔸 Suspicious encrypted traffic detected in Sector 5.
              </p>
              <p className="text-neutral-500 text-xs mt-1">2 hours ago</p>
            </div>

            <div className="border-b border-neutral-800 pb-3">
              <p className="text-neutral-300 text-sm">
                🔸 Court AI flagged an anomaly in evidence logs.
              </p>
              <p className="text-neutral-500 text-xs mt-1">6 hours ago</p>
            </div>

            <div>
              <p className="text-neutral-300 text-sm">
                🔸 New case assigned: “Operation Silent Echo”.
              </p>
              <p className="text-neutral-500 text-xs mt-1">1 day ago</p>
            </div>

          </div>
        </Card>
      </div>

    </div>
  );
}

export default Home;
