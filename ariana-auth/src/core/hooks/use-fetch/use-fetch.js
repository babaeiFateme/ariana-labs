import { useState } from "react";

const useFetch = async(data) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    setIsLoading(true);
    setIsError(false);
    setErrorMessage("");
    try {
        const result = await loginRequest(credentials);
        setData(result);
      } catch (error) {
        setIsError(true);
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    

    return { data, isLoading, isError };
};

export default useFetch;
