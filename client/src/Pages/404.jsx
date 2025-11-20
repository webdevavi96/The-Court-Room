import React from "react";
import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

function ErrorPage({ code }) {
  const navigate = useNavigate();

  const errorMessages = {
    404: "The page you're looking for cannot be found.",
    401: "You are not authorized to view this page.",
    402: "Payment is required to access this resource.",
    500: "Internal server error occurred.",
    501: "This feature has not been implemented.",
  };

  // Pick message or fallback
  const message = errorMessages[code] || "An unknown error occurred.";

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6">
      
      {/* Icon */}
      <FaExclamationTriangle
        size={60}
        className="text-amber-500 mb-6 animate-pulse"
      />

      {/* Error Code */}
      <h1 className="text-6xl font-extrabold text-amber-400 tracking-widest">
        {code}
      </h1>

      {/* Message */}
      <p className="text-lg text-neutral-400 mt-4 text-center max-w-md">
        {message}
      </p>

      {/* Actions */}
      <div className="mt-8 flex gap-4">

        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 bg-neutral-800 border border-neutral-700 rounded-lg 
                     hover:bg-neutral-700 transition-all"
        >
          Go Back
        </button>

        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 bg-amber-500 text-black font-semibold rounded-lg 
                     hover:bg-amber-600 transition-all shadow-md"
        >
          Home
        </button>

      </div>
    </div>
  );
}

export default ErrorPage;
