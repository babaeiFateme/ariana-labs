import cn from "../../../core/utils/cn/cn.utils";
import buttonStyle from "./Button.constants";

const Button = ({ variant = "base",size="default", className, children, ...props }) => {
    return (
        <button
            {...props}
            className={cn(
                "w-full px-2 font-medium text-sm leading-6 rounded-md",
                className,
                buttonStyle.variants[variant],
                buttonStyle.size[size]
            )}
        >
            {children}
        </button>
    );
};

export default Button;
