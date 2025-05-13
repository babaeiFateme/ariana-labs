import Button from "../../atoms/Button/Button";
import Arrow from "../../icons/Arrow";
import user from "../../../../public/images/pages/dashboard/user.jpg";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token"); 
        navigate("/"); 
    };
    return (
        <aside className="bg-[#F8FAFC] w-[240px] border border-[#E2E8F0] flex flex-col justify-between h-screen px-2 py-6">
            <div className=" mb-10 mt-10 text-center">
                <img
                    src={user}
                    alt="user"
                    className="w-16 aspect-square rounded-full mx-auto"
                />

                <div className="font-bold text-['15px'] leading-6 text-black mt-2">
                    Shahab Hosseini
                </div>

                <div className="font-normal text-[15px] leading-6 text-[#585858]">
                    @ShahabH
                </div>
            </div>

            <Button
                variant="destructive"
                icon={<Arrow />}
                className="flex gap-1.5 items-center justify-center"
                onClick={handleLogout}
            >
                Logout
            </Button>
        </aside>
    );
};

export default Sidebar;
