import React from "react";
import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaFolderOpen,
    FaGavel,
    FaUserSecret,
    FaEnvelopeOpenText,
    FaPlusCircle,
    FaCogs,
} from "react-icons/fa";

function Sidebar() {
    const navItems = [
        { label: "Home", to: "/home", icon: <FaHome size={18} /> },
        { label: "Cases", to: "/cases", icon: <FaFolderOpen size={18} /> },
        { label: "Courtroom", to: "/courtroom", icon: <FaGavel size={18} /> },
        { label: "Add Evidence", to: "/add-evidence", icon: <FaPlusCircle size={18} /> },
        { label: "Messages", to: "/messages", icon: <FaEnvelopeOpenText size={18} /> },
        { label: "Profile", to: "/profile", icon: <FaUserSecret size={18} /> },
        { label: "Settings", to: "/settings", icon: <FaCogs size={18} /> },
    ];

    return (
        <div className="fixed left-0 top-0 h-full w-64 bg-neutral-900/80 backdrop-blur-xl border-r border-neutral-800 p-6 flex flex-col shadow-lg hidden md:flex z-40">

            {/* Logo / Brand */}
            <div className="text-2xl font-bold text-amber-400 tracking-widest mb-10 flex items-center gap-2">
                <FaUserSecret size={26} className="text-amber-500" />
                AGENT PANEL
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-3">

                {navItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.to}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all 
              border border-transparent
              ${isActive
                                ? "bg-amber-500 text-black font-semibold border-amber-500"
                                : "bg-neutral-800/40 hover:bg-neutral-800 border-neutral-700 text-neutral-300 hover:text-white"
                            }`
                        }
                    >
                        <span className="text-amber-400">{item.icon}</span>
                        {item.label}
                    </NavLink>
                ))}

            </nav>
        </div>
    );
}

export default Sidebar;
