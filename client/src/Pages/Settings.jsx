import React from "react";
import { FaPowerOff } from "react-icons/fa";

function Settings() {
    const handleLogout = () => {
        console.log("Logging out...");
        // Add your logout logic here (clear tokens, navigate, etc.)
    };

    return (
        <div className="text-white">
            <h1 className="text-2xl font-bold mb-8 tracking-wide text-amber-400">
                Settings
            </h1>

            <div className="bg-neutral-900/60 p-6 rounded-xl border border-neutral-800 shadow-xl max-w-md">

                <button
                    onClick={handleLogout}
                    className="
            w-full flex items-center justify-center gap-3 
            bg-red-600/80 hover:bg-red-600 
            text-white font-semibold py-3 rounded-lg 
            transition-all shadow-md hover:shadow-red-500/20
          "
                >
                    <FaPowerOff size={18} />
                    Logout
                </button>

            </div>
        </div>
    );
}

export default Settings;
