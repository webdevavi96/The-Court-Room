import React from "react";
import { TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
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
import { AuthContext } from "../../Context/AuthContext";

function Sidebar() {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const { isAuthenticated } = React.useContext(AuthContext);

    const navItems = [
        { label: "Home", to: "/home", icon: <FaHome size={18} /> },
        { label: "Cases", to: "/cases", icon: <FaFolderOpen size={18} /> },
        { label: "Courtroom", to: "/courtroom", icon: <FaGavel size={18} /> },
        { label: "Add Evidence", to: "/addevidence", icon: <FaPlusCircle size={18} /> },
        { label: "Messages", to: "/messages", icon: <FaEnvelopeOpenText size={18} /> },
        { label: "Profile", to: "/dashboard", icon: <FaUserSecret size={18} /> },
        { label: "Settings", to: "/settings", icon: <FaCogs size={18} /> },
    ];

    return (
        <div
            className={`
                fixed left-0 top-0 h-full bg-neutral-900/80 backdrop-blur-xl border-r 
                border-neutral-800 p-6 flex-col shadow-lg hidden md:flex z-40
                transition-all duration-300
                ${isCollapsed ? "w-20" : "w-64"}
            `}
        >

            {/* Logo / Collapse Toggle */}
            <div className={`justify-between text-md font-bold text-amber-400 tracking-widest mb-10 flex items-center transition-all ${isCollapsed ? "flex-col gap-4" : "flex-row gap-2"}`}>

                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-2 whitespace-nowrap">
                    <FaUserSecret size={20} className="text-amber-500" />
                    {!isCollapsed && "AGENT PANEL"}
                </NavLink>

                {/* Collapse Toggle */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-1 rounded-md hover:bg-neutral-700"
                >
                    {isCollapsed ? (
                        <TbLayoutSidebarLeftExpandFilled size={24} className="text-amber-400" />
                    ) : (
                        <TbLayoutSidebarLeftCollapseFilled size={24} className="text-amber-400" />
                    )}
                </button>
            </div>

            {/* Navigation */}
            {isAuthenticated ? (<nav className="flex flex-col gap-3">
                {navItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.to}
                        className={({ isActive }) =>
                            `
                            flex items-center 
                            ${isCollapsed ? "justify-center" : "gap-3 px-4"} 
                            py-3 rounded-lg transition-all 
                            border border-transparent relative group
                            ${isActive
                                ? "bg-amber-900 text-amber-400 font-semibold border-amber-500"
                                : "bg-neutral-800/40 hover:bg-neutral-800 border-neutral-700 text-neutral-300 hover:text-white"
                            }
                            `
                        }
                    >
                        <span className="text-amber-400">{item.icon}</span>

                        {/* Label (hide when collapsed) */}
                        {!isCollapsed && item.label}

                        {/* Tooltip on hover when collapsed */}
                        {isCollapsed && (
                            <span className="absolute left-full ml-3 px-3 py-1 rounded bg-neutral-800 text-white text-xs opacity-0 group-hover:opacity-100 shadow-lg whitespace-nowrap transition-opacity">
                                {item.label}
                            </span>
                        )}
                    </NavLink>
                ))}
            </nav>) : <nav className="flex flex-col gap-3">
                <NavLink to="/login"
                    className={`
        flex items-center justify-center gap-2
        py-3 rounded-lg transition-all 
        bg-neutral-800/40 hover:bg-neutral-800
        border border-neutral-700 text-neutral-300 hover:text-white
        `}>
                    <span className="text-amber-400"><FaUserSecret size={18} /></span>
                    {!isCollapsed && "Login to Access"}
                </NavLink>
            </nav>}
        </div>
    );
}

export default Sidebar;
