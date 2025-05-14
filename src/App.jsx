import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import ROUTES from "./core/constants/routes/routes.constants";

import Register from "./pages/auth/Register";
import Layout from "./components/layouts/Layout";
import Login from "./pages/auth/Login";
import NotFound from "./pages/not-found";
import Tweet from "./pages/dashboard/Tweet";

const App = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [token, setToken] = useState(null);

    // useEffect(() => {
    //     const storedToken = localStorage.getItem("token");

    //     setToken(storedToken);

    //     if (storedToken) {
    //         navigate(ROUTES.Dashboard);
    //     } else if (!storedToken && location.pathname.includes("dashboard")) {
    //         navigate(ROUTES.Login);
    //     }

    //     if (storedToken && !location.pathname.includes("dashboard")) {
    //         navigate(ROUTES.Dashboard);
    //     }
    // }, [navigate]);
    
    return (
        <Routes>
            <Route path={ROUTES.Login} element={<Login />} />
            <Route path={ROUTES.Register} element={<Register />} />

            <Route path={ROUTES.Dashboard} element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path={ROUTES.Tweet} element={<Tweet />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
