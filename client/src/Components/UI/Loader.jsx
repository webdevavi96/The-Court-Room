import React from "react";

function Loader() {
    return (
        <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">

            {/* Rotating Circle */}
            <div className="relative mb-10">
                <div className="w-28 h-28 border-4 border-amber-400 border-t-transparent rounded-full animate-spin-slow"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-amber-400 font-semibold tracking-wider">
                        CR
                    </span>
                </div>
            </div>

            {/* Game Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-amber-400 animate-pulse tracking-widest">
                THE COURT ROOM
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-neutral-400 text-center text-sm md:text-base typing-animation">
                A digital spy game to live like a real spy.
            </p>

            {/* Loading Dots */}
            <div className="mt-8 flex gap-2">
                <span className="w-3 h-3 bg-amber-400 rounded-full animate-bounce"></span>
                <span className="w-3 h-3 bg-amber-400 rounded-full animate-bounce [animation-delay:200ms]"></span>
                <span className="w-3 h-3 bg-amber-400 rounded-full animate-bounce [animation-delay:400ms]"></span>
            </div>

        </div>
    );
}

export default Loader;
