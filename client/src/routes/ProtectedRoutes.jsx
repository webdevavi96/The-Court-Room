import React from "react";
import { Navigate } from "react-router-dom";
import Loader from "../Components/UI/Loader";
import { AuthContext } from "../Context/AuthContext";


export default function ProtectedRoutes({ Children }) {
    const { isAuthenticated, loading } = React.useContext(AuthContext);
    if (loading) return <Loader />;
    if (!isAuthenticated) return <Navigate to="/login" state={{ from: window.location.href }} />;
    return Children;
}