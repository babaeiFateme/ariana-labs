import { useState } from "react";
import Button from "../../../atoms/Button/Button";
import PasswordInput from "../../../atoms/PasswordInput/PasswordInput";
import TextInput from "../../../atoms/TextInput/TextInput";
import Field from "../../../molecule/Field/Field";
import useFetch from "../../../../core/hooks/use-fetch/useFetch";
import API_ENDPOINTS from "../../../../core/services/constants/routes.constants";

const LoginForm = () => {
    const { fetchData, data, isLoading, isError, errorMessage } = useFetch();
    const [form, setForm] = useState({ username: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData({
            url: API_ENDPOINTS.login,
            method: "POST",
            data: form,
        });
    };
    return (
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
            <Field name={"Username"}>
                <TextInput
                    placeholder="Please enter your username"
                    value={form.username}
                    onChange={handleChange}
                    name="username"
                />
            </Field>

            <Field name={"Password"}>
                <PasswordInput
                    placeholder="Please enter your password"
                    value={form.password}
                    onChange={handleChange}
                    name="password"
                />
            </Field>

            <Button
                variant="primary"
                className={"py-4"}
                type="submit"
                disabled={isLoading}
            >
                {isLoading ? "Logging in..." : "Login"}
            </Button>
        </form>
    );
};

export default LoginForm;
