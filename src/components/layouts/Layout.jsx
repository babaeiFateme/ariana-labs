import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../partials/Sidebar/Sidebar";
import Header from "../partials/Header/Header";

const Layout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div>
                <Header />
                <div className="h-[calc(100vh-80px)] py-6 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
