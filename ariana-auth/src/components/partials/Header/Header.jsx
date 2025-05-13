import logo from "../../../../public/images/pages/auth/auth.png"

const Header = () => {
    return (
        <div className="bg-[#F8FAFC] w-[calc(100vw-240px)] px-4 py-3">
            <img src={logo} alt="ariana" className="max-w-[118px] w-full" />
        </div>
    );
};

export default Header;
