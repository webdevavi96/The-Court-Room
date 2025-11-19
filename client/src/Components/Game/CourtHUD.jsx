import React from "react";
import { FaBalanceScale, FaClock, FaUserSecret } from "react-icons/fa";

function CourtHUD({ timer = "12:44", judge = "AI Judge Delta" }) {
    return (
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-4 flex justify-between items-center">
            
            {/* Judge */}
            <div className="flex items-center gap-3">
                <FaUserSecret className="text-amber-400" size={22} />
                <div>
                    <p className="text-amber-400 font-semibold text-sm">{judge}</p>
                    <p className="text-neutral-400 text-xs">Presiding</p>
                </div>
            </div>

            {/* Court Seal */}
            <div className="flex items-center gap-2">
                <FaBalanceScale className="text-amber-400" size={22} />
                <p className="text-neutral-400 text-sm">Courtroom Session Active</p>
            </div>

            {/* Timer */}
            <div className="flex items-center gap-2">
                <FaClock className="text-amber-400" size={18} />
                <p className="text-amber-400 font-semibold">{timer}</p>
            </div>

        </div>
    );
}

export default CourtHUD;
