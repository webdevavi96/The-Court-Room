import React from "react";
import { Navigate } from "react-router-dom";
import Loader from "../Components/UI/Loader";


export default function ProtectedRoutes({ Children }) {
    const { isAuthenticated, loading } = React.useContext();
    if (loading) return <Loader />;
    if (!isAuthenticated) return <Navigate to="/login" state={{ from: window.location.href }} />;
    return Children;
}