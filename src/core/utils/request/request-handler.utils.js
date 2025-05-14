const requestHandler = async ({ url, method = "GET", data, headers = {} }) => {
  const config = {
    method,
    headers: {
      ...(data instanceof FormData ? {} : { "Content-Type": "application/json" }),
      ...headers,
    },
  };

  if (data && method !== "GET") {
    config.body = data instanceof FormData ? data : JSON.stringify(data);
  }

  const response = await fetch(url, config);

  // If response is not ok (e.g., 403), attempt to parse error body safely
  if (!response.ok) {
    let errorMessage = "Request failed";
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch {
      // response body is empty or not JSON
    }
    throw new Error(errorMessage);
  }

  // Some responses (like DELETE) may have empty bodies, so check before parsing
  const text = await response.text();
  return text ? JSON.parse(text) : null;
};

export default requestHandler