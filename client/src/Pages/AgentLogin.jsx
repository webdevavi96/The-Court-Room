import React from "react";
import { useForm } from "react-hook-form";
import { FaUserSecret, FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function AgentLogin() {
  const [showPassword, setShowPassword] = React.useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Login data:", data);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center spy-grid scanlines relative">

      {/* Login Panel */}
      <div className="bg-neutral-900/80 backdrop-blur-md p-8 rounded-xl shadow-xl border border-neutral-700 max-w-md w-full relative z-10">

        {/* Icon / Title */}
        <div className="text-center mb-6">
          <FaUserSecret className="mx-auto text-amber-400" size={48} />
          <h1 className="text-2xl font-bold text-amber-400 mt-3 tracking-widest">
            AGENT LOGIN
          </h1>
          <p className="text-neutral-400 text-sm mt-1">
            Enter your secure credentials
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Username */}
          <div>
            <label className="text-neutral-300 text-sm">Username</label>
            <input
              {...register("username", { required: true })}
              type="text"
              placeholder="Enter your username"
              className="w-full mt-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg 
              text-white placeholder-neutral-500 focus:outline-none
              focus:ring-2 focus:ring-amber-400 transition-all"
            />
            {errors.username && (
              <p className="text-red-400 text-xs mt-1">Username is required.</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-neutral-300 text-sm">Password</label>
            <input
              {...register("password", { required: "Password is required" })}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full mt-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white
              focus:ring-2 focus:ring-amber-400 transition"
            />

            {/* SHOW / HIDE PASSWORD */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[55%] cursor-pointer text-neutral-400 hover:text-amber-400 transition"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

            {errors.password && (
              <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-500 text-black font-semibold tracking-wide py-2 rounded-lg
            hover:bg-amber-600 transition-all btn-animated"
          >
            Login
          </button>

          {/* Register Link */}
          <p className="text-neutral-400 text-sm text-center mt-2">
            Don't have an account?{" "}
            <NavLink className="text-blue-500 underline" to="/register">
              Register here
            </NavLink>.
          </p>

        </form>
      </div>
    </div>
  );
}

export default AgentLogin;
