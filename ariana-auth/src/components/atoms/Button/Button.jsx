import cn from "../../../core/utils/cn/cn.utils";
import buttonStyle from "./Button.constants";

const Button = ({
    variant = "base",
    size = "default",
    className,
    children,
    icon,
    iconPosition = "start",
    ...props
}) => {
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
            {icon && iconPosition === "start" && icon}
            {children}
            {icon && iconPosition === "end" && icon}
        </button>
    );
};

export default Button;
