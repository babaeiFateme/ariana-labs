import API_ENDPOINTS from "../../constants/routes.constants";

const loginServices = async (credentials) => {
    const response = await fetch(API_ENDPOINTS.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
  
    if (!response.ok) {
      let message = "Login failed";
  
      try {
        const errorData = await response.json();
        if (errorData?.message) {
          message = errorData.message;
        }
      } catch (_) {}
  
      throw new Error(message);
    }
  
    return response.json();
  };
  
  export default loginServices;
  