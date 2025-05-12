import { useState } from "react";
import loginRequest from "../../services/auth/login/loginRequest";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState(null);

  const login = async (credentials) => {
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
  };

  return { login, data, isLoading, isError, errorMessage };
};

export default useLogin;
