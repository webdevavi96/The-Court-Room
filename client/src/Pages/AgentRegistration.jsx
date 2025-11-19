import React from "react";
import { useForm } from "react-hook-form";

function AgentRegistration() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Agent Registered:", data);
        alert("Agent profile created successfully!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center spy-grid scanlines moving-shadows p-6">

            <div className="bg-neutral-900/70 backdrop-blur-lg p-10 rounded-2xl w-full max-w-lg border border-neutral-700 shadow-xl">

                {/* PAGE TITLE */}
                <h1 className="text-amber-400 text-center text-3xl mb-6 font-bold tracking-widest">
                    AGENT REGISTRATION
                </h1>

                {/* SUBTITLE */}
                <p className="text-neutral-400 text-center text-sm mb-8">
                    Create your agent profile to access classified operations.
                </p>

                {/* FORM */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    {/* FULL NAME */}
                    <div>
                        <label className="text-neutral-300 text-sm">Full Name</label>
                        <input
                            {...register("name", { required: "Full name is required" })}
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full mt-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white
                         focus:ring-2 focus:ring-amber-400 transition"
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    {/* AGENT ID */}
                    <div>
                        <label className="text-neutral-300 text-sm">Agent ID</label>
                        <input
                            {...register("agentId", { required: "Agent ID is required", minLength: 3 })}
                            type="text"
                            placeholder="Create an Agent ID. Example: Agent-X"
                            className="w-full mt-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white
                         focus:ring-2 focus:ring-amber-400 transition"
                        />
                        {errors.agentId && <p className="text-red-400 text-xs mt-1">{errors.agentId.message}</p>}
                    </div>

                    {/* EMAIL */}
                    <div>
                        <label className="text-neutral-300 text-sm">Email</label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" }
                            })}
                            type="email"
                            placeholder="Enter your secure email"
                            className="w-full mt-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white
                         focus:ring-2 focus:ring-amber-400 transition"
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    {/* PASSWORD */}
                    <div>
                        <label className="text-neutral-300 text-sm">Password</label>
                        <input
                            {...register("password", { required: "Password is required", minLength: 6 })}
                            type="password"
                            placeholder="Create a password"
                            className="w-full mt-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white
                         focus:ring-2 focus:ring-amber-400 transition"
                        />
                        {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    {/* SECURITY PIN */}
                    <div>
                        <label className="text-neutral-300 text-sm">Security PIN</label>
                        <input
                            {...register("pin", { required: "PIN is required", minLength: 4, maxLength: 4 })}
                            type="password"
                            placeholder="4-digit PIN"
                            className="w-full mt-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white
                         focus:ring-2 focus:ring-amber-400 transition"
                        />
                        {errors.pin && <p className="text-red-400 text-xs mt-1">{errors.pin.message}</p>}
                    </div>

                    {/* REGISTER BUTTON */}
                    <button
                        type="submit"
                        className="w-full bg-amber-500 text-black font-semibold py-3 rounded-lg
                       hover:bg-amber-600 transition btn-animated tracking-wide"
                    >
                        Create Agent Profile
                    </button>
                </form>

            </div>
        </div>
    );
}

export default AgentRegistration;
