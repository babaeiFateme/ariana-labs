import React from "react";

const Field = ({ children, label, name, errors }) => {
    const errorMessage = errors?.[name];
    console.log(errors);
    return (
        <>
            <div>
                <div className="w-full flex flex-col gap-y-2">
                    <label className="text-sm font-medium leading-5">
                        {label}
                    </label>
                    {children}
                </div>
                {errorMessage && (
                    <div className="text-red-500 leading-5 text-sm font-medium mt-1">
                        {errorMessage}
                    </div>
                )}
            </div>
        </>
    );
};

export default Field;
