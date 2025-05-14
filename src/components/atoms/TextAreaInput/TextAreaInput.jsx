import cn from "../../../core/utils/cn/cn.utils";
const TextAreaInput = ({ value=null, className, ...props }) => {
    return (
        <textarea {...props} className={cn(
            "mt-[22px] pt-2 pr-14 pb-2 pl-3 border border-gray-350 rounded-md text-sm font-normal leading-5 placeholder:text-gray-800 resize-none focus:border-0 focus-within:border-0 active:outline-none focus-visible:outline-none",
            className
        )}>
            {value && value}
        </textarea>
    );
};

export default TextAreaInput;
