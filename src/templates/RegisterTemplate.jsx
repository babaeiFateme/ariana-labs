import {
    RegisterForm,
    RegisterHeading,
} from "../components/organisms/RegisterOrganisms";
import Link from "../components/atoms/Link/Link";
import ROUTES from "../core/constants/routes/routes.constants";

const RegisterTemplate = () => {
    return (
        <section className="w-full min-h-screen flex justify-center items-center">
            <div className="p-6 flex flex-col gap-y-6 border mt-3 max-w-[386px] w-full border-[#E2E8F0] rounded-lg">
                <RegisterHeading />

                <RegisterForm />

                <div className="flex gap-1 text-black font-regular text-sm items-center leading-5 justify-center">
                    <span>Don’t have an account ?</span>

                    <Link href={ROUTES.Login} className="underline">
                        Sign in
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default RegisterTemplate;
