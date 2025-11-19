import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../Components/UI/Card";
import { FaUserSecret, FaBalanceScale, FaFlagCheckered } from "react-icons/fa";

function Landing() {
  return (
    <div className="min-h-screen w-full bg-black text-white p-6 flex flex-col items-center spy-grid scanlines relative overflow-hidden">
      {/* Cinematic Intro Panel */}
      <div className="text-center mt-10 fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-400 tracking-widest drop-shadow-xl">
          THE COURT ROOM
        </h1>
        <p className="text-neutral-400 mt-3 text-sm md:text-base max-w-xl mx-auto">
          Step inside the most advanced digital spy courtroom simulation.
        </p>

        {/* Golden Divider Line */}
        <div className="w-32 h-[2px] bg-amber-500 mx-auto mt-4 shadow-lg"></div>
      </div>

      {/* CTA BUTTON */}
      <NavLink
        to="/login"
        className="mt-8 bg-amber-500 text-black px-8 py-3 rounded-xl font-semibold tracking-wide 
                   hover:bg-amber-600 transition btn-animated"
      >
        Get Started
      </NavLink>

      {/* Callout Bar */}
      <div className="mt-10 text-neutral-300 text-sm flex items-center gap-6 opacity-80">
        <span>🔥 3M+ Players</span>
        <span>⚖️ 120+ Cases</span>
        <span>🎯 98% Success Rate</span>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 w-full max-w-6xl fade-in">

        <Card
          title="The Diamond Heist Case"
          description="Analyze disguised evidence and outsmart the master thief."
        >
          <div className="flex items-center justify-end mt-3 text-amber-400">
            <FaUserSecret size={24} />
          </div>
        </Card>

        <Card
          title="Corporate Espionage"
          description="Expose the mole hiding inside the organization's core."
        >
          <div className="flex items-center justify-end mt-3 text-amber-400">
            <FaBalanceScale size={24} />
          </div>
        </Card>

        <Card
          title="National Security Breach"
          description="Crack encrypted intel to prevent a massive cyber attack."
        >
          <div className="flex items-center justify-end mt-3 text-amber-400">
            <FaFlagCheckered size={24} />
          </div>
        </Card>

      </div>

      {/* JOIN SECTION */}
      <div className="text-center mt-16 fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-amber-400 tracking-widest">
          JOIN THE ELITE
        </h1>
        <p className="text-neutral-400 mt-3 text-sm md:text-base max-w-xl mx-auto">
          Enter the world of covert operations and courtroom deception.
          Rise through the ranks and become the most legendary spy the world has ever known.
        </p>
      </div>

    </div>
  );
}

export default Landing;
