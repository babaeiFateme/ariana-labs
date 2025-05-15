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
    const [file, setFile] = useState(null);

    const [image, setImage] = useState(null);

    const handleChangeImg = (e) => {
        const file = e.target.files[0];
        setFile(file);

        if (file) {
            setImage(URL.createObjectURL(file));
            // handleChange({ target: { name: "avatar", value: file } });
        }
    };

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

    const { form, errors, handleChange, validate } = useFormValidation(
        {
            first_name: "",
            last_name: "",
            username: "",
            password: "",
            confirm_password: "",
        },
        validationRules
    );

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

        if (file) {
            console.log(file, "fgfgf");
            formData.append("avatar", file);
            
            console.log(form); //avatar null why?
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
                    <div>
                        <img
                            src={image ? image : avatar}
                            alt="Preview"
                            className="w-12 aspect-square rounded-full object-cover"
                        />
                    </div>

                    <label
                        className="inline-block border border-[#E2E8F0] rounded-md min-w-[64px] w-fit h-fit p-2 cursor-pointer"
                        for="fileInput"
                    >
                        Upload +
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        name="avatar"
                        class="custom-file-input"
                        onChange={handleChangeImg}
                    />
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
