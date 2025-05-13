import Button from "../../atoms/Button/Button";
import Arrow from "../../icons/Arrow";


const Sidebar = () => {
    return (
        <aside className="bg-[#F8FAFC] w-[240px] border border-[#E2E8F0] flex flex-col justify-between h-screen px-2 py-6">
            <div className=" mb-10 mt-10">
                <img src="" alt="" />
            </div>

            <Button variant="destructive" icon={<Arrow />} className="flex gap-1.5 items-center justify-center">
                Logout
            </Button>
        </aside>
    );
};

export default Sidebar;
