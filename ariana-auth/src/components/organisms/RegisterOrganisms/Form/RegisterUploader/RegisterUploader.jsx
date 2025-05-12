import Button from "../../../../atoms/Button/Button";
import avatar from "../../../../../../public/images/_general/avatar.png";

const RegisterUploader = () => {
    return (
        <div className="px-2.5 py-3 bg-white border border-[#E2E8F0] rounded-md flex justify-between items-center ">
            <img
                className="w-12 aspect-square rounded-full"
                src={avatar}
                alt="avatar"
            />

            <Button className="border border-['#E2E8F0'] py-1.5 rounded-md min-w-['64px'] w-fit h-fit">
                Upload
            </Button>
        </div>
    );
};

export default RegisterUploader;
