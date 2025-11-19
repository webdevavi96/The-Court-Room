import React from "react";
import { GrSecure } from "react-icons/gr";


import { useForm } from "react-hook-form";

function Security() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        alert("Security Clearance Approved");
        console.log("Security PIN:", data.pin);
    };

    return (
        <div className="min-h-screen flex items-center justify-center spy-grid scanlines moving-shadows p-6">

            <div className="bg-neutral-900/70 backdrop-blur-lg p-10 rounded-2xl w-full max-w-md border border-neutral-700 shadow-xl">

                {/* SPY SCANNER GIF */}
                <div className=" flex justify-center mb-8">
                    <GrSecure style={{ color: "var(--color-gold)" }} size={80} />
                </div>


                {/* TITLE */}
                <h1 className="text-amber-400 text-center text-2xl mb-4 font-bold tracking-widest">
                    SECURITY VERIFICATION
                </h1>
                <p className="text-neutral-400 text-center text-sm mb-8">
                    Enter your 4-digit Security PIN to proceed.
                </p>

                {/* FORM */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-center">

                    {/* PIN INPUT */}
                    <div className="flex justify-center gap-4">
                        {[0, 1, 2, 3].map((i) => (
                            <input
                                key={i}
                                maxLength={1}
                                {...register(`pin[${i}]`, { required: true, pattern: /^[0-9]$/ })}
                                className="w-14 h-14 text-center text-2xl font-bold bg-neutral-800 border border-neutral-700 
                           rounded-lg text-white focus:ring-2 focus:ring-amber-400 outline-none"
                                type="password"
                            />
                        ))}
                    </div>

                    {errors.pin && (
                        <p className="text-red-400 text-xs mt-2">Enter all 4 digits.</p>
                    )}

                    {/* SUBMIT */}
                    <button
                        type="submit"
                        className="w-full bg-amber-500 text-black font-semibold py-3 rounded-lg
                       hover:bg-amber-600 transition btn-animated tracking-wide mt-6"
                    >
                        Verify Identity
                    </button>
                </form>

            </div>
        </div>
    );
}

export default Security;
