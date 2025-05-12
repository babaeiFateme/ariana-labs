import Button from "../../../atoms/Button/Button";
import PasswordInput from "../../../atoms/PasswordInput/PasswordInput";
import TextInput from "../../../atoms/TextInput/TextInput";
import Field from "../../../molecule/Field/Field";

const LoginForm = () => {
    return (
        <form className="flex flex-col gap-y-4">
            <Field name={"Username"}>
                <TextInput placeholder="Please enter your username" />
            </Field>

            <Field name={"Password"}>
                <PasswordInput placeholder="Please enter your password" />
            </Field>

            <Button variant="primary">Login</Button>
        </form>
    );
};

export default LoginForm;
