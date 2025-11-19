import React from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { FaScaleUnbalanced } from "react-icons/fa6";
import { BiSolidHome } from "react-icons/bi";
import { FaFolderOpen, FaGavel, FaUserSecret, FaEnvelopeOpenText, FaPlusCircle, FaCogs } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Topbar() {
    return (
        <nav className="flex justify-between items-center p-3 bg-bgCard border-b border-[#222]">

            {/* Left: Logo */}
            <div className="text-gold font-semibold text-lg">
                <NavLink
                    to="/"
                    className="flex items-center gap-2"
                >
                    <FaScaleUnbalanced size={22} className="text-gold" />
                    <span>Court Room</span>
                </NavLink>
            </div>

            {/* Right: Navigation */}
            <ul className="flex items-center gap-6 text-xl">

                {/* HOME */}
                <li>
                    <NavLink
                        to="/home"
                        className={({ isActive }) =>
                            isActive ? "text-gold transition" : "text-muted hover:text-white transition"
                        }
                    >
                        <BiSolidHome size={24} />
                    </NavLink>
                </li>

                {/* CASES */}
                <li>
                    <NavLink
                        to="/cases"
                        className={({ isActive }) =>
                            isActive ? "text-gold transition" : "text-muted hover:text-white transition"
                        }
                    >
                        <FaFolderOpen size={22} />
                    </NavLink>
                </li>

                {/* COURTROOM */}
                <li>
                    <NavLink
                        to="/courtroom"
                        className={({ isActive }) =>
                            isActive ? "text-gold transition" : "text-muted hover:text-white transition"
                        }
                    >
                        <FaGavel size={22} />
                    </NavLink>
                </li>

                {/* ADD EVIDENCE */}
                <li>
                    <NavLink
                        to="/add-evidence"
                        className={({ isActive }) =>
                            isActive ? "text-gold transition" : "text-muted hover:text-white transition"
                        }
                    >
                        <FaPlusCircle size={22} />
                    </NavLink>
                </li>

                {/* MESSAGES */}
                <li>
                    <NavLink
                        to="/messages"
                        className={({ isActive }) =>
                            isActive ? "text-gold transition" : "text-muted hover:text-white transition"
                        }
                    >
                        <FaEnvelopeOpenText size={22} />
                    </NavLink>
                </li>

                {/* PROFILE */}
                <li>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive ? "text-gold transition" : "text-muted hover:text-white transition"
                        }
                    >
                        <FaUserSecret size={22} />
                    </NavLink>
                </li>

                {/* SETTINGS */}
                <li>
                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            isActive ? "text-gold transition" : "text-muted hover:text-white transition"
                        }
                    >
                        <FaCogs size={22} />
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
}

export default Topbar;
