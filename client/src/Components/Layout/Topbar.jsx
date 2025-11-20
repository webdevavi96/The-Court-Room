import React from "react";
import { BiSolidHome } from "react-icons/bi";
import { FaFolderOpen, FaGavel, FaUserSecret, FaEnvelopeOpenText, FaPlusCircle, FaCogs } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

function Topbar() {
    const { isAuthenticated } = React.useContext(AuthContext);
    return (
        <nav className="flex justify-between items-center p-3 bg-bgCard border-b border-[#222] bg-neutral-900/80 backdrop-blur-xl shadow-md">

            {/* Left: Logo */}
            <div className="text-gold font-semibold text-lg">
                <NavLink
                    to="/"
                    className="flex items-center gap-2"
                >
                    <FaUserSecret size={20} className="text-amber-500" />
                </NavLink>
            </div>

            {/* Right: Navigation */}

            {isAuthenticated ? (<ul className="flex items-center gap-6 text-xl">

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
                        to="/addevidence"
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

            </ul>) :
                <NavLink
                    to="/login"
                    className="flex items-center gap-2 px-4 py-2 bg-amber-600/90 text-black rounded-md font-semibold 
               hover:bg-amber-600 transition-all shadow-md hover:shadow-amber-500/20"
                >
                    <FaUserSecret size={16} className="text-black" />
                    <span>Login</span>
                </NavLink>
            }
        </nav>
    );
}

export default Topbar;
