import React from "react";

const Field = ({ children, name }) => {
    return (
        <div className="w-full flex flex-col gap-y-2">
            <p className="text-sm font-medium leading-5">{name}</p>
            {children}
        </div>
    );
};

export default Field;
