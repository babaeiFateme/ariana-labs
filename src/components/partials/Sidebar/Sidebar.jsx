import Button from "../../atoms/Button/Button";
import Arrow from "../../icons/Arrow";
import user from "../../../../public/images/pages/dashboard/user.jpg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Modal from "../../atoms/Modal/Modal";
import { useState } from "react";
import Shock from "../../icons/Shock";
import ROUTES from "../../../core/constants/routes/routes.constants";

const Sidebar = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };
    return (
        <aside className="bg-gray-250 w-[240px] border border-gray-350 flex flex-col justify-between h-screen px-2 py-6">
            <div>
                <div className=" mb-10 mt-10 text-center">
                    <img
                        src={user}
                        alt="user"
                        className="w-16 aspect-square rounded-full mx-auto"
                    />

                    <div className="font-bold text-['15px'] leading-6 text-black mt-2">
                        Shahab Hosseini
                    </div>

                    <div className="font-normal text-[15px] leading-6 text-gray-850">
                        @ShahabH
                    </div>
                </div>

                <ul className="p-2 *:mb-2">
                    <li>
                        <Link to={ROUTES.Dashboard}>Dashboard</Link>
                    </li>
                    
                    <li>
                        <Link to={ROUTES.Tweet}>Tweet</Link>
                    </li>
                </ul>
            </div>

            <Button
                variant="destructive"
                icon={<Arrow />}
                className="flex gap-1.5 items-center justify-center"
                onClick={() => setIsModalOpen(true)}
            >
                Logout
            </Button>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="flex justify-center mb-2">
                    <Shock />
                </div>

                <h2 className="text-sm font-semibold mb-2 text-center">
                    Log Out
                </h2>

                <p className="text-sm font-normal mb-6 text-center">
                    Are you sure you want to sign out of your account?{" "}
                </p>

                <div className="flex justify-center gap-2">
                    <Button
                        onClick={handleLogout}
                        className="grow border border-gray"
                    >
                        Log out
                    </Button>

                    <Button
                        variant="primary"
                        onClick={() => setIsModalOpen(false)}
                        className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 grow"
                    >
                        Cancel
                    </Button>
                </div>
            </Modal>
        </aside>
    );
};

export default Sidebar;
