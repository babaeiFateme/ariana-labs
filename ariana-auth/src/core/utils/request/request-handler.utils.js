const requestHandler = async ({ url, method = "GET", data, headers = {} }) => {
    const config = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };
  
    if (data && method !== "GET") {
      config.body = JSON.stringify(data);
    }
  
    const response = await fetch(url, config);
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Request failed");
    }
  
    return response.json();
  };
  
  export default requestHandler;
  