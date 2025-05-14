import cn from "../../../core/utils/cn/cn.utils";
import defaultImg from "../../../../public/images/_general/empty-state.png";

const EmptyState = ({ img = defaultImg, imgClassName, children }) => {
    return (
        <div className="flex gap-1 items-center justify-center flex-col">
            <img
                className={cn(
                    "max-w-[280px] aspect-square object-cover",
                    imgClassName
                )}
                src={img}
                alt="empty state"
            />

            <div className=""> {children}</div>
        </div>
    );
};

export default EmptyState;
