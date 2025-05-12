import { useState } from "react";
import Button from "../../../atoms/Button/Button";
import PasswordInput from "../../../atoms/PasswordInput/PasswordInput";
import TextInput from "../../../atoms/TextInput/TextInput";
import Field from "../../../molecule/Field/Field";
import useLogin from "../../../../core/hooks/use-fetch/useLogin";

const LoginForm = () => {
    const [password, setPassword] = useState("");
    const { login, data, isLoading, isError, errorMessage } = useLogin();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      login({ username: "ali", password: "03745893475" });
      console.log(data);
    };
    return (
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
            <Field name={"Username"}>
                <TextInput placeholder="Please enter your username" />
            </Field>

            <Field name={"Password"}>
                <PasswordInput placeholder="Please enter your password" />
            </Field>

            <Button variant="primary" className={"py-4"} type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
            </Button>
        </form>
    );
};

export default LoginForm;
