import { useState } from "react";
import Button from "../../../atoms/Button/Button";
import PasswordInput from "../../../atoms/PasswordInput/PasswordInput";
import TextInput from "../../../atoms/TextInput/TextInput";
import Field from "../../../molecule/Field/Field";
import useFetch from "../../../../core/hooks/useFetch";
import API_ENDPOINTS from "../../../../core/services/constants/routes.constants";
import { useNavigate } from "react-router-dom";
import useFormValidation from "../../../../core/hooks/useFormValidation";

const LoginForm = () => {
    const { fetchData, isLoading, isError } = useFetch();
    const navigate = useNavigate();

    // Form validation rules
    const validationRules = {
        username: {
            required: true,
            minLength: 1,
            maxLength: 150,
        },
        password: {
            required: true,
            minLength: 1,
        },
    };

    const { form, errors, handleChange, validate } = useFormValidation(
        { username: "", password: "" },
        validationRules
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            fetchData({
                url: API_ENDPOINTS.login,
                method: "POST",
                data: form,
                onSuccess: () => {
                    navigate("/dashboard");
                },
                onError: (error) => {
                    console.error("Login failed:", error.message);
                },
            });
        }
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
                {errors.username && (
                    <p className="text-red-500">{errors.username}</p>
                )}
            </Field>

            <Field name={"Password"}>
                <PasswordInput
                    placeholder="Please enter your password"
                    value={form.password}
                    onChange={handleChange}
                    name="password"
                />
                {errors.password && (
                    <p className="text-red-500">{errors.password}</p>
                )}
            </Field>

            {isError && <div className="text-red-500 text-center">Invalid username or password</div>}

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
