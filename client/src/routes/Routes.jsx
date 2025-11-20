import { createBrowserRouter } from "react-router-dom";
import { Landing, Home, Dashboard, Layout, Login, Register, FaceScanner, Cases, AddEvidence, Courtroom, Messages, Interogation, JudgePanel, CaseDetails, Settings, ErrorPage } from "./lazyLoading.js";
import Loader from "../Components/UI/Loader";
import { Suspense } from "react";
import ProtectedRoutes from "./ProtectedRoutes.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element:
            <Suspense fallback={<Loader />}>
                <Layout />
            </Suspense>,
        children: [
            { index: true, element: <Landing /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            { path: "home", element: <ProtectedRoutes><Home /></ProtectedRoutes> },
            { path: "security", element: <ProtectedRoutes><FaceScanner /></ProtectedRoutes> },
            { path: "dashboard", element: <ProtectedRoutes><Dashboard /></ProtectedRoutes> },
            { path: "cases", element: <ProtectedRoutes><Cases /></ProtectedRoutes> },
            { path: "casedetails", element: <ProtectedRoutes><CaseDetails /></ProtectedRoutes> },
            { path: "courtroom", element: <ProtectedRoutes><Courtroom /></ProtectedRoutes> },
            { path: "messages", element: <ProtectedRoutes><Messages /></ProtectedRoutes> },
            { path: "interogation", element: <ProtectedRoutes><Interogation /></ProtectedRoutes> },
            { path: "judgepannel", element: <ProtectedRoutes><JudgePanel /></ProtectedRoutes> },
            { path: "addevidence", element: <ProtectedRoutes><AddEvidence /></ProtectedRoutes> },
            { path: "settings", element: <ProtectedRoutes><Settings /></ProtectedRoutes> },
            { path: "*", element: <ErrorPage code={404} /> },
            { path: "/401", element: < ErrorPage code={401} /> },
            { path: "/402", element: < ErrorPage code={402} /> },
            { path: "/500", element: < ErrorPage code={500} /> },
            { path: "/501", element: < ErrorPage code={501} /> },
        ]
    },
]);

export default router
