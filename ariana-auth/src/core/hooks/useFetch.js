import { useState } from "react";
import requestHandler from "../utils/request/request-handler.utils";

const useFetch = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const fetchData = async ({
        url,
        method = "GET",
        data = null,
        headers = {},
        onSuccess,
        onError,
    }) => {
        setIsLoading(true);
        setIsError(false);
        setErrorMessage("");
        setData(null);

        try {
            const result = await requestHandler({ url, method, data, headers });
            setData(result);

            // Trigger the onSuccess callback if it exists
            if (onSuccess) onSuccess(result);
        } catch (error) {
            setIsError(true);
            setErrorMessage(error.message);

            // Trigger the onError callback if it exists
            if (onError) onError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return { fetchData, data, isLoading, isError, errorMessage };
};

export default useFetch;
