import Button from "../../atoms/Button/Button";
import Arrow from "../../icons/Arrow";
import user from "../../../../public/images/pages/dashboard/user.jpg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Modal from "../../atoms/Modal/Modal";
import { useEffect, useState } from "react";
import Shock from "../../icons/Shock";
import ROUTES from "../../../core/constants/routes/routes.constants";
import API_ENDPOINTS from "../../../core/services/constants/routes.constants";
import useFetch from "../../../core/hooks/useFetch";

import defaultImg from "../../../../public/images/_general/avatar.png"

const Sidebar = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { fetchData, isLoading, isError } = useFetch();
    const [data, useData] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    useEffect(() => {
        fetchData({
            url: API_ENDPOINTS.current_user,
            method: "GET",
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`,
                "X-CSRFToken": localStorage.getItem("token") ?? "",
            },
            onSuccess: (result) => {
                useData(result);
                localStorage.setItem("user", JSON.stringify(result));
            },
            onError: (error) => {
                console.error("Failed to fetch messages:", error.message);
            },
        });
    }, []);

    return (
        <aside className="bg-gray-250 w-[240px] border border-gray-350 flex flex-col justify-between h-screen px-2 py-6">
            <div>
                <div className=" mb-10 mt-10 text-center">
                    <img
                        src={data?.avatar ? data.avatar : defaultImg}
                        alt="user"
                        className="w-16 aspect-square rounded-full mx-auto"
                    />

                    <div className="font-bold text-['15px'] leading-6 text-black mt-2">
                        {data?.first_name} {data?.last_name}
                    </div>

                    <div className="font-normal text-[15px] leading-6 text-gray-850">
                        @{data?.username}
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
