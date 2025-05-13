import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../atoms/Button/Button";
import PasswordInput from "../../../atoms/PasswordInput/PasswordInput";
import TextInput from "../../../atoms/TextInput/TextInput";
import Field from "../../../molecule/Field/Field";
import useFetch from "../../../../core/hooks/useFetch";
import useFormValidation from "../../../../core/hooks/useFormValidation";
import avatar from "../../../../../public/images/_general/avatar.png";
import API_ENDPOINTS from "../../../../core/services/constants/routes.constants";

const RegisterForm = () => {
    const { fetchData, isLoading } = useFetch();
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState("");
    const [previewAvatar, setPreviewAvatar] = useState(avatar);

    const validationRules = {
        first_name: {
            required: true,
            maxLength: 150,
            minLength: 1,
        },

        last_name: {
            required: true,
            maxLength: 150,
            minLength: 1,
        },

        username: {
            required: true,
            maxLength: 150,
            minLength: 1,
        },

        password: {
            required: true,
            minLength: 1,
        },

        confirm_password: {
            required: true,
            minLength: 1,
        },
    };

    const { form, errors, handleChange, validate, setForm } = useFormValidation(
        {
            first_name: "",
            last_name: "",
            username: "",
            password: "",
            confirm_password: "",
            file: null,
        },
        validationRules
    );

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setForm((prev) => ({ ...prev, file }));
            setPreviewAvatar(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setRegisterError("");

        if (!validate()) return;

        if (form.password !== form.confirm_password) {
            setRegisterError("Passwords do not match");
            return;
        }

        const formData = new FormData();
        formData.append("first_name", form.first_name);
        formData.append("last_name", form.last_name);
        formData.append("username", form.username);
        formData.append("password", form.password);
        formData.append("confirm_password", form.confirm_password);

        if (form.file) {
            formData.append("avatar", form.file);
        }

        fetchData({
            url: API_ENDPOINTS.register,
            method: "POST",
            data: formData,

            onSuccess: (result) => {
                const { token } = result;

                localStorage.setItem("token", token);

                navigate("/dashboard");
            },

            onError: () =>
                setRegisterError("Registration failed. Please try again."),
        });
    };

    return (
        <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <div className="flex flex-col gap-y-4 mb-4">
                {/* Uploader */}
                <div className="px-2.5 py-3 bg-white border border-[#E2E8F0] rounded-md flex justify-between items-center">
                    <img
                        className="w-12 aspect-square rounded-full object-cover"
                        src={previewAvatar || "https://via.placeholder.com/48"}
                        alt="avatar preview"
                    />

                    <label className="cursor-pointer">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        <Button
                            className="border border-[#E2E8F0] rounded-md min-w-[64px] w-fit h-fit"
                            size="sm"
                            type="button"
                        >
                            Upload +
                        </Button>
                    </label>
                </div>

                <Field label="First name" name="first_name" errors={errors}>
                    <TextInput
                        placeholder="Please enter your first name"
                        name="first_name"
                        value={form.first_name}
                        onChange={handleChange}
                    />
                </Field>

                <Field label="Last name" name="last_name" errors={errors}>
                    <TextInput
                        placeholder="Please enter your last name"
                        name="last_name"
                        value={form.last_name}
                        onChange={handleChange}
                    />
                </Field>

                <Field label="Username" name="username" errors={errors}>
                    <TextInput
                        placeholder="Please enter username"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                    />
                </Field>

                <Field label="Password" name="password" errors={errors}>
                    <PasswordInput
                        placeholder="Please enter your password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </Field>

                <Field
                    label="Confirm Password"
                    name="confirm_password"
                    errors={errors}
                >
                    <PasswordInput
                        placeholder="Please re-enter your password"
                        name="confirm_password"
                        value={form.confirm_password}
                        onChange={handleChange}
                    />
                </Field>

                {registerError && (
                    <span className="text-red-500 leading-5 text-sm font-medium">
                        {registerError}
                    </span>
                )}
            </div>

            <Button variant="primary" type="submit" disabled={isLoading}>
                {isLoading ? "Registering..." : "Register"}
            </Button>
        </form>
    );
};

export default RegisterForm;
