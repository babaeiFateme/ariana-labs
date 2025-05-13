import logo from "../../../../../public/images/pages/auth/auth.png";

const RegisterHeading = () => {
    return (
        <>
            <img src={logo} alt="login" className="max-w-[296px] mx-auto" />
            <div>
                <h1 className="text-2xl font-semibold">Sign Up</h1>
                <div className="text-sm font-normal leading-6 text-[#64748B] mt-3">
                    Enter your information to create an account.
                </div>
            </div>
        </>
    );
};

export default RegisterHeading;
