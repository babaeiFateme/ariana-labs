import empty from "../../public/images/pages/dashboard/empty-state.png";
const DashboardTemplate = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <img
                className="w-full max-w-[481px] mx-auto"
                src={empty}
                alt="dashboard"
            />
        </div>
    );
};

export default DashboardTemplate;
