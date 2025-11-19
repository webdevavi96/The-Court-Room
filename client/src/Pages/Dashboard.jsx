import React from "react";
import Card from "../Components/UI/Card";
import Tabs from "../Components/UI/Tabs";
import Progressbar from "../Components/UI/Progressbar";
import Badge from "../Components/UI/Badge";
import { Profile } from "../routes/lazyLoading";
import { FaFolderOpen, FaUserSecret, FaGavel, FaEnvelopeOpenText } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="w-full text-white">

      <Profile />
      <h1 className="text-3xl text-amber-400 tracking-widest font-bold mt-4">
        DASHBOARD
      </h1>

      <p className="text-neutral-400 text-sm mt-1">
        Central command overview.
      </p>

      {/* QUICK ACCESS */}
      <div className="mt-8">
        <Tabs
          items={[
            { label: "Cases", to: "/cases", icon: <FaFolderOpen size={28} /> },
            { label: "Courtroom", to: "/courtroom", icon: <FaGavel size={28} /> },
            { label: "Suspects", to: "/interogation", icon: <FaUserSecret size={28} /> },
            { label: "Messages", to: "/messages", icon: <FaEnvelopeOpenText size={28} /> }
          ]}
        />
      </div>

      {/* MOST IMPORTANT CASE */}
      <div className="mt-10">
        <Card title="Primary Mission" description="Your most critical active assignment.">
          <div className="flex justify-between items-center mt-3">
            <div>
              <p className="text-neutral-300 text-sm">Operation Silent Echo</p>
              <Badge color="gold">Active</Badge>
            </div>

            <Progressbar value={40} />
          </div>
        </Card>
      </div>

    </div>
  );
}

export default Dashboard;
