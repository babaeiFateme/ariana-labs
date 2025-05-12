import { useState } from "react";
import requestHandler from "../../utils/request/request-handler.utils";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = async ({ url, method = "GET", data = null, headers = {} }) => {
    setIsLoading(true);
    setIsError(false);
    setErrorMessage("");
    setData(null);

    try {
      const result = await requestHandler({ url, method, data, headers });
      setData(result);
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchData, data, isLoading, isError, errorMessage };
};

export default useFetch;
