import React from "react";

const BaseInput = ({ ...props }) => {
    return (
        <input
            className={
                "pt-2 pr-14 pb-2 pl-3 border border-[#E2E8F0] rounded-md text-sm font-normal leading-5 placeholder:[#64748B]"
            }
            {...props}
        />
    );
};

export default BaseInput;
