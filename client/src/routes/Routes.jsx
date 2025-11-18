import { createBrowserRouter } from "react-router";
import Landing from "../Pages/Landing";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
        children: [
            {
                path: "/home",
                element: <Home />
            }
        ]
    },
]);

export default router
