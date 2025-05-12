import { useState, useEffect } from "react";

const useFetch = (fetchFn) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);

            try {
                const result = await fetchFn();
                if (isMounted) {
                    setData(result);
                }
            } catch (error) {
                if (isMounted) {
                    setIsError(true);
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false; // cleanup to avoid setting state if unmounted
        };
    }, [fetchFn]);

    return { data, isLoading, isError };
};

export default useFetch;
