import React, { useEffect } from "react";
import Link from "../components/atoms/Link/Link";
import {
    LoginHeading,
    LoginForm,
} from "../components/organisms/LoginOrganisms";
import { useNavigate } from "react-router-dom";

const LoginTemplates = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/dashboard");
        }
    }, [navigate]);

    return (
        <section className="w-full min-h-screen flex justify-center items-center max-w-[386px] mx-auto">
            <div className="p-6 flex flex-col gap-y-6 border border-[#E2E8F0] rounded-lg">
                <LoginHeading />

                <LoginForm />

                <div className="flex gap-1 text-black font-regular text-sm items-center leading-5 justify-center">
                    <span>Don’t have an account ?</span>

                    <Link href="/register">Sign up</Link>
                </div>
            </div>
        </section>
    );
};

export default LoginTemplates;
