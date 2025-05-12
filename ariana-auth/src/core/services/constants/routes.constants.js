const baseUrl = `${import.meta.env.VITE_BASE_URL}/api`;

const API_ENDPOINTS = {
  baseUrl,

  // @Segment: auth
  login: `${baseUrl}/staff/auth`,
};

export default API_ENDPOINTS;
