import cn from "../../../core/utils/cn/cn.utils";
import buttonStyle from "./Button.constants";

const Button = ({ variant = "base", className, children, ...props }) => {
    return (
        <button
            {...props}
            className={cn(
                "w-full px-2 font-medium text-sm leading-6 rounded-md",
                className,
                buttonStyle.variants[variant]
            )}
        >
            {children}
        </button>
    );
};

export default Button;
