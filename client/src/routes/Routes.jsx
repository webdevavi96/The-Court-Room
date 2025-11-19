import { createBrowserRouter } from "react-router-dom";
import { Landing, Home, Dashboard, Layout, Login, Register, FaceScanner, Cases, AddEvidence, Courtroom, Messages, Interogation, JudgePanel, CaseDetails } from "./lazyLoading.js";
import Loader from "../Components/UI/Loader";
import { Suspense } from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={<Loader />}>
            <Layout />
        </Suspense>,
        children: [
            { index: true, element: <Landing /> },
            { path: "home", element: <Home /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            { path: "security", element: <FaceScanner /> },
            { path: "dashboard", element: <Dashboard /> },
            { path: "cases", element: <Cases /> },
            { path: "casedetails", element: <CaseDetails /> },
            { path: "courtroom", element: <Courtroom /> },
            { path: "messages", element: <Messages /> },
            { path: "interogation", element: <Interogation /> },
            { path: "judgepannel", element: <JudgePanel /> },
            { path: "addevidence", element: <AddEvidence /> },
            { path: "*", element: <div>404 Not Found</div> }
        ]
    },
]);

export default router
