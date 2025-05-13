import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import ROUTES from "./core/constants/routes/routes.constants";

import Register from "./pages/auth/Register";
import Login from "./pages/auth/login";
import Layout from "./components/layouts/Layout";

const App = () => {
    return (
        <Routes>
            <Route path={ROUTES.Login} element={<Login />} />
            <Route path={ROUTES.Register} element={<Register />} />

            <Route path={ROUTES.Dashboard} element={<Layout />}>
                <Route index element={<Dashboard />} />
            </Route>
        </Routes>
    );
};

export default App;
