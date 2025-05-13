import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import ROUTES from "./core/constants/routes/routes.constants";

import Register from "./pages/auth/Register";
import Layout from "./components/layouts/Layout";
import Login from "./pages/auth/Login";
import NotFound from "./pages/not-found";

const App = () => {
    return (
        <Routes>
            <Route path={ROUTES.Login} element={<Login />} />
            <Route path={ROUTES.Register} element={<Register />} />

            <Route path={ROUTES.Dashboard} element={<Layout />}>
                <Route index element={<Dashboard />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
