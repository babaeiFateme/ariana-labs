import React from "react";
import Field from "../components/molecule/Field/Field";
import TextInput from "../components/atoms/TextInput/TextInput";
import PasswordInput from "../components/atoms/PasswordInput/PasswordInput";
import Button from "../components/atoms/Button/Button";
import Link from "../components/atoms/Link/Link";
import {
    LoginHeading,
    LoginForm,
} from "../components/organisms/LoginOrganisms";

const LoginTemplates = () => {
    return (
        <section className="w-full min-h-screen flex justify-center items-center">
            <div className="p-6 flex flex-col gap-y-6 border border-[##E2E8F0] rounded-lg">
                <LoginHeading />

                <LoginForm />

                <div className="flex gap-1 text-black font-regular text-sm items-center leading-5 justify-center">
                    <span>Don’t have an account ?</span>

                    <Link to="/register">Sign up</Link>
                </div>
            </div>
        </section>
    );
};

export default LoginTemplates;
