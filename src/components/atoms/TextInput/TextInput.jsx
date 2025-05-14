import React from "react";
import BaseInput from "../BaseInput/BaseInput";

const TextInput = ({ className, ...props }) => {
    return (
        <BaseInput
            {...props}
            className={className}
            type="text"
        />
    );
};

export default TextInput;
