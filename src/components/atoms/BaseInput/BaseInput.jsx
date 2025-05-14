import React from "react";
import cn from "../../../core/utils/cn/cn.utils";

const BaseInput = ({ className, ...props }) => {
    return (
        <input
            className={cn(
                "max-w-[336px] pt-2 pr-14 pb-2 pl-3 border border-gray-350 rounded-md text-sm font-normal leading-5 placeholder:text-gray-800",
                className
            )}
            {...props}
        />
    );
};

export default BaseInput;
