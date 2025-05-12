import Button from "../../../atoms/Button/Button";
import PasswordInput from "../../../atoms/PasswordInput/PasswordInput";
import TextInput from "../../../atoms/TextInput/TextInput";
import Field from "../../../molecule/Field/Field";
import RegisterUploader from "./RegisterUploader/RegisterUploader";

const RegisterForm = () => {
    return (
        <form>
            <div className="flex flex-col gap-y-4 mb-4">
                <RegisterUploader />
                
                <Field name={"First name"}>
                    <TextInput placeholder="Please enter your first name" />
                </Field>

                <Field name={"Last name"}>
                    <TextInput placeholder="Please enter your last name" />
                </Field>

                <Field name={"Username"}>
                    <TextInput placeholder="Please enter username" />
                </Field>

                <Field name={"Password"}>
                    <PasswordInput placeholder="Please enter your password" />
                </Field>

                <Field name={"Confirm Password"}>
                    <PasswordInput placeholder="Please re-enter your password" />
                </Field>
            </div>

            <Button variant="primary" className="py-4">
                Register
            </Button>
        </form>
    );
};

export default RegisterForm;
