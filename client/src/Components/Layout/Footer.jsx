import React from "react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="w-full bg-transparent border-t border-amber-500 mt-10 py-6 text-center text-white">

            {/* Logo / Title */}
            <h2 className="text-xl font-semibold text-amber-400 tracking-wider">
                THE COURT ROOM
            </h2>

            {/* Subtitle */}
            <p className="text-neutral-400 text-sm mt-1">
                A digital spy game to live like a real spy.
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-6 mt-4 text-neutral-400">
                <a href="#" className="hover:text-amber-400 transition">
                    <FaGithub size={20} />
                </a>
                <a href="#" className="hover:text-amber-400 transition">
                    <FaTwitter size={20} />
                </a>
                <a href="#" className="hover:text-amber-400 transition">
                    <FaInstagram size={20} />
                </a>
            </div>

            {/* Copyright */}
            <p className="text-neutral-500 text-xs mt-4">
                © {new Date().getFullYear()} The Court Room. All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;
