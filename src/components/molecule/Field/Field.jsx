const Field = ({ children, label, name, errors, className }) => {
    const errorMessage = errors?.[name];
    return (
        <>
            <div className={className}>
                <div className="w-full flex flex-col gap-y-2">
                    {label && (
                        <label
                            htmlFor={name}
                            className={`text-sm font-medium leading-5 ${
                                errorMessage ? "text-destructive" : ""
                            }`}
                        >
                            {label}
                        </label>
                    )}
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
