import logo from "../../../../../public/images/pages/auth/auth.png";

const LoginHeading = () => {
    return (
        <>
            <img src={logo} alt="login" className="max-w-[296px] mx-auto" />
            <div>
                <h1 className="text-2xl font-semibold">Login</h1>
                <div className="text-sm font-normal leading-6 text-[#64748B] mt-3 max-w-[386px]">
                Enter your username and password to login to your account.
                </div>
            </div>
        </>
    );
};

export default LoginHeading;
